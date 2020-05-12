// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: ''
  },
  handleChangeTitle(event) {
    const title = event.detail.title;
    this.setData({
      title: title
    });
  },
  handleIncrementCPN() {
    // 可以通过Class或ID两种方式获取到组件对象（推荐使用ID）
    const cpn = this.selectComponent('#msc');
    console.log(cpn);

    //虽然可以直接通过setData修改组件数据，但是并不推荐这样做
    // cpn.setData({
    //   counter: cpn.data.counter + 1
    // })

    //通常我们通过组件内暴露出来的方法来修改数据，这样比较合理
    cpn.AddCounter(3);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})