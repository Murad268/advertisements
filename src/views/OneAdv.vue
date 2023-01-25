<template>
   <OneTop/>
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
   import OneTop from '@/components/OneTop.vue';
   import { mapMutations } from 'vuex';
   export default {
      name: "OneAdv",
      components: {
         OneAdvTop,
         AddVAbout,
         AddVPhoto,
         OneTop
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