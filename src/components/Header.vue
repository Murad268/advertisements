<template>
   <div>
      <TopVue/>
      <Navbar/>
      <Types/>
   </div>
</template>

<script>
   import TopVue from './Top.vue';
   import Navbar from './Navbar.vue';
   import Types from './Types.vue';
   export default {
      name: "HomeVue",
      components: {
         TopVue,
         Navbar,
         Types
      }
   }
</script>

<style lang="scss" scoped>

</style>