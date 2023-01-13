<template>
  <HeaderVue/>
  <AddV status="vip"/>
  <AddV status="last"/>
</template>

<script>
  import HeaderVue from './components/Header.vue';
  import AddV from './components/AddV.vue';
  export default {
    components: {
      HeaderVue,
      AddV
    }
  }
</script>

<style>

</style>
