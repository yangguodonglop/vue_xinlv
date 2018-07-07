<template>
	<div>
		<div class="mar_b_50">
				<!--头部-->
				<header class="mui-bar mui-bar-nav" style="background-color: transparent; box-shadow: 0px 0px;">
					<a class="mui-icon mui-pull-left"  @click="pathurl()"><img class="img15" src="../../static/imgs/img_23.png" /></a>
				</header>
				<!-- 图片轮播 -->
				<div class="mui-slider swiper" style="max-height: 320px;">
					<div id="banner_id" class="mui-slider-group mui-slider-loop">
						<div class="mui-slider-item" v-for="(item,i) in list2" :key='i'>
							<img :src="item" />
						</div>
					</div>
				</div>
				<div class="pad_10 b_w mar_t_-10">
					<span class="dom_txt">{{list1.title}}</span>
					<div class="dom_back pad_b_10 mar_t_10 pad_t_10">
						<div class="row ali h_38">
							<div class="row ali">
								<img class="h_38" src="../../static/imgs/img_38.png" />
								<span class="ts_12 txt_c1">&nbsp;&nbsp;￥<span class="ts_18">{{list1.price}}</span><span class="txt_c2"> 起</span></span>
							</div>
							<span class="ts_12 txt_c4 pad_r_10">100%好评</span>
						</div>
					</div>
					<div class="row ali mar_t_10 pad_t_3">
						<img class="w_25 mar_r_10" src="../../static/imgs/img_39.png" />
						<span class="ts_13 txt_c2" style="line-height: 15px;">此产品需二次确认，商家将在12个工作小时内（工作日9:00 - 18:00)  核实是否有位。</span>
					</div>
				</div>
				<div class="row b_w mar_t_10 mar_b_1 h_44 ali pad_l_10 pad_r_10">
					<span class="ts_14 txt_c2">优惠信息<span class="txt_11 c_txt5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;立减优惠&nbsp;&nbsp;&nbsp;| 点评返现 |</span></span>
					<span class="c_txt1" style="display: none;">></span>
				</div>
				<div v-html="list1.content" class="pad_10 pad_10_imgs" style="overflow-x: hidden;">
					{{list1.content}}
				</div>
				<!--提交订单-->
			<div class="h_50 zxb_fixed widths b_w" style="bottom: 0;">
				<div class="row heights">
					<div class="detail_but1" onclick="location.href='tel:4008700392'">
						<img src="../../static/imgs/img_44.png" />电话咨询
					</div>
					<a href="javaScript:;" @click="go_url()"  class="detail_but2">
						<!--<a href="order.html" class="detail_but2">-->
						<span class="c_white" >立即预定</span>
					</a>
				</div>
			</div>

				
		</div>		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				useid:'',
				list1:'',
				list2:[]
				
			}
		},
		created:function(){
			//console.log(_this.useid)
			let _this=this
			_this.useid=JSON.parse(sessionStorage.getItem('key'))
			console.log(_this.useid)
			Vue.http.get('http://mapi.xinlv123.com/xltx/mobile/goods/details' + '?id='+_this.useid ).then(function(respones) {
				_this.list1 = respones.body.data;
				var obj = JSON.parse(respones.body.data.thumb)
				for(var i = 0; i < obj.length; i++) {
					_this.list2.push(obj[i])
					init_gall();
				}

			}, function(err) {
				mui.toast('网络不可用，请检查网络');
			})
			var init_gall = () => {
				setTimeout(function() {
					var gallery = mui('.mui-slider');
					gallery.slider({
						interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
					});
				}, 200);
			}
		},
		methods:{
		pathurl:function(){
				var _this=this;
				_this.$router.go(-1)
		},
		go_url:function(){
		let _this=this
        var token = localStorage.getItem('token');
        var expired_at = localStorage.getItem('expired_at');
        var refresh_expired_at = localStorage.getItem('refresh_expired_at');
        var myDate = new Date();
        if(Date.parse(myDate) < Date.parse(refresh_expired_at) || localStorage.getItem('userstatus') == 'true'){
           	_this.$router.push({path:'/order'})

        }
        else {
			_this.$router.push({path:'/login'})        	
        }
		}
		}
		
	}
</script>

<style>
		table,
			table tr th,
			table tr td {
				border: 1px solid #0094ff;
			}
			
			.float-nav-all {
				background-color: white;
				margin-left: -10px;
				margin-right: -10px;
				margin-bottom: 20px;
			}
			
			.float-nav-list {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				list-style: none;
				margin: 0 auto;
				padding: 0;
			}
			
			.float-nav-list li {
				list-style: none;
				height: 40px;
				line-height: 40px;
			}
			
			img {
				max-width: 100%;
				height: auto;
			}
			h3{
				color: #ff7500;
			}
			h2{
				text-align: center;color: #8f8f94;
			}
			.section-box-content{
				    color: #8f8f94;font-size: 14px;
			}
			.section-box-content b{
				color: #ff7500;
			}
			.section-box-body{
				 color: #8f8f94;
			}
			.detail-route-download{
				color: #ff7500;
			}
			.float-nav-all a{
				color: #ff7500;
			}
			.pd-title{
				text-align: center;
				font-style: normal;
				color: #ff7500;
			}
			b{
				font-style: normal;
				color: #ff7500;
			}
			table th{
				color: #8f8f94;
			}
			table td{
				color: #8f8f94;
			}

</style>