<template>
    <div id="app">
        <transition name="bounce">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
	export default {
		name: 'app',
		components: {},
		data(){
			return {

			}
		},
		methods:{
			test(){
				alert("cheng")
			}
		},
		mounted(){
		},
		watch:{
		}
	}
	
</script>

<style lang="less">
	*{
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		margin:0px;
		padding:0px;
	}
  #app{
    position: relative;
  }
  .no_btn{
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
