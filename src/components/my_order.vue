<template>
	<div id="app">
		<header class="mui-bar mui-bar-nav b_w" style="box-shadow: none;">
			<a class="mui-action-back mui-pull-left"><img class="img11" src="../../static/imgs/img_76.png"></a>
			<h1 class="mui-title">我的订单</h1>
		</header>
		<div class="mui-content">
			<div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll" style="width: 100%; display: flex; justify-content: space-around;">
						<a class="mui-control-item" @click="tabchoose(1)" :class="(cur_page ==1)?'mui-active':'mui-control-item11'" href="#item1mobile">
							全部订单
						</a>
						<a class="mui-control-item" @click="tabchoose(2)" :class="(cur_page  == 2)?'mui-active':'mui-control-item11'" href="#item2mobile">
							待付款
						</a>
						<a class="mui-control-item" @click="tabchoose(3)" :class="(cur_page  ==3)?'mui-active':'mui-control-item11'" href="#item3mobile">
							进行中
						</a>
						<a class="mui-control-item" @click="tabchoose(4)" :class="(cur_page  == 4)?'mui-active':'mui-control-item11'" href="#item4mobile">
							已完成
						</a>

					</div>
				</div>
				<div class="my_order_new">
					<p v-if="p_show" class="show_p" style="padding: 15px 0px; color: #ff7403; background: #FFFFFF; margin-top: 10px;">对不起，暂无查询数据</p>

					<ul class="mui-table-view">

						<li v-for="item in list1">
							<p class="item_p1"><span class="item_span1">订单编号：{{item.order_id}}</span><span class="item_span2">{{item.pay_status}}</span></p>
							<p class="item_p2" @click="go_url(item)">
								<a href="#">
									<span class="item_span1"><img :src="item.thumb"></span>
									<span class="item_span2">
														<i class="item_i1" style=" display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2; overflow: hidden;">{{item.title}}</i>
														<i class="item_i2">出行日期{{item.start_time}}</i>
														<i class="item_i3">总价:<b>{{item.price}}</b></i>
													</span>
								</a>
							</p>
							<p class="item_p3">
								<a class="delete_order" @click="delete_order(item)" href="javascript:void(0)">
									取消订单
								</a>
								<a href="javascript:void(0)" class="zf_bth" @click="go_pay(item)">
									{{item.status}}
								</a>
							</p>
						</li>
						<li v-for="item in list2">
							<p class="item_p1"><span class="item_span1">订单编号：{{item.order_id}}</span><span class="item_span2">{{item.pay_status}}</span></p>
							<p class="item_p2" @click="go_url(item)">
								<a href="#">
									<span class="item_span1"><img :src="item.thumb"></span>
									<span class="item_span2">
														<i class="item_i1" style=" display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2; overflow: hidden;">{{item.title}}</i>
														<i class="item_i2">出行日期{{item.start_time}}</i>
														<i class="item_i3">总价:<b>{{item.price}}</b></i>
													</span>
								</a>
							</p>
							<p class="item_p3">
								<a class="delete_order" @click="delete_order(item)" href="javascript:void(0)">
									取消订单
								</a>
								<a href="javascript:void(0)" class="zf_bth" @click="go_pay(item)">
									{{item.status}}
								</a>
							</p>
						</li>

					</ul>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cur_page: sessionStorage.getItem("_this.pg"),
				nowstr: '2',
				list1: '',
				list2: '',
				list3: '',
				list4: '',
				list5: '',
				p_show: false

			}
		},
		mounted: function() {
			let _this = this
			_this.nowstr = sessionStorage.getItem("_this.pg");

			console.log(_this.nowstr)
			Vue.http.get(URLS + '/orderList' + '?type=' + _this.nowstr, {
				headers: {
					Authorization: 'Bearer ' + localStorage.getItem('token')
				}
			}).then(function(respones) {
				console.log("成功")
				//console.log(respones.body.data)
				//					console.log(respones.body.data)
				switch(_this.nowstr) {

					case '1':
						_this.list1 = respones.body.data
						console.log(_this.list1)
						for(var i = 0; i < _this.list1.length; i++) {
							if(_this.list1[i].status == 1) {
								_this.list1[i].status = "立即预购"
								_this.pay_zt = "未完成"
							} else {
								_this.list1[2].status = "重新预购"
								_this.pay_zt = "已完成"
							}
							if(_this.list1.length < 1) {
								_this.p_show = true
							}
						}
						break;
					case '2':
						_this.list1 = respones.body.data
						console.log(_this.list1)
						for(var i = 0; i < _this.list1.length; i++) {
							if(_this.list1[i].status == 1) {
								_this.list1[i].status = "立即预购"
								_this.pay_zt = "未完成"
							} else {
								_this.list1[2].status = "重新预购"
								_this.pay_zt = "已完成"
							}
						}
						break;
					case '3':

						_this.list1 = respones.body.data
						if(_this.list1.length < 1) {
							_this.p_show = true
						}

						break;
					case '4':

						_this.list1 = respones.body.data.order_refunds
						_this.list2 = respones.body.data.order_end
						console.log(respones)
						if(_this.list1.length < 1) {
							_this.p_show = true
						}
						if(_this.list2.length < 1) {
							_this.p_show = true
						}
						break;

				}

			}, function(err) {

			})

		},
		methods: {
			//删除订单
			delete_order: function(item) {
				let _this = this
				var now_order_id = item.id;
				let data = {
					id: now_order_id,
				}
				Vue.http.options.emulateHTTP = true;
				Vue.http.options.emulateJSON = true;
				Vue.http.post(URLS + '/order/delete', data, {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token')
					}
				}).then(function(response) {
					if(response.status == 200) {
						Vue.http.get(URLS + '/orderList' + '?type=' + 2, {
							headers: {
								Authorization: 'Bearer ' + localStorage.getItem('token')
							}
						}).then(function(respones) {

							_this.list1 = respones.body.data
							for(var i = 0; i < _this.list1.length; i++) {
								if(_this.list1[i].status == 1) {
									_this.list1[i].status = "立即预购"
									_this.pay_zt = "未完成"
								} else {
									_this.list1[2].status = "重新预购"
									_this.pay_zt = "已完成"
								}
							}

						}, function(err) {

						})

						return false;
					}
				}, function(err) {
					alert('操作失败!');
				});
			},
			//申请退款
			return_pay: function(item) {
				var _this = this;
				_this.back_order_id = item.id;
				var token = localStorage.getItem('token');
				Vue.http.put(URLS + '/order/refund', {
					id: _this.back_order_id
				}, {
					headers: {
						Authorization: 'Bearer ' + token
					}
				}).then(function(response) {

					if(response.status == 200) {
						mui.alert("申请退款成功")
						window.location.reload();
						return false;
					}
				}, function(err) {
					alert('操作失败!');
				});
			},
			tabchoose: function(n) {
				let _this = this
				_this.nowstr = n
				Vue.http.get(URLS + '/orderList' + '?type=' + _this.nowstr, {
					headers: {
						Authorization: 'Bearer ' + localStorage.getItem('token')
					}
				}).then(function(respones) {
					console.log("成功")
					//console.log(respones.body.data)
					//					console.log(respones.body.data)
					switch(_this.nowstr) {

						case 1:
							_this.list1 = respones.body.data
							console.log(_this.list1)
							for(var i = 0; i < _this.list1.length; i++) {
								if(_this.list1[i].status == 1) {
									_this.list1[i].status = "立即预购"
									_this.pay_zt = "未完成"
								} else {
									_this.list1[2].status = "重新预购"
									_this.pay_zt = "已完成"
								}
								if(_this.list1.length <= 0) {
									_this.p_show = true
								} else {
									_this.p_show = false
								}

							}
							break;
						case 2:
							_this.list1 = respones.body.data
							console.log(_this.list1)
							for(var i = 0; i < _this.list1.length; i++) {
								if(_this.list1[i].status == 1) {
									_this.list1[i].status = "立即预购"
									_this.pay_zt = "未完成"
								} else {
									_this.list1[i].status = "重新预购"
									_this.pay_zt = "已完成"
								}
								if(_this.list1.length <= 0) {
									_this.p_show = true
								} else {
									_this.p_show = false
								}

							}
							break;
						case 3:

							_this.list1 = respones.body.data
							if(_this.list1.length < 1) {
								_this.p_show = true
							} else {
								_this.p_show = false
							}

							break;
						case 4:

							_this.list1 = respones.body.data.order_refunds
							_this.list2 = respones.body.data.order_end
							console.log(respones)
							if(_this.list1.length < 1) {
								_this.p_show = true
							} else {
								_this.p_show = false
							}
							if(_this.list2.length < 1) {
								_this.p_show = true
							} else {
								_this.p_show = false
							}
							break;

					}

				}, function(err) {

				})

			}
		}
	}
</script>

<style>
	@import '../../static/css/new_style.css';
	/*引入公共样式*/
	
	html,
	body {
		background-color: #efeff4;
	}
	
	.mui-bar~.mui-content .mui-fullscreen {
		top: 44px;
		height: auto;
	}
	
	.mui-pull-top-tips {
		position: absolute;
		top: -20px;
		left: 50%;
		margin-left: -25px;
		width: 40px;
		height: 40px;
		border-radius: 100%;
		z-index: 1;
	}
	
	.mui-bar~.mui-pull-top-tips {
		top: 24px;
	}
	
	.mui-pull-top-wrapper {
		width: 42px;
		height: 42px;
		display: block;
		text-align: center;
		background-color: #efeff4;
		border: 1px solid #ddd;
		border-radius: 25px;
		background-clip: padding-box;
		box-shadow: 0 4px 10px #bbb;
		overflow: hidden;
	}
	
	.mui-pull-top-tips.mui-transitioning {
		-webkit-transition-duration: 200ms;
		transition-duration: 200ms;
	}
	
	.mui-pull-top-tips .mui-pull-loading {
		/*-webkit-backface-visibility: hidden;
				-webkit-transition-duration: 400ms;
				transition-duration: 400ms;*/
		margin: 0;
	}
	
	.mui-pull-top-wrapper .mui-icon,
	.mui-pull-top-wrapper .mui-spinner {
		margin-top: 7px;
	}
	
	.mui-pull-top-wrapper .mui-icon.mui-reverse {
		/*-webkit-transform: rotate(180deg) translateZ(0);*/
	}
	
	.mui-pull-bottom-tips {
		text-align: center;
		background-color: #efeff4;
		font-size: 15px;
		line-height: 40px;
		color: #777;
	}
	
	.mui-pull-top-canvas {
		overflow: hidden;
		background-color: #fafafa;
		border-radius: 40px;
		box-shadow: 0 4px 10px #bbb;
		width: 40px;
		height: 40px;
		margin: 0 auto;
	}
	
	.mui-pull-top-canvas canvas {
		width: 40px;
	}
	
	.mui-slider-indicator.mui-segmented-control {
		background-color: #efeff4;
	}
	
	.mui-scroll {
		margin-top: 0px;
	}
	
	.mui-slider-indicator.mui-segmented-control {
		background: #FFFFFF;
	}
	
	.mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
		color: #ff7403;
	}
	
	.mui-segmented-control.mui-scroll-wrapper {
		height: 40px;
	}
	
	.mui-segmented-control.mui-segmented-control-inverted .mui-control-item {
		border-bottom: 3px solid transparent;
	}
	
	.mui-slider .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
		border-bottom: 3px solid #ff7403;
	}
	
	.mui-segmented-control.mui-scroll-wrapper .mui-control-item {
		padding: 0 10px;
	}
	
	.item_i2 {
		text-align: left;
	}
	
	.item_i3 {
		text-align: left;
	}
</style>