<template>
  <Header/>
  <router-view/>
  <FooterVue/>
</template>

<script>
  import Header from './components/Header.vue';
  import Home from './views/Home.vue';
  import FavVue from './views/Favorites.vue'
  import FooterVue from './components/FooterVue.vue';
  export default {
    components: {
      Home,
      Header,
      FavVue,
      FooterVue
    }
  }
</script>

<style>

</style>
