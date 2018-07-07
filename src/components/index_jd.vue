<template>
	<div id="app">
		<!--头部-->
		<header class="mui-bar mui-bar-nav b_w" style="box-shadow: none;">
			<h1 class="mui-title">景点门票</h1>
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
			<!--周边热销·热门度假区-->
			<div class="hot b_w mar_t_10 pad_b_5">
				<!--标题-->
				<div class="tit row">
					<div class="ts_15 txt_c1"><img class="tit_iocn" src="../../static/imgs/img_36.png" />人气必玩</div>
					<div onclick="location.href='../search/new_search.html'" class="txt_c3 ts_13">更多 ></div>
				</div>
				<!--Top 1、2、3-->
				<div class="row pad_r_10 pad_l_10 mar_t_3 mar_b_10 txt_c2">
					<div class="hot_show" style="width: 32%;" v-for="(item,$index) in dt_list1" @click="go_url(item)">
						<div class="rel">
							<span class="abs hot_tit" :class="'hot_c'+$index">TOP {{$index+1}}</span>
							<img class="hot_img" :src="item.thumb" />
						</div>
						<div class="col4 mar_b_5">
							<span class="ts_14 pad_r_3 mar_t_5" style="line-height: 20px;    height: 20px;overflow: hidden; width: 100%;padding: 0px 2px;text-overflow: ellipsis;white-space: nowrap;" v-html="item.title"></span>
							<div class="txt_c1 ts_13 mar_t_5">￥<span class="ts_17">{{item.price}}</span><span class="txt_c2 ts_13"> 起</span></div>
						</div>
					</div>
				</div>
			</div>
			<!--景点推荐-->
				<div class="mar_t_10">
					<!--标题-->
					<div class="tit row b_w">
						<div class="ts_15 txt_c1"><img class="tit_iocn" src="../../static/imgs/img_36.png" />热门景点</div>
						<div onclick="location.href='../search/new_search.html'" class="txt_c3 ts_13">更多 ></div>
					</div>
					<!--列表-->
					<div class="row3 mar_t_1 pad_b_10 b_w pad_t_10 h_105" v-for="(item,$index) in dt_list2" @click="go_url(item)">
						<img class="w_81 h_80 mar_l_13 mar_r_15 fshr" :src="item.thumb" />
						<div class="col3 pad_t_5 pad_b_5">
							<span class="txt_14 c_txt1"  v-html="item.title"></span>
							<div class="row_2 c_red1 padding_t_3">
								<div class="ts_10">
									<span class="iocn5">优惠</span>
									<span class="iocn6">返现</span>
									<span class="iocn7">今日可订</span>
								</div>
							</div>
							<div class="row widths ts_12 txt_c3" style="margin-top: 7px;">
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
	export default {
		data() {
			return {
				dt_list1:'',
				dt_list2:'',
				navnum:1,
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
			Vue.http.get(URLS + '/tickets').then(function(response) {
				console.log(response)
				//人气必玩
				_this.dt_list1 = response.body.data.popularity
				//热门景点
				_this.dt_list2 = response.body.data.hot
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
			go_url:function(){
				
			},
			
		}
	}
</script>

<style>
	.txt_14{
		text-align: left;
	}

</style>