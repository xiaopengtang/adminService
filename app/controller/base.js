'use strict';

const Controller = require('egg').Controller;
const URL = require('url')

class BaseController extends Controller {
    success(data){
        return this.json({
            status: true,
            message: null,
            data,
            errorCode: 7001
        })
    }
    error(message, errorCode){
        return this.json({
            status: false,
            message,
            data: null,
            errorCode
        })
    }
    json(data){
        this.ctx.status = 200
        this.ctx.body = JSON.stringify(data)
    }

    async _apiCall({url, data}){
        data = data || {}
        let host = URL.format(this.config.REQUEST)
        const userId = this.ctx.session.userId
        if(userId){
            data.userId = userId
        }
        url = `${host}/${url.replace(/^\/+/, '')}?${encodeURIComponent(JSON.stringify(data))}`
        const res = await this.ctx.curl(url, {dataType: 'json'})
        return res && res.data
    }
}

module.exports = BaseController
