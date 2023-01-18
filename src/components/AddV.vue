<template>
   <div>
      <AdHeaders :fl="fl" v-if="status=='vip'" status="vip"/>
      <AdHeaders :fl="fl" v-else-if="status=='last'" status="last"/>
   </div>
</template>

<script>
   import AdHeaders from './AdHeaders.vue';
   export default {
      name: "AdvsVue",
      props: ["status", "fl"],
      components: {
         AdHeaders
      }
   }
</script>

<style lang="scss" scoped>

</style>