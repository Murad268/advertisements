<template>
   <router-link :to="{name: 'goods', params: {city: 'bütün_şəhərlər', name: 'bütün_elanlar', filter: i.name}}">{{ i.name}} <span>({{ len }})</span></router-link>
</template>

<script>
   import { mapGetters } from 'vuex';
   export default {
      props: ['i'],
      name: "HomeType",
      computed: {
         ...mapGetters(["getAllGoods"]),
         len() {
            return this.getAllGoods.filter(item => item.typeId==this.i.id).length
         }
      }
   }
</script>

<style lang="scss" scoped>
   a {
      text-decoration: none;
   }
   span {
      color: gray
   }
</style>