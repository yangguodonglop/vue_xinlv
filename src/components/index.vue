<template>
	<div id="app">
		<div class="row h_44 txt_cw ts_14 linear_tit_back">
			<div class="mar_l_20" @click="addresslink()">{{places}} <img class="img1 mar_l_5" src="imgs/img_01-min.png" alt="" /></div>
			<div class="tit_back" @click="pathurl()"><img class="img2 mar_r_5" src="../../static/imgs/img_02-min.png" /> 目的地/关键词1</div>
			<img @click="gologin()" class="img3 mar_r_20" src="../../static/imgs/logo(96x96).png" />
		</div>
		<div class="mui-slider b_w zxb-slider rel">
			<div class="mui-slider-group mui-slider-loop">
				<div class="mui-slider-item" v-for="item in banner" @click="pathurl1()"><img :src="item.thumb" /></div>
			</div>
		</div>
		<!--导航模块-->
		<div class="row pad_r_10 pad_t_5 b_w">
			<!--<template v-for="item in navs">
					<img class="wid_25 pad_l_10" :src="item.thumb" />
				</template>-->

			<img class="wid_25 pad_l_10" src="../../static/imgs/img1.png" @click="go_tab1(1)" />
			<img class="wid_25 pad_l_10" src="../../static/imgs/img2.png" @click="go_tab(n='gn')" />
			<img class="wid_25 pad_l_10" src="../../static/imgs/img3.png" @click="go_tab(n='zb')" />
			<img class="wid_25 pad_l_10" src="../../static/imgs/img4.png" @click="go_tab1(2)" />
		</div>
		<div class="row pad_r_10 b_w pad_t_10 pad_b_10">
			<img class="wid_25 pad_l_10" src="../../static/imgs/img5.png" @click="go_tab(n='cj')" />
			<img class="wid_25 pad_l_10" src="../../static/imgs/img6.png" />
			<img class="wid_25 pad_l_10" src="../../static/imgs/img7.png" @click="go_tab(n='dz')" />
			<img class="wid_25 pad_l_10" src="../../static/imgs/img8.png" />
		</div>
		<div class="b_w mar_t_10 ts_15" id="txt_tit">
			<div class="row pad_l_10 pad_r_10 pad_t_10 pad_b_10 tit_bor">
				<div class="txt_c1 row"><span class="iocn1 linear_back_c9"></span> 猜你想去</div>
				<div class="ts_12 pad_r_5">更多 ></div>
			</div>

			<div :class="(mag_t <-35)?'index_tit_fix tit_bor':'index_tit_fix1 tit_bor'">
				<div class="row mar_l_20 mar_r_20 new_div">
					<span :class="(cur_page == 0)?'action_tit1':'action_tit'" @click="goto_item(0)" name="gt_img1">推荐1</span>
					<span :class="(cur_page == 1)?'action_tit1':'action_tit'" @click="goto_item(1)" name="gt_img2">出境游</span>
					<span :class="(cur_page == 2)?'action_tit1':'action_tit'" @click="goto_item(2)" name="gt_img3">国内游</span>
					<span :class="(cur_page == 3)?'action_tit1':'action_tit'" @click="goto_item(3)" name="gt_img4">周边游</span>
				</div>
			</div>
			<div :class="(mag_t < -35)?'mar_t_37':''">
				<!--第一个内容区容器-->
				<img class="pad_t_10 pad_l_10 pad_r_10 widths" src="../../static/imgs/img_100.jpg" id="gt_img1" />
				<div class="pad_l_10 pad_r_10  mar_b_5">
					<div class="row_wrap">
						<div v-for="item in dt1" v-cloak class="col wid_49 h_190 mar_b_10" @click="go_url(item)">
							<div class="rel">
								<span class="abs iocn2 pad_l_10 pad_r_15 txt_cw ts_12">武汉出发</span>
								<i><img class="widths zxb_img" :src="item.thumb" /></i>
							</div>
							<span class="mar_t_5 txt_c2 as_fs pad_l_5 pad_r_5 h_115">{{item.title}}</span>
							<div class="row widths mar_t_5">
								<div class="ts_12 txt_c1">￥<span class="ts_18">{{item.price}}</span> 起</div>
								<span class="txt_c3 pad_r_5 ts_11">{{item.id}}人购买</span>
							</div>
						</div>
					</div>
				</div>
				<!--第二个内容区容器-->
				<img class="pad_l_10 pad_r_10 widths" src="../../static/imgs/img_100.jpg" id="gt_img2" />
				<div class="pad_l_10 pad_r_10 mar_b_5">
					<div class="row_wrap">
						<div v-for="item in dt2" v-cloak class="col wid_49 h_190 mar_b_10" @click="go_url(item)">
							<div class="rel">
								<span class="abs iocn2 pad_l_10 pad_r_15 txt_cw ts_12">武汉出发</span>
								<i><img class="widths zxb_img" :src="item.thumb" /></i>
							</div>
							<span class="mar_t_5 txt_c2 as_fs pad_l_5 pad_r_5 h_115">{{item.title}}</span>
							<div class="row widths mar_t_5">
								<div class="ts_12 txt_c1">￥<span class="ts_18">{{item.price}}</span> 起</div>
								<span class="txt_c3 pad_r_5 ts_11">{{item.id}}人购买</span>
							</div>
						</div>
					</div>
				</div>
				<!--第三个内容区容器-->
				<img class="pad_l_10 pad_r_10 widths" src="../../static/imgs/img_100.jpg" id="gt_img3" />
				<div class="pad_l_10 pad_r_10 mar_b_5">
					<div class="row_wrap">
						<div v-for="item in dt3" v-cloak class="col wid_49 h_190 mar_b_10" @click="go_url(item)">
							<div class="rel">
								<span class="abs iocn2 pad_l_10 pad_r_15 txt_cw ts_12">武汉出发</span>
								<i><img class="widths zxb_img" :src="item.thumb" /></i>
							</div>
							<span class="mar_t_5 txt_c2 as_fs pad_l_5 pad_r_5 h_115">{{item.title}}</span>
							<div class="row widths mar_t_5">
								<div class="ts_12 txt_c1">￥<span class="ts_18">{{item.price}}</span> 起</div>
								<span class="txt_c3 pad_r_5 ts_11">{{item.id}}人购买</span>
							</div>
						</div>
					</div>
				</div>
				<!--第四内容区容器-->
				<img class="pad_l_10 pad_r_10 widths" src="../../static/imgs/img_100.jpg" id="gt_img4" />
				<div class="pad_l_10 pad_r_10 mar_b_5">
					<div class="row_wrap">
						<div v-for="item in dt4" v-cloak class="col wid_49 h_190 mar_b_10" @click="go_url(item)">
							<div class="rel">
								<span class="abs iocn2 pad_l_10 pad_r_15 txt_cw ts_12">武汉出发</span>
								<i><img class="widths zxb_img" :src="item.thumb" /></i>
							</div>
							<span class="mar_t_5 txt_c2 as_fs pad_l_5 pad_r_5 h_115">{{item.title}}</span>
							<div class="row widths mar_t_5">
								<div class="ts_12 txt_c1">￥<span class="ts_18">{{item.price}}</span> 起</div>
								<span class="txt_c3 pad_r_5 ts_11">{{item.id}}人购买</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="tab_myself" id="nav">
			<template v-for="(item,$index) in urlnums">
				<a class="tab_myself_a" data-url="" @click="tonavlink($index)">
					<span class="tab_myself_span"> <img class="h_22" :src="item.navImg"/></span>
					<span id="txt_1" class="mui-tab-label" v-bind:class="navnum ==($index)?'txt_c1':'txt_c2'">{{item.navName}}</span>
				</a>
			</template>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import API from '@/API/api.js'

	export default {
		data() {
			return {
				places: '武汉',
				banner: '',
				mag_t: 10,
				cur_page: 0,
				dt1: '',
				navnum: 0,
				dt2: '',
				dt3: '',
				dt4: '',
				//				navName:['首页','景点门票','发现','积分商城','我的'],
				//				navImg: ['../../static/imgs/nav3.png','../../static/imgs/nav3.png', '../../static/imgs/nav3.png', '../../static/imgs/nav3.png', '../../static/imgs/nav3.png'],
				//				navUrl:['/','/index_jd','/index_jd','/index_jd','/index_jd'],
				urlnums: [{
						linknum: 1,
						navImg: '../../static/imgs/nav3.png',
						navUrl: '/',
						navName: '首页'
					},
					{
						linknum: 2,
						navImg: '../../static/imgs/nav3.png',
						navUrl: '/index_jd',
						navName: '景点门票'
					},
					{
						linknum: 3,
						navImg: '../../static/imgs/nav3.png',
						navUrl: '/index_fx',
						navName: '发现'
					},
					{
						linknum: 4,
						navImg: '../../static/imgs/nav3.png',
						navUrl: '/index_jf',
						navName: '积分商城'
					},
					{
						linknum: 5,
						navImg: '../../static/imgs/nav3.png',
						navUrl: '/index_user',
						navName: '我的'
					}

				]

			}
		},
		created() {
			
		},
		mounted: function() {
			
			let data = {
				
			} //请求参数
			API.login(data)
				.then(res => {
					console.log(res.data)
					_this.banner = res.data
				}).catch(err => {
					//请求失败
				})
			
			let _this = this
			$(".new_div span").click(function() {
				var hr = $(this).attr("name");
				var nowdiv = "#" + hr
				var anh = $(nowdiv).offset().top;
				$("html,body").stop().animate({
					scrollTop: anh - 40
				}, 500);
			})

//			axios.get('http://mapi.xinlv123.com/xltx/mobile/banner').then((responese) => {
//				//_this.banner = responese.data.data
//
//			}).catch((err) => {
//				console.log("失败")
//			})
			axios.get('http://mapi.xinlv123.com/xltx/mobile/recommend').then((responese) => {
				//console.log(responese)
				this.dt1 = responese.data.data.theme
				this.dt2 = responese.data.data.theme
				this.dt3 = responese.data.data.theme
				this.dt4 = responese.data.data.theme

			}).catch((err) => {
				console.log("失败")
			})
			_this.createEditor();

		},
		methods: {

			createEditor: function() {

				var gallery = mui('.zxb-slider');
				setTimeout(function() {
					gallery.slider({
						interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
					});
				}, 200);
			},
			goto_item: function(n) {

				//console.log(document.getElementById('gt_img' + (n + 1)).offsetTop);
				//window.scrollTo(0, document.getElementById('gt_img' + (n + 1)).offsetTop - 75);
			},
			go_url: function(item) {
				let _this = this
				_this.cur_page = item.id

				sessionStorage.setItem('key', _this.cur_page)
				//				_this.$router.push({name:'index1',params: { userId: _this.cur_page }})
				_this.$router.push({
					path: '/index1'
				})
			},
			pathurl: function() {
				var _this = this;
				//_this.$router.push({name:'index1',params: { userId: 123 }})
			},
			pathurl1: function() {

				var _this = this;
				_this.$router.push({
					path: '/index2'
				})
			},
			gologin: function() {
				var _this = this
				_this.$router.push({
					path: '/login'
				})
			},
			tonavlink: function(n) {
				let _this = this
				_this.$router.push({
					path: this.urlnums[n].navUrl
				})

			}

		}
	}
</script>

<style>
	.rel i {
		width: auto;
		max-height: 90px;
		overflow: hidden;
		display: block;
	}
	
	.tit_back {
		line-height: 30px;
		padding-top: 0px;
	}
</style>