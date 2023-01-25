<template>
   <FilterPageTop/>
</template>

<script>
   import FilterPageTop from '@/components/FilterPageTop.vue';
   import { mapMutations } from 'vuex';
   export default {
      name: "FilerPageVue",
      components: {
         FilterPageTop
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