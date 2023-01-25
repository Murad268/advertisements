<template>
      <div v-if="see" class="type">
         <div class="type__top">
            <img @click.self="e=>activeSubTypes(e, type.id)"  :src="require('../assets/types/'+type.src)" alt="">
         </div>
         <div class="type__name">{{type.name}}</div>
      </div>
      <router-link :to="{name: 'goods', params: {city: 'bütün_şəhərlər', name: 'bütün_elanlar', filter: type.name}}" v-else class="type">
         <div class="type__top">
            <img :src="require('../assets/types/'+type.src)" alt="">
         </div>
         <div class="type__name">{{type.name}}</div>
      </router-link>
</template>

<script>
import { computed } from '@vue/runtime-core'
   export default {
      name: "TypeVue",
      props: ["type", "activeSubTypes"],
      data() {
         return {
            see: true
         }
      },
      created() {
         if(window.innerWidth<991) {
            this.see=false
         }
      }
   }
</script>

<style lang="scss" scoped>
      a {
         text-decoration: none;
         color: black
      }
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