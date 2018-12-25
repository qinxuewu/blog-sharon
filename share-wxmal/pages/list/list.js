// pages/list/list.js
const app = getApp();
const util = require('../../utils/util.js');
const { $Toast } = require('../../dist/base/index');
var pageNo = 1;
var cateUrl='';
Page({
  data: {
    tip: "",
    loading: false,
    content: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    cateUrl = options.cateUrl;
    console.log(cateUrl)
    wx.setNavigationBarTitle({
      title: options.cateUrl
    })

    //加载  
    var that = this;
    this.getIndexList();
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
    var that = this;
    that.setData({ loading: true, tip: "正在加载" })
    setTimeout(function () {
      that.setData({ loading: false, tip: "没有更多数据" })
    }, 1000);
  },
  /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
  onPullDownRefresh: function () {
    wx.showLoading({ title: '刷新中', });
    //用户下拉刷新
    this.data.content = [];
    console.log('下拉刷新清空数据');
    console.log(this.data.content)
     this.getIndexList();
    //停止当前页面下拉刷新。
    wx.stopPullDownRefresh()
    setTimeout(function () {
      wx.hideLoading()
    }, 1500)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '印象文档',
      path: '/pages/index/index'
    }
  }, 
  getIndexList: function () {
    var that = this;
    that.setData({ loading: true, tip: "正在加载" })
    console.log(pageNo);
    console.log(this.data.content);
    //获取分类文章列表
    var that = this;
    wx.request({
      url: util.basePath + '/api/categories/' + cateUrl+'/page/' + pageNo,
      data: {},
      dataType: 'json',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log('获取分类文章列表')
        if (res.statusCode == 200) {
          console.log(res.data);
          if (typeof res.data != 'object') {
            console.log('11111')
            var jsonStr = res.data.replace('\n', '');//重点
            var jj = JSON.parse(jsonStr);
            res.data = jj;
          } else {
            console.log('22222');
          }

          if (res.data.code == 200 && res.data.result.content!=null) {
            console.log('接口返回数据加载数据');
            console.log(res.data.result);

              that.setData({
                // 分页追加数据
                'content': that.data.content.concat(res.data.result.content)
              });
            if (res.data.result.last==true){
                    setTimeout(function () {
                      that.setData({ loading: false, tip: "没有数据了" })
                    }, 1000);
            }

          } 

        } else {
          $Toast({ content: '请求错误', type: 'error' });
        }

      }
    })
  }
})