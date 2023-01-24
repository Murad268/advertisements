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
         <div v-show="links" class="footer__links">
            <a href="" class="footer__link">
               Layihə haqqında
            </a>
            <a href="" class="footer__link">
               Qaydalar
            </a>
            <a href="" class="footer__link">
               İstifadəçi razılaşması
            </a>
            <a href="" class="footer__link">
               Ümumi oferta müqaviləsi
            </a>
            <a href="" class="footer__link">
               Məxfilik siyasəti
            </a>
         </div>
      </div>
      <div class="footer__bottom">
         <div class="container">
            <div class="footer__bottom__wrapper">
               <div class="footer__bottom__left">
                  Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş elanların məzmununa görə məsuliyyət daşımır.
               </div>
               <div class="footer__bottom__right">
                  <div>© 2008-2023 Digital Classifieds MMC. VÖEN: 1405631661</div>
                  <div><a href="">Mobil versiyası</a></div>
               </div>
            </div>
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
      data() {
         return {
            links: true
         }
      },
      created() {
         if(window.innerWidth<768) {
            this.links=false
         }
      },
      computed: {
         ...mapGetters(["allCities"])
      }
   }
</script>

<style lang="scss" scoped>
   .footer {
      padding-top: 30px;
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
            line-height: 25px;
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
      &__links {
         margin-top: 40px;
         display: flex;
         justify-content: space-between;
         align-items: center;
        
      }
      &__link {
         text-decoration: none;
         color: black !important
      }
      &__bottom {
         margin-top: 30px;
         padding: 15px 0;
         background: #FF4F08;
         &__left {
            width: 420px;
            color: white;
            font-size: 15px;
         }
         &__right {
            width: 450px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;
            color: white;
            a {
               color: white;
            }
         }
         &__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
         }
      }
   }
   @media (max-width: 991px) {
      .footer__left {
         margin-bottom: 20px;
      }
   
      .footer__wrapper, .footer__left {
         flex-direction: column;
         align-items: flex-start;
         justify-content: space-between;
         height: 100px;
      }
      .footer__bottom__wrapper {
         flex-direction: column;
         align-items: flex-start;
         justify-content: space-between;
         height: 60px;
      }
   }
</style>