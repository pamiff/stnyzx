<template>
	<view class="">
		add
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

<style lang="scss">

</style>
