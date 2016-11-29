var app = getApp()
Page({
	data: {
		detailData: null,
		comments: [],
		isLoading: true
	},
	onLoad: function (opt) {
		this.loadData(opt);
	},
	loadData: function(opt) {
		wx.request({
			url: 'https://www.v2ex.com/api/topics/show.json',
			data: {
				id: opt.id
			},
			success: ret => {
				console.log(ret);
				this.setData({
					detailData: ret.data[0],
					isLoading: false
				})
			},
			fail: error => {
				console.error(error);
			}
		})

		wx.request({
			url: 'https://www.v2ex.com/api/replies/show.json',
			data: {
				topic_id: opt.id
			},
			success: ret => {
				console.log(ret);
				this.setData({
					comments: ret.data,
					isLoading: false
				})
			},
			fail: error => {
				console.error(error);
			}
		})

	}
})