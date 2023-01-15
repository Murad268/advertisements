<template>
  <Header/>
  <router-view/>
</template>

<script>
  import Header from './components/Header.vue';
  import Home from './views/Home.vue';
  import FavVue from './views/Favorites.vue'
  export default {
    components: {
      Home,
      Header,
      FavVue
    }
  }
</script>

<style>

</style>
