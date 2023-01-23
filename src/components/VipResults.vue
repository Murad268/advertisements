<template>
   <div class="VipPgeResults">
      <h2 class="VipPgeResults__title">
         Bütün VIP elanlar
      </h2>
      <div class="VipPgeResults__count">
         {{getVipCount}} elan tapıldı
      </div>

      <div class="VipPgeResults__wrapper">
         <GoodsVue v-for="goods in getVipGoods" :key="goods.id" :goods="goods"/>
      </div>
   </div>
   <div v-if="getSee<getVipCount" class="VipPgeResults__pagination">
      <a-pagination @change="changePage"  :pageSize="getSee" :total="getVipCount" />
   </div>
   
</template>

<script>
   import { mapGetters, mapMutations } from 'vuex';
   import GoodsVue from './Goods.vue';
   export default {
    
      name: 'VipResults',
      components: {
         GoodsVue
      },
      created() {
         console.log(this.getVipCount)
      },
      computed: {
         ...mapGetters(["getVipGoods", "getVipCount", "getSee"])
      },
      methods: {
         ...mapMutations(['changePages']),
         changePage(page, pageSize) {
            let data = {from:page, to:page}
            this.changePages(data)
         }
      },
   }
</script>

<style lang="scss" scoped>
  
   .VipPgeResults {
      &__pagination {
         width: max-content;
         margin: 0 auto;
         margin-top: 30px;
      
      }
      &__title {
         color: #FF4F08;
         font-size: 23px;
         font-weight: bold;
         text-align: center;
         padding: 30px;
      }
      &__count {
         color: #FF4F08;
         font-size: 18px;
         font-weight: bold;
      }
      &__wrapper {
         display: grid;
         grid-template-columns: repeat(5, 1fr);
         grid-gap: 20px;
         margin-top: 30px;
      }
   }
</style>