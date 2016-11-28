var app = getApp()
Page({
	data: {
		listData: [],
		isLoading: true
	},
	//事件处理函数
	bindViewTap: function() {

	},
	onLoad: function () {
		wx.request({
			url: 'https://www.v2ex.com/api/topics/hot.json',
			success: ret => {
				console.log("hotList: loaded", ret);
				this.setData({
					listData: ret.data,
					isLoading: false
				})
			},
			fail: error => {
				console.error(error);
			}
		})
	}
})