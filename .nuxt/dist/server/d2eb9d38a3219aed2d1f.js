exports.ids=[4],exports.modules={26:function(t,e,o){"use strict";e.a={methods:{footer(){$("#mailContent").height()<$(window).height()?this.$store.commit("changeFooterFixed",!0):this.$store.commit("changeFooterFixed",!1)}}}},27:function(t,e,o){"use strict";var r=o(24),n=o.n(r);n.a.interceptors.response.use(t=>t.data?t.data:{},function(t){return Promise.reject(t)});var d=n.a;o.d(e,"f",function(){return l}),o.d(e,"h",function(){return f}),o.d(e,"g",function(){return v}),o.d(e,"d",function(){return h}),o.d(e,"n",function(){return m}),o.d(e,"i",function(){return _}),o.d(e,"a",function(){return $}),o.d(e,"e",function(){return x}),o.d(e,"c",function(){return w}),o.d(e,"m",function(){return N}),o.d(e,"j",function(){return y}),o.d(e,"b",function(){return T}),o.d(e,"l",function(){return j}),o.d(e,"k",function(){return k});const c="production api",l=(t={})=>d.get(`${c}article/get`,{params:t}),f=t=>d.get(`${c}article/get/${t}`),v=()=>d.get(`${c}article/getAll`),h=t=>d.post(`${c}article/like/${t}`),m=()=>d.get(`${c}tag/get`),_=t=>d.get(`${c}comment/get`,{params:t}),$=t=>d.put(`${c}comment/add`,{...t}),x=t=>d.post(`${c}comment/like/${t}`),w=t=>d.put(`${c}reply/add`,{...t}),N=t=>d.get(`${c}reply/get/${t}`),y=t=>d.get(`${c}hero/get`,{params:t}),T=t=>d.put(`${c}hero/add`,{...t}),j=t=>d.get(`${c}project/get`,{params:t}),k=t=>d.get(`${c}music/get`,{params:t})},30:function(t,e,o){"use strict";e.a={methods:{toZero:t=>t>9?t:`0${t}`,toTime(t,e){const o=new Date(t);return`${o.getFullYear()}${e}${this.toZero(o.getMonth()+1)}${e}${this.toZero(o.getDate())}`}}}},34:function(t,e){},35:function(t,e){},51:function(t,e,o){"use strict";o.r(e);var r=o(34),n=o.n(r);for(var d in r)"default"!==d&&function(t){o.d(e,t,function(){return r[t]})}(d);e.default=n.a},52:function(t,e,o){"use strict";o.r(e);var r=o(35),n=o.n(r);for(var d in r)"default"!==d&&function(t){o.d(e,t,function(){return r[t]})}(d);e.default=n.a},59:function(t,e,o){"use strict";o.r(e);var r=o(27),n={data:()=>({scrollDom:null,scrollNum:0}),computed:{scrollTop(){return this.$store.state.scrollTop}},methods:{scroll(t){1===t?this.scrollNum+=400:this.scrollNum=0,$("html,body").animate({scrollTop:`${this.scrollNum}px`},300)},mail(){window.open("http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=CTo_OTs4PDs6OUl4eCdqZmQ","_blank")}},watch:{scrollTop(t){this.scrollNum=t}}},d=o(1);var c=Object(d.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"sideIcon"},[this._ssrNode('<i class="iconfont" data-v-56bc0acf></i> <i class="iconfont" data-v-56bc0acf></i> <i class="iconfont" data-v-56bc0acf></i>')])},[],!1,function(t){var e=o(51);e.__inject__&&e.__inject__(t)},"56bc0acf","00bb231a").exports,l=o(26),f=o(30);let v=Object(r.n)(),h=Object(r.f)({hot:!0}),m=Object(r.f)({current_page:1});var _={head:()=>({title:"naice | 文章"}),layout:"layout",mixins:[l.a,f.a],components:{ToTop:c},async asyncData({params:t}){const e=await v,o=await m,r=await h;return{tags:e,article:o.result.list,hotArticle:r.result.list}},data:()=>({showFixedTag:!1,sideHot:null,isLoadingData:!1,hasMore:!0,page:1}),computed:{scrollTop(){return this.$store.state.scrollTop}},methods:{loadMore(t={}){this.isLoadingData=!0,this.page+=1;let e={current_page:this.page,...t};Object(r.f)(e).then(e=>{this.isLoadingData=!1;const{result:o}=e;this.page>=o.pagination.total_page&&(this.hasMore=!1);let r=[];r=t.tag||t.keyword||t.isNew?o.list:this.article.concat(o.list),this.article=r,this.$nextTick(()=>{this.footer()})}).catch(t=>{this.isLoadingData=!1})},goDetail(t,data){const e=data.filter(e=>e._id==t);this.$store.commit("selectArticle",e[0]),this.$router.push("/article/"+t)}},mounted(){this.$nextTick(()=>{this.sideHot=document.querySelector("#sideHot"),this.mailContentDom=document.querySelector("#mailContent"),this.windowHeight=document.documentElement.clientHeight,this.footer(),window.addEventListener("scroll",t=>{const e=$(document).scrollTop(),o=this.mailContentDom.offsetHeight;this.showFixedTag=e>=this.sideHot.offsetHeight+80,this.windowHeight+e>o-50&&!this.isLoadingData&&this.hasMore&&this.loadMore()})})},beforeRouteEnter(t,e,o){o(e=>{(t.query.tag||t.query.keyword)&&e.loadMore(t.query)})},beforeRouteUpdate(t,e,o){this.page=0,this.hasMore=!0,t.query.tag||t.query.keyword?this.loadMore(t.query):this.loadMore({isNew:!0}),o()}};var x=Object(d.a)(_,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"articleBox"},[t._ssrNode('<main class="box main" data-v-769b4dff>',"</main>",[t._ssrNode('<section class="article" data-v-769b4dff>'+t._ssrList(t.article,function(e,o){return'<div class="item" data-v-769b4dff><a href="javascript:void(0)" class="article-title" data-v-769b4dff><h2 data-v-769b4dff>'+t._ssrEscape(t._s(e.title))+'</h2></a> <p class="article-desc" data-v-769b4dff>'+t._ssrEscape(t._s(e.descript))+'</p> <div class="article-info" data-v-769b4dff><span class="time" data-v-769b4dff>'+t._ssrEscape(t._s(t.toTime(e.update_at,".")))+'</span> <i class="iconfont" data-v-769b4dff></i> <span class="time" data-v-769b4dff>'+(e.meta?"<strong data-v-769b4dff>"+t._ssrEscape(t._s(e.meta.views))+"</strong>":"\x3c!----\x3e")+'次阅读\n          </span> <i class="iconfont" data-v-769b4dff></i> <span class="time" data-v-769b4dff>'+(e.meta?"<strong data-v-769b4dff>"+t._ssrEscape(t._s(e.meta.comments))+"</strong>":"\x3c!----\x3e")+'条评论\n          </span> <i class="iconfont" data-v-769b4dff></i> <span class="time" data-v-769b4dff>'+(e.meta?"<strong data-v-769b4dff>"+t._ssrEscape(t._s(e.meta.likes))+"</strong>":"\x3c!----\x3e")+"人喜欢\n          </span></div></div>"})+" "+(t.hasMore?'<div class="loadmore" data-v-769b4dff>'+(t.isLoadingData?"<span data-v-769b4dff>数据加载中...</span>":"\x3c!----\x3e")+"</div>":'<div class="loadmore" data-v-769b4dff>没有更多数据了</div>')+"</section> "),t._ssrNode('<section class="side" data-v-769b4dff>',"</section>",[t._ssrNode('<div id="sideHot" class="hot" data-v-769b4dff><div class="hot-title" data-v-769b4dff>热门文章</div> <div class="hot-article" data-v-769b4dff>'+t._ssrList(t.hotArticle,function(e,o){return'<h3 data-v-769b4dff><a href="javascript:void(0)" data-v-769b4dff>'+t._ssrEscape(t._s(e.title))+"</a></h3>"})+"</div></div> "),t._ssrNode("<div"+t._ssrClass(null,t.showFixedTag?"fixedTag":"")+" data-v-769b4dff>","</div>",[t._ssrNode('<div id="tags" class="tags" data-v-769b4dff>',"</div>",[t._ssrNode('<div class="hot-title" data-v-769b4dff>标签</div> '),t._ssrNode('<div class="tag-list" data-v-769b4dff>',"</div>",t._l(t.tags.result.list,function(e,r){return o("nuxt-link",{key:r,attrs:{to:"/article?tag="+e._id}},[t._v("\n              "+t._s(e.name)+"\n              "),o("span",[t._v("("+t._s(e.count)+")")])])}),1)],2),t._ssrNode(" "),t._ssrNode('<div class="smallNav" data-v-769b4dff>',"</div>",[t._ssrNode('<div class="flag" data-v-769b4dff></div> '),t._ssrNode("<div data-v-769b4dff>","</div>",[o("nuxt-link",{attrs:{to:"/about"}},[t._v("我")]),t._ssrNode(" <i data-v-769b4dff>•</i> "),o("nuxt-link",{attrs:{to:"/hero"}},[t._v("留言墙")]),t._ssrNode(" <i data-v-769b4dff>•</i> "),o("nuxt-link",{attrs:{to:"/allarticle"}},[t._v("归档")])],2)],2)],2)],2)],2),t._ssrNode(" "),o("to-top")],2)},[],!1,function(t){var e=o(52);e.__inject__&&e.__inject__(t)},"769b4dff","5a857705");e.default=x.exports}};
//# sourceMappingURL=d2eb9d38a3219aed2d1f.js.map