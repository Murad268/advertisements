<template>
   <div class="oneadvtop">
      <div class="oneadvtop__price">
         {{getPrice}} AZN
      </div>
      <div class="oneadvtop__name">
         {{ getName }}
      </div>
   </div>
</template>

<script>
   import { mapGetters } from 'vuex';
   export default {
      name: "OneAdvTopVue",
      computed: {
         ...mapGetters(['getAllGoods']),
         getPrice() {
            return this.getAllGoods.filter(item => item.id == this.$route.params.id)[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
         },
         getName() {
            return this.getAllGoods.filter(item => item.id == this.$route.params.id)[0].title
         }
      }
   }
</script>

<style lang="scss" scoped>
   .oneadvtop {
      display: flex;
      align-items: center;
      padding-top: 20px;
      &__price {
         background: #FF4F08;
         width: 220px;
         height: 80px;
         font-size: 28px;
         color: white;
         font-weight: bold;
         display: flex;
         justify-content: center;
         align-items: center;
      }
      &__name {
         font-size: 34px;
         font-weight: bold;
         letter-spacing: 2px;
         margin-left: 20px;
      }
   }
</style>