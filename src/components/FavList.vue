<template>
   <div class="favList">
      <div class="favList__wrapper">
         <GoodsVue v-for="goods in favoritesList" :key="goods.id" :goods="goods"/>
      </div>
      <div v-if="favoritesList.length<=0" class="favEmpty">
         <div>
            <div class="favEmpty__desc">Elanlara daha sonra baxmaq üçün onları seçilmişlər siyahısına əlavə edin</div>
            <router-link to="elanlar" class="favEmpty__btn">Bütün elanlar</router-link>
         </div>
      </div>
   </div>
</template>

<script>
   import GoodsVue from './Goods.vue';
   import { mapGetters } from 'vuex';
   export default {
      name: "FavList",
      components: {
         GoodsVue
      },
      computed: {
         ...mapGetters(['favoritesList'])
      }
   }
</script>

<style lang="scss" scoped>
   .favList {
      &__wrapper {
         margin-top: 20px;
         display: grid;
         grid-template-columns: repeat(5, 1fr);
         column-gap: 20px;
         row-gap: 20px;
      }
   }
   .favEmpty {
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
      &__btn {
         width: 240px;
         height: 45px;
         background: #FF4F08;
         border-radius: 5px;
         text-decoration: none;
         color: white;
         display: flex;
         justify-content: center;
         align-items: center;
         margin: 15px auto 0 auto;
      }
   }
</style>