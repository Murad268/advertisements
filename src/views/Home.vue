<template>
  <Types/>
  <AddV :fl="getVipGoods" status="vip"/>
  <AddV :fl="getLastGoods" status="last"/>
</template>

<script>
   import { mapGetters } from 'vuex';
   import AddV from '@/components/AddV.vue';
   import Types from '@/components/Types.vue';
   export default {
      name: "HomeVue",
      components: {
      AddV,
      Types
    },
    computed: {
         ...mapGetters(["getVipGoods", "getLastGoods"])
      }
   }
</script>

<style lang="scss" scoped>

</style>