<template>
   <div class="favList">
      <div class="favList__wrapper">
         <GoodsVue v-for="goods in favoritesList" :key="goods.id" :goods="goods"/>
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
</style>