<template>
   <div class="vipPage">
      <div class="container">
         <VipResults/>
      </div>
   </div>
</template>

<script>
   import VipResults from '@/components/VipResults.vue';
   export default {
      name: 'VipPageVue',
      components: {
         VipResults
      }
   }
</script>

<style lang="scss" scoped>

</style>