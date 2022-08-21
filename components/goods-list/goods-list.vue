<template>
	<view class="goods_list">
		<view class="goods_item" v-for="goods in Hotgoods" :key="goods.id">
			<image :src="goods.img"></image>
			<view class="price">
				<text>￥{{goods.newprice}}</text>
				<text>￥{{goods.oldprice}}</text>
			</view>
			
			<view class="name">
				{{goods.name}}
			</view>																																
		</view>
	</view>
</template>

<script>
	export default{
		props: ['Hotgoods']
	}
</script>

<style lang="scss">
	.goods_list{
			padding: 0 15rpx;
			display: flex;
			flex-wrap: wrap;  //弹性盒子必要时换行
			justify-content: space-between;
			.goods_item{
				background: #fff;
				width: 355rpx;
				margin: 10rpx 0;  //设置所有外边距属性
				padding: 15rpx;   //设置所有内边距属性
				box-sizing: border-box; //元素的总高度和宽度包含内边距和边框(padding 与 border) :
				image{
					width: 80%;
					height: 150px;
					display: block;
					margin: 0 auto;
				}
				.price{
					color: $shop-color;
					font-size: 36rpx;
					text:nth-child(2){
						color: #ccc;
						font-size: 28rpx;
						margin-left: 17rpx;
						text-decoration: line-through;  //字体横线
					}
				}
				.name{
					font-size: 28rpx;
					line-height: 50rpx;
					padding-top: 10rpx;
				}
			}
		}
	
</style>