module.exports = function() {
	return {
		data: {
			listData: [],
			isLoading: true,
			listTitle: 'todo'
		},
		cgiUrl: 'todo',
		onLoad: function() {
			this.loadData();
		},
		loadData: function(opt = {}) {
			wx.request({
				url: this.cgiUrl,
				success: ret => {
					setTimeout(() => { // 为了展示, 这里慢一点
						console.log(ret);
						ret.data = ret.data.splice(Math.random() * ret.data.length).concat(ret.data); // 乱序一下 以表现刷新
						this.setData({
							listData: ret.data,
							isLoading: false
						})
						wx.stopPullDownRefresh();
						wx.hideToast();
						opt.isRefresh && wx.showToast({
							title: '数据加载完毕',
							icon: 'success',
							duration: 1000
						})
					}, 1000);
				},
				fail: error => {
					console.error(error);
					wx.stopPullDownRefresh();
					wx.hideToast();
				}
			})
		},
		onPullDownRefresh: function() {
			this.loadData({
				isRefresh: true
			});
			wx.showToast({
				title: '数据加载中',
				icon: 'loading',
				duration: 10000
			});
		}
	}
}