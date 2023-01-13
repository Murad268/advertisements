<template>
   <div>
      <AdHeaders v-if="status=='vip'" status="vip"/>
      <AdHeaders v-else-if="status=='last'" status="last"/>
   </div>
</template>

<script>
   import AdHeaders from './AdHeaders.vue';
   export default {
      name: "AdvsVue",
      props: ["status"],
      components: {
         AdHeaders
      }
   }
</script>

<style lang="scss" scoped>

</style>