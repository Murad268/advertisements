<template>
   <div class="goods">
      <div class="goods__top">
         <i class="fa-regular fa-heart favor" aria-hidden="true"></i>
         <i v-if="goods.status=='vip'" class="fas fa-crown crown"></i>
         <img src="../assets/goods/ss.png" alt="">
         <div v-if="goods.shop" class="goods__shop">
            Mağaza
         </div>
         <div class="goods__bottom">
            <div class="goods__bottom__price">
               {{goods.price}} AZN
            </div>
            <div class="goods__bottom__title">Apple sakajajak</div>
         </div>
      </div>
      <div class="goods__bottom__time">Bakı, dünən, 20:40</div>
   </div>
</template>

<script>
   export default {
      name: "GoodsVue",
      props: ["goods"]
   }
</script>

<style lang="scss" scoped>
   .goods {
      background: #FBFBF8;
      position: relative;
      height: 300px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 10px;
      &__shop {
         background: #4E63BE;
         display: flex;
         justify-content: center;
         align-items: center;
         color: white;
         width: max-content;
         padding: 4px 0;
         width: 70px;
         border-radius: 3px;
         font-size: 13px;
         position: absolute;
         left: 10px;
         bottom: 10px;
      }
      &__top {
         width: 100%;
         height: 180px;
         border-radius: 10px;
         position: relative;
         .favor {
            position: absolute;
            top: 10px;
            right: 10px;
            color: white;
            font-size: 25px;
            cursor: pointer;
         }
         .crown {
            position: absolute;
            bottom: 10px;
            right: 10px;
            color: white;
            font-size: 25px;
            color: orange
         }
         img {
            width: 100%;
            border-radius: 10px 10px 0 0;
            height: 100%;
            object-fit: fill;
         }
      }
      &__bottom {
         padding: 10px;
       
         &__price {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 4px;
         }
         &__title {
            font-size: 17px;
         }
         &__time {
            margin-top: 4px;
            font-size: 14px;
            color: #BAB8BD;
            position: absolute;
            bottom: 5px;
            left: 10px;
         }
      }
   }
</style>