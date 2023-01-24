<template>
   <router-link :to="{name: 'elan', params: {type: typeGet.name, subtype: subTypeGet.name, id: goods.id}}" class="goods">
      <div class="goods__top">
         <i v-if="goods.fav" @click.prevent="delled(goods.id)" class="fa fa-heart addedFav"   aria-hidden="true"></i>
         <i v-else @click.prevent="added(goods.id, goods)" class="fa-regular fa-heart favor"  aria-hidden="true"></i>
         <i v-if="goods.status=='vip'" class="fas fa-crown crown"></i>
         <img :src="require('../assets/goods/'+ getAllImages.find(item=>item.goodId==goods.id).src)" alt="">
         <div  v-if="goods.shop" class="goods__shop">
            Mağaza
         </div>
         <div class="goods__bottom">
            <div class="goods__bottom__price">
               {{currency}} AZN
            </div>
            <div class="goods__bottom__title"><a href="">{{goods.title}}</a></div>
         </div>
      </div>
      <div class="goods__bottom__time">{{ goods.city }}, {{retDate}}</div>
   </router-link>
</template>

<script>
   import { mapGetters, mapMutations } from 'vuex';
   export default {
      name: "GoodsVue",
      props: ["goods"],

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
         ...mapGetters(['getAllImages', 'favoritesList', 'getSubTypes', 'getTypes']),
         currency() {
            return this.goods.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
         },
         typeGet() {
            return this.getTypes.filter(item => item.id == this.subTypeGet.uptype)[0];
         },
         subTypeGet() {
            return this.getSubTypes.filter(item => item.id == this.goods.typeId)[0];
         },
         retDate() {
            let year = String(new Date(this.goods.date).getFullYear());
            let getMonth = new Date(this.goods.date).getMonth();
            let day = new Date(this.goods.date).getDate();
            let time = new Date(this.goods.date).getHours()+":"+new Date(this.goods.date).getMinutes();
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
   .goods {
      background: #FBFBF8;
      position: relative;
      height: 300px;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 10px;
      text-decoration: none;
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
         .addedFav {
            position: absolute;
            top: 10px;
            right: 10px;
            color: orange;
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
            a {
               font-size: 17px;
               text-decoration: none;
               color: black
            }
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
   @media (max-width: 991px) {
      .goods {
         height: 280px;
         &__top {
            height: 170px;
         }
         &__bottom__time {
            font-size: 11px;
         }
      }
   }

   @media (max-width: 768px) {
      .goods {
         height: 260px;
         &__top {
            height: 150px;
         }
         &__bottom__time {
            font-size: 11px;
         }
      }
   }
</style>