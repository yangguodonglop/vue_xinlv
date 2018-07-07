<template>
	<div id="me">
		<!--背景图片-->
		<div class="back_red h_120 abs widths" style="top: 0; z-index: -100;">
			<template v-if="status">
				<a style="float: right;margin-right: 18px; margin-top: 18px;" v-on:click="tolink('/user/mysettings.html')"><img src="../../static/imgs/img_62.png" style="width: 19px;height: 19px;" /></a>
			</template>
			<img class="widths abs" style="bottom: 0;" src="../../static/imgs/banner_zz1.png" />
		</div>
		<div class="b_w h_120 abs widths" style="top: 120px; z-index: -100;"></div>
		<div class="h_155 mar_t_50 mar_l_18 mar_r_18 txt_bac_red1 rel" style="box-shadow: 1px 2px 10px #E1e1e1">
			<img class="widths abs" src="../../static/imgs/me_back.png" />
			<img class="img26 abs" style="margin-top: -25px; left: 50%; margin-left: -25px;" :src="avatar_url" />
			<div class="col widths h_120 abs" style="bottom: 0;">
				<template v-if="status">
					<span class="ts_15">{{ name }}</span>
					<img class="w_71 margin_t_3" style="padding: 7px 0px;" src="../../static/imgs/img_79.png" />
				</template>
				<template v-else>
					<span class="ts_15" v-on:click="tolink11">登录 / 注册</span>
					<div class="w_71 margin_t_3"></div>
				</template>
				<span id="sign" class="ts_10 txt_c3 mar_b_5 pad_l_15 pad_r_15" style="line-height: 15px;min-height: 29px;overflow: hidden;">"{{sign}}"</span>
				<div class="h_38 bor_t row5 widths ts_14 txt_c2 pad_t_5">
					<span><img class="h_14 mar_r_10" style="vertical-align: -10%;" src="../../static/imgs/jifen.png"/><span id="integ" class="c_txt3 margin_l_10"> {{integral}} </span>积分</span>
					<span class="s_br"></span>
					<span class="" v-on:click="tolink('../user/my_invitation_list.html')">
							<img class="h_14 mar_r_10" style="vertical-align: -10%;"  src="../../static/imgs/yaoqing.png"/>已邀请
							<span class="c_txt3 margin_l_10"> {{invite}} </span>人
					</span>
				</div>
			</div>
		</div>
		<!--我的订单-->
		<div class="b_w pad_18">
			<span class="ts_12 txt_c8">我的订单</span>
			<div class="row mar_t_10">
				<div class="col1" @click="goclick(1)">
					<img class="w_20" src="../../static/imgs/d1.png" />
					<span class="txt_c2 ts_12 mar_t_8">全部订单</span>
				</div>
				<div class="col1" @click="goclick(2)">
					<img class="w_20" src="../../static/imgs/d2.png" />
					<span class="txt_c2 ts_12 mar_t_8">待付款</span>
				</div>
				<div class="col1" @click="goclick(3)">
					<img class="w_20" src="../../static/imgs/d3.png" />
					<span class="txt_c2 ts_12 mar_t_8">进行中</span>
				</div>
				<div class="col1" @click="goclick(4)">
					<img class="w_20" src="../../static/imgs/d4.png" />
					<span class="txt_c2 ts_12 mar_t_8">已完成</span>
				</div>
			</div>
			<div class="br4 mar_t_18 mar_b_18"></div>

			<span class="ts_12 txt_c8">常用功能</span>
			<div class="row_wrap1">
				<div class="col wid_25 mar_t_20" v-on:click="tolinkurl()">
					<img class="h_22" src="../../static/imgs/l1.png" />
					<span class="txt_c2 ts_12 mar_t_8">邀请好友</span>
				</div>
				<div class="col wid_25 mar_t_20" v-on:click="tolinkurl()">
					<img class="h_22" src="../../static/imgs/l2.png" />
					<span class="txt_c2 ts_12 mar_t_8">优惠券</span>
				</div>
				<div class="col wid_25 mar_t_20" v-on:click="tolinkurl()">
					<img class="h_22" src="../../static/imgs/l3.png" />
					<span class="txt_c2 ts_12 mar_t_8">积分商城</span>
				</div>

				<div class="col wid_25 mar_t_20" v-on:click="tolink_dz()">
					<img class="h_22" src="../../static/imgs/l5.png" />
					<span class="txt_c2 ts_12 mar_t_8">地址管理</span>
				</div>
				<div class="col wid_25 mar_t_20" v-on:click="tolinkurl()">
					<img class="h_22" src="../../static/imgs/l6.png" />
					<span class="txt_c2 ts_12 mar_t_8">联系人</span>
				</div>

				<div class="col wid_25 mar_t_20" v-on:click="tolinkurl()">

					<img class="h_22" src="../../static/imgs/l8.png" />
					<span class="txt_c2 ts_12 mar_t_8">客服中心</span>
				</div>
				<div class="col wid_25 mar_t_20" v-on:click="tolinkurl()">
					<img class="h_22" src="../../static/imgs/l9.png" />
					<span class="txt_c2 ts_12 mar_t_8">建议反馈</span>
				</div>
				<div class="col wid_25 mar_t_20" v-on:click="tolinkurl()">
					<img class="h_22" src="../../static/imgs/l10.png" />
					<span class="txt_c2 ts_12 mar_t_8">关于我们</span>
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
				id: 0,
				pg: 1,
				name: '用户名',
				integral: 0,
				invite: 0,
				invitecode: '',
				sign: '旅行的意义，就在于不断发现新的世界和新的自己',
				avatar_url: '../../static/imgs/wxlogo-1.png',
				status: false,
				navnum: 4,
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
						navUrl: '/index_jd',
						navName: '积分商城'
					},
					{
						linknum: 5,
						navImg: '../../static/imgs/nav3.png',
						navUrl: '/index_user',
						navName: '我的'
					}

				],
			linkUrl:[
				{
					urltxt:'/address'
				}
			]
			}
		},
		mounted: function() {

		},
		methods: {
			tonavlink: function(n) {
				let _this = this
				_this.$router.push({
					path: this.urlnums[n].navUrl
				})

			},
			tolink_dz:function(){
				let _this=this
				_this.$router.push({
					path:'/address'
				})
			},
			goclick:function(n){
				let _this=this;
				_this.pg = n;
				if(window.sessionStorage) {
					sessionStorage.setItem("_this.pg", _this.pg );
				} else {
					Cookie.write("_this.pg", product_id);
				}
				_this.$router.push({path:'/my_order'})
			},
			tolink11:function(){
				let _this=this;
				_this.$router.push({path:'/login'})

			}
		}
	}
</script>

<style>

</style>