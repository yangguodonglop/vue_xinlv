<template>
	<div id="app">
		<!--头部-->
		<header class="mui-bar mui-bar-nav b_w" style="box-shadow: none;">
			<h1 class="mui-title">发现</h1>
			<a onclick="location.href='../search/new_search.html'" class="mui-pull-right"><img class="w_20 mar_r_15 mar_t_5 mar_t_10" src="../../static/imgs/img_31.png" /></a>
		</header>
		<div id="pullrefresh" class="mui-content" style="background-color: #f2f4f5; margin-top: -50px;">

			<div class="mui-slider margin_b_10 mar_t_45">
				<div class="mui-slider-group mui-slider-loop">
					<div class="mui-slider-item">
						<a href="#"><img class="search_img" src="../../static/imgs/ticketbanner1.jpg" alt="" /></a>
					</div>
					<!--<div class="mui-slider-item">
							<a href="#"><img class="search_img" src="/public/images/img_124.jpg" alt="" /></a>
						</div>
						<div class="mui-slider-item">
							<a href="#"><img class="search_img" src="/public/images/img_124.jpg" alt="" /></a>
						</div>
						<div class="mui-slider-item">
							<a href="#"><img class="search_img" src="/public/images/img_124.jpg" alt="" /></a>
						</div>-->
				</div>
			</div>
			<!--发现·玩哪里-->
				<div class="hot b_w mar_t_10 pad_b_5">
					<!--标题-->
					<div class="tit row">
						<div class="ts_15 txt_c1"><img class="tit_iocn" src="../../static/imgs/img_36.png" />发现·玩哪里</div>
						<div onclick="location.href='../search/new_search.html'" class="txt_c3 ts_13">更多 ></div>
					</div>

					<!--秒杀、特惠-->
					<div class="row mar_l_10 mar_r_10">
						<div class="col2 hot_show" v-for="item in dt_list1" @click="go_url(item)" style="width: 48%; justify-content: space-around;">
							<div class="rel txt_cw">
								<img class="abs img24" src="../../static/imgs/img_14-min.png" />
								<span class="abs ts_11 txt_cw mar_t_-2 mar_l_5">特惠</span>
								<div class="abs rob_hs bot_0 one_lin">{{item.title}}</div>
								<img class="widths" :src="item.thumb" style="height: 10.5rem;" />
							</div>
							<div class="widths h_35 row">
								<div class="txt_c1 pad_l_5">
									<span class="txt_14">￥</span><span class="txt_14">{{item.price}}</span><span class="txt_14 c_txt">起</span>
								</div>
								<div style="display: flex; align-items: center;"><img class="img25 mar_r_10" src="../../static/imgs/img_37.png" /></div>
							</div>
						</div>
					</div>
					<!--标题模块-->
					<div class="row mar_r_10">
						<div class="col widths mar_l_10">
							<div onclick="location.href='../search/new_search.html?key=泰国'" class="hot_txt1">泰国</div>
							<div onclick="location.href='../search/new_search.html?key=澳大利亚'" class="hot_txt1">澳大利亚</div>
						</div>
						<div class="col widths mar_l_10">
							<div onclick="location.href='../search/new_search.html?key=日本'" class="hot_txt1">日本</div>
							<div onclick="location.href='../search/new_search.html?key=西安'" class="hot_txt1">西安</div>
						</div>
						<div class="col widths mar_l_10">
							<div onclick="location.href='../search/new_search.html?key=厦门'" class="hot_txt1">厦门</div>
							<div onclick="location.href='../search/new_search.html?key=欧洲'" class="hot_txt1">欧洲</div>
						</div>
						<div class="col widths mar_l_10">
							<div onclick="location.href='../search/new_search.html?key=七彩云南'" class="hot_txt1">七彩云南</div>
							<div onclick="location.href='../search/new_search.html?key=贵州'" class="hot_txt1">贵州</div>
						</div>
					</div>
				</div>	
					<!--国内推荐-->
				<div class="mar_t_10">
					<!--标题-->
					<div class="tit row b_w">
						<div class="ts_15 txt_c1"><img class="tit_iocn" src="../../static/imgs/img_36.png" />精选线路</div>
						<div onclick="location.href='../search/new_search.html'" class="txt_c3 ts_13">更多 ></div>
					</div>
					<!--列表-->
					<div class="row3 mar_t_1 pad_b_10 b_w pad_t_10 h_105" v-for="item in dt_list2" @click="go_url(item)">
						<img class="w_81 h_80 mar_l_13 mar_r_15 fshr" :src="item.thumb" />
						<div class="col3 pad_t_5 pad_b_5">
							<span class="txt_14 c_txt1" >{{item.title}}</span>
							<div class="row_2 c_red1 padding_t_3">
								<!--<div class="ts_10">
							<span class="iocn5">优惠</span>
							<span class="iocn6">返现</span>
							<span class="iocn7">今日可订</span>
						</div>-->
							</div>
							<div class="row widths ts_12 txt_c3">
								<span>{{item.start}} 出发</span>
								<div class="txt_11 txt_c1 pad_r_15">
									￥<span class="ts_18">{{item.price}}</span> 起
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
	export default{
		data(){
			return{
					people_num: "1",
			hot_num: "2",
			dt_list1: '',
			dt_list2: '',
			dt_list3: '',
			navnum:2,
				urlnums:[
				{
				linknum:1,	
				navImg:'../../static/imgs/nav3.png',
				navUrl:'/',
				navName:'首页'
				},
				{
				linknum:2,	
				navImg:'../../static/imgs/nav3.png',
				navUrl:'/index_jd',
				navName:'景点门票'
				},
				{
				linknum:3,	
				navImg:'../../static/imgs/nav3.png',
				navUrl:'/index_fx',
				navName:'发现'
				},
				{
				linknum:4,	
				navImg:'../../static/imgs/nav3.png',
				navUrl:'/index_jf',
				navName:'积分商城'
				},
				{
				linknum:5,	
				navImg:'../../static/imgs/nav3.png',
				navUrl:'/index_user',
				navName:'我的'
				}

					
				]
			}
		},
		mounted:function(){
			let _this=this
				var init_gall = function() {
				setTimeout(function() {
					var gallery = mui('.mui-slider');
					gallery.slider({
						interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
					});
				}, 200);
			}
			init_gall();
				//获取数据

			Vue.http.get(URLS + '/find').then(function(response) {
				//mui.hideLoading();
				//发现玩哪里
				_this.dt_list1 = response.body.data.find
				//精选线路
				_this.dt_list2 = response.body.data.sift
				//位置推荐
				_this.dt_list3 = response.body.data.path
				mui.hideLoading();
			}, function(err) {
				mui.hideLoading();
				mui.toast('网络异常！');

			})
			
		},
		methods:{
			tonavlink:function(n){
				let _this=this
				_this.$router.push({path:this.urlnums[n].navUrl})
				
			},
		}
			
	}
</script>

<style>
.bot_0{
	bottom: 5px;
}
.c_txt1{
	text-align: left;
}
</style>