// pages/image/image.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  // 选择图片
  handleChooseAlbum()
  {
    // 系统api，选择相册或者拍照
    wx.chooseImage({
      complete: (res) => {
        //测试获取的图片对象
        console.log(res);
        //设置图片路径
        this.setData({
          imagePath:res.tempFilePaths[0]
        })
      },
    })
  },
  handleImageLoad()
  {
    console.log('图片加载完成');
  }
})