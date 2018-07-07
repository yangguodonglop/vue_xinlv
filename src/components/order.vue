<template>
	<div id="app">
		<header class="mui-bar mui-bar-nav" style="box-shadow: none; border-bottom: 1px solid #e6e6e6; background: #FFFFFF;">
			<a @click="goprev()" class="mui-pull-left"><img class="img11" src="../../static/imgs/left_jt.png" /></a>
			<h1 class="mui-title">订单填写</h1>
		</header>
		<div class="mui-content">
			<!--订单商品-->
			<div class="b_w mar_t_1 row pad_l_15 pad_r_10 pad_t_10 pad_b_10">
				<img class="img19 fshr" :src="datalist.thumb" />
				<div class="col4 mar_l_20 h_80" style="display: block;">
					<span style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;  overflow: hidden;" class="ts_16 ts_w_600 txt_c2"> <!--v-html="datalist.title"-->{{datalist.title}} </span>
					<span class="ts_12 txt_c4 txt_c4_active" style="float: left;">{{datalist.suggest_price}}<i>元</i></span>
				</div>
			</div>
			<!--日期选择、购买数量-->
			<div class="b_w">
				<div class="row ali mar_t_10 pad_t_3 pad_l_15 pad_r_15 pad_t_10">
					<img class="w_25 mar_r_10" src="../../static/imgs/img_39.png" />
					<span class="ts_13 txt_c2" style="line-height: 15px;">此产品需二次确认，商家将在12个工作小时内（工作日9:00 - 18:00)  核实是否有位。</span>
				</div>
				<div class="row h_38 pad_l_15 pad_r_15 ts_14 txt_c2">
					<span>选择日期</span>
					<span data-options='{"type":"date"}' class="btn mui-btn">{{datatime}}</span>
				</div>
				<div class="row h_38 pad_l_15 pad_r_15 ts_14 txt_c2">
					<span>购买数量</span>
					<div class="row w_81">
						<a class="but1" @click="but_del()">-</a>
						<span class="but_txt">{{num}}</span>
						<a class="but1" @click="but_add()" style="line-height: 27px;">+</a>
					</div>
				</div>
			</div>
			<!--用户信息-->
			<div class="b_w mar_t_10 txt_c2 ts_14 pad_t_15">
				<span class="pad_l_15 ts_w_800">联系人信息</span>
				<div class="br4 mar_t_10"></div>
				<div class="h_44 b_w row pad_l_15 pad_r_15">
					<span class="w_75 ts_w_600">姓名</span>
					<input type="text" placeholder="出游人姓名" v-model='name' style="border: 0; flex-grow: 1; height: 40px; margin-top: 13px; font-size: 14px;" />
				</div>
				<div class="br4"></div>
				<div class="h_44 b_w row pad_l_15 pad_r_15">
					<span class="w_75 ts_w_600">电话</span>
					<input type="number" name="" id="" placeholder="您的电话号码" v-model='phone' style="border: 0; flex-grow: 1; height: 40px; margin-top: 13px; font-size: 14px;" oninput="if(value.length>11)value=value.slice(0,11)" />
				</div>
				<div class="br4"></div>
				<div class="h_80 b_w row1 pad_l_15 pad_r_15">
					<span class="w_75 ts_w_600 pad_t_10">留言</span>
					<textarea class="h_80 ts_14" type="text" v-model='contents' placeholder="说说您的想法吧！" style="border: 0; flex-grow: 1;"></textarea>
				</div>
			</div>
			<!--提交信息-->
			<div class="fix_but1 row">
				<span class="ts_12 txt_c2 mar_l_20">应付：<span class="ts_20 txt_c1">¥{{price}}</span></span>
				<span class="wid_42 but_bac1" @click="goto_item()">提交订单</span>
			</div>
			<!--阅读并同意-->
			<div class="margin_10 padding_l_10 txt_12 c_txt1 login_hyxy" style="color: #474747; font-size: 12px; padding: 10px 10px 15px 15px;">
				<span class="order_iocn1" :class="{'order_iocn1add':action}" @click="onaction()"></span>
				<span class="c_txt2" style="color: #b8b8b8; font-size: 12px;">&nbsp;&nbsp;&nbsp;已阅读并同意</span>
				<span>《心旅天下预定条款》</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				suggest_price: 8888,
				title: '你好好',
				thumb: '../../static/imgs/left_jt.png',
				num: 0,
				datatime: '2018-05-14',
				name: '',
				phone: '',
				contents: '',
				price: 9999,
				action: true,
				nowlocal: '',
				datalist: []

			}
		},
		mounted: function() {
			
			(function($) {
				let _this=this
				$.init();
				var btns = $('.btn');
				btns.each(function(i, btn) {
					btn.addEventListener('tap', function() {
						var _self = this;
						if(_self.picker) {
							_self.picker.show(function(rs) {
								_self.datatime = rs.text;
								_self.picker.dispose();
								_self.picker = null;
							});
						} else {
							var year = new Date().getFullYear();
							var month = new Date().getMonth() + 1;
							var day = new Date().getDate();
							var options = {
								"type": "date",
								"beginYear": year,
								"beginMonth": month,
								"beginDay": day
							};
							_self.picker = new $.DtPicker(options);
							_self.picker.show(function(rs) {
								this.datatime = rs.text;
								this.picker.dispose();
								_self.picker = null;
							});
						}

					}, false);
				});
			})(mui);

			let _this = this
			this.nowlocal = sessionStorage.getItem('key')
			Vue.http.get(order_fill + '?id=' + this.nowlocal, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token')
				}
			}).then(function(respones) {
				//var data = new Date();
				//vm.datatime = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate();
				_this.datalist = respones.body.data;
				console.log(_this.datalist)
				//this.price = vm.datalist.suggest_price;
				mui.hideLoading();
			}, function(err) {
				mui.hideLoading();
				mui.toast('网络不可用，请检查网络');
			})
		},
		methods: {
			onaction:function(){
				this.action!=this.action
				if(this.action==true){
					this.action=false
				}
				else{
					this.action=true
				}
			},
			//购买增减少数量
			but_del: function() {
				this.num--;
				this.price = this.datalist.suggest_price * this.num;
				if(this.num < 0) {
					this.num = 0;
					this.price = 0;
				}
			},
			//购买增加数量
			but_add: function() {
				this.num++
					this.price = this.datalist.suggest_price * this.num;
			},
			goto_item:function(){
				var _this=this;
				var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
				//var reg1= /^[\u4E00-\u9FA5]{2,4}$/
				if(this.num==0 ){
					mui.toast("请填写正确数量")
					return false;
				}
				if(this.name==="" ){
					mui.toast("请输入联系人姓名")
					return false;
				}
				if(!reg.test(this.phone)){
					mui.toast("请输入正确电话号码")
					return false;
				}
				if(this.contents==="" ){
					mui.toast("请输入内容")
					return false;
				}
				if(this.action==true){
				mui.toast("请仔细阅读协议")
				return false
				}
				let data = {
					product_id: this.datalist.id,
					phone: this.phone,
					name: this.name,
					contents: this.contents,
					start_time: this.datatime,
					num: this.num
				}
				Vue.http.options.emulateJSON = true;
				Vue.http.post(SCORDERURL + '/makeOrder', data, {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token')
					}
				}).then(function(response) {
					
					console.log(response)
					var now_order_id = response.body.data.order_id
					var now_price1 = response.body.data.price
					if(window.sessionStorage) {
						sessionStorage.setItem('now_price1', now_price1)
						sessionStorage.setItem('now_order_id', now_order_id)
					} else {
						Cookie.write("now_price1", now_price1)
						Cookie.write("now_order_id", now_order_id)
					}
					 _this.$router.push({path:'/payment'})
					
				}, function(err) {
					mui.toast('网络不可用，请检查网络');
				})
			},
			goprev: function() {
				let _this = this
				_this.$router.go(-1)
			},
			
		}

	}
</script>

<style>
	.ts_13 {
		text-align: left;
	}
	
	.ts_16 {
		text-align: left;
	}
</style>