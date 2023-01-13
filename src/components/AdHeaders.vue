<template>
   <div class="container">
      <div class="con__wrapper">
         <div>{{ status=='vip'?"VIP ELANLAR":status=='last'?"SON ELANLAR":"ELANLAR" }}</div>
         <a href="">{{ status=='vip'?"Bütün VİP elanlar":status=='last'?"Bütün elanlar":"Bütün elanlar"}}</a>
      </div>

      <div class="goods__wrapper">
         <GoodsVue v-for="goods in getVipGoods" :key="goods.id" :goods="goods"/>
      </div>
   </div>
</template>

<script>
   import GoodsVue from './Goods.vue';
   import { mapGetters } from 'vuex';
   export default {
      name: "AdHeVue",
      props: ["status"],
      components: {
         GoodsVue
      },
      computed: {
         ...mapGetters(["getVipGoods"])
      }
   }
</script>

<style lang="scss" scoped>
   .con__wrapper {
      padding: 30px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
         font-size: 20px;
         color: #BAB8BD;
         font-weight: bold;
      }
      a {
         font-size: 18px;
         font-weight: bold;
      }
   }
   .goods__wrapper {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      column-gap: 20px;
      row-gap: 20px;
   }
</style>