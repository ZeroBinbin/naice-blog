(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{157:function(t,e,o){t.exports=o.p+"img/f59a6a8.jpg"},163:function(t,e,o){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},170:function(t,e,o){var content=o(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("de4acf42",content,!0,{sourceMap:!1})},220:function(t,e,o){"use strict";var n=o(170);o.n(n).a},221:function(t,e,o){e=t.exports=o(18)(!1);var n=o(163)(o(222));e.push([t.i,"[data-v-5d900100]:root{--fontColor:#5e5e5e;--titleColor:#3e3e3e;--lineColor:#3fb76c}.homePage[data-v-5d900100]{width:100%;height:100%;display:flex;position:absolute;left:0;top:0;bottom:0}#aside[data-v-5d900100]{width:50%;height:100%;background:url("+n+") no-repeat 50%;background-size:100% 100%;transition:width .3s}.home-view[data-v-5d900100]{display:flex;justify-content:center;align-items:center;flex:1;height:100%;width:100%;position:relative}.aboutMe[data-v-5d900100]{width:260px;height:300px}.about-nav[data-v-5d900100]{display:flex;justify-content:space-between;margin-bottom:30px}.about-nav a[data-v-5d900100]{width:100px;height:100px;border:1px solid #ccc;border-radius:50%;text-align:center;line-height:100px;font-size:18px;color:#333;text-decoration:none;transition:background .3s}.about-nav a .lt2[data-v-5d900100]{display:none}.about-nav a[data-v-5d900100]:hover{background:#3fb76c;color:#fff;border-color:#3fb76c}.about-nav a:hover .lt2[data-v-5d900100]{display:inline}.about-nav a:hover .lt1[data-v-5d900100]{display:none}.aside-box[data-v-5d900100]{overflow:hidden;height:100%;display:flex;justify-content:center;align-items:center;background:hsla(0,0%,100%,.7) url("+n+') no-repeat 50%;background-size:auto 100%}.marsk[data-v-5d900100]{position:absolute;width:100%;height:100%;background:hsla(0,0%,100%,.5)}.aside-content[data-v-5d900100]{width:400px;height:400px;text-align:center;position:relative;z-index:2}.aside-content img[data-v-5d900100]{width:100px;height:100px;border-radius:50%;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;cursor:pointer}.aside-content img[data-v-5d900100]:hover{-webkit-transform:rotate(1turn);transform:rotate(1turn);box-shadow:0 0 30px rgba(0,255,249,.57)}.aside-content h1[data-v-5d900100]{padding-top:16px;padding-bottom:30px}.aside-content h1[data-v-5d900100],.aside-content h1 a[data-v-5d900100]{color:#3e3e3e;color:var(--titleColor);font-size:22px}.aside-content h1 a[data-v-5d900100]{text-decoration:none}.aside-content h1[data-v-5d900100]:after{content:"";display:block;height:1px;width:200px;background:#3fb76c;background:var(--lineColor);margin:15px auto 0}.aside-content p[data-v-5d900100]{font-size:12px;padding-top:10px;padding-bottom:10px;color:#5e5e5e;color:var(--fontColor)}.aside-icon[data-v-5d900100]{clear:both;display:flex;justify-content:center}.aside-icon a[data-v-5d900100]{width:34px;height:34px;background-color:#5e5e5e;margin:0 10px;cursor:pointer;transition:background-color .3s;border-radius:2px;color:#fff;text-decoration:none;text-align:center;line-height:34px}.aside-icon a[data-v-5d900100]:hover{background-color:#3fb76c;background-color:var(--lineColor)}',""])},222:function(t,e,o){t.exports=o.p+"img/e32a8fe.jpg"},240:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("a",[e("img",{attrs:{src:o(157),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aside-icon"},[e("a",{attrs:{href:"https://github.com/naihe138"}},[e("i",{staticClass:"iconfont"},[this._v("")])]),this._v(" "),e("a",{attrs:{href:"https://segmentfault.com/u/naice"}},[e("i",{staticClass:"iconfont"},[this._v("")])])])}],r={head:function(){return{title:"naice | 首页"}},mounted:function(){var t=localStorage.getItem("userInfo");if(t){var e=JSON.parse(t);this.$store.commit("changeAverter",e.gravatar)}else this.$store.commit("changeAverter",Math.floor(20*Math.random()))}},d=(o(220),o(8)),component=Object(d.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"homePage"},[o("section",{attrs:{id:"aside"}},[o("div",{staticClass:"aside-box"},[o("div",{staticClass:"marsk"}),t._v(" "),o("div",{staticClass:"aside-content"},[t._m(0),t._v(" "),o("h1",[o("nuxt-link",{attrs:{to:"/article?page=0"}},[t._v("Naice")]),t._v(" "),o("p",[t._v("很多事情不是因为有希望才去坚持，而是坚持了才有希望。")])],1),t._v(" "),t._t("default"),t._v(" "),t._m(1)],2)])]),t._v(" "),o("div",{staticClass:"home-view"},[o("section",{staticClass:"aboutMe"},[o("div",{staticClass:"about-nav"},[o("nuxt-link",{attrs:{to:"/"}},[o("span",{staticClass:"lt1"},[t._v("文章")]),t._v(" "),o("span",{staticClass:"lt2"},[t._v("Article")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/music"}},[o("span",{staticClass:"lt1"},[t._v("音乐")]),t._v(" "),o("span",{staticClass:"lt2"},[t._v("Music")])])],1),t._v(" "),o("div",{staticClass:"about-nav"},[o("nuxt-link",{attrs:{to:"/project"}},[o("span",{staticClass:"lt1"},[t._v("项目")]),t._v(" "),o("span",{staticClass:"lt2"},[t._v("Project")])]),t._v(" "),o("nuxt-link",{attrs:{to:"/about"}},[o("span",{staticClass:"lt1"},[t._v("关于")]),t._v(" "),o("span",{staticClass:"lt2"},[t._v("About")])])],1)])])])},n,!1,null,"5d900100",null);e.default=component.exports}}]);