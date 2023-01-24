<template>
   <div class="types">
      <div class="container">
         <div class="types__wrapper">
            <TypeVue :activeSubTypes="activeSubTypes" v-for="typer in getTypes" :key="typer.id" :type="typer"/>
         </div>
         <div  v-if="see" class="typesSubTy">
            <HomeType v-for="i in data" :key="i.id" :i="i"/>
         </div>
      </div>
   </div>
</template>

<script>
   import filterPageFilter from './filterPageFilter.vue';
   import HomeType from './HomeType.vue';
   import { mapGetters } from 'vuex';
   import TypeVue from './Type.vue';
   export default {
      name: "typesVue",
      components: {
         TypeVue,
         filterPageFilter,
         HomeType
      },
      data() {
         return {
            see: false,
            data: []
         }
      },
      methods: {
         activeSubTypes(e, id) {
            if(e.target.parentNode.classList["value"].includes("activedClass")) {
               e.target.parentNode.classList.remove("activedClass")
               this.see=false
            } else {
               document.querySelectorAll(".type__top").forEach(item => {
                  item.classList.remove("activedClass")
               })
               document.querySelectorAll(".type__name").forEach(item => {
               item.classList.remove("activedNameClass")
               })
               e.target.parentNode.nextElementSibling.classList.add("activedNameClass")
               e.target.parentNode.classList.add("activedClass")
               this.see=true
            }
            this.data = this.getSubTypes.filter(item => item.uptype==id)
         }
      },
      computed: {
         ...mapGetters(["getTypes", "getSubTypes"])
      },

   }
</script>

<style lang="scss" scoped>
    .typesSubTy {
            border-radius: 5px;
            display: grid;
            padding: 20px;
            grid-template-columns: repeat(3, 1fr);
            row-gap: 10px;
            width: 100%;
            height: max-content;
            background: white;  
         }
   .types {
      &__wrapper {
         padding: 20px 10px;
         display: grid;
         grid-template-columns: repeat(8, 1fr);
         column-gap: 60px;
         row-gap: 20px;
         position: relative;
      }
   }
   @media (max-width: 991px) {
      .types__wrapper {
         grid-template-columns: repeat(4, 1fr);
      }
   }
   @media (max-width: 556px) {
      .types__wrapper {
         grid-template-columns: repeat(5, 1fr);
         grid-gap: 10px;
      }
   }
   @media (max-width: 432px) {
      .types__wrapper {
         grid-template-columns: repeat(4, 1fr);
         grid-gap: 10px;
      }
   }
   @media (max-width: 332px) {
      .types__wrapper {
         grid-template-columns: repeat(3, 1fr);
         grid-gap: 10px;
      }
   }
</style>