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
    },
    created() {
      alert("Hörmətli qonaq, bu vepsayt real tap.az saytının daha az funksionala malik frontend kopyasıdır. Real saytın dizayn və ölçüləri deyil, mənim seçdiyim dizayn və ölçülər istifadə edilib. Adaptasiyaya isə sadəcə səthi fikir verilib.Əsas məqsəd isə developerin frontend məntiqi bacarığını nümayiş etdirməkdir. Vebsayt heç bir real fəaliyyətə iddialı deyil")
    }
  }
</script>

<style>

</style>
