<template>
   <div class="photo">
      <div class="photo__wrapper container">
         <div class="photo__main">
            <img @click="e=>openModal(e)" :src="require('../assets/goods/'+ getAllImages.find(item=>item.goodId==$route.params.id).src)" alt="">
         </div>
         <div class="photo__others" :class="[className]">
            <img v-for="img in imgs" :key="img.id" @click="e=>openModal(e)" :src="require('../assets/goods/'+ img.src)" alt="">
         </div>
      </div>
     
   </div>
   <div @click.self="closeModal" v-if="see" class="photo__modal">
      <div class="photo__modal__block">
         <div @click="closeModal" class="photo__modal__exit">
            <i class="fa fa-window-close" aria-hidden="true"></i>
         </div>
         <img :src="img" alt="">
      </div>
   </div>
</template>

<script>
   import { mapGetters } from 'vuex'
   export default {
      name: "AddVPhotoVue",
      data() {
         return {
            see: false,
            img: ""
         }
      },
      created() {
         console.log(this.imgs.length) 
      },
      computed: {
         ...mapGetters(['getAllImages']),
         imgs() { return this.getAllImages.filter(item => item.goodId == this.$route.params.id)},  
         className(){
            return this.imgs.length<=1?"photo__others__one":
            this.imgs.length<=2?"photo__others__two":
            this.imgs.length<=3?"photo__others__three":
            this.imgs.length<=4?"photo__others__four":
            this.imgs.length>4?"photo__others__five":
            this.imgs.length<=6?"photo__others":""
          
          }
      },
      methods: {
         openModal(e) {
            this.img = e.target.src
            document.documentElement.style.overflow = 'hidden'
            this.see = true
         },
         closeModal() {
            this.see = false
            document.documentElement.style.overflow = 'auto'
         }
      }
   }
</script>

<style lang="scss" scoped>
   .photo {
      position: relative;
      &__modal {
         width: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         height: 100vh;
         &__exit {
            position: absolute;
            top: 10px;
            right: 10px;
            i {
               color: gray;
               cursor: pointer;
               font-size: 15px;
            }
         }
         &__block {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 900px;
            height: max-content;
            padding: 40px 0;
            background: black;
            position: relative;
         }
         z-index: 100;
         position: absolute;
         top: 0;
         left: 0;
      }
      &__wrapper {
         padding: 20px 0;
         display: grid;
         grid-template-columns: repeat(2, 1fr);
         column-gap: 20px;
         height: 300px;
      }
      background: #323232;
      width: 100%;
      height: 350px;
      &__main {
         width: 100%;
         height: 300px;
         img {
            width: 100%;
            height: 100%;
            object-fit: fill;
            cursor: pointer;
         }
      }
      &__others {
         display: grid;
         column-gap: 10px;
         height: max-content;
         grid-template-columns: repeat(5, 1fr);
         &__one {
            display: grid;
            column-gap: 10px;
            grid-template-columns: repeat(1, 1fr);
            height: 100%;
            img {
               height: 300px;
               object-fit: fill;
            }
         }
         &__two {
            display: grid;
            column-gap: 10px;
            grid-template-columns: repeat(2, 1fr);
         }
         &__three {
            display: grid;
            column-gap: 10px;
            grid-template-columns: repeat(3, 1fr);
         }
         &__four {
            display: grid;
            column-gap: 10px;
            grid-template-columns: repeat(4, 1fr);
         }
         &__five {
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(5, 1fr);
            
         }
         &__six {
            display: grid;
            column-gap: 10px;
            grid-template-columns: repeat(6, 1fr);
         }
         &__seven {
            display: grid;
            column-gap: 10px;
            grid-template-columns: repeat(7, 1fr);
         }
     
         &__eight {
            display: grid;
            column-gap: 10px;
            grid-template-columns: repeat(8, 1fr);
         }
         &__nine {
            display: grid;
            column-gap: 10px;
            grid-template-columns: repeat(9, 1fr);
         }
         &__ten {
            display: grid;
            column-gap: 10px;
            grid-template-columns: repeat(10, 1fr);
         }
         img {
            width: 100%;
            object-fit: fill;
            height: 60px;
            cursor: pointer;
           
         }
      }
   }
</style>