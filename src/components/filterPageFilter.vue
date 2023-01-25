<template>
   <router-link class="link" :to="{name: 'goods', params: {city: $route.params.city, name: $route.params.name, filter: type.name}}"><span>{{ type.name }}</span>  <span> ({{getLength.length}})</span></router-link>
</template>

<script>
   import { mapGetters } from 'vuex'
   
   export default {
      props: ["type"],
      name: "FilterPageFilter",
      computed: {
         ...mapGetters(["getTypes", "getSubTypes", "getAllGoods"]),
         getLength() {
            try{
               let id = this.getSubTypes.filter(item => item.name == this.type.name)[0].id
               if(id) {
                  return this.getAllGoods.filter(item => item.typeId==id)
               } else {
                  return []
               }
            } catch {
               let id = this.getTypes.filter(item => item.name == this.type.name)[0].id;
               let arr = [];
               const subTitles = this.getSubTypes.filter(item => item.uptype==id)
               subTitles.forEach(title => {
                  let goods = this.getAllGoods.find(item => item.typeId==title.id)
                  if(goods) {
                     arr.push(goods)
                  }
               })
               return arr
            }   
         }
      }
   }
</script>

<style lang="scss" scoped>
 
   a {
      line-height: 32px;
      text-decoration: none;

      span {
         color: gray;
      }
   }
   @media (max-width: 1200px) {
      span {
         font-size: 14px;
      }
   }
   @media (max-width: 768px) {
      span {
         font-size: 11px;
      }
   }
   @media (max-width: 556px) {
      span {
         font-size: 20px;
      }
   }
</style>