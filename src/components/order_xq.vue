<template>
	<div id="app">
		<header class="mui-bar mui-bar-nav" style="box-shadow: none; border-bottom: 1px solid #e6e6e6; background: #FFFFFF;">
			<a @click="goprev()" class="mui-pull-left"><img class="img11" src="../../static/imgs/left_jt.png" /></a>
			<h1 class="mui-title">订单详情</h1>
		</header>
		<div class="mui-content">

				<!--订单商品-->
				<div class="b_w mar_t_10 pad_l_15 pad_r_10 pad_t_10 pad_b_10 txt_c2">
					<div class="ts_16 mar_b_5 ts_w_800">交易完成</div>
					<div class="ts_14 mar_t_10" style="display: flex;justify-content: space-between;">

						<div>总价:<span class="txt_c1 txt_c1_tatol">&nbsp;&nbsp;<!--¥{{list.price}}-->999999</span></div>
				</div>
				</div>
				<!--产品信息-->
				<div class="b_w mar_t_10 txt_c2 ts_14 pad_t_15">
					<div class="ts_16 pad_l_15 ts_w_800">产品信息</div>
					<div class="br4 mar_t_10"></div>
					<div class="row h_115">
						<div class="col mar_l_13 mar_r_15">
							<div class="row widths">
								<span>{{list.title}}</span>
								<span><img src="/public/imgs/new_img_01.png" style="width: 7px; height: 12px; padding-top: 2px;"></span>
							</div>
							<div class="row widths" style="display: flex;justify-content: flex-start;align-items: center;">
								<span class="ts_13 txt_c3" style="width: 80px;"> 出行日期</span>
								<span class="ts_13" style="margin-left: 20px;">{{list.start_time}}</span>
							</div>
							<div class="row widths" style="display: flex;justify-content: flex-start;align-items: center;">
								<span class="ts_13 txt_c3" style="width: 80px;"> 单价</span>
								<span class="ts_13" style="margin-left: 20px;"><i style="font-style: normal;color: #ff8800;">¥{{list.p_price}}</i>&nbsp;x&nbsp;{{list.num}}份</span>
							</div>
							<!--<div class="row widths" style="display: flex;justify-content: flex-start;align-items: center;">
							<span class="ts_13 txt_c3" style="width: 80px;"> 儿童票</span>
							<span class="ts_13" style="margin-left: 20px;"><!--{{item.childs}}</span>
						</div>-->

						</div>
					</div>

				</div>
					<!--收货地址-->
				<div class="b_w mar_t_10 pad_b_10 txt_c2">
					<div class="ts_16 pad_13 ts_w_800">联系人信息</div>
					<div class="br4"></div>
					<div class="ts_14 pad_13 pad_13_new"><span class="mar_l_13">姓名</span><span class="mar_l_13">{{list.name}}</span></div>
					<div class="ts_14 pad_13  pad_13_new"><span class="mar_l_13">电话</span><span class="mar_l_13">{{list.phone}}</span></div>
					<div class="ts_14 pad_13  pad_13_new"><span class="mar_l_13">留言</span><span class="mar_l_13">{{list.contents}}</span></div>
				</div>
			</div>	
	</div>	
</template>

<script>
	export default {
		data(){
			return{
				list:{
					title:"你好",
					start_time:'2018-05-14',
					p_price:'2988',
					num:1,
					name:'杨国定',
					phone:"15951813234",
					contents:"光谷软件园"
					
				}
			}
		}
	}
</script>

<style>
	.ts_16{
		text-align: left;
	}
</style>