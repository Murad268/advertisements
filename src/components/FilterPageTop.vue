<template>
   <div class="filterPage">
         <div class="container">
            <div class="filterPage__wrapper">
               <div class="filterPage__top">  Bütün kateqoriyalar <span class="dot">·</span> <span v-if="$route.params.filter!='bütün_kateqoriyalar'">{{getPrevType}}</span> · <span>{{ getPrevSubType }}</span> </div>
               <div class="filterPage__bottom">
                  {{ categoryGet }} <span>({{ getAdverCount }} elan) </span>
              
               </div>
              
            </div>
            <div class="filterPage__footer">
               <div @click.self="setSee" class="filterPage__curr">
                 <div @click.self="setSee"> Qiymət, AZN <span>🢓</span></div>
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
            <div v-if="$route.params.filter=='bütün_kateqoriyalar' && getTypes.length" class="filterPage__filter">
               <filterPageFilter  v-for="filter in getTypes" :key="filter.id" :type="filter"/>
            </div>
            <div v-if="$route.params.filter != 'bütün_kateqoriyalar' && gett.length" class="filterPage__filter">
               <filterPageFilter v-for="filter in gett" :key="filter.id" :type="filter"/>
            </div>
            <FilterResltsVue />
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
         ...mapGetters(['getTypes', 'getSubTypes', "getAdverCount", "getAdverCount"]),
         getPrevType() {
           try {
            let copy = this.getSubTypes
            let id = copy.filter(filter => filter.name==this.$route.params.filter)[0].uptype;
            return this.getTypes.filter(filter => filter.id==id)[0].name;
           } catch{
               return this.categoryGet
           }
         },
         getPrevSubType() {
            try {
               let copy = this.getSubTypes
               return copy.filter(filter => filter.name==this.$route.params.filter)[0].name;
            } catch{

            }
         },
         categoryGet() {
            return this.$route.params.filter.replace("_", " ")[0].toUpperCase() + this.$route.params.filter.replace("_", " ").slice(1)
         },
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
            seeBot: false,
            data : "",
            minMax: {
               min: 1,
               max: 10000000
            },
            prev: "",
            curr: ""
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