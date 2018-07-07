<template>
	<div id="app">
		<header class="mui-bar mui-bar-nav" style="box-shadow: none; border-bottom: 1px solid #e6e6e6; background: #FFFFFF;">
			<a @click="goprev()" class="mui-pull-left"><img class="img11" src="../../static/imgs/left_jt.png" /></a>
			<h1 class="mui-title">订单支付</h1>
		</header>
		<div id="pay" style="margin-top: 50px;">
			<!--支付详情-->
			<div class="back_white margin_t_55">
				<div class="row_2 padding_10 ali">
					<div class="col_1">
						<span class="margin_t_3 txt_16 c_txt1">
							在线支付:&nbsp;
							<span class="c_txt5 c_txt5_new">¥ {{price}}</span>
						</span>
						<div class="margin_t_5 margin_b_5">
							<span class="txt_14 c_txt4">剩余支付时间</span>
							<img class="order_details_iocn margin_l_10 margin_r_10" src="../../static/imgs/img_49.png" style="width: 14px;height: 14px; padding-top: 1px;" />
							<!--							<span class="txt_12 c_txt3">{{minute}}:{{second}}</span>
--></div>
					</div>
				</div>
			</div>
			<!--选择支付方式-->
			<div class="margin_t_10 back_white padding_r_10 txt_14 c_txt4">
				<div class="order_details_hr"></div>
				<label id="check1" class="zxb_but row ali widths padding_10" :class="{'check':onzfb}" @click="zfbpay()" style="justify-content: flex-start;">
					<img class="payment_iocn" src="../../static/imgs/img_zfb.png"/>
					<div class="margin_l_15">支付宝</div>
				</label>
				<label id="check1" class="zxb_but row ali widths padding_10 br1" :class="{'check':onwx}" @click="wxpay()" style="justify-content: flex-start;">
					<img class="payment_iocn" src="../../static/imgs/img_wx.png"/>
					<div class="margin_l_15">微信</div>
				</label>
			</div>
			<!--确认支付-->
			<div class="fix_but1 row">
				<span class="ts_12 txt_c2 mar_l_20">应付：<span class="ts_20 txt_c1">￥{{price}}</span></span>
				<span class="wid_42 but_bac1" @click="go_pay()">确认支付</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				price: '2988',
				onzfb: true,
				onwx: false

			}
		},
		mounted: function() {
			console.log(sessionStorage.getItem('now_price1'))
			this.price = window.sessionStorage ? sessionStorage.getItem('now_price1') : Cookie.read("now_price1");
			this.orderid = window.sessionStorage ? sessionStorage.getItem('now_order_id') : Cookie.read("now_order_id");
		},
		methods: {
			zfbpay: function() {
				this.onzfb = true
				this.onwx = false
			},
			wxpay: function() {
				this.onzfb = false
				this.onwx = true
			},
			go_pay: function() {
				console.log(this.onzfb+"***"+this.onwx)
				if(this.onzfb == true) {
					window.location.href = URL + "/alipay?order_id=" + this.orderid + "&pay_type=1&type=wap";
				}
				if(this.onwx == true) {
					window.location.href = URL + "/wechatpay?order_id=" + this.orderid + "&pay_type=2&type=wap";
				}
			},
			goprev: function() {
				let _this = this
				_this.$router.go(-1)
			},
		}
	}
</script>

<style>
	.ts_16 {
		text-align: left;
	}
	
	.check {
		background: url(../../static/imgs/img_41.png) no-repeat right;
		background-size: 15px 15px;
	}
</style>