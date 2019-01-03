//index.js
//获取应用实例
const app = getApp();
const util = require('../../utils/util.js');
const { $Toast } = require('../../dist/base/index');
var pageNo=1;
Page({
  data: {
    current: 0,//当前所在滑块的 index
    scrollLeft: 0,//滚动条的位置,一个选项卡宽度是90（自定义来自css），按比例90*n设置位置
    navlist: ["全部", "Java", "Linux", "前端","数据库"],
    imgUrls: [
      '/images/2018110710340560.png',
      'https://www.qinxuewu.club/upload/2018/11/QQ%E5%9B%BE%E7%89%872018122509265120181225092717370.png',
      '/images/2018110522432692.png'
    ],
    content:[],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 5000,     //自动切换时间间隔
    duration: 1000,      //滑动动画时长
    tip:"",
    loading:false
  },
  onSearch: function (event){
   // 搜索事件  点击完成按钮时触发，event.detail = {value: value}
    console.log(event.detail);
    $Toast({ content: '开发中..', type: 'warning' });
  },
  onLoad: function () {
     //加载  
    var that = this;
    this.getIndexList();
    this.getCategories();
  },
   /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    this.data.content=[];
    pageNo = 1;
    this.getIndexList();
  
    setTimeout(function () {
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        //停止当前页面下拉刷新。
        wx.stopPullDownRefresh()
      }, 1500)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
     var that=this;
    console.log(' 页面上拉触底事件的处理函数');
    ++pageNo;
    console.log(pageNo);
    this.getIndexList();
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '印象文档',
      path: '/pages/index/index'
    }
  },
  details(e) {
    //详情页跳转
    console.log(e.currentTarget.id)
    wx.navigateTo({
      url: '../details/details?id=' +e.currentTarget.id
    })
 
  }, //tab切换
  tab: function (event) {
    var cateUrl = this.data.navlist[event.target.dataset.current].cateUrl;
    this.setData({ current: event.target.dataset.current })
    // //锚点处理
    // this.setData({ scrollLeft: event.target.dataset.current * 90 })
    if(cateUrl!='全部'){
      wx.navigateTo({
        url: '../list/list?cateUrl=' + cateUrl
      })
    }
  },
   getCategories:function(){
      //获取分类
     var that=this;
     wx.request({
       url: util.basePath + '/api/categories', 
       data: {},
       header: {
         'content-type': 'application/json'
       },
       success(res) {
         setTimeout(() => {$Toast.hide();}, 1000);
         if(res.statusCode==200){
            if(res.data.code==200){
               that.setData({ navlist: res.data.result })
            }         
         }
          
       }
     })
  },
  getIndexList:function(){
    var that = this;
    that.setData({ loading: true, tip: "正在加载" })
    //获取文章列表
    var that = this;
    wx.request({
      url: util.basePath + '/api/posts/page/'+ pageNo,
      data: {},
      dataType:'json',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.statusCode == 200) {
          if (typeof res.data != 'object') {
            var jsonStr = res.data.replace('\n', '');//重点
              var jj = JSON.parse(jsonStr);
              res.data = jj;
          }

          if (res.data.code == 200 && res.data.result.content != null) {
              console.log('接口返回数据加载数据');
              console.log(res.data.result);
              that.setData({ 
                // 分页追加数据
                'content': that.data.content.concat(res.data.result.content)
               });
             
          }

          if (res.data.result.last == true) {
            setTimeout(function () {
              that.setData({ loading: false, tip: "没有数据了" })
            }, 1000);
          }
          
        } else {
           $Toast({ content: '请求错误', type: 'error' });
        }

      }
    })
  }
})
