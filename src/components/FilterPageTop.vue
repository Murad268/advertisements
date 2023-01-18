<template>
   <div class="filterPage">
         <div class="container">
            <div class="filterPage__wrapper">
               <div class="filterPage__top">Bütün kateqoriyalar</div>
               <div class="filterPage__bottom">
                  Bütün kateqoriyalar <span>({{ getTypes.length }})</span>
               </div>
            </div>
            <div class="filterPage__footer">
               <div @click.self="setSee" class="filterPage__curr">
                 <div> Qiymət, AZN <span>🢓</span></div>
                     <div v-if="seeBot" class="filterPage__curr__inputs">
                        <div>
                           <input v-model="minMax.min" placeholder="min." type="text">
                           -
                           <input v-model="minMax.max" placeholder="min." type="text">
                        </div>
                     </div>
               </div>
         
               <div @click="setMinMax" class="text-primary filterPage__btn">Tətbiq et</div>
            </div>
            <div v-if="$route.params.filter=='bütün_kateqoriyalar'" class="filterPage__filter">
               <filterPageFilter  v-for="filter in getTypes" :key="filter.id" :type="filter"/>
            </div>
            <div v-if="$route.params.filter != 'bütün_kateqoriyalar'" class="filterPage__filter">
               <filterPageFilter v-for="filter in gett" :key="filter.id" :type="filter"/>
            </div>
            <FilterResltsVue/>
         </div>
      </div>
</template>

<script>
   import { mapGetters, mapMutations } from 'vuex';
   import filterPageFilter from './filterPageFilter.vue';
   import FilterResltsVue from './FilterReslts.vue';
   export default {
      name: "FilterTopVue",
      components: {
         filterPageFilter,
         FilterResltsVue
      }, 
      computed: {
         ...mapGetters(['getTypes', 'getSubTypes']),
         gett() {
            try {
               let id = this.getTypes.filter(item => item.name==this.$route.params.filter)[0].id;
               return this.getSubTypes.filter(item => item.uptype==id)  
            } catch {
               return []
            }
         }
      },
      data() {
         return {
            seeBot: true,
            data : "",
            minMax: {
               min: 1,
               max: 10000000
            }
         }
      },
      methods: {
         ...mapMutations(["getMNinMax"]),
         setSee() {
            return this.seeBot=!this.seeBot
         },
         setMinMax() {
            this.getMNinMax(this.minMax)
         }
      }
   }
</script>

<style lang="scss" scoped>
   .filterPage {
      padding: 20px 0;
      &__filter {
         padding: 10px;
         margin-top: 20px;
         background: #F6F7FA;
         display: grid;
         grid-template-columns: repeat(4, 1fr);
      }
      &__top {
         color: gray;
         font-size: 17px;
      }
      &__bottom {
         font-size: 19px;
         font-weight: bold;
         margin-top: 20px;
         span {
            color: gray;
            font-size: 17px;
         }
      }
      &__footer {
         margin-top: 30px;
         display: flex;
         justify-content: space-between;
         align-items: center;
      }
      &__curr {
         width: 140px;
         height: 40px;
         background: #FCF8F7;
         display: flex;
         justify-content: center;
         align-items: center;
         color: gray;
         cursor: pointer;
         position: relative;
         &__inputs {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            background-color: white;
            width: 220px;
            height: 50px;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            padding-left: 6px;
            bottom: -55px;
            left: 0;
            input {
               width: 90px;
               height: 40px;
               overflow: hidden;
               border: 1px solid rgba(0, 0, 0, 0.2);
               border-radius: 5px;
               padding-left: 5px;
            }
         }
         span {
            color: #FF4F08
         }
      }
      &__btn {
         width: 100px;
         height: 40px;
         background: #DAE8FF;
         display: flex;
         justify-content: center;
         align-items: center;
         color: #D1E1FE;
         cursor: pointer;
      }
   }
</style>