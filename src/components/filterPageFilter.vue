<template>
   <router-link :to="{name: 'goods', params: {city: $route.params.city, name: $route.params.name, filter: type.name}}">{{ type.name }}  <span> (111)</span></router-link>
</template>

<script>
   export default {
      props: ["type"],
      name: "FilterPageFilter"
   }
</script>

<style lang="scss" scoped>
   a {
      line-height: 32px;
      text-decoration: none;
      span {
         color: gray;
      }
   }
</style>