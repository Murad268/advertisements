<template>
   <div class="container">
      <FavHeader/>
      <FavList/>
   </div>
</template>

<script>
   import FavHeader from '@/components/FavHeader.vue';
   import FavList from '@/components/FavList.vue'
   export default {
      name: "FavVue",
      components: {
         FavHeader,
         FavList
      }
   }
</script>

<style lang="scss" scoped>

</style>