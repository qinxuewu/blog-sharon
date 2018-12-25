const util = require('../../utils/util.js');
const { $Toast } = require('../../dist/base/index');
var id=1;
Page({
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    id=options.id;
    console.log('id='+id);
    console.log('options.id=' + options.id)
    console.log(options.id);
    that.getDetails(id);
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
      path: '/pages/details/details?id='+id
    }
  },
  wxmlTagATap(e) {
    console.log(e);
  },
  onPullDownRefresh() {
    this.onLoad();
  },
  getDetails:function(id){
    wx.request({
      url: util.basePath + '/api/posts/'+id,
      success: res => {
        console.log(res);
        if(res.data.code==200){
            wx.stopPullDownRefresh();
          this.setData({ 
            postTitle: res.data.result.postTitle, 
            postViews: res.data.result.postViews,
            postContentMd: res.data.result.postContentMd,
            postDate: util.getDateDiff(res.data.result.postDate )             
            });
        }else{
            $Toast({ content: '请求错误', type: 'error' });
        }
      }
    })
  }
})