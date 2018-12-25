const basePath = 'https://www.qinxuewu.club';

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 封封微信的的request
 */
function request(url, data = {}, method = "POST", header = "application/x-www-form-urlencoded") {
  wx.showLoading({
    title: '加载中...',
  });
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Content-Type': header,
        'X-Nideshop-Token': wx.getStorageSync('token'),
      },
      success: function (res) {
        wx.hideLoading();
        if (res.statusCode == 200) {

          if (res.data.errno == 401) {
            wx.navigateTo({
              url: '/pages/auth/btnAuth/btnAuth',
            })
          } else {
            resolve(res.data);
          }
        } else {
          reject(res.errMsg);
        }

      },
      fail: function (err) {
        reject(err)
      }
    })
  });
}


// 时间戳转换成刚刚、几分钟前、几小时前、几天前

//刚刚
var just = new Date().getTime();

//几分钟前
var afewminutesago = new Date("Nov 29, 2016 00:50:00").getTime();

//几周前
var afewweekago = new Date("Nov 29, 2016 00:50:00").getTime();

//几年前
var someday = new Date("Nov 21, 2012 01:15:00").getTime();

var helloData = {
  time: afewweekago
}

function getDateDiff(date) {
  date = date.substring(0, 19);
  date = date.replace(/-/g, '/');
  var dateTimeStamp = new Date(date).getTime();

  var result;
  var minute = 1000 * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var halfamonth = day * 15;
  var month = day * 30;
  var now = new Date().getTime();
  var diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return;
  }
  var monthC = diffValue / month;
  var weekC = diffValue / (7 * day);
  var dayC = diffValue / day;
  var hourC = diffValue / hour;
  var minC = diffValue / minute;
  if (monthC >= 1) {
    if (monthC <= 12)
      result = "" + parseInt(monthC) + "月前";
    else {
      result = "" + parseInt(monthC / 12) + "年前";
    }
  }
  else if (weekC >= 1) {
    result = "" + parseInt(weekC) + "周前";
  }
  else if (dayC >= 1) {
    result = "" + parseInt(dayC) + "天前";
  }
  else if (hourC >= 1) {
    result = "" + parseInt(hourC) + "小时前";
  }
  else if (minC >= 1) {
    result = "" + parseInt(minC) + "分钟前";
  } else {
    result = "刚刚";
  }

  return result;
};

module.exports = {
  formatTime,
  basePath,
  getDateDiff
}