<template>
   <div class="favTitle__wrapper">
      <h1 class="favTitle">
            Seçilmişlər
      </h1>
      <div class="favTitle__count">
         {{getFavLenght}}
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
   export default {
      name: "FavHeaderVue",
      computed: {
         ...mapGetters(["getFavLenght"])
      }
   }
</script>

<style lang="scss" scoped>
   .favTitle {
      &__wrapper {
         margin-top: 20px;
         display: flex;
         width: 205px;
         justify-content: space-between;
         align-items: center;
      }
      font-size: 35px;
      font-weight: bold;

      &__count {
         width: 35px;
         height: 35px;
         border: 1px solid #FF4F08;
         border-radius: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         font-weight: bold;
         font-size: 26px;
         color: #FF4F08;
      }
   }
   @media (max-width: 556px) {
      .favTitle__wrapper {
         width: 150px;
      }
      .favTitle {
         font-size: 25px;
      }
      .favTitle__count {
         width: 25px;
         height: 25px;
         font-size: 12px;
      }
   }
   @media (max-width: 400px) {
      .favTitle__wrapper {
         width: 120px;
      }
      .favTitle {
         font-size: 20px;
      }
      .favTitle__count {
         width: 20px;
         height: 20px;
      }
   }
</style>