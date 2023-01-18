<template>
   <div class="filterReslts">
      <AddV :fl="vipResults" status="vip"/>
      <AddV :fl="lastResults" status="last"/>   
   </div>
</template>

<script>
   import { mapGetters } from 'vuex';
   import AddV from '@/components/AddV.vue';

   export default {
      name: "FilterResultsVue",
      components: {
         AddV
      },
      computed: {
         ...mapGetters(['getAllGoods', 'getSubTypes', 'getTypes', 'getMin', 'getMax']),
         vipResults() {
            let arr = this.getResults(this.$route.params.city, this.$route.params.name, this.$route.params.filter)
            if(arr) {
               return this.getResults(this.$route.params.city, this.$route.params.name, this.$route.params.filter).filter(item => item.status=="vip");
            } else {
         
            }
         },
         lastResults() {
            let copy = this.getResults(this.$route.params.city, this.$route.params.name, this.$route.params.filter)
            if(copy) {
               return copy.sort((a, b) => b.date-a.date);
            } else {

            }
            },
         
      },
      methods: {
         getResults(city, name, filter) {
            if(city!="bütün_şəhərlər" && name == "bütün_elanlar" && filter == "bütün_kateqoriyalar") {
               return this.getAllGoods.filter(item => item.city == city  && item.price>this.getMin && item.price<this.getMax);
            } else if(city!="bütün_şəhərlər" && name!="bütün_elanlar" && filter == "bütün_kateqoriyalar") {
               return this.getAllGoods.filter(item => item.city==city && item.title.toLowerCase().includes(name.toLowerCase()   && item.price>this.getMin && item.price<this.getMax));
            } else if(city=="bütün_şəhərlər" && name!="bütün_elanlar" && filter == "bütün_kateqoriyalar") {
               return this.getAllGoods.filter(item => item.title.toLowerCase().includes(name.toLowerCase()) && item.price>this.getMin && item.price<this.getMax);
            } else if(city!="bütün_şəhərlər" && name == "bütün_elanlar" && filter == "bütün_kateqoriyalar") {
               return this.getAllGoods.filter(item => item.title.toLowerCase().includes(name.toLowerCase()) && item.price>this.getMin && item.price<this.getMax);
            } else {
               try{
                  let id = this.getSubTypes.filter(item => item.name == filter)[0].id
                  if(id) {
                     return this.getAllGoods.filter(item => item.typeId==id && item.price>this.getMin && item.price<this.getMax)
                  } else {
                     return []
                  }
               } catch {
                  let id = this.getTypes.filter(item => item.name == filter)[0].id;
                  let arr = [];
                  const subTitles = this.getSubTypes.filter(item => item.uptype==id && item.price>this.getMin && item.price<this.getMax)
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
   }
</script>

<style lang="scss" scoped>
   .filterReslts {
      margin-top: 40px;
   }
</style>