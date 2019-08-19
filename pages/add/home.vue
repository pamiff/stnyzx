<template>
	<view class="tabbar-box-wrap">
		<view class="tabbar-box">
			<view class="tabbar-box-item" @click="goToPage('/pages/add/add')">
				<image class="box-image" src="../../static/addbar/youhuo.png" mode="aspectFit"></image>
				<text class="explain">我有货</text>
			</view>
			<view class="tabbar-box-item" @click="goToPage('/pages/add/add')">
				<image class="box-image" src="../../static/addbar/xiangmai.png" mode="aspectFit"></image>
				<text class="explain">我想买</text>
			</view>
			<view class="tabbar-box-item" @click="goToPage('/pages/add/add')">
				<image class="box-image" src="../../static/addbar/guansui.png" mode="aspectFit"></image>
				<text class="explain">灌灌水</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goToPage(url) {
				if (!url) return;
				uni.navigateTo({
					url
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.tabbar-box-wrap {
	position: absolute;
	width: 100%;
	padding: 50upx;
	box-sizing: border-box;
	bottom: calc(100upx + env(safe-area-inset-bottom) / 2);
	.tabbar-box {
		position: relative;
		display: flex;
		width: 100%;
		background: #fff;
		border-radius: 20upx;
		padding: 15upx 20upx;
		box-sizing: border-box;
		z-index: 2;
		box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
		&:after {
			content: '';
			position: absolute;
			bottom: -16upx;
			left: 0;
			right: 0;
			margin: auto;
			width: 50upx;
			height: 50upx;
			transform: rotate(45deg);
			background: #fff;
			z-index: 1;
			box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.1);
			border-radius: 2px;
		}
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #ffffff;
			border-radius: 20upx;
			z-index: 2;
		}
		.tabbar-box-item {
			// position: relative;
			width: 100%;
			z-index: 3;
			margin: 10upx;
			color: $uni-color-subtitle;
			text-align: center;
			font-size: $uni-font-size-base;
			.box-image {
				width: 100%;
				height: $uni-img-size-lg;
			}
		}
	}
}
</style>
