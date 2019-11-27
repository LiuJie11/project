<template>
  <div id="header">
    <div class="header-left" @click='handleShowMenu'>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="header-right">
      <img class="logo" src="~assets/imgs/home/logo.png" />
      <div class="user-box">
        <img class="user-img" src="~assets/imgs/home/default.png" />
        <div class="user-name">用户名称</div>
        <div class="user-btn" @click="handleLogout">
          <img class="logout" src="~assets/imgs/home/logout.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VHeader",
  data(){
    return {
      isShowNav:false
    }
  },
  methods: {
    // 是否显示左侧导航
    handleShowMenu(){
       this.isShowNav=!this.isShowNav;
      //  this.$Bus.$emit('handleShow',this.isShowNav) // 使用事件总件传值
      this.$emit('handleShow',this.isShowNav)
    },
    // 退出登录
    handleLogout() {
     window.sessionStorage.clear();
     this.$router.replace('/login')
    }
  }
};
</script>

<style lang='less' scoped>
#header {
  display: flex;
  width: 100%;
  min-width: 1300px;
  height: 60px;
  line-height: 60px;
  .header-left {
    width: 120px;
    height: 60px;
    opacity: 0.91;
    background: #2b303a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 5px 0;
    cursor: pointer;
    & > span {
      width: 45px;
      height: 3px;
      border-radius: 1px;
      background: #fff;
    }
  }
  .header-right {
    flex: 1;
    display: flex;
    align-items: center;
    background: #2b303a;
    .logo {
      width: 199px;
      height: 42px;
      margin-left: 18px;
    }
    .user-box {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 45px;
      .user-img {
        width: 42px;
        height: 42px;
        border-radius: 50%;
      }
      .user-name {
        font-size: 16px;
        color: #ffffff;
        padding: 0 10px;
      }
      .user-btn {
        height: 60px;
        cursor: pointer;
        .logout {
          width: 21px;
          height: 21px;
        }
      }
    }
  };
 
}
</style>

