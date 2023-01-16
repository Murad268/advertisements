<template>
   <div class="footer">
      <div class="container">
         <div class="footer__wrapper">
            <div class="footer__left">
               <div><a href="">Yardım</a></div>
               <div><a href="">Reklam yerləşdirin</a></div>
            </div>
            <div class="footer__right">
               <div><a href="">
                  <i class="fab fa-facebook-f"></i>
               </a></div>
               <div><a href="">
                  <i class="fab fa-instagram"></i>
               </a></div>
               <div class="footer__right__email">
                  <a href="">
                     <i class="fa fa-envelope" aria-hidden="true"></i>
                     <span>tap@tap.az</span>
                  </a>
               </div>
               <div class="footer__phones">
                  <div>
                     <i class="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div class="footer__phones__ph">
                     <a href="">(012) 599-08-05</a>
                     <a href="">(012) 505-85-85</a>
                  </div>
               </div>
            </div>
         </div>
         <div class="footer__cities">
            <FootCity v-for="city in allCities" :city="city" :key="city.key"/>
         </div>
      </div>
   </div>
</template>

<script>
   import FootCity from './FootCity.vue';
   import { mapGetters } from 'vuex';
   export default {
      name: "FooterVue",
      components: {
         FootCity
      },
      computed: {
         ...mapGetters(["allCities"])
      }
   }
</script>

<style lang="scss" scoped>
   .footer {
      a {
         color: gray;
      }
      &__left {
         display: flex;
         justify-content: space-between;
         align-items: center;
         width: 210px;
         font-size: 18px;
         a {
            text-decoration: none;
            color: black;
         }
      }
      i {
         color: gray
      }
      &__wrapper {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      &__right {
         font-size: 19px;
         width: 380px;
         display: flex;
         justify-content: space-between;
         align-items: center;
         &__email a{
            width: 115px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-decoration: none;
         }
      }
      &__phones {
         display: flex;
         justify-content: space-between;
         align-items: center;
         width: 160px;
         &__ph {
            display: flex;
            flex-direction: column;
         }
      }
      &__cities {
         margin-top: 50px;
         display: grid;
         grid-template-columns: repeat(7, 1fr);
         row-gap: 15px;
         justify-content: space-between;
         a {
            text-decoration: none;
            font-size: 14px;
         }
      }
   }
</style>