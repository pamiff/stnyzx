<template >
	<view>
		<cu-custom :bgColor="MainColor" :isBack="false">
			<block slot="content">
				商家列表
			</block>
		</cu-custom>
		<view class="cu-bar bg-white search fixed" :style="[{top:CustomBar + 'px'}]">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="输入搜索的关键词" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="cu-btn bg-gradual-green shadow-blur round">搜索</button>
			</view>
		</view>
		<scroll-view scroll-y class="indexes" 
		 :scroll-with-animation="true" :enable-back-to-top="true">
			<view class="cu-list menu-avatar no-padding">
				<view class="cu-item" v-for="(item,index) in stores" :key="index">
					<view class="cu-avatar round lg">{{item.name}}</view>
					<view class="content">
						<view class="text-grey">{{item.name}}</view>
						<view class="text-gray text-sm">
							{{item.follow}}人关注
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		//name: "store",
		data() {
			return {
				MainColor: this.MainColor,
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				stores: [],
			}
		},
		onReady() {
			let stores = [{}]
			for (let i = 0; i < 26; i++) {
				stores[i] = {
					avatar: "",
					name: "test" + i,
					follow: i,
				}
			}
			this.stores = stores
		}
	}
</script>

<style scoped>
	
	.indexes {
		position: relative;
		padding-top: 100upx;
		/* padding-bottom: calc(100upx + env(safe-area-inset-bottom) / 2); */
	}
	
</style>
