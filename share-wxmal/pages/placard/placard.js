Page({
  data: {
    showhaibao:false,//隐藏显示
    maskHidden: true,//隐藏显示
  },
  onLoad: function (options) {
    // 此处获取设备的宽高。canvas绘制的图片以次宽高为准
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        _this.setData({
          windowW: res.windowWidth,
          windowH: res.screenHeight,

        })
      },
    })

    // wx.downloadFile({
    //     url: 网络图片地址必须要在小程序中配备合法域名,
    //     success: function (res1) {
    //         console.log(res1.tempFilePath)
    //         //缓存商品图片
    //         _this.setData({
    //             img1: res2.tempFilePath
    //         })
    //     }
    // })
    // wx.downloadFile({
    //     url: 网络图片地址必须要在小程序中配备合法域名,
    //     success: function (res1) {
    //         console.log(res1.tempFilePath)
    //         //缓存二维码图片
    //         _this.setData({
    //             img2: res2.tempFilePath
    //         })
    //     }
    // })
  },
  onReady: function () {
    // 页面渲染完成
    this.createNewImg();
    //创建初始化图片

  },

  //将金额绘制到canvas的固定
  setMoney: function (context) {
    var money = '￥29.9'
    context.setFontSize(24);
    context.setFillStyle("red");
    context.fillText(money, 40, 360);
    context.stroke();
  },
  //将说明绘制到canvas固定
  setSuoming: function (context) {
    var Suoming = "长按识别小程序码访问"
    context.setFontSize(18);
    context.setFillStyle("#484a3d");
    context.fillText(Suoming, 15, 460);
    context.stroke();
  },
  //将说明2绘制到canvas固定
  setSuoming1: function (context) {
    var Suoming = "子谦出品"
    context.setFontSize(18);
    context.setFillStyle("#484a3d");
    context.fillText(Suoming, 50, 510);
    context.stroke();
  },

  //将标题绘制到canvas的固定
  setName: function (context) {
    var name = "ONLY2018夏季新款蕾丝短袖连衣裙"
    context.setFontSize(15);
    context.setFillStyle("#67695b");
    context.fillText(name, 40, 320);
    context.stroke();
  },
  //将canvas转换为图片保存到本地，然后将图片路径传给image图片的src
  createNewImg: function () {
    var _this = this;
    var context = wx.createCanvasContext("mycanvas");
    context.setFillStyle('#FFF')
    console.log(this.data.windowW, this.data.windowH)
    context.fillRect(0, 0, this.data.windowW, this.data.windowH)
    var path = "/images/qrcode.jpg";  //详细看onLoad函数注释部分
    context.drawImage(path, 30, 20, 300, 250);  //这里是商品图片
    this.setSuoming(context);
    this.setName(context);
    this.setMoney(context);
    this.setSuoming1(context);
    context.drawImage(path, 205, 430, 150, 150);//这里是二维码图片
    context.draw(_this.getImg())

  },
  //将生成好的图片保存到本地  下面这句注释是文档中的原话。
  // tip: 在 draw 回调里调用canvasToTempFilePath方法才能保证图片导出成功。
  getImg() {
    var _this = this;
    wx.canvasToTempFilePath({
      canvasId: 'mycanvas',
      success: function success(res) {
        console.log(res.tempFilePath);
        _this.setData({
          imagePath: res.tempFilePath,
        });
      }
    });
  },
  //点击图片进行预览，长按保存分享图片
  previewImg: function (e) {
    var img = this.data.imagePath
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: [img] // 需要预览的图片http链接列表
    })
  },
  gotoSubmit: function (e) {
    var _this = this
    this.setData({
      maskHidden: false,
      showhaibao: true
    })
    wx.showToast({
      title: '图片生成中...',
      icon: 'loading',
      duration: 2000
    });
    setTimeout(function () {
      wx.hideToast()
      _this.createNewImg();
    }, 2000)

  }

})
