<template>
   <div class="container">
      <FavHeader/>
      <FavList/>
   </div>
</template>

<script>
   import FavHeader from '@/components/FavHeader.vue';
   import FavList from '@/components/FavList.vue'
   import { mapMutations } from 'vuex';
   export default {
      name: "FavVue",
      components: {
         FavHeader,
         FavList
      },
      created() {
         this.closeMenu()
      },
      methods: {
         ...mapMutations(['closeMenu'])
      }
   }
</script>

<style lang="scss" scoped>

</style>