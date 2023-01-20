<template>
      <div class="type">
         <div class="type__top">
            <img @click.self="e=>activeSubTypes(e, type.id)"  :src="require('../assets/types/'+type.src)" alt="">
         </div>
         <div class="type__name">{{type.name}}</div>
      </div>
</template>

<script>
   export default {
      name: "TypeVue",
      props: ["type", "activeSubTypes"]
     
   }
</script>

<style lang="scss" scoped>
      .activedClass {
         border: 1px solid #FF4F08
      }
      .activedNameClass {
         color: #FF4F08
      }
      .type {
         position: relative;
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