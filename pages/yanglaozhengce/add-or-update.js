(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yanglaozhengce/add-or-update"],{"4f60":function(e,t,n){},"5eef":function(e,t,n){"use strict";(function(e){n("656c"),n("921b");i(n("66fd"));var t=i(n("749c"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"749c":function(e,t,n){"use strict";n.r(t);var i=n("e792"),r=n("ff77");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("cf13");var u,c=n("f0c5"),o=Object(c["a"])(r["default"],i["b"],i["c"],!1,null,"749b30c4",null,!1,i["a"],u);t["default"]=o.exports},cf13:function(e,t,n){"use strict";var i=n("4f60"),r=n.n(i);r.a},e792:function(e,t,n){"use strict";var i={"w-picker":function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"1558"))}},r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))},fdcf:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,r,a,u){try{var c=e[a](u),o=c.value}catch(s){return void n(s)}c.done?t(o):Promise.resolve(o).then(i,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var u=e.apply(t,n);function c(e){a(u,i,r,c,o,"next",e)}function o(e){a(u,i,r,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("1558"))}.bind(null,n)).catch(n.oe)},o={data:function(){return{ruleForm:{biaoti:"",neirong:"",fabushijian:"",fengmiantu:"",clicktime:"",clicknum:""},user:{},ro:{biaoti:!1,neirong:!1,fabushijian:!1,fengmiantu:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:c},computed:{},onLoad:function(){var t=u(i.default.mark((function t(n){var r,a,u,c;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(a=t.sent,this.user=a.data,this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=13;break}return this.ruleForm.id=n.id,t.next=11,this.$api.info("yanglaozhengce",this.ruleForm.id);case 11:a=t.sent,this.ruleForm=a.data;case 13:if(!n.cross){t.next=44;break}u=e.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 16:if((t.t1=t.t0()).done){t.next=44;break}if(c=t.t1.value,"biaoti"!=c){t.next=22;break}return this.ruleForm.biaoti=u[c],this.ro.biaoti=!0,t.abrupt("continue",16);case 22:if("neirong"!=c){t.next=26;break}return this.ruleForm.neirong=u[c],this.ro.neirong=!0,t.abrupt("continue",16);case 26:if("fabushijian"!=c){t.next=30;break}return this.ruleForm.fabushijian=u[c],this.ro.fabushijian=!0,t.abrupt("continue",16);case 30:if("fengmiantu"!=c){t.next=34;break}return this.ruleForm.fengmiantu=u[c],this.ro.fengmiantu=!0,t.abrupt("continue",16);case 34:if("clicktime"!=c){t.next=38;break}return this.ruleForm.clicktime=u[c],this.ro.clicktime=!0,t.abrupt("continue",16);case 38:if("clicknum"!=c){t.next=42;break}return this.ruleForm.clicknum=u[c],this.ro.clicknum=!0,t.abrupt("continue",16);case 42:t.next=16;break;case 44:this.styleChange();case 45:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(e){console.log(e),this.ruleForm.fabushijian=e.result,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},fengmiantuTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.fengmiantu=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=3;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.id){e.next=8;break}return e.next=6,this.$api.update("yanglaozhengce",this.ruleForm);case 6:e.next=10;break;case 8:return e.next=10,this.$api.add("yanglaozhengce",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}).call(this,n("543d")["default"])},ff77:function(e,t,n){"use strict";n.r(t);var i=n("fdcf"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a}},[["5eef","common/runtime","common/vendor"]]]);