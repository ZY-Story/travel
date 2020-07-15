<template>
    <div class="header">
       <div class="header-left">
           <span class="iconfont">&#xe624; </span>
       </div>
       <div class="header-input">
           <!-- 内容 -->
           <input type="text" placeholder="请输入城市/景点/游玩主题" class="input_content" /> 
       </div>
       <div class="header-right">
           城市
           <span class="iconfont">&#xe62d; </span>
       </div>

    </div>
</template>
<script>
import '../assets/styles/module.styl'
export default {
    name:'HomeHeader',
}
</script>
<style lang='stylus'  scoped>
@import '../assets/styles/module.styl';
.header
    background  $backColor
    display flex
    line-height .86rem
    align-items center
    text-align center

    .header-left
        width .64rem
        float left

    .header-right
        width 1.24rem
        float right 
        
    .header-input   
        flex 1
        background #ffffff
        height .64rem
        // margin-left .2rem
        line-height  .64rem
        border-radius .1rem

        .input_content
            width 90%
            padding 0 .1rem
            color #ccc



</style>>