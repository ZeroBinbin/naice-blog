<template>
	<div class="layoutBox" id="layoutBox">
		<header class="header" :class="isNavHidden ? 'navUp' : 'navDown'">
			<section class="box header-content">
			<nav>
				<nuxt-link
					v-for="(item, index) in nav"
					:key="index"
					:to="item.path"
					:class="navIndex == index ? 'active' : ''"
					>{{item.text}}</nuxt-link>
			</nav>
			<div class="searchBox">
				<div class="search"
					:style="showSearch ? {paddingLeft: '5px'} : {paddingLeft: '0'}">
					<div class="text" :class="showSearch ? 'showText' : 'hiddenText'">
						<input type="text"
							v-model="searchStr"
							placeholder="你心所想...">
					</div>
					<div class="searchIcon">
						<i class="iconfont"
							@click="toShowSearch"
							v-if="!showSearch">&#xe603;</i>
						<i class="iconfont rightIcon"
							@click="tohiddenSearch"
							v-else>&#xe640;</i>
					</div>
				</div>
			</div>
			</section>
		</header>
		<div class="mailContent" id="mailContent">
			<nuxt/>
		</div>
		<footer class="layoutFooter" :class="footerFixed ? 'footerFixed' : ''">
			© 2020 - <nuxt-link to="/">ZeroBinbin的博客</nuxt-link>
			 - Powered by Nuxt.js & Koa
		</footer>
    <canvas
      width="280"
      height="500"
      id="live2dModal"></canvas>
	</div>
</template>
<script>

export default {
  	data () {
		return {
			searchStr: '',
			showSearch: false,
			isNavHidden: false,
			layoutBox: null,
			navIndex: 0,
			nav: [
				{
					path: '/',
					text: '首页'
				},
				{
					path: '/article',
					text: '文章'
				},
				{
					path: '/project',
					text: '项目'
				},
				{
					path: '/about',
					text: '关于'
				},
				{
					path: '/music',
					text: '音乐'
				}
			]
		}
	},
	computed: {
		footerFixed() {
			return this.$store.state.footerFixed
		}
	},
	methods: {
		toShowSearch () {
			this.showSearch = true
		},
		tohiddenSearch () {
			this.$router.push(`/?keyword=${this.searchStr}`)
			this.searchStr = ''
			this.showSearch = false
		},
		scroll() {
			window.addEventListener('scroll', (e) => {
        const top = $(document).scrollTop()
				if (top >= 100) {
					this.isNavHidden = true
				} else {
					this.isNavHidden = false
				}
			})
		},
		chanrouter(router) {
			let index = 9
			this.nav.forEach((item, i) => {
				if (item.path == router.path) {
					index = i
				}
			})
			this.navIndex = index
		}
	},
	mounted() {
		this.$nextTick(function () {
			window.scrollTop = 0;
      loadlive2d("live2dModal", "/hijiki/hijiki.model.json");
			this.scroll()
		})
		this.chanrouter(this.$route)
		const userinfo = localStorage.getItem('userInfo')
		if (!userinfo) {
			this.$store.commit('changeAverter', Math.floor(Math.random() * 20))
		} else {
			let info = JSON.parse(userinfo)
			this.$store.commit('changeAverter', info.gravatar)
		}
	},
	watch: {
		$route (router) {
			this.chanrouter(router)
		}
	}
}
</script>
<style>
	.layoutBox{
		/* position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		left: 0; */
		overflow-x: hidden;
		overflow-y: auto;
	}
	.navUp {
		transform: translate3d(0, -60px, 0)
	}
	.navDown {
		transform: translate3d(0, 0, 0)
	}
	.header {
		background: #fff;
		border-bottom: 1px solid #f1f1f1;
		color: #909090;
		height: 60px;
		overflow: hidden;
		width: 100%;
		position: fixed;
		z-index: 2;
		transition: 0.3s
	}
	.box {
		width: 900px;
		margin: 0 auto;
	}

	.header-content {
		display: flex;
		height: 59px;
		justify-content: space-between;
	}

  	.header-content nav {
		height: 59px;
		line-height: 59px;
		font-size: 20px;
  	}

  	.header-content nav a {
		display: inline-block;
		height: 59px;
		transition: 0.3s;
		padding: 0 20px;
		position: relative;
		color: #8c8c8c;
		text-decoration: none;
  	}

	.header-content nav a:hover {
    text-shadow: 0 0 .5px #1f1f1f;
		color: #1f1f1f;
	}

	.header-content nav a.active {
		color: #1f1f1f;
    text-shadow: 0 0 .5px #1f1f1f;
	}

	.searchBox{
		display: flex;
		align-items: center;
	}
	.search{
		height: 30px;
		border-bottom: 1px solid #dddddd;
		display: flex;
		overflow: hidden;
		padding-left: 5px;

	}
	.search input{
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		background: transparent;
	}
	.search .text{
		width: 158px;
		transform-origin: right center;
		transition: 0.3s;
	}
	.search .showText{
		width: 158px;
	}
	.search .hiddenText{
		width: 0px;
		padding-left: 0px;
	}
	.search .searchIcon{
		width: 30px;
		height: 30px;
		line-height: 30px;
		text-align: center;
		cursor: pointer;
	}
	.rightIcon{
		color: #3fb76c
	}
	.mailContent{
		padding-top: 70px;
		padding-bottom: 20px;
	}
	.layoutFooter{
		height: 50px;
		background: rgba(255, 255, 255, 1);
		border-top: 1px solid #f1f1f1;
		text-align: center;
		line-height: 50px;
		font-size: 12px;
		color: #666;
		width: 100%;
	}
	.footerFixed {
		position: fixed;
		bottom: 0;
		left: 0;
	}

  #live2dModal {
    position: fixed;
    bottom: 0px;
    left: 0;
  }
</style>
