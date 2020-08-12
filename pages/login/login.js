// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    pwd:'',
    loginster:'display:',
    register:'display:none'
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  registerview(e){
    this.setData({
      loginster:'display:none',
      register:'display:'
    })
  }
  ,
  registerlogin(e){
    let user = this.data.user
    let pwd =this.data.pwd
    if(user ==='6789' && pwd === '123'){
      wx.showToast({
        title: '注册成功',
        duration: 500,
        success(){
          wx.reLaunch({
            url: '../../pages/home/home?user='+user,
          })
        }
      })
    }else{
      wx.showToast({
        title: '注册失败',
        duration: 500
      })
    }

  },
  registerreset(e){
    this.inputreset()
  },

  inputuser(e){
    this.setData({
      user:e.detail.value
    })
  },
  inputpwd(e){
    this.setData({
      pwd:e.detail.value
    })
  }
  ,
  inputlogin(e){
    let user = this.data.user
    let pwd =this.data.pwd
    if(user ==='12345' && pwd === '123'){
      wx.showToast({
        title: '登录成功',
        duration: 500,
        success(){
          wx.reLaunch({
            url: '../home/home?user='+user,
          })
        }
      })
    }else{
      wx.showToast({
        title: '登录失败',
        duration: 500
      })
    }
  },
  inputreset(e){
      this.setData({
        user:'',
        pwd:''
      })
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})