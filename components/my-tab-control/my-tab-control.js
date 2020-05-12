// components/my-tab-control/my-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTapClick(event) {
      //获取事件参数
      var idx = event.currentTarget.dataset.idx;
      //修改当前选中索引值
      this.setData({
        currentIndex: idx
      })
      //通知外部触发点击事件{第一个参数是索引，第二个参数是标题名称}
      this.triggerEvent("changeTitle",{idx,title:this.data.titles[idx]});
    }
  }
})
