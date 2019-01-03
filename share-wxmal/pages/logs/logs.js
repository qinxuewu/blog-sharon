//logs.js
const app = getApp();
const util = require('../../utils/util.js');
const { $Toast } = require('../../dist/base/index');
Page({
  data: {
    tip: "",
    loading: false,
    result:[]
  },
  onLoad: function (options) {
    this.getCategories();
  },

  onPullDownRefresh: function () {
 
    this.data.result=[];
    this.getCategories();
    wx.stopPullDownRefresh();
  },
  onShareAppMessage: function (res) {
    return {
      title: '印象文档',
      path: '/pages/index'
    }
  },
  getCategories: function () {
    $Toast({ content: '加载中',type: 'loading', duration	:0});
    //获取分类
    var that = this;
    wx.request({
      url: util.basePath + '/api/categories',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        setTimeout(() => { $Toast.hide(); }, 1000);
        if (res.statusCode == 200) {
          console.log(res.data);
           if (res.data.code == 200) {
             that.setData({ result: res.data.result })
           }
        }else{
          $Toast({content: '请求异常', type: 'error' });
        }

      }
    })
  },
})