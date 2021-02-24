<template>
<div id="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive"><slot name="img"></slot></div>
    <div v-else><slot name="imgActive"></slot></div>
    <div :style="isActive ? 'color:red' : ''"><slot name="text"></slot></div>
</div>
  
</template>

<script>
export default {
    name: "TabBarItem",
    props:{
       path : String ,
    },
    data() {
        return {
            
        }
    },
    methods: {
     itemClick(){
         if(!this.isActive){
             this.$router.replace(this.path)   
         }
         
     }   
    },
    computed: {
        isActive(){
            return this.$route.path == this.path
        }
    }
}
</script>

<style>
#tab-bar-item{
     flex: 1;
     text-align: center;
     height: 49px;
     margin-top: 3px;
     font-size: 12px;
 }
 #tab-bar-item img{
     width: 24px;
     height: 24px;
 }
</style>