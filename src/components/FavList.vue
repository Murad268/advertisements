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
   @media (max-width: 991px) {
      .favList__wrapper {
         grid-template-columns: repeat(3, 1fr);
         grid-gap: 50px;
      }
   }
   @media (max-width: 768px) {
      .favList__wrapper {
         grid-template-columns: repeat(3, 1fr);
         column-gap: 10px;
      }
      .favEmpty__desc {
         font-size: 15px;
      }
   }
   @media (max-width: 556px) {
      .favList__wrapper {
         grid-template-columns: repeat(2, 1fr);
         column-gap: 12%;
      }
      .favEmpty__desc {
         text-align: center;
      }
      .favEmpty__btn {
         width: 150px;
         height: 30px;
         font-size: 15px;
      }
   }
   @media (max-width: 412px) {
      .favList__wrapper {
         grid-template-columns: repeat(2, 1fr);
         column-gap: 10px;
      }
      .favEmpty__desc {
         font-size: 12px;
      }
   }
</style>