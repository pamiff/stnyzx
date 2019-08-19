<template>
	<view>
		<view @click="HideAddBar">
			<store v-if="PageCur=='store'"></store>
			<square v-if="PageCur=='square'"></square>
			<news v-if="PageCur=='news'"></news>
			<my v-if="PageCur=='my'"></my>
		</view>
		<view>
			<add v-if="IsShowAdd"></add>
		</view>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="store">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/store' + [PageCur == 'store' && !IsShowAdd?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='store' && !IsShowAdd?'text-green':'text-gray'">商家</view>
			</view>
			<view class="action" @click="NavChange" data-cur="square">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/square' + [PageCur == 'square' && !IsShowAdd?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='square' && !IsShowAdd?'text-green':'text-gray'">广场</view>
			</view>
			<view class="action" @click="NavChange" data-cur="add">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/add' + [IsShowAdd?'_cur':''] + '.png'"></image>
				</view>
				<view :class="IsShowAdd?'text-green':'text-gray'">发布</view>
			</view>
			<view class="action" @click="NavChange" data-cur="news">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/news' + [PageCur == 'news' && !IsShowAdd?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='news' && !IsShowAdd?'text-green':'text-gray'">消息</view>
			</view>
			<view class="action" @click="NavChange" data-cur="my">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/my' + [PageCur == 'my' && !IsShowAdd?'_cur':''] + '.png'"></image>
				</view>
				<view :class="PageCur=='my' && !IsShowAdd?'text-green':'text-gray'">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		return {
				PageCur: 'square',
				IsShowAdd: false,
			}
		},
		methods: {
			NavChange: function(e) {
				if (e.currentTarget.dataset.cur === 'add') {
					this.IsShowAdd = !this.IsShowAdd
				} else{
					this.IsShowAdd = false
					this.PageCur = e.currentTarget.dataset.cur
				}
			},
			HideAddBar: function() {
				if(this.IsShowAdd) {
					this.IsShowAdd = !this.IsShowAdd
				}
			}
		}
	}
</script>

<style>

</style>
