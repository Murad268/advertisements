<template>
   <div class="wrapper">
      <AddVLeft/>
      <AddVOneAbout/>
   </div>
</template>

<script>
   import AddVLeft from './AddVLeft.vue';
   import AddVOneAbout from './AddVOneAbout.vue';
   export default {
      name: "AddVAboutVue",
      components: {
         AddVLeft,
         AddVOneAbout
      }
   }
</script>

<style lang="scss" scoped>
   .wrapper {
      display: flex;
   }
</style>