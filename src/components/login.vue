<template>
	<div id="login">
		<!--标题-->
		<header class="mui-bar mui-bar-nav" style="box-shadow: none; border-bottom: 1px solid #e6e6e6; background: #FFFFFF;">
			<a @click="goprev()" class="mui-pull-left"><img class="img11" src="../../static/imgs/left_jt.png" /></a>
			<h1 class="mui-title">登录</h1>
		</header>
		<div class="col1 ts_16 mar_t_60 txt_c2" id="login">
			<div class="row5 margin_t_15 widths">
				<span id="rd1" class="login_rd" v-on:click="loginseen1" v-bind:class="{ login_rd_action: isActive, 'mar_t_-2': noActive }">账号登录</span>
				<span id="rd2" class="login_rd" v-on:click="loginseen2" v-bind:class="{ login_rd_action: noActive, 'mar_t_-2': isActive }">手机验证码登录</span>
			</div>
			<!--账号登录-->
			<div class="widths col h_118" v-if="isActive">
				<div class="login_hr mar_t_-5"></div>
				<div class="row mar_t_-5 widths">
					<span class="w_80 fshr mar_t_-2">账号</span>
					<input style="border: 0; background-color: transparent; margin-top: 15px;" v-model="phone"
						 type="number" placeholder="手机号" oninput="if(value.length>11)value=value.slice(0,11)"/>
				</div>
				<div class="login_hr mar_t_-9"></div>
				<div class="row mar_t_-5 widths">     
					<span class="w_80 fshr mar_t_-2">密码</span>        
					<input style="border: 0; background-color: transparent; margin-top: 15px;" v-model="password"
						 type="password" placeholder="请输入密码" oninput="if(value.length>11)value=value.slice(0,11)"/>
				</div>
				<div class="login_hr mar_t_-9"></div>
			</div>
			<!--手机登录-->
			<div class="widths col h_118" v-else> 
				<div class="login_hr mar_t_-5"></div>
				<div class="row mar_t_-5 widths">
					<span class="w_80 fshr mar_t_-2">手机号</span>
					<input style="border: 0; background-color: transparent; margin-top: 15px;" v-model="phone"
						 type="number" placeholder="手机号" oninput="if(value.length>11)value=value.slice(0,11)"/>
				</div>
				<div class="login_hr mar_t_-9"></div>
				<div class="row mar_t_-5 widths">   
					<span class="w_80 fshr mar_t_-2">验证码</span>
					<input style="border: 0; background-color: transparent; flex-grow: 1; margin-top: 15px;" v-model="code"
						 type="number" placeholder="验证码" oninput="if(value.length>5)value=value.slice(0,5)"/>
						 
					<span class="txt_c4 login_txt" style="margin-bottom: 1px;">|</span>
					<span class="w_110 txt_c4 fshr" v-on:click="sendsmscode">{{btnSms}}&nbsp;&nbsp;</span>
				</div>
				<div class="login_hr mar_t_-9"></div>
			</div>
			<span v-on:click="login" class="but_bac txt_cw width_90 mar_t_30" style="margin-top: 20px;">登录</span>
			<span v-on:click="register" class="login_but2 width_90 mar_t_20">注册</span>
		</div>	
		
	</div>
</template>

<script>
//	check_login();
//	function check_login() {
//		
//  }
	
	export default{
		data(){
			return{
				isActive:true,
				noActive:false,
				phone:'',
				password:'',
				btnSms:'发送验证码',
				code:'',
				login_type:1,
				onSms:true
				
			}
		},
		mounted:function(){
		
		},
		methods:{
			loginseen1:function(){
			this.isActive=true
			this.noActive=false
			this.login_type = 1
				
			},
			loginseen2:function(){
			this.isActive=false
			this.noActive=true
			this.login_type = 2
			},
			timer:function(){
				if(this.time>0){
					this.btnSms = this.time+'s后获取';
					this.time--;
					this.onSms = false;
					var timer = setTimeout(this.timer,1000);
				}else if(this.time==0){
					this.btnSms = '获取验证码';
					clearTimeout(timer);
					this.onSms = true;
				}
			},
			sendsmscode:function(){
				let _this = this;
				
				if(!_this.onSms){
					return;
				}
				var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;

				if(!reg.test(this.phone)){
					mui.toast('请输入正确的手机号');
					return;
				};
				let data = {
					phone:_this.phone,
					type:1
				}
				sessionStorage.phone = this.phone;
				Vue.http.options.emulateJSON = true;
				Vue.http.post(URL+'/sendSms',data).then(function(response){
					console.log(response)
					if(response.status === 200){
						
						if(response.body.status === 1){
							_this.isshow=false
							_this.time = 60;
							_this.timer();
							mui.toast(response.body.msg);
							return;
						}
						if(response.body.status === 0){
							
							mui.confirm(response.body.msg,'提示',['取消','立即注册'],function(e){
								if (e.index == 1) {
									login.register();
								}
							});
							return;
						}
					}
				}, function(err){
					mui.toast('网络不可用，请检查网络');
				});
				
			},
			login:function(){
				var _this=this;
				var reg = /^1[3|4|5|7|8][0-9]\d{4,8}$/;
				var reg1= /^[\w]{6,12}$/
				if(!reg.test(this.phone)){
					mui.toast("请输入正确电话号码")
					return false;
				}
				if(!reg1.test(this.password)){
					mui.toast("请输入6-12位，只能是字母、数字和下划线的正确密码")
					return false;
				}
				let data = {
					phone:this.phone,
					password:this.password,
					login_type:this.login_type
				}
				Vue.http.options.emulateJSON = true;
				Vue.http.post(URL+'/login',data).then(function(response){
					console.log(response)
					if(response.status === 200){
						if(response.body.status === 0){
							mui.toast(response.body.msg);
							mui.hideLoading();
							return;
						}
					}
					if(response.status === 201){
						localStorage.token = response.body.data.token;//token
						localStorage.expired_at = response.body.data.expired_at;//过期时间
						localStorage.refresh_expired_at = response.body.data.refresh_expired_at;//刷新时间
						localStorage.userstatus = true;
						
						_this.$router.push({path:'/'})
						//window.location.href = "/user/index.html";
					}
				}, function(err){
					mui.hideLoading();
					mui.toast('网络不可用，请检查网络');
				});
			},
			register:function(){
				
			},
			goprev:function(){
				var _this=this;
				_this.$router.go(-1)
			}
		}
	}
</script>

<style>
</style>