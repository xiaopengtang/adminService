(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"1tHO":function(e,t,a){e.exports={card:"antd-pro-pages-resource-detail-card",heading:"antd-pro-pages-resource-detail-heading",steps:"antd-pro-pages-resource-detail-steps",errorIcon:"antd-pro-pages-resource-detail-errorIcon","ant-upload-select-picture-card":"antd-pro-pages-resource-detail-ant-upload-select-picture-card","ant-upload-text":"antd-pro-pages-resource-detail-ant-upload-text",errorPopover:"antd-pro-pages-resource-detail-errorPopover",errorListItem:"antd-pro-pages-resource-detail-errorListItem",errorField:"antd-pro-pages-resource-detail-errorField",editable:"antd-pro-pages-resource-detail-editable",advancedForm:"antd-pro-pages-resource-detail-advancedForm",optional:"antd-pro-pages-resource-detail-optional"}},XDbz:function(e,t,a){"use strict";var r=a("4Gf+"),l=a("GyWo");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("U7p0");var i=r(a("pXLU"));a("Ljnx");var s=r(a("EfNK"));a("K1xq");var d=r(a("lmRu"));a("Odsp");var n=r(a("0LJ2")),o=r(a("RSNA"));a("baa/");var p=r(a("6wzi")),u=r(a("BZ3U")),c=r(a("2gP4"));a("1EyM");var f=r(a("VEhp"));a("Xe2/");var m=r(a("PRXz"));a("9RKC");var h=r(a("6RLy"));a("K5T9");var g,v,w,y=r(a("xn9m")),b=l(a("4G06")),E=a("LneV"),L=r(a("zHco")),x=(r(a("1tHO")),y.default.Item),C=(h.default.Option,m.default.RangePicker,f.default.TextArea),A=(g=(0,E.connect)(e=>{var t=e.news,a=e.loading;return{news:t,loading:a.models.news}}),v=y.default.create(),g(w=v(w=class extends b.PureComponent{constructor(){super(...arguments),this.handleSubmit=(e=>{var t=this.props,a=t.dispatch,r=t.form;e.preventDefault(),r.validateFieldsAndScroll((e,t)=>{var r=this.state.fileList,l=Array.isArray(r)&&r.map(e=>e.id||e.kid)||[];this.state.info.id&&(t.id=this.state.info.id),e||(t.images=l.join(","),a({type:"news/add",payload:t}))})}),this.handleCancel=(()=>this.setState({previewVisible:!1})),this.handlePreview=(e=>{this.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})}),this.state={previewVisible:!1,previewImage:"",fileList:[],info:{}}}handleChange(e){if("done"===e.file.status){var t=this.state.fileList,a=e.file.response.data;a=a.map(e=>{return e.kid=e.id,delete e.id,e}),Array.prototype.push.apply(t,a),console.log({fileList:t}),this.setState({fileList:t})}}componentDidMount(){var e=this;return(0,c.default)(u.default.mark(function t(){var a,r,l,i,s,d,n,o,p;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.props,r=a.location,l=a.dispatch,i=r&&r.query&&r.query.id,i){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,l({type:"news/getList",payload:{id:i}});case 6:s=t.sent,d=s.payload&&Array.isArray(s.payload.list)&&s.payload.list[0],n=[],o=Array.isArray(d.imagesList)&&d.imagesList||[],p=d.imageIds&&d.imageIds.split(",")||[],o.forEach((e,t)=>{var a=e.split("/"),r=a[a.length-1];n.push({kid:p[t]||null,url:e,uid:-1*(t+1),name:r,status:"done"})}),e.setState({info:d,fileList:n});case 13:case"end":return t.stop()}},t,this)}))()}render(){var e=this.props.submitting,t=this.props.form,a=t.getFieldDecorator,r=(t.getFieldValue,{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}}),l={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}},u=this.state,c=u.previewVisible,m=u.previewImage,h=u.fileList;console.log({fileList:h});var g=b.default.createElement("div",null,b.default.createElement(p.default,{type:"plus"}),b.default.createElement("div",{className:"ant-upload-text"},"\u4e0a\u4f20\u5c01\u9762"));return b.default.createElement(L.default,null,b.default.createElement(i.default,{bordered:!1},b.default.createElement(y.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},b.default.createElement(x,(0,o.default)({},r,{label:"\u6807\u9898"}),a("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}],initialValue:this.state.info.title})(b.default.createElement(f.default,{placeholder:"\u8bf7\u8f93\u5165\u6807\u9898"}))),b.default.createElement(x,(0,o.default)({},r,{label:"\u5185\u5bb9"}),a("text",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5185\u5bb9"}],initialValue:this.state.info.text})(b.default.createElement(C,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9",rows:4}))),b.default.createElement(x,(0,o.default)({},r,{label:"\u5c01\u9762\u56fe\u7247"}),a("images",{initialValue:this.state.fileList})(b.default.createElement(n.default,{action:"https://www.taoyiwenhua.cn/upload/upload?uid=10000",listType:"picture-card",defaultFileList:[...h],onPreview:this.handlePreview,onChange:this.handleChange.bind(this)},g)),b.default.createElement(d.default,{visible:c,footer:null,onCancel:this.handleCancel},b.default.createElement("img",{alt:"example",style:{width:"100%"},src:m}))),b.default.createElement(x,(0,o.default)({},l,{style:{marginTop:32}}),b.default.createElement(s.default,{type:"primary",htmlType:"submit",loading:e},"\u63d0\u4ea4"),b.default.createElement(s.default,{style:{marginLeft:8}},"\u4fdd\u5b58")))))}})||w)||w),I=A;t.default=I}}]);