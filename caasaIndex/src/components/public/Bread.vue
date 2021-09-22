<template>
    <div class='bread commonWidth'>
        <el-breadcrumb separator-class="el-icon-arrow-right" class='el-bread'>
            <el-breadcrumb-item
                v-for='(item,index) in curRouteData'
                :key='index' :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: 'bread',
        data () {
          return {
            
          }
        },
        methods:{
        },
        mounted(){
        },
        created(){
        },
        computed: {
          curRouteData(){
              let temp = [],temps = [];
              this.$route.matched.filter((item,index,self) => {
                  if(item.name){
                      const name = item.meta.name;
                      temp.push({'name':name,'path':item.path});
                  }
              });
              temp.filter((item,index,self) => {
                  if(!temps.includes(item.name)){
                      temps.push(item);
                  }
              })
              if(this.$route.path.indexOf('index') !== -1){
                temps.unshift({'name':'首页','path':'/'})
              }
              console.log(temps)
              return temps;
          }
        },
        watch:{
        }
    }
</script>

<style lang='less'>
    .bread{
        height: 55px;
        padding-top: 15px;
        line-height: 26px;
        z-index: 1;
    }
</style>
