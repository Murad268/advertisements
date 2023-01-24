<template>
   <div class="container">
      <div class="con__wrapper">
         <div>{{ status=='vip'?"VIP ELANLAR":status=='last'?"SON ELANLAR":"ELANLAR" }}</div>
         <router-link v-if="status=='vip'" :to="{name: 'vip'}" >Bütün VİP elanlar</router-link>
         <router-link v-else :to="{name: 'elanlar'}">Bütün elanlar</router-link>
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
   @media (max-width: 991px) {
      .goods__wrapper {
         grid-template-columns: repeat(3, 1fr);
         grid-gap: 50px;
      }
   }
   @media (max-width: 768px) {
      .goods__wrapper {
         grid-template-columns: repeat(3, 1fr);
         column-gap: 10px;
        
      }
   }
   @media (max-width: 556px) {
      .goods__wrapper {
         grid-template-columns: repeat(2, 1fr);
         column-gap: 12%;
        
      }
   }
   @media (max-width: 412px) {
      .con__wrapper {
         div, a {
            font-size: 14px;
         }

      }
      .goods__wrapper {
         grid-template-columns: repeat(2, 1fr);
         column-gap: 10px;
        
      }
   }
</style>