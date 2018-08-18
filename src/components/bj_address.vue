<template>
	<div id="app">
		<header class="mui-bar mui-bar-nav" style="box-shadow: none; border-bottom: 1px solid #e6e6e6; background: #FFFFFF;">
			<a @click="goprev()" class="mui-pull-left"><img class="img11" src="../../static/imgs/left_jt.png" /></a>
			<h1 class="mui-title">新增收货地址</h1>
		</header>
		<div class="mui-content mar_t_1 txt_c2 ts_14" id="app">
			<div class="b_w">
				<div class="h_44 b_w row pad_l_15 pad_r_15">
					<span class="w_75 ts_w_600">收货人</span>
					<input type="text" name="" v-model="address.name" placeholder="填写收货人" style="border: 0; flex-grow: 1; height: 40px; margin-top: 13px; font-size: 14px;" />
				</div>
				<div class="br4"></div>
				<div class="h_44 b_w row pad_l_15 pad_r_15">
					<span class="w_75 ts_w_600">联系电话   </span>
					<input type="number" name="" v-model="address.phone" placeholder="填写联系电话" style="border: 0; flex-grow: 1; height: 40px; margin-top: 13px; font-size: 14px;" />
				</div>
				<div class="br4"></div>
				<div class="h_44 b_w row pad_l_15 pad_r_15" id="zxb_search">
					<span class="w_75 ts_w_600">所在地区</span>
					<span style="flex-grow: 1;">{{address.province}}{{address.city}}{{address.area}}</span>
					<img class="img17" src="/public/imgs/img_25.png" />
				</div>
				<div class="br4"></div>
				<div class="h_80 b_w row1 pad_l_15 pad_r_15">
					<span class="w_75 ts_w_600 pad_t_10">详细地址</span>
					<textarea class="h_80 ts_14" v-model="address.address" type="text" name="" id="" value="光谷软件园" placeholder="填写详细地址" style="border: 0; flex-grow: 1;"></textarea>
				</div>
			</div>
			<div class="txt_cw ts_16 but_bac mar_13 mar_t_30" @click="storeAddress()">
				
				保存地址
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

				address: [

				]
			}
		},
		mounted: function() {
			let _this = this
			var token = localStorage.getItem('token');
			var item_id = sessionStorage.getItem('item_id');
			console.log(item_id)
			Vue.http.get(URL + '/address/details?address_id=' + item_id, {
				headers: {
					Authorization: 'Bearer ' + token
				}
			}).then(function(response) {
				console.log(response)
				var address = response.body.data;
				_this.address = address;
			}, function(err) {
				mui.toast('网络异常！');
			});

			var cityData = null;
			Vue.http.options.emulateJSON = true;
			Vue.http.get('../../static/js/city.json').then(function(respones) {
				console.log("chengong")
				cityData = respones.body;
			}, function(err) {

			})

			//弹出框
			document.getElementById('zxb_search').addEventListener("tap", function() {

				//创建弹出框
				var picker = new mui.PopPicker({
					layer: 3
				});
				//数据
				picker.setData(cityData);
				//默认值
				picker.show(function(SelectedItem) {

					_this.address.province = SelectedItem[0].text;
					_this.address.city = SelectedItem[1].text;
					_this.address.area = SelectedItem[2];

				});
			});

		},
		methods: {
			storeAddress: function() {
				let _this = this;
				let data = {
					address_id: _this.address.id,
					name: _this.address.name,
					phone: _this.address.phone,
					province: _this.address.province,
					city: _this.address.city,
					area: _this.address.area,
					address: _this.address.address,
				}

				if(_this.address.name == '') {
					mui.toast('收货人不能为空!');
					return false;
				}
				if(_this.address.phone == '') {
					mui.toast('电话不能为空!');
					return false;
				}
				if(!_this.isphone(_this.address.phone)) {
					mui.toast('请输入正确的手机号');
					return;
				}
				if(_this.address.province == '' || _this.address.city == '' || _this.address.area == '') {
					mui.toast('地址不能为空!');
					return false;
				}
				if(_this.address.address == '') {
					mui.toast('详细地址不能为空!');
					return false;
				}
				var token = localStorage.getItem('token');
				Vue.http.post(URL + '/updateAddress', data, {
					headers: {
						Authorization: 'Bearer ' + token
					}
				}).then(function(response) {
					if(response.body.status == 1) {
						_this.$router.push({
							path: '/address'
						})
					}
				}, function(err) {
					alert('网络异常!');
				});
			},
			isphone: function(phone) {
				var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
				if(reg.test(phone)) {
					return true;
				}
				return false;
			},
			goprev: function() {
				let _this = this
				_this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.ts_w_600 {
		text-align: left;
	}
	
	#zxb_search span {
		text-align: left;
	}
</style>