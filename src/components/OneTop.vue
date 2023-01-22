<template>
   <div class="onetop">
      <div class="container">
         <router-link :to="{name: 'elanlar'}">Bütün kateqoriyalar</router-link> &bull; <router-link :to="{name: 'goods', params: {city: 'bütün_şəhərlər', name: 'bütün_elanlar', filter: $route.params.type}}">{{ $route.params.type }}</router-link> &bull;  <router-link :to="{name: 'goods', params: {city: 'bütün_şəhərlər', name: 'bütün_elanlar', filter: $route.params.subtype}}">{{ $route.params.subtype }}</router-link> 
      </div>
   </div>
</template>

<script>
   export default {
      name: "OneTopVue"
   }
</script>

<style lang="scss" scoped>
   .onetop {
      background: #FFFFFF;
      padding: 20px 0;
      color: gray;
      a {
         color: gray;
         font-size: 17px;
         text-decoration: none;
      }
   }
</style>