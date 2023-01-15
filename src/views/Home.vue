<template>
  <Types/>
  <AddV status="vip"/>
  <AddV status="last"/>
</template>

<script>

   import AddV from '@/components/AddV.vue';
   import Types from '@/components/Types.vue';
   export default {
      name: "HomeVue",
      components: {
      AddV,
      Types
    }
   }
</script>

<style lang="scss" scoped>

</style>