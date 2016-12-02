Page({
	data: {
		animationData: {}
	},
	onShow: function() {
		var animation = wx.createAnimation({
			duration: 5000,
			timingFunction: 'ease',
		})

		this.animation = animation

		animation.scale(10, 10).rotate(45).step()

		this.setData({
			animationData: animation.export()
		})

		setTimeout(function() {
			animation.translate(30).step()
			this.setData({
				animationData: animation.export()
			})
		}.bind(this), 5000)
	}
})