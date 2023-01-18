<template>
   <router-link :to="{name: 'goods', params: {city: city.city, name: 'bütün_elanlar', filter: 'bütün_kateqoriyalar'}}">{{ city.city }}</router-link>
</template>

<script>
   export default {
      props: ["city"],
      name: "FootCities"
   }
</script>

<style lang="scss" scoped>

</style>