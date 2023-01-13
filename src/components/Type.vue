<template>
      <div class="type">
         <div class="type__top">
            <img :src="require('../assets/types/'+type.src)" alt="">
         </div>
         <div class="type__name">{{type.name}}</div>
      </div>
</template>

<script>
   export default {
      name: "TypeVue",
      props: ["type"]
     
   }
</script>

<style lang="scss" scoped>
      .type {
         &__top {
            width: 100%;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #FFFCFB;
            border-radius: 10px;
            cursor: pointer;
            img {
               width: 60%;
               height: 80%;
               object-fit: contain;
               
            }
         }
         &__name {
            text-align: center;
            margin-top: 9px;
            font-size: 14px;
         }
         }
</style>