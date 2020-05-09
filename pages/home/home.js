// pages/home/home.js
Page({
  data: {
    name: 'raoqi',
    age: 33,
    students: [{
      id: 1,
      name: '小张',
      age: 18
    },
    {
      id: 2,
      name: '小王',
      age: 17
    },
    {
      id: 3,
      name: '小李',
      age: 16
    },
    {
      id: 4,
      name: '小陈',
      age: 19
    }
    ],
    counter: 0
  },
  handleBtnClick: function () {
    console.log('点击测试')
    //不能直接更新数据
    // this.data.counter++;
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})