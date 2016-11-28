var app = getApp()
Page({
	data: {
		hotData: [],
	},
	//事件处理函数
	bindViewTap: function() {

	},
	onLoad: function () {
		console.log("index onLoad");

		wx.request({
			url: 'https://www.v2ex.com/api/topics/latest.json',
			success: ret => {
				console.log(ret)
				this.setData({
					hotData: ret.data
				})
			},
			fail: error => {
				console.error(error);
			}
		})
	}
})

