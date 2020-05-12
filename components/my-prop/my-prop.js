// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //简易属性定义
    title: String,
    //标准属性定义
    content: {
      type: String,
      value: '我是默认的内容',
      observer: function (newVal, oldVal) {
        // 监听新值和旧值
        console.log(newVal, oldVal);
      }
    }
  },
  //组件样式列表，可以通过此样式属性将页面的样式传递到组件内
  externalClasses:["titleclass"]
})
