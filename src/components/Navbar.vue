<template>
   <nav v-if="navbarSee" class="navbar"> 
      <div class="container">
         <div class="navbar__wrapper">
            <router-link to="/" class="navbar__logo">
               tap.az
            </router-link>
            <div :style="{cursor: 'pointer'}" @click="setSeeCatMenu">
               <a class="navbar__catalog">
                  <i class="fa fa-list" aria-hidden="true"></i>
                  <span>Kataloq</span>
               </a>
            </div>
            <div class="navbar__search">
               <div class="navbar__search__block">
                  <div>
                     <input v-model="name" type="text">
                     <select v-model="city" class="city__select" name="" id="">
                        <option value="">Şəhər</option>
                        <City v-for="city in allCities" :key="city.id" :city="city"/>
                     </select>
                  </div>
                 <div @click="goGoods" class="navbar__start__sr">
                     <a class="btn btn-danger">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        Tap
                     </a>
                 </div>
               </div>
            </div>
            <div class="navbar__min__search">
               <div class="navbar__min__search__block">
                  <form @submit.prevent='goGoods'>
                     <input placeholder="Əşya və ya xidmət anlayışı" type="text">
                     <i type="submit" class="fa fa-search" aria-hidden="true"></i>
                     <select>
                        <option value="">Şəhər</option>
                        <City v-for="city in allCities" :key="city.id" :city="city"/>
                     </select>
                  </form>
               </div>
            </div>
            <div class="navbar__add">
               <a class="btn btn-success" href=""><i class="fa-solid fa-plus"></i> Yeni elan</a>
            </div>
         </div>
      
      </div>
      <div v-if="seeCatMenu" class="navbar__categories">
         <div class="container">
            <div class="navbar__categories__wrapper">
               <div :class="getTypes.length>13?'navbar__categories__left__yes':'navbar__categories__left'" >
                  <div @click="click" @mouseover="e=>mouseOver(typer.id)" v-for="typer in getTypes" :key="typer.id" class="navbar__categories__left__el">
                     <div class="navbar__categories__left__el__img">
                        <img :src="require('../assets/types/'+typer.src)" alt="">
                     </div>
                     <router-link :to="{name: 'goods', params: {city: 'bütün__şəhərlər', name: 'bütün_elanlar', filter: typer.name}}" class="navbar__categories__left__el__name">{{typer.name}}</router-link>
                     <div class="navbar__categories__left__el__arrow">
                        ⊁
                     </div>
                  </div>
                  </div>
                  <div :class="getTypes.length>13?'navbar__categories__right__yes':'navbar__categories__right'" v-if="see" >
                     <div @click="click"  v-for="i in data" :key="i.id" class="navbar__categories__right__el">
                        <router-link :to="{name: 'goods', params: {city: 'bütün__şəhərlər', name: 'bütün_elanlar', filter: i.name}}">{{ i.name }}</router-link>
                     </div>
                  </div>
            </div>
         </div>
      </div>
   </nav>
   <nav class="nav__min__wrapper container">
      <div class="nav__min__menuBtn">
         <i class="fa fa-list" aria-hidden="true"></i>
      </div>
      <router-link to="/" class="navbar__min__center">tap.az</router-link>
      <form @submit.prevent='goGoods' action="">
         <input placeholder="Əşya və ya xidmət anlayışı" type="text">
      </form>
      <div class="navbar__min__add">
         <i class="fa fa-plus" aria-hidden="true"></i>
      </div>
   </nav>
</template>

<script>
import { mapGetters } from 'vuex';
   import City from './City.vue';
   export default {

      name: "NavbarVue",
      components: {
         City
      },
 
      computed: {
         ...mapGetters(["allCities", "getTypes", "getSubTypes"])
      },
      data() {
         return {
            city: "",
            name: "",
            see: false,
            seeCatMenu: false,
            data: [],
            navbarSee: true,
            minSee: false
         }
      },
      created() {
         if(window.innerWidth<768) {
            this.navbarSee=false
            this.minSee=true
         }
      },
      methods: {
         click() {
            this.seeCatMenu=false
         },
         setSeeCatMenu() {
            this.seeCatMenu=!this.seeCatMenu
         },
         mouseOver(id) {
            this.see=true
            this.data = this.getSubTypes.filter(item => item.uptype == id)
         },
         goGoods() {
            if(this.city == "" && this.name == "") {
               this.$router.push({name: "elanlar"});
            } else {
               this.$router.push({ name: 'goods', params: { city: this.city?this.city:"bütün_şəhərlər", name: this.name?this.name:"bütün_elanlar", filter: 'bütün_kateqoriyalar'} })
            }
         }
      }
   }
</script>

<style lang="scss" scoped>
   .nav__min__wrapper {
      .nav__min__menuBtn {
         margin-top: 7px;
      }
      input {
         border: none;
         height: 35px;
         box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
         border-radius: 10px;
         outline: none;
         color: gray;
         padding-left: 10px;
         width: 300px;
      }
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav__min__menuBtn, .navbar__min__center {
         color: #FF4F08
      }
      .nav__min__menuBtn{
         font-size: 20px;
         cursor: pointer;
      }
      .navbar__min__center {
         font-size: 30px;
         font-weight: bold;
      }
      .navbar__min__add {
         width: 20px;
         height: 20px;
         background: #FF4F08;
         color: white;
         display: flex;
         justify-content: center;
         align-items: center;
         cursor: pointer;
         border-radius: 100%;
      }
   }
   .navbar {
      background: #FF4F08;
      padding: 10px 0;
      position: relative;
      &__min__wrapper {
         display: none;
      }
      &__min__search {
         display: none;
      }
      &__categories {
         &__wrapper {
            display: flex;
         }
         padding: 20px;
         position: absolute;
         width: 100%;
         height: max-content;
         background: white;
         position: absolute;
         z-index: 200;
         top: 65px;
         left: 0;
         &__left {
            width: max-content;
            overflow: auto;
            &__yes {
               height: 500px;
               overflow-y: scroll;
            }
            &__el {
               margin-top: 5px;
               width: max-content;
               display: flex;
               column-gap: 10px;
               align-items: center;
               padding:  5px;
               &:hover {
                  background: #FFD7C7;
                  cursor: pointer;
                  border-radius: 10px 0 0 10px;
               }
               &__img {
                  width: 40px;
                  height: 40px;
                  background: #F2EAEA;
                  display: flex;
                  justify-content: center;
                  border-radius: 10px;
                  align-items: center;
                  img {
                     width: 70%;
                     height: 70%;
                     object-fit: fill;
                  }
               }
               &__name {
                  width: 180px;
               }
               &__arrow {
                  margin-left: 60px;
               }
            }
         }
         &__right {
            padding: 15px;
            overflow: auto;
            height: 500px;
            &__yes {
               height: 500px;
               padding: 15px;
               overflow-y: scroll;
  
            }
            &__el {
               padding: 15px;
               &:hover {
                  background: #FFD0C1;
                  cursor: pointer;              
               }
            }
            a {
               font-size: 18px;
               color: black;
            }
         }
      }
      a {
         text-decoration: none;
      }
      &__wrapper {
         width: 100%;
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      &__start__sr {
         height: 103%;
         padding: 5px 5px 5px 0;
         i {
            font-size: 12px;
         }
      }
      &__logo {
         font-size: 35px;
         font-family: Helvetica, Arial, sans-serif;
         color: white;
      }
      &__catalog {
         padding-top: 5px;
         color: white;
         display: flex;
         width: 70px;
         justify-content: space-between;
         align-items: center;
         text-decoration: none;
         i {
            font-size: 20px;
         }
         span {
            font-size: 15px;
            margin-left: 5px;
         }
      }
      &__search {
         width: 600px;
         &__block {
            background: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 45px;
            border-radius: 7px;
               div {
                  height: 100%;
                  input {
                     height: 90%;
                     border: none;
                     border-radius: 7px 0 0 7px;
                     outline: none;
                     padding-left: 12px;
                     width: 400px;
                  }
                  select {
                     padding: 0 15px;
                     height: 100%;
                     border: none;
                     border-radius: 0 7px 7px 0;
                     outline: none;
                     color: #BAB8BD;
                     option {
                        color: black
                     }
                  }
            }  
         }
      }
      @media (max-width: 991px) {
         .navbar {
            &__search {
               display: none;
            }
            &__min__search {
               display: block;
               &__block {
                  width: 100%;
                  background: white;
                  padding: 5px 0 5px 5px;
                  border-radius: 10px;
                  input {
                     outline: none;
                     border: none;
                     color: gray
                  }
                  select {
                     border: none;
                     outline: none;
                     appearance: none;
                     padding: 5px;
                     width: max-content;
                     color: gray
                  }
                  i {
                     color: gray
                  }
               }
            }
         
         }
      }

   }

</style>