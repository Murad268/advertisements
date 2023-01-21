<template>
   <div class="add__left">
      <div class="add__left__top">
         <div class="add__left__top__img">
            <i class="fa fa-phone" aria-hidden="true"></i>
         </div>
         <div class="add__left__top__phone">
            05567766678
         </div>
      </div>
      <div class="add__left__body">
         <div>Elanın nömrəsi: {{ getElan.id }}</div>
         <div>Baxışların sayı: {{ getElan.views }}</div>
         <div>Əlavə edilmə tarixi: {{ retDate }}</div>
      </div>
      <div class="add__left__footer">
         <i v-if="getElan.fav" @click="delled(getElan.id)" class="fa fa-heart addedFav"   aria-hidden="true"></i>
         <i v-else @click="added(getElan.id, getElan)" class="fa-regular fa-heart favor"  aria-hidden="true"></i>
         <span v-if="getElan.fav" @click="delled(getElan.id)" class="addedFav" >Seçilmişlərdən çıxar</span>
         <span v-else @click="added(getElan.id, getElan)" class="favor">Seçilmişlərə əlavə et</span>
      </div>
    
   </div>
</template>

<script>
   import { mapGetters, mapMutations } from 'vuex';
   export default {
      name: "AddVLeftVue",
      methods: {
         ...mapMutations(["addFav", "addFavorites", "deleteFav", "delFav"]),
         added(id, goods) {
            this.addFav(id)
            this.addFavorites(goods)
         },
         delled(id) {
            this.delFav(id)
            this.deleteFav(id)
         }
      },
      computed: {
         ...mapGetters(['getAllGoods']),
         getElan() {
            return this.getAllGoods.filter(item => item.id == this.$route.params.id)[0]
         },
         retDate() {
            let year = String(new Date(this.getElan.date).getFullYear());
            let getMonth = new Date(this.getElan.date).getMonth();
            let day = new Date(this.getElan.date).getDate();
            let time = new Date(this.getElan.date).getHours()+":"+new Date(this.getElan.date).getMinutes();
            let currentYear = new Date().getFullYear();
            let currentDay = new Date().getDate();
            let currentMonth = new Date().getMonth();
            let month;
            let curr;

         
            switch(getMonth) {
               case 0: 
                   month = "yanvar";
                   break
               case 1: 
                   month = "fevral";
                   break
               case 2: 
                   month = "mart";
                   break
               case 3: 
                   month = "aprel";
                   break
               case 4: 
                   month = "may";
                   break
               case 5: 
                   month = "iyun";
                   break
               case 6: 
                  month = "iyul";
                  break
               case 7: 
                  month = "avqust";
                  break
               case 8: 
                  month = "sentyabr";
                  break
               case 9: 
                  month = "oktyabr";
                  break
               case 10: 
                  month = "noyabr";
                  break
               case 11: 
                  month = "dekabr";
                  break
            }
            if(currentDay-day==1 && currentMonth==getMonth && currentYear==currentYear) {
               curr = "dünən "
               return curr + time
            } else if(currentDay == day && currentMonth==getMonth && currentYear==currentYear) {
               curr = "bu gün "
               return curr+time
            } else {
               curr = ""
               return day+" "+month+" "+year+" "+time
            }
           
           
         }
      }
   }
</script>

<style lang="scss" scoped>

   .add__left {
      padding-top: 20px;
      width: 220px;
      .favor {
            color: BLACK;
            font-size: 17px;
            cursor: pointer;
            margin-right: 5px;
         }
         .addedFav {
            color: orange;
            font-size: 17px;
            cursor: pointer;
            margin-right: 5px;
         }
      &__body {
         padding: 20px 0;
         div {
            color: gray
         }
      }
      &__top {
         padding: 20px;
         box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
         display: flex;
         justify-content: space-between;
         align-items: center;
         &__img {
            i {
               font-size: 50px;
               color: #A29DDD
            }
         }
         &__phone {
            font-size: 20px;
            font-weight: bold;
         }
      }
   }
</style>