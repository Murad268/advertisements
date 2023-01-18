<template>
   <a href="">{{ type.name }}  <span> (111)</span></a>
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