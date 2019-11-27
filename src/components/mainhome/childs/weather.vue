<template>
  <div class='weather'>
        <ul class='left'>
            <li>
                <span>长沙</span>
            </li>
            <li>
                <span>32&#8451;</span>
            </li>
            <li>
                <span>晴转多云:</span>
                <span>28&#8451;~35&#8451;</span>
            </li>
        </ul>
        <div class='middle'>您好，少年！</div>
        <ul class="right">
            <li>22</li>
            <li>2019/09</li>
            <li>农历九月甘十六</li>
            <li>星期一</li>
        </ul>
  </div>
</template>

<script>

export default {
    name:'Weather'
}


</script>
<style lang='less' scoped>
    .weather{
        width:1080px;
        height:260px;
        background:linear-gradient(180deg,rgba(81,117,252,1) 0%,rgba(136,160,255,1) 100%);
        display: flex;
        padding: 20px 28px 0 18px;
        box-sizing: border-box;
        color: #fff;
        border-radius: 12px;
        .left{
            font-size: 18px;
            line-height: 40px;
            height: 40px;
            li:nth-child(2){
                font-size: 28px;
            }
            li:nth-child(3){
                font-size: 16px;
            }
        }
        .middle{
            flex: 1;
            text-align: center;
            font-size: 24px;
        }
        .right{
            li{
                margin-top:5px; 
            }
            li:nth-child(1){
             font-size: 28px;
            }
            li:nth-child(2){
             font-size: 16px;
            }
            li:nth-child(3){
             font-size: 18px;
            }
            li:nth-child(4){
             font-size: 18px;
            }
        }
    }
</style>