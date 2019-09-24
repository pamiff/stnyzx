<template>
	<scroll-view scroll-y class="scrollPage">


		<view class="UCenter-bg">
			<view v-if="isLogin">
				<view>
					<open-data class="cu-avatar xl " type="userAvatarUrl"></open-data>
				</view>
				<view>
					<open-data class="text-xl margin-bottom-xl" type="userNickName"></open-data>
				</view>
				<view>
					<view class="cuIcon-qr_code margin-bottom-xl"></view>
				</view>

			</view>
			{{token.id}}
			{{token.score}}
			<view v-if="!isLogin">
				<!-- <button class="cu-btn round bg-grey" open-type="getUserInfo" @getuserinfo="onLogin">未登录</button> -->
				<button class="cu-btn round bg-grey" @click="test">test</button>
			</view>
			<image src="https://image.weilanwl.com/gif/wave.gif" mode="scaleToFill" class="gif-wave"></image>
		</view>
		<view class="padding flex text-center text-grey bg-white shadow-warp">
			<view class="cu-item flex flex-sub flex-direction solid-right">
				<view class="text-orange cuIcon-post"></view>
				<view class="margin-top-sm">
					<text class=""></text> 推文</view>
			</view>
			<view class="flex flex-sub flex-direction solid-right">
				<view class="text-blue cuIcon-shopfill"></view>
				<view class="margin-top-sm">
					<text class=""></text> 店铺</view>
			</view>
			<view class="flex flex-sub flex-direction">
				<view class="text-green cuIcon-favorfill"></view>
				<view class="margin-top-sm">
					<text class=""></text> 收藏</view>
			</view>
		</view>

		<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg radius">

			<view class="cu-item arrow">
				<button class="cu-btn content" open-type="feedback">
					<text class="cuIcon-writefill text-cyan"></text>
					<text class="text-grey">意见反馈</text>
				</button>
			</view>
			<view class="cu-item arrow">
				<navigator class="content" url="/pages/about/test/list" hover-class="none">
					<text class="cuIcon-formfill text-orange"></text>
					<text class="text-grey">服务条款</text>
				</navigator>
			</view>
			<view class="cu-item arrow">
				<navigator class="content" url="/pages/about/log/log" hover-class="none">
					<text class="cuIcon-creativefill text-green"></text>
					<text class="text-grey">关于</text>
				</navigator>
			</view>
		</view>
		<view class="cu-tabbar-height"></view>
	</scroll-view>
</template>

<script>
	import gql from 'graphql-tag'
	export default {
		//name: "my",
		data() {
			return {
				isLogin: false,
				token: "11",
				
				test2query: gql => gql`query {getJwt(input: " test") { token } } `,
				test1query: gql`query {getJwt(input: " test") { token } } `,
			}
		},
		methods: {
			
			test: function() {
				// console.log(this.$apolloProvider)
				// this.$apolloProvider
				this.$apollo.mutate({
					mutation: gql`
						mutation($id: String!) {
							upvotePost(id: $id) @client {
								id,
								score
							}
						}
					`,
					variables: {
						id: "1",
					},
				})
			}
		},
		onReady() {
			let that = this
			// uni.checkSession({
			// 	success () {
			// 	    //session_key 未过期，并且在本生命周期一直有效
			// 		that.isLogin = true
			// 	  },
			// 	  fail () {
			// 	    // session_key 已经失效，需要重新执行登录流程
			// 	    wx.login()
			// 	  
			// )
			wx.login({
				success(res) {
					console.log(res)
				}
			})
			// this.$apollo.mutate({
			// 	// 查询语句
			// 	mutation: gql `mutation {
			// 		  newPost(input: {title: "1"})
			// 		}`,
			// 	// variables: {
			// 	//         post: {
			// 	// 	  title: "111",
			// 	//   },
			// 	//       },
			// 	update: (store, {
			// 		data
			// 	}) => {
			// 		console.log(store, data)
			// 	}
			// })
		},
		mounted() {
			// console.log(testquery)
			
		},
		// mounted () {
		//   const subQuery = gql`
		//   subscription {
		// 	  subMessage(id: "1") {
		// 		content
		// 	  }
		// 	}`
		// 
		//   const observer = this.$apollo.subscribe({
		//     query: subQuery,
		//     
		//   })
		// 
		//   observer.subscribe({
		//     next (data) {
		//       console.log(data)
		//     },
		//     error (error) {
		//       console.error(error)
		//     },
		//   })
		// },

		apollo: {
			// token: {
			// 	query: gql `
			// 			query {
			// 				getJwt(input:"code") {
			// 				 token
			// 				}
			// 			}
			// 			`,
			// 	update: data => data.getJwt.token
			// },
			// isLogin: {
			// 	query: gql `,
			// 		query {
			// 			isLogin
			// 		}
			// 	`,
			// 	update(data) {
			// 		console.log(data)
			// 	}
			// }
			token: {
				query: gql`,
					query($id: String!) {
						post(id: $id) @client {
							id,
							score
						}
					}
				`,
				variables: {
					id: "1",
				},
				// update(data){
				// 	console.log(data)
				// },
				update: data => data.post
			}
		},

	}
</script>

<style>
	.UCenter-bg {
		background-image: url(https://image.weilanwl.com/color2.0/index.jpg);
		background-size: cover;
		height: 550rpx;
		display: flex;
		justify-content: center;
		text-align: center;
		padding-top: 40rpx;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		align-items: center;
		color: #fff;
		font-weight: 300;
		text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	}

	.UCenter-bg text {
		opacity: 0.8;
	}

	.UCenter-bg image {
		width: 200rpx;
		height: 200rpx;
	}

	.UCenter-bg .gif-wave {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100rpx;
	}

	map,
	.mapBox {
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100rpx;
	}

	map,
	.mapBox {
		width: 750rpx;
		height: 300rpx;
	}
</style>
