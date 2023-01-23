<template>
   <div class="container">
      <div class="con__wrapper">
         <div>{{ status=='vip'?"VIP ELANLAR":status=='last'?"SON ELANLAR":"ELANLAR" }}</div>
         <router-link to="elanlar/vip" >{{ status=='vip'?"Bütün VİP elanlar":status=='last'?"Bütün elanlar":"Bütün elanlar"}}</router-link>
      </div>
      <div v-if="status=='vip'" class="goods__wrapper">
         <GoodsVue v-for="goods in fl" :key="goods.id" :goods="goods"/>
      </div>
      <div v-if="fl.length<=0">
         Sizin sorğunuza uyğun heçnə tapılmadı
      </div>
      <div v-if="status=='last'" class="goods__wrapper">
         <GoodsVue v-for="goods in fl" :key="goods.id" :goods="goods"/>
      </div>
   </div>
</template>

<script>
   import GoodsVue from './Goods.vue';

   export default {
      name: "AdHeVue",
      props: ["status", "fl"],
      components: {
         GoodsVue
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