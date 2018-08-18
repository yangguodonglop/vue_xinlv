<template>
	<div id="app">
		<header class="mui-bar mui-bar-nav" style="box-shadow: none; border-bottom: 1px solid #e6e6e6; background: #FFFFFF;">
			<a @click="goprev()" class="mui-pull-left"><img class="img11" src="../../static/imgs/left_jt.png" /></a>
			<h1 class="mui-title">管理收货地址</h1>
		</header>
		<div class="mui-content mar_t_-9" id="app">
			<template v-for="item in list">
				<div class="col4 h_118 b_w mar_t_10 txt_c2 pad_t_10 pad_b_10 pad_l_15 pad_r_15">
					<div class="row txt_c5 ts_16">
						<span>{{item.name}}</span>
						<span>{{item.phone}}</span>
					</div>
					<span class="ts_13" style="text-align: left; ">{{item.province}}{{item.city}}{{item.area}}{{item.address}}</span>
					<span class="br3"></span>
					<div class="row ts_12">
						<div v-if="item.is_default==1">
							<span><img class="img2 mar_r_5" src="../../static/imgs/img_41.png"/>默认地址</span>
						</div>
						<div v-else>
							<span @click="setDefaultAddress(item.id)"><img class="img2 mar_r_5" src="../../static/imgs/img_30.png"/>默认地址</span>
						</div>
						<span>
						<span @click="editAddress(item.id)"><img class="img2 mar_r_5" src="../../static/imgs/img_28.png"/>编辑  </span>
						<span @click="deleteAddress(item.id)"><img class="img2 mar_r_5 mar_l_20 " src="../../static/imgs/img_29.png"/>删除</span>
						</span>
					</div>
				</div>
			</template>
			<div class="fix_but b_w">
				<div class="txt_cw ts_16 but_bac mar_13" @click="createAddress()">
					添加新地址11
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: ''
			}
		},
		mounted: function() {
			//let _this=this
			this.nowfun()

		},
		methods: {
			//获取地址方法
			nowfun: function() {
				let _this = this
				var token = localStorage.getItem('token');
				Vue.http.get(URL + '/addressList', {
					headers: {
						Authorization: 'Bearer ' + token
					}
				}).then(function(response) {
					console.log(response)
					var list = response.body.data;
					_this.list = list;
				}, function(err) {
					alert('网络异常!');
				})
			},
			editAddress: function(index) {

				let _this = this
				let item_id = index
				sessionStorage.setItem("item_id", item_id)
				_this.$router.push({
					path: 'bj_address'
				})
			},
			setDefaultAddress: function(index) {
				let _this = this
				mui.confirm('是否设为默认', '提示', ['取消', '确定'], function(e) {
					if(e.index == 1) {
						let data = {
							id: index,
						}
						Vue.http.options.emulateHTTP = true;
						Vue.http.options.emulateJSON = true;
						var token = localStorage.getItem('token');
						Vue.http.post(URL + '/setDefaultAddress', data, {
							headers: {
								Authorization: 'Bearer ' + token
							}
						}).then(function(response) {
							if(response.body.status == 1) {
								_this.nowfun()
							}
						}, function(err) {
							alert('网络异常!');
						});
					}
				});
			},
			deleteAddress: function(index) {
				let _this = this
				mui.confirm('是否删除当前地址', '提示', ['取消', '确定'], function(e) {
					if(e.index == 1) {
						let data = {
							address_id: index,
						}
						Vue.http.options.emulateHTTP = true;
						Vue.http.options.emulateJSON = true;
						var token = localStorage.getItem('token');
						Vue.http.post(URL + '/deleteAddress', data, {
							headers: {
								Authorization: 'Bearer ' + token
							}
						}).then(function(response) {
							if(response.body.status == 1) {
								_this.nowfun()
							}
						}, function(err) {
							alert('网络异常!');
						});
					}
				});
			},
			createAddress: function() {
				let _this = this;
				_this.$router.push({
					path: '/add_address'
				})
			},
			goprev: function() {
				let _this = this
				_this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.ts_13 {}
</style>