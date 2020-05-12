// pages/mycomponent/mycomponent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },
  //+1方法
  handleIncrement(event) {
    //获取组件传过来的参数
    console.log(event.detail);      
    this.setData({
      counter: this.data.counter + 1
    })
  }
})