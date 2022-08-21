<template>
	<view class="contact">
		<image class="img" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fseopic.699pic.com%2Fphoto%2F50062%2F0334.jpg_wh1200.jpg&refer=http%3A%2F%2Fseopic.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661913490&t=4d3f693b4b8c9b3497151c4e4d2bbfaf"></image>
		<view class="info">
			<view @click="callphone">联系电话: 18146745145 ( 点击拨打 )</view>
			<view>公司地址: 江西省宜春市丰城市孙渡街道梦祥路466号</view>
		</view>
		<!-- 地图 设置经纬度来定位 通过腾讯地图开发平台的坐标拾取器获取 -->
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 115.76553,
				latitude: 28.153189,
				markers:[  //地图定位
					{
					  longitude: 115.76553,
					  latitude: 28.153189,
					  iconPath: '../../static//map/mark.png',
					  width:50,
					  height:50
					}
				]
			}
		},
		methods: {
			callphone(){
				uni.makePhoneCall({
					phoneNumber: '18146745145'
					
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map{
			width: 750rpx;
			height: 600rpx;
		}
		
	}

</style>
