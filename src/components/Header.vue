<template>
   <div>
      <TopVue/>
      <Navbar/>  
   </div>
</template>

<script>
   import TopVue from './Top.vue';
   import Navbar from './Navbar.vue';

   export default {
      name: "HomeVue",
      components: {
         TopVue,
         Navbar
      }
   }
</script>

<style lang="scss" scoped>

</style>