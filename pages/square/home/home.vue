<template>
	<view>
		<cu-custom :bgColor="MainColor">
			<block slot="content">交流广场</block>
		</cu-custom>
		<scroll-view scroll-y  :scroll-with-animation="true" 
		 :enable-back-to-top="true">
			<view class="cu-bar bg-white search ">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="输入搜索的关键词" confirm-type="search"></input>
				</view>
				<view class="action">
					<button class="cu-btn bg-gradual-green shadow-blur round">搜索</button>
				</view>
			</view>
			<swiper class="screen-swiper square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
			 duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</swiper-item>
			</swiper>
			<uni-notice-bar show-icon="true" scrollable="true" single="true" text="[单行] 这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏">
			</uni-notice-bar>

			
				<scroll-view scroll-x class="nav text-center switchbar" :class="SecondColor">
					<view class="cu-item" :class="0==TabCur?'text-white cur':''" @tap="tabSelect" data-id="0">
						<text class="cuIcon-goodsnewfill"></text> 出货
					</view>
					<view class="cu-item" :class="1==TabCur?'text-white cur':''" @tap="tabSelect" data-id="1">
						<text class="cuIcon-moneybagfill"></text> 求购
					</view>
					<view class="cu-item" :class="2==TabCur?'text-white cur':''" @tap="tabSelect" data-id="2">
						<text class="cuIcon-communityfill"></text> 闲聊
					</view>
				</scroll-view>

				<view class="postlist">
					<view v-if="TabCur == '0'">
						<view class="cu-card case" v-for="(post, index) in postList" :key="index">
							<view class="cu-item shadow">
								<view class="image">
									<image :src="post.coverImg" mode="widthFix"></image>
									<view class="cu-tag bg-blue">史诗</view>
									<view class="cu-bar bg-shadeBottom"> <text class="text-cut">{{post.title}}</text></view>
								</view>
								<view class="cu-list menu-avatar">
									<view class="cu-item">
										<view class="cu-avatar round lg" :style="[{backgroundImage: 'url(' + post.avatar + ')'}]"></view>
										<view class="content flex-sub">
											<view class="text-grey">{{post.userName}}</view>
											<view class="text-gray text-sm flex justify-between">
												{{post.postTime}}
												<view class="text-gray text-sm">
													<text class="cuIcon-attentionfill margin-lr-xs"></text> {{post.viewCount}}
													<text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
													<text class="cuIcon-messagefill margin-lr-xs"></text> 30
												</view>
											</view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			
			
		</scroll-view>




	</view>
</template>

<script>
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue"
	export default {
		//name: "square",
		components: {
			uniNoticeBar
		},
		data() {
			return {
				CustomBar: this.CustomBar,
				MainColor: this.MainColor,
				SecondColor: this.SecondColor,
				TabCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}],
				postList: [],
			}
		},
		onReady() {
			this.postList = [{
					coverImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					title: "我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。",
					avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					userName: "正义天使 凯尔",
					postTime: "2019-08-20 16:00",
					viewCount: 10
				},
				{
					coverImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					title: "我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。",
					avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					userName: "正义天使 凯尔",
					postTime: "2019-08-20 16:00",
					viewCount: 10
				},
				{
					coverImg: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					title: "我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。",
					avatar: "https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
					userName: "正义天使 凯尔",
					postTime: "2019-08-20 16:00",
					viewCount: 10
				},
			]
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id
			}
		}
	}
</script>

<style>
	.switchbar {
		position: sticky;
		top: 0;
		z-index: 10;
	}

	.postlist {
		z-index: 5;
	}
</style>
