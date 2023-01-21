<template>
   <div class="addoneabout">
      <div class="addoneabout__chars">
         <div v-if="getInfo.city != ''" class="addoneabout__char">
            <div class="addoneabout__char__name">Şəhər</div>
            <div class="addoneabout__char__desc">{{getInfo.city}}</div>
         </div>
         <hr v-if="getInfo.city != ''">
         <div class="addoneabout__char">
            <div class="addoneabout__char__name">Elanın tipi</div>
            <div class="addoneabout__char__desc">{{getType.name}}</div>
         </div>
         <hr v-if="getInfo.city != ''">
         <div v-if="getInfo.new != ''" class="addoneabout__char">
            <div class="addoneabout__char__name">Yeni</div>
            <div class="addoneabout__char__desc">{{ getInfo.new?'bəli':'xeyr' }}</div>
         </div>
         <hr v-if="getInfo.new != ''">
         <div v-if="getInfo.delivery" class="addoneabout__char">
            <div class="addoneabout__char__name">Çatdırılma</div>
            <div class="addoneabout__char__desc">{{getInfo.delivery?'bəli':'xeyr'}}</div>
         </div>
         <hr v-if="getInfo.delivery">
      </div>
      <div class="addoneabout__desc">
       
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, animi deserunt! Aperiam recusandae itaque libero blanditiis voluptatum aliquam quae id quos cumque architecto rem, neque fugiat rerum asperiores! Eveniet dolores repudiandae porro magnam excepturi adipisci culpa fuga totam ab, necessitatibus, voluptatum mollitia reprehenderit voluptatibus.
      </div>
   </div>
</template>

<script>
   import { mapGetters } from 'vuex';
   export default {
      name: "AddOneAboutVue",
      computed: {
         ...mapGetters(['getAllGoods', 'getSubTypes']),
         getInfo() {
            return this.getAllGoods.filter(item => item.id == this.$route.params.id)[0]
         },
         getType() {
            return this.getSubTypes.filter(item => item.id == this.$route.params.id)[0];
         }
      }
   }
</script>

<style lang="scss" scoped>
   .addoneabout {
      padding: 20px;
      &__desc {
         margin-top: 30px;
         width: 600px;
         text-align: justify;
      }
      hr {
         margin-top: 6px;
         width: 320px;
      }
      &__chars {
         width: 400px;
      }
      &__char {
         display: flex;
         justify-content: space-between;
         &__name {
            color: gray;
            font-weight: bold;
            font-size: 18px;
         }
         &__desc {
            font-weight: bold;
            width: 200px;
            font-size: 18px;
         }
      }
   }
</style>