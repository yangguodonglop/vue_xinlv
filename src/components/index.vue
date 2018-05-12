<template>
	<div>
		<div class="row h_44 txt_cw ts_14 linear_tit_back">
			<div class="mar_l_20" @click="addresslink()">{{places}} <img class="img1 mar_l_5" src="imgs/img_01-min.png" alt="" /></div>
			<div class="tit_back" @click="pathurl()"><img class="img2 mar_r_5" src="../../static/imgs/img_02-min.png"    /> 目的地/关键词</div>
			<img class="img3 mar_r_20" src="../../static/imgs/logo(96x96).png" />
		</div>
		<div class="mui-slider b_w zxb-slider rel">
			<div class="mui-slider-group mui-slider-loop">
				<div class="mui-slider-item" v-for="item in banner"><img :src="item.thumb" /></div>
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

			<div :class="(mag_t < -35)?'index_tit_fix tit_bor':'index_tit_fix1 tit_bor'">
				<div class="row mar_l_20 mar_r_20">
					<span :class="(cur_page == 0)?'action_tit1':'action_tit'" @click="goto_item(0)">推荐</span>
					<span :class="(cur_page == 1)?'action_tit1':'action_tit'" @click="goto_item(1)">出境游</span>
					<span :class="(cur_page == 2)?'action_tit1':'action_tit'" @click="goto_item(2)">国内游</span>
					<span :class="(cur_page == 3)?'action_tit1':'action_tit'" @click="goto_item(3)">周边游</span>
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
				<img class="pad_l_10 pad_r_10 widths" src="../../static/imgs/img_100.jpg" id="gt_img2" />
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
				<img class="pad_l_10 pad_r_10 widths" src="../../static/imgs/img_100.jpg" id="gt_img2" />
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
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				places: '武汉',
				banner: '',
				mag_t: 10,
				cur_page: 0,
				dt1: '',
				dt2: '',
				dt3: '',
				dt4: ''

			}
		},
		mounted: function() {

			axios.get('http://mapi.xinlv123.com/xltx/mobile/banner').then((responese) => {
				this.banner = responese.data.data

			}).catch((err) => {
				console.log("失败")
			})
			axios.get('http://mapi.xinlv123.com/xltx/mobile/recommend').then((responese) => {
				console.log(responese.data.data)
				this.dt1 = responese.data.data.abroad
				this.dt2 = responese.data.data.abroad
				this.dt3= responese.data.data.abroad
				this.dt4 = responese.data.data.abroad

			}).catch((err) => {
				console.log("失败")
			})
			this.createEditor();
//			setTimeout(function() {
//				window.onscroll = function() {
//				//获取div距离顶部的距离
//				var mTop = this.document.getElementById('txt_tit').offsetTop;
//				//减去滚动条的高度
//				var sTop;
//				if(document.documentElement && document.documentElement.scrollTop)
//					sTop = document.documentElement.scrollTop;
//				else if(document.body)
//					sTop = document.body.scrollTop;
//				var result = mTop - sTop;
//				app.mag_t = result;
//
//				//得到每个部位距离顶部的距离
//				var img1 = document.getElementById('gt_img1').offsetTop;
//				var img2 = document.getElementById('gt_img2').offsetTop;
//				var img3 = document.getElementById('gt_img3').offsetTop;
//				var img4 = document.getElementById('gt_img4').offsetTop;
//				var n1 = img1 - sTop;
//				var n2 = img2 - sTop;
//				var n3 = img3 - sTop;
//				var n4 = img4 - sTop;
//			
//			
//
//				if(n1 < 48 && n2 > 48)
//					app.cur_page = 0;
//				else if(n2 < 48 && n3 > 48)
//					app.cur_page = 1;
//				else if(n3 < 48 && n4 > 48)
//					app.cur_page = 2;
//				else if(n4 < 48)
//					app.cur_page = 3;
//			}
//					}, 2000);
		

		},
		methods: {
			createEditor: function() {
				setTimeout(function() {

					var gallery = mui('.zxb-slider');
					gallery.slider({
						interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
					});
				}, 2000);
			},
			goto_item: function(item) {
				let _this = this
				_this.cur_page = item
			},
			pathurl:function(){
				alert("1211")
				var _this=this;
				setTimeout(function(){
					_this.$router.push({path:'/index1'})
				},2000)
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

</style>