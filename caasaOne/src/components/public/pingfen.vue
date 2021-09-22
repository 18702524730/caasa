<template>
<div>
    <div class="starsbox" v-if="isclick">
        <span v-for="index of total" :key="index" :class="{active:index<=selected}" @click="select(index)"></span>
    </div>
    <div class="starsboxs" v-else>
        <span v-for="index of total" :key="index" :class="{active:index<=stars}"></span>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            total:5,
            selected:0,
            hasclick: false
        }
    },
    props:{
        stars:{
            type:Number,
            default:0
        },
        isclick:{
            type: Boolean,
            default: true
        },
        isonce:{
            type: Boolean,
            default: false
        }
    },
    created(){
        console.log('created')
    },
    beforeDestroy(){
    },
    methods:{
        select(num){
            this.selected = num;
            this.$emit('selectedstar',num)
        }
    }
    
}
</script>
<style lang="less">
.starsbox{
    overflow: hidden;
    >span{
        float: left;
        width: 21px;
        height: 19px;
        margin-right: 8px;
        background-image: url('~assets/img/home/xx.png');
        background-size: 100% 100%;
        background-position: center center;
        background-repeat: no-repeat;
        cursor: pointer;
        &.active{
            background-image: url('~assets/img/home/yxx.png')
        }
    }
}
.starsboxs{
    overflow: hidden;
    >span{
        float: left;
        width: 21px;
        height: 19px;
        margin-right: 8px;
        background-image: url('~assets/img/home/xx.png');
        background-size: 100% 100%;
        background-position: center center;
        background-repeat: no-repeat;
        &.active{
            background-image: url('~assets/img/home/yxx.png')
        }
    }
}
</style>

