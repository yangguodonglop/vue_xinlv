<template>
	<div id="app">
		<!--标题-->
		<header class="mui-bar mui-bar-nav h_60" style="box-shadow: none;">
			<a class="mui-action-back mui-pull-left"><img class="img11" src="../../static/imgs/img_76.png" /></a>
			<h1 class="mui-title c_white">积分商城</h1>
			<!--<a class="mui-icon mui-pull-right" style="display: none;"><img class="nar_img margin_r_10" src="../images/img_32-min.png" /></a>-->
		</header>
		<img class="widths mar_t_45" src="../../static/imgs/banner4.jpg" />
		<!--积分  兑换记录-->
		<div id="txt_tit" class="row h_44 b_w txt_12 mar_t_-5" style="z-index: 1000;">
			<div class="wid_49 cen jf_tit_link">
				<img class="img2 mar_r_5" src="../../static/imgs/money.png" /> 积分
				<span class="txt_c1 margin_l_5">{{integral}}</span>
			</div>
			<div class="wid_49 cen" onclick="openPager(this, '../integral_order/index.html')">
				<img class="img2 mar_r_5" src="../../static/imgs/money_dh.png" /> 兑换记录
			</div>
		</div>
		<div id="zxb_cont" class="mui-row mui-fullscreen mar_t_230 b_w mar_b_50">
			<div id="zxb_cont1" class="mui-col-xs-3 margin_t_-5">
				<ul class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical">
					<li v-for="(item, n) in dt" :class="(n==pg)?'l_item_action':'l_item'" onclick="sele_item(this)" :data-n="n">{{item.name}}</li>
					<div style="width: 100%; background-color: white; height: 100px;"></div>
				</ul>
			</div>
			<div id="zxb_cont2" class="mui-col-xs-9 pad_10">
				<div v-for="(item, n) in dt">
					<img :id=n class="widths brad_5" :data-id="item.id" :src="item.mobile_thumb" @click="getGoodList(item.id)" />
					<div class="row_wrap mar_t_5">
						<div v-for="it in item.product" :data-id="it.id" @click="getGoodDetail(it.id)" class="col1 wid_48 mar_b_10 pad_l_10 pad_r_10" style="width: 50%;">
							<img class="w_80 h_80" :src="it.thumb" />
							<span class="ts_12 txt_c2 widths one_lin margin_t_10">{{it.title}}</span>
							<span class="ts_12 txt_c1">{{it.price}}</span>
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
				pg: 0,
				dt: '',
				integral: '0',
				navnum:3,
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
			let _this =this
			 Vue.http.get(URL+'/mobile/integral').then(function(response) {
            var data=response.body.data;
           _this.dt = data;
            setTimeout(function(){
            	mui.hideLoading();
				onscrol();
			},200);
        }, function(err) {
        	mui.hideLoading();
            mui.toast('网络异常，请检查网络!');
        });
        
        
         
   
		},
		methods:{
				tonavlink:function(n){
				let _this=this
				console.log("2222222")
				_this.$router.push({path:this.urlnums[n].navUrl})
				
			}
		}
		
	}
</script>

<style>
	.c_white {
		color: #666666;
	}
</style>