<template>
  <div class="goods-list">
      <goods-list-item class="item" v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem: () => import('./GoodsListItem'),
  }
}
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
}

.goods-list .item {
  width: 48%;
}
</style>
