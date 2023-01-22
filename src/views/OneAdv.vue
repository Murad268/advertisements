<template>
   <AddVPhoto/>
   <div class="container">
      <OneAdvTop/>
      <AddVAbout/>
   </div>
</template>

<script>
   import OneAdvTop from '@/components/OneAdvTop.vue';
   import AddVAbout from '@/components/AddVAbout.vue';
   import AddVPhoto from '@/components/AddVPhoto.vue';
   export default {
      name: "OneAdv",
      components: {
         OneAdvTop,
         AddVAbout,
         AddVPhoto
      }
   }
</script>

<style lang="scss" scoped>

</style>