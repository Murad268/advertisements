<template>
   <div class="navbar">
      <div class="container">
         <div class="navbar__wrapper">
            <div class="navbar__logo">
               tap.az
            </div>
            <div>
               <a class="navbar__catalog">
                  <i class="fa fa-list" aria-hidden="true"></i>
                  <span>Kataloq</span>
               </a>
            </div>
            <div class="navbar__search">
               <div class="navbar__search__block">
                  <div>
                     <input v-model="name" type="text">
                     <select v-model="city" class="city__select" name="" id="">
                        <City v-for="city in allCities" :key="city.id" :city="city"/>
                     </select>
                  </div>
                 <div @click="goGoods" class="navbar__start__sr">
                     <a class="btn btn-danger">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        Tap
                     </a>
                 </div>
               </div>
            </div>
            <div class="navbar__add">
               <a class="btn btn-success" href=""><i class="fa-solid fa-plus"></i> Yeni elan</a>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
   import City from './City.vue';
   export default {
      name: "NavbarVue",
      components: {
         City
      },
      computed: {
         ...mapGetters(["allCities"])
      },
      data() {
         return {
            city: "",
            name: ""
         }
      },
      methods: {
         goGoods() {
            this.$router.push({ name: 'goods', params: { city: this.city?this.city:"bütün_şəhərlər", name: this.name?this.name:"bütün_elanlar", filter: 'bütün_kateqoriyalar'} })
         }
      }
   }
</script>

<style lang="scss" scoped>
   .navbar {
      background: #FF4F08;
      padding: 10px 0;
      &__wrapper {
         width: 100%;
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      &__start__sr {
         height: 103%;
         padding: 5px 5px 5px 0;
         i {
            font-size: 12px;
         }
      }
      &__logo {
         font-size: 35px;
         font-family: Helvetica, Arial, sans-serif;
         color: white;
      }
      &__catalog {
         padding-top: 5px;
         color: white;
         display: flex;
         width: 70px;
         justify-content: space-between;
         align-items: center;
         text-decoration: none;
         i {
            font-size: 20px;
         }
         span {
            font-size: 15px;
            margin-left: 5px;
         }
      }
      &__search {
         width: 600px;
         &__block {
            background: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 45px;
            border-radius: 7px;
               div {
                  height: 100%;
                  input {
                     height: 90%;
                     border: none;
                     border-radius: 7px 0 0 7px;
                     outline: none;
                     padding-left: 12px;
                     width: 400px;
                  }
                  select {
                     padding: 0 15px;
                     height: 100%;
                     border: none;
                     border-radius: 0 7px 7px 0;
                     outline: none;
                     color: #BAB8BD;
                     option {
                        color: black
                     }
                  }
            }  
         }
      }
   }

</style>