<template>
  <Types/>
  <AddV :fl="getVipGoods" status="vip"/>
  <AddV :fl="getLastGoods" status="last"/>
</template>

<script>
   import { mapGetters, mapMutations } from 'vuex';
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