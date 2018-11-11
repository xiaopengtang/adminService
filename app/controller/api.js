'use strict';
const BaseController = require('./base')

class HomeController extends BaseController {
    // constructor(){
    //     this.ctx.header("Access-Control-Allow-Origin", this.ctx.header("origin") || "*");
    //     this.ctx.header("Access-Control-Allow-Headers", "x-requested-with");
    //     this.ctx.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
    //     this.ctx.header('Access-Control-Allow-Credentials',true);
    // }
    cross(){
        this.ctx.set("Access-Control-Allow-Origin", this.ctx.get("origin") || "*");
        this.ctx.set("Access-Control-Allow-Headers", "x-requested-with");
        this.ctx.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
        this.ctx.set('Access-Control-Allow-Credentials',true);
    }
    async currentUser() {
        // this.cross()
        if(this.ctx.session.user){
            return this.json({
                "name":"admin",
                "avatar":"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
                "userid":this.ctx.session.userId,
                "email":"antdesign@alipay.com",
                "signature":"海纳百川，有容乃大",
                "title":"交互专家",
                "group":"蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED",
                "tags":[{"key":"0","label":"很有想法的"},{"key":"1","label":"专注设计"},{"key":"2","label":"辣~"},{"key":"3","label":"大长腿"},{"key":"4","label":"川妹子"},{"key":"5","label":"海纳百川"}],
                "notifyCount":12,
                "country":"China",
                "geographic":{"province":{"label":"浙江省","key":"330000"},"city":{"label":"杭州市","key":"330100"}},
                "address":"西湖区工专路 77 号",
                "phone":"0752-268888888"
            })
        }
        return this.error('用户未登录')
    }

    async login(){
        if(this.ctx.req.method.toUpperCase() !== 'POST'){
            return this.error('请求方式不对')
        }
        // this.cross()
        const data = {
            password: this.ctx.request.body.password,
            tel: this.ctx.request.body.userName
        }
        const res = await this._apiCall({
            url: 'user/login',
            data
        })
        if(res.data){
            this.ctx.session.userId = res.data.userId
            this.ctx.session.user = res.data
            return this.json({"status":"ok","type":"account","currentAuthority":"admin"})
        }else{
            return this.json({"status":"error","type":"account","currentAuthority":"guest"})
        }
    }
    async apiCall(){
        // this.cross()
        let {url, data} = this.ctx.query || {}
        if(!url){
            return this.error('参数错误')
        }
        data = JSON.parse(decodeURIComponent(data || '{}'))
        if(!this.ctx.session.user){
            return this.error('用户未登录')
        }
        const res = await this._apiCall({url, data})
        if(res.success){
            return this.success(res.data)
        }
        return this.error(res.message)
    }
}
module.exports = HomeController;
