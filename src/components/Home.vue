<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
    </div>
</template>
<script>
import HomeHeader from './header'
import HomeSwiper from './swiper'

export default {
    data(){
        return {
            msg: 'hello insdzfddex.vue'
        }
    },
    components:{
        HomeHeader,
        HomeSwiper
    }
}
</script>
<style lang='stylus'  scoped>
</style>>