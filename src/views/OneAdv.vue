<template>
   <div class="container">
      <OneAdvTop/>
      <AddVAbout/>
   </div>
</template>

<script>
   import OneAdvTop from '@/components/OneAdvTop.vue';
   import AddVAbout from '@/components/AddVAbout.vue';
   export default {
      name: "OneAdv",
      components: {
         OneAdvTop,
         AddVAbout
      }
   }
</script>

<style lang="scss" scoped>

</style>