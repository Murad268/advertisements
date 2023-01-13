<template>
   <div class="types">
      <div class="container">
         <div class="types__wrapper">
            <TypeVue v-for="typer in getTypes" :key="typer.id" :type="typer"/>
         </div>
      </div>
   </div>
</template>

<script>

   import { mapGetters } from 'vuex';
   import TypeVue from './Type.vue';
   export default {
      name: "typesVue",
      components: {
         TypeVue
      },
      computed: {
         ...mapGetters(["getTypes"])
      }
   }
</script>

<style lang="scss" scoped>
   .types {
      &__wrapper {
         padding: 20px 10px;
         display: grid;
         grid-template-columns: repeat(8, 1fr);
         column-gap: 60px;
         row-gap: 20px;
      }
    
   }
</style>