<template>
  <div class='box'>
      <h3>证件信息</h3>
      <div class="user-view">
        <img src="~assets/imgs/home/user.png" />
        <span>少年</span>
        <ul>
            <li>
                 <img src="~assets/imgs/home/birthday.png" />
                 <span>2000年02月08日</span>
            </li>
            <li>
                <img src="~assets/imgs/home/phone.png" />
                 <span>18999999999</span>
            </li>
            <li>
                 <img src="~assets/imgs/home/mail.png" />
                 <span>591188492@qq.com</span>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:'UserView'
}
</script>

<style lang='less' scoped>
    .box{
        height: 100%;
      h3{
          color:#293246;
          font-size: 20px;
          padding-bottom: 18px;
          font-weight: 600;
        }
      .user-view{
        width:349px;
        height:95%;
        background:rgba(255,255,255,1);
        border:1px solid rgba(244,244,252,1);
        box-shadow:0px 3px 6px rgba(40,127,239,0.4);
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 255px;
            height: 311px;
            margin-top: 30px;
        }
        span{
            font-size: 20px;
            color:#5F697F;
            margin-top: 40px;
        }
        ul>li{
            display: flex;
            align-items: center;
            img{
                width: 40px;
                height:33px;
                vertical-align: middle;
            }
            span{
                color:#5F697F;
                font-size: 14px;
                padding-left: 20px;
            }
        }

      }

    }
   
</style>