(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{SMXX:function(e,t,a){"use strict";var l=a("4Gf+"),r=a("GyWo");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("U7p0");var d=l(a("pXLU"));a("Ljnx");var n=l(a("EfNK"));a("VfK5");var u=l(a("LcI5"));a("YvrW");var o=l(a("uG6z"));a("ryTD");var s=l(a("dOo4"));a("baa/");var f=l(a("6wzi")),c=l(a("RSNA"));a("1EyM");var i=l(a("VEhp"));a("Xe2/");var m=l(a("PRXz"));a("9RKC");var p=l(a("6RLy"));a("K5T9");var E,g,v,b=l(a("xn9m")),h=r(a("4G06")),y=a("LneV"),w=l(a("zHco")),x=l(a("feUe")),F=b.default.Item,R=p.default.Option,L=m.default.RangePicker,I=i.default.TextArea,N=(E=(0,y.connect)(e=>{var t=e.loading;return{submitting:t.effects["form/submitRegularForm"]}}),g=b.default.create(),E(v=g(v=class extends h.PureComponent{constructor(){super(...arguments),this.handleSubmit=(e=>{var t=this.props,a=t.dispatch,l=t.form;e.preventDefault(),l.validateFieldsAndScroll((e,t)=>{e||a({type:"form/submitRegularForm",payload:t})})})}render(){var e=this.props.submitting,t=this.props.form,a=t.getFieldDecorator,l=t.getFieldValue,r={labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:12},md:{span:10}}},m={wrapperCol:{xs:{span:24,offset:0},sm:{span:10,offset:7}}};return h.default.createElement(w.default,{title:"\u57fa\u7840\u8868\u5355",content:"\u8868\u5355\u9875\u7528\u4e8e\u5411\u7528\u6237\u6536\u96c6\u6216\u9a8c\u8bc1\u4fe1\u606f\uff0c\u57fa\u7840\u8868\u5355\u5e38\u89c1\u4e8e\u6570\u636e\u9879\u8f83\u5c11\u7684\u8868\u5355\u573a\u666f\u3002"},h.default.createElement(d.default,{bordered:!1},h.default.createElement(b.default,{onSubmit:this.handleSubmit,hideRequiredMark:!0,style:{marginTop:8}},h.default.createElement(F,(0,c.default)({},r,{label:"\u6807\u9898"}),a("title",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6807\u9898"}]})(h.default.createElement(i.default,{placeholder:"\u7ed9\u76ee\u6807\u8d77\u4e2a\u540d\u5b57"}))),h.default.createElement(F,(0,c.default)({},r,{label:"\u8d77\u6b62\u65e5\u671f"}),a("date",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u8d77\u6b62\u65e5\u671f"}]})(h.default.createElement(L,{style:{width:"100%"},placeholder:["\u5f00\u59cb\u65e5\u671f","\u7ed3\u675f\u65e5\u671f"]}))),h.default.createElement(F,(0,c.default)({},r,{label:"\u76ee\u6807\u63cf\u8ff0"}),a("goal",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u76ee\u6807\u63cf\u8ff0"}]})(h.default.createElement(I,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u4f60\u7684\u9636\u6bb5\u6027\u5de5\u4f5c\u76ee\u6807",rows:4}))),h.default.createElement(F,(0,c.default)({},r,{label:"\u8861\u91cf\u6807\u51c6"}),a("standard",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8861\u91cf\u6807\u51c6"}]})(h.default.createElement(I,{style:{minHeight:32},placeholder:"\u8bf7\u8f93\u5165\u8861\u91cf\u6807\u51c6",rows:4}))),h.default.createElement(F,(0,c.default)({},r,{label:h.default.createElement("span",null,"\u5ba2\u6237",h.default.createElement("em",{className:x.default.optional},"\uff08\u9009\u586b\uff09",h.default.createElement(s.default,{title:"\u76ee\u6807\u7684\u670d\u52a1\u5bf9\u8c61"},h.default.createElement(f.default,{type:"info-circle-o",style:{marginRight:4}}))))}),a("client")(h.default.createElement(i.default,{placeholder:"\u8bf7\u63cf\u8ff0\u4f60\u670d\u52a1\u7684\u5ba2\u6237\uff0c\u5185\u90e8\u5ba2\u6237\u76f4\u63a5 @\u59d3\u540d\uff0f\u5de5\u53f7"}))),h.default.createElement(F,(0,c.default)({},r,{label:h.default.createElement("span",null,"\u9080\u8bc4\u4eba",h.default.createElement("em",{className:x.default.optional},"\uff08\u9009\u586b\uff09"))}),a("invites")(h.default.createElement(i.default,{placeholder:"\u8bf7\u76f4\u63a5 @\u59d3\u540d\uff0f\u5de5\u53f7\uff0c\u6700\u591a\u53ef\u9080\u8bf7 5 \u4eba"}))),h.default.createElement(F,(0,c.default)({},r,{label:h.default.createElement("span",null,"\u6743\u91cd",h.default.createElement("em",{className:x.default.optional},"\uff08\u9009\u586b\uff09"))}),a("weight")(h.default.createElement(o.default,{placeholder:"\u8bf7\u8f93\u5165",min:0,max:100})),h.default.createElement("span",{className:"ant-form-text"},"%")),h.default.createElement(F,(0,c.default)({},r,{label:"\u76ee\u6807\u516c\u5f00",help:"\u5ba2\u6237\u3001\u9080\u8bc4\u4eba\u9ed8\u8ba4\u88ab\u5206\u4eab"}),h.default.createElement("div",null,a("public",{initialValue:"1"})(h.default.createElement(u.default.Group,null,h.default.createElement(u.default,{value:"1"},"\u516c\u5f00"),h.default.createElement(u.default,{value:"2"},"\u90e8\u5206\u516c\u5f00"),h.default.createElement(u.default,{value:"3"},"\u4e0d\u516c\u5f00"))),h.default.createElement(F,{style:{marginBottom:0}},a("publicUsers")(h.default.createElement(p.default,{mode:"multiple",placeholder:"\u516c\u5f00\u7ed9",style:{margin:"8px 0",display:"2"===l("public")?"block":"none"}},h.default.createElement(R,{value:"1"},"\u540c\u4e8b\u7532"),h.default.createElement(R,{value:"2"},"\u540c\u4e8b\u4e59"),h.default.createElement(R,{value:"3"},"\u540c\u4e8b\u4e19")))))),h.default.createElement(F,(0,c.default)({},m,{style:{marginTop:32}}),h.default.createElement(n.default,{type:"primary",htmlType:"submit",loading:e},"\u63d0\u4ea4"),h.default.createElement(n.default,{style:{marginLeft:8}},"\u4fdd\u5b58")))))}})||v)||v),P=N;t.default=P},feUe:function(e,t,a){e.exports={card:"antd-pro-pages-content-detail-card",heading:"antd-pro-pages-content-detail-heading",steps:"antd-pro-pages-content-detail-steps",errorIcon:"antd-pro-pages-content-detail-errorIcon",errorPopover:"antd-pro-pages-content-detail-errorPopover",errorListItem:"antd-pro-pages-content-detail-errorListItem",errorField:"antd-pro-pages-content-detail-errorField",editable:"antd-pro-pages-content-detail-editable",advancedForm:"antd-pro-pages-content-detail-advancedForm",optional:"antd-pro-pages-content-detail-optional"}}}]);