<template>
   <div class="top">
      <div class="container">
         <div class="top__wrapper">
            <div class="top__left">
               <ul class="top__left__links">
                  <a href="">Turbo.az</a>
                  <a href="">Bina.az</a>
                  <a href="">Boss.az</a>
               </ul>
            </div>
            <div class="top__right">
               <div class="text-dark">Dəstək: <a href="">(012) 599-08-05</a></div>
               <div><a href="">Yardım</a></div>
               <div class="fav">
                  <i class="fa fa-heart" aria-hidden="true"></i>
                  Seçilmişlər
               </div>
               <a class="top__right__user__enter">
                  <div class="top__right__user__enter__circle"><i class="fa fa-user" aria-hidden="true"></i></div>
                  <div class="text-primary" href="">Giriş</div>
               </a>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "TopVue"
   }
</script>

<style lang="scss" scoped>
   .top {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 14px;
      padding: 10px;
      background: #F8F9FD;
      &__wrapper {
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
         &__right {
            display: flex;
            justify-content: space-between;
            align-items: center;
            a {
               color: black
            }
            .fav {
               width: 100px;
               display: flex;
               justify-content: space-between;
               align-items: center;
            }
            .fav i{
               font-size: 22px;
            }
            color: #BAB8BD;
            width: 420px;
            &__user__enter {
               display: flex;
               display: flex;
               justify-content: space-between;
               align-items: center;
               width: 60px;
               &__circle {
                  width: 25px;
                  height: 25px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 100%;
                  background: #BAB8BD;
                  i {
                     color: white;
                     font-size: 14px;
                  }
               }
            }
         }
         &__left {
            &__links {
               width: 200px;
               display: flex;
               justify-content: space-between;
               align-items: center;
            }
         }
      }

   a {
      text-decoration: none;
      color: #BAB8BD;
   }

</style>