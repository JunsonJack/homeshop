<template>
	<view class="goods_list">
		<!-- 搜索 -->
		<view class="select">
			<view class="input-select">
				<!-- 搜索图标 -->
				<input class="uni-input" type="text" focus placeholder="点击输入搜索内容" v-model="name" @input="input"/>	
				<!-- <button class="btn" @click="querygoods">搜索</button> -->
			</view>
			
		</view>
		<!-- 商品展示 -->
		<goods-list :Hotgoods="Hotgoods"></goods-list>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				Hotgoods:[],
				name:'',
				timer:null
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		methods: {
			//获取商品列表数据
			async getGoodsList(){
				const res = await this.$myRequest({
					url:'/goods/getHotGoods'
				})
				this.Hotgoods = res.data.data
			},
			input(e){
				//搜索函数防抖
				clearTimeout(this.timer)
				this.timer = setTimeout(()=>{
					this.querygoods()			
          // 如果500毫秒内,没有触发新的输入事件,则为搜索关键词赋值
				},500)
			},
			async querygoods(){
				console.log("@@"+this.name)
				//使用？传参，后台不需要用{}接收
				let name = this.name
				const res = await this.$myRequest({
					url:'/goods/queryByname',
					data:{name}
					
				})
				this.Hotgoods = res.data.data
			}
			
		},
		components:{
			"goods-list":goodsList
		}
	}
</script>

<style lang="scss">
	.goods_list{
		background: #eee;
		.select{
			background: #b50e03;
			height: 85rpx;
			padding: 45rpx;
			.input-select{
		
				.uni-input{
					//display: inline-block;//重点就是这一句		
					background-repeat: no-repeat;
					background-image: url('~@/static/search/search.png');
					border-radius: 25px;
					background: white;
					height: 60rpx;
					width: 100%;
					
				}
				.btn{
					display: inline-block;//重点就是这一句

					color: white;
					background: #e85f19;
					border-radius: 25px;
					height: 60rpx;
					line-height: 60rpx;
					width: 150rpx;
					float: right;
				}
			}
			
		}
	
	}


</style>
