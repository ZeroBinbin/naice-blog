exports.ids=[6],exports.modules={38:function(t,e,o){t.exports=o.p+"img/f59a6a8.jpg"},42:function(t,e,o){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},48:function(t,e,o){var content=o(70);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var n=o(3).default;t.exports.__inject__=function(t){n("de4acf42",content,!0,t)}},69:function(t,e,o){"use strict";o.r(e);var n=o(48),d=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,function(){return n[t]})}(r);e.default=d.a},70:function(t,e,o){e=t.exports=o(2)(!1);var n=o(42)(o(71));e.push([t.i,"[data-v-5d900100]:root{--fontColor:#5e5e5e;--titleColor:#3e3e3e;--lineColor:#3fb76c}.homePage[data-v-5d900100]{width:100%;height:100%;display:flex;position:absolute;left:0;top:0;bottom:0}#aside[data-v-5d900100]{width:50%;height:100%;background:url("+n+") no-repeat 50%;background-size:100% 100%;transition:width .3s}.home-view[data-v-5d900100]{display:flex;justify-content:center;align-items:center;flex:1;height:100%;width:100%;position:relative}.aboutMe[data-v-5d900100]{width:260px;height:300px}.about-nav[data-v-5d900100]{display:flex;justify-content:space-between;margin-bottom:30px}.about-nav a[data-v-5d900100]{width:100px;height:100px;border:1px solid #ccc;border-radius:50%;text-align:center;line-height:100px;font-size:18px;color:#333;text-decoration:none;transition:background .3s}.about-nav a .lt2[data-v-5d900100]{display:none}.about-nav a[data-v-5d900100]:hover{background:#3fb76c;color:#fff;border-color:#3fb76c}.about-nav a:hover .lt2[data-v-5d900100]{display:inline}.about-nav a:hover .lt1[data-v-5d900100]{display:none}.aside-box[data-v-5d900100]{overflow:hidden;height:100%;display:flex;justify-content:center;align-items:center;background:hsla(0,0%,100%,.7) url("+n+') no-repeat 50%;background-size:auto 100%}.marsk[data-v-5d900100]{position:absolute;width:100%;height:100%;background:hsla(0,0%,100%,.5)}.aside-content[data-v-5d900100]{width:400px;height:400px;text-align:center;position:relative;z-index:2}.aside-content img[data-v-5d900100]{width:100px;height:100px;border-radius:50%;transition:-webkit-transform .5s;transition:transform .5s;transition:transform .5s,-webkit-transform .5s;cursor:pointer}.aside-content img[data-v-5d900100]:hover{-webkit-transform:rotate(1turn);transform:rotate(1turn);box-shadow:0 0 30px rgba(0,255,249,.57)}.aside-content h1[data-v-5d900100]{padding-top:16px;padding-bottom:30px}.aside-content h1[data-v-5d900100],.aside-content h1 a[data-v-5d900100]{color:#3e3e3e;color:var(--titleColor);font-size:22px}.aside-content h1 a[data-v-5d900100]{text-decoration:none}.aside-content h1[data-v-5d900100]:after{content:"";display:block;height:1px;width:200px;background:#3fb76c;background:var(--lineColor);margin:15px auto 0}.aside-content p[data-v-5d900100]{font-size:12px;padding-top:10px;padding-bottom:10px;color:#5e5e5e;color:var(--fontColor)}.aside-icon[data-v-5d900100]{clear:both;display:flex;justify-content:center}.aside-icon a[data-v-5d900100]{width:34px;height:34px;background-color:#5e5e5e;margin:0 10px;cursor:pointer;transition:background-color .3s;border-radius:2px;color:#fff;text-decoration:none;text-align:center;line-height:34px}.aside-icon a[data-v-5d900100]:hover{background-color:#3fb76c;background-color:var(--lineColor)}',""])},71:function(t,e,o){t.exports=o.p+"img/e32a8fe.jpg"},88:function(t,e,o){"use strict";o.r(e);var n={head:()=>({title:"naice | 首页"}),mounted(){const t=localStorage.getItem("userInfo");if(t){let e=JSON.parse(t);this.$store.commit("changeAverter",e.gravatar)}else this.$store.commit("changeAverter",Math.floor(20*Math.random()))}},d=o(1);var component=Object(d.a)(n,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homePage"},[t._ssrNode('<section id="aside" data-v-5d900100>',"</section>",[t._ssrNode('<div class="aside-box" data-v-5d900100>',"</div>",[t._ssrNode('<div class="marsk" data-v-5d900100></div> '),t._ssrNode('<div class="aside-content" data-v-5d900100>',"</div>",[t._ssrNode("<a data-v-5d900100><img"+t._ssrAttr("src",o(38))+" alt data-v-5d900100></a> "),t._ssrNode("<h1 data-v-5d900100>","</h1>",[n("nuxt-link",{attrs:{to:"/article?page=0"}},[t._v("Naice")]),t._ssrNode(" <p data-v-5d900100>很多事情不是因为有希望才去坚持，而是坚持了才有希望。</p>")],2),t._ssrNode(" "),t._t("default"),t._ssrNode(' <div class="aside-icon" data-v-5d900100><a href="https://github.com/naihe138" data-v-5d900100><i class="iconfont" data-v-5d900100></i></a> <a href="https://segmentfault.com/u/naice" data-v-5d900100><i class="iconfont" data-v-5d900100></i></a></div>')],2)],2)]),t._ssrNode(" "),t._ssrNode('<div class="home-view" data-v-5d900100>',"</div>",[t._ssrNode('<section class="aboutMe" data-v-5d900100>',"</section>",[t._ssrNode('<div class="about-nav" data-v-5d900100>',"</div>",[n("nuxt-link",{attrs:{to:"/"}},[n("span",{staticClass:"lt1"},[t._v("文章")]),t._v(" "),n("span",{staticClass:"lt2"},[t._v("Article")])]),t._ssrNode(" "),n("nuxt-link",{attrs:{to:"/music"}},[n("span",{staticClass:"lt1"},[t._v("音乐")]),t._v(" "),n("span",{staticClass:"lt2"},[t._v("Music")])])],2),t._ssrNode(" "),t._ssrNode('<div class="about-nav" data-v-5d900100>',"</div>",[n("nuxt-link",{attrs:{to:"/project"}},[n("span",{staticClass:"lt1"},[t._v("项目")]),t._v(" "),n("span",{staticClass:"lt2"},[t._v("Project")])]),t._ssrNode(" "),n("nuxt-link",{attrs:{to:"/about"}},[n("span",{staticClass:"lt1"},[t._v("关于")]),t._v(" "),n("span",{staticClass:"lt2"},[t._v("About")])])],2)],2)])],2)},[],!1,function(t){var e=o(69);e.__inject__&&e.__inject__(t)},"5d900100","1790ea96");e.default=component.exports}};
//# sourceMappingURL=2c3e4ddeb66af3316009.js.map