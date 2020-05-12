// pages/event/event.js
Page({
  handletouchstart() { console.log("handletouchstart"); },
  handletouchmove() { console.log("handletouchmove"); },
  handletouchend() { console.log("handletouchend"); },
  handletap() { console.log("handletap"); },
  handlelongpress() { console.log("handlelongpress"); },

  handleEventClick(event) {
    console.log(event);
  },

  data: {
    list: ["A", "B", "C"]
  },
  handleItemClick(event) {
    console.log(event)
    // 获取data-传递过来的参数
    console.log(event.currentTarget.dataset.index);
    console.log(event.currentTarget.dataset.item);
  },

  // 冒泡方法
  handleTap1() { console.log("outerbindTap1"); },
  handleTap2() { console.log("middlebindTap2"); },
  handleTap3() { console.log("innerbindTap3"); },
  // 捕获方法
  captureTap1() { console.log("outercaptureTap1"); },
  captureTap2() { console.log("middlecaptureTap2"); },
  captureTap3() { console.log("innercaptureTap3"); }




})

