<template>
   <div class="vipPage">
      <div class="container">
         <VipResults/>
      </div>
   </div>
</template>

<script>
   import VipResults from '@/components/VipResults.vue';
   import { mapMutations } from 'vuex';
   export default {
      name: 'VipPageVue',
      components: {
         VipResults,
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