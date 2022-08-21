<template>
	<view  class="home">
		<!-- 首页轮播图 indicator-dots显示指示点  -->
		<swiper indicator-dots circular autoplay="true" interval="3000" duration="500">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<tezt>{{item.title}}</tezt>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
		<goods-list :Hotgoods="Hotgoods"></goods-list>
		</view>	
		
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list'
	export default {
		data() {
			return {
				swipers: [],
				Hotgoods: [],
				navs: [
					{
					 icon:'iconfont  icon-format03',
					 title:'Home商城',
					 path:'/pages/goods/goods'
					 
					},
					{
					 icon:'iconfont icon-ambitus08',
					 title:'商城社区',
					 path:'/pages/community/community'
					 
					},
					{
					 icon:'iconfont icon-ambitus05',
					 title:'商城公告',
					 path:'/pages/notice/notice'
					 
					},
					{
					 icon:'iconfont icon-shop03',
					 title:'联系我们',
					 path:'/pages/contact/contact'
					 
					}
				]
			}
		},
		onLoad() {
			//页面渲染前发出轮播图请求
			this.getSwipers()
			
			//页面渲染前发出商品推荐请求
			this.getGoods()

		},
		components:{
			"goods-list":goodsList
		},
		methods: {
			//获取轮播图数据
			async getSwipers(){
				const res = await this.$myRequest({
					url:'/home/getlunbo'
				})
				//注意这里要使用res.data.data才能拿到后端数据，之前是res.data.message
			    this.swipers = res.data.data
		
			},
			//获取热门商品列表数据
			async getGoods(){
				const res = await this.$myRequest({
					url:'/goods/getHotGoods'
				})
				this.Hotgoods =res.data.data
			},
			//导航点击处理函数
			navItemClick(url){
				uni.navigateTo({
					// url:url
					url
				})
			}

		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx; //750rpx占据一整屏
			height: 380rpx;
			image{
				height: 100%;
				width: 100%;
				
			}
		}
		.nav{
			display: flex;
			.nav_item{
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background: #b50e03;
					border-radius: 60rpx;
					margin: 10px auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}
				.iconfont{
					font-size: 60rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		.hot_goods{
			background: #eee;
			overflow: hidden;
			margin-top: 10px;
			.tit{
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background: #fff;
				margin: 7rpx 0;
			}
			
		}
	}
	

</style>
