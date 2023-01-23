<template>
   <div class="filterReslts">
      <AddV :fl="vipResults" status="vip"/>
      <AddV :fl="lastResults" status="last"/>   
   </div>
   <div v-if="see<allGoods" class="filterReslts__pagination">
      <a-pagination @change="changePage"  :pageSize="see" :total="allGoods" />
   </div>
</template>

<script>
   import { mapGetters, mapMutations } from 'vuex';
   import AddV from '@/components/AddV.vue';

   export default {
      name: "FilterResultsVue",
      components: {
         AddV
      },
      data() {
         return {
            from: 0,
            offsite: 10,
            see: 10
         }
      },
      created() {
         this.setAdverCount(this.getResults(this.$route.params.city, this.$route.params.name, this.$route.params.filter).length)
      },
      updated() {
         this.setAdverCount(this.getResults(this.$route.params.city, this.$route.params.name, this.$route.params.filter).length)
      },
      computed: {
         ...mapGetters(['getAllGoods', 'getSubTypes', 'getTypes', 'getMin', 'getMax']),
         allGoods() {
            return this.getResults(this.$route.params.city, this.$route.params.name, this.$route.params.filter).length
         },
         vipResults() {
            let arr = this.getResults(this.$route.params.city, this.$route.params.name, this.$route.params.filter)
            if(arr) {
               return this.getResults(this.$route.params.city, this.$route.params.name, this.$route.params.filter).filter(item => item.status=="vip").slice(0, 10);
            } else {
         
            }
         },
         lastResults() {
            let copy = this.getResults(this.$route.params.city, this.$route.params.name, this.$route.params.filter)
            if(copy) {
               return copy.sort((a, b) => b.date-a.date).slice(this.from, this.offsite);
            } else {

            }
            },
         
      },
      methods: {
         ...mapMutations(['setAdverCount']),
         changePage(page) {
            this.from = (page-1)*this.see
            this.offsite=this.from+this.see
         },
         getResults(city, name, filter) {
               if(filter) {
                  if(city!="bütün_şəhərlər" && name == "bütün_elanlar" && filter == "bütün_kateqoriyalar") {
                     console.log(1)
                  return this.getAllGoods.filter(item => item.city == city  && item.price>this.getMin && item.price<this.getMax);
               } else if(city!="bütün_şəhərlər" && name!="bütün_elanlar" && filter == "bütün_kateqoriyalar") {
                  return this.getAllGoods.filter(item => item.city==city && item.title.toLowerCase().includes(name.toLowerCase()) && item.price>this.getMin && item.price<this.getMax);
               } else if(city=="bütün_şəhərlər" && name!="bütün_elanlar" && filter == "bütün_kateqoriyalar") {
                  console.log(3)
                  return this.getAllGoods.filter(item => item.title.toLowerCase().includes(name.toLowerCase()) && item.price>this.getMin && item.price<this.getMax);
               } else if(city!="bütün_şəhərlər" && name == "bütün_elanlar" && filter == "bütün_kateqoriyalar") {
                  console.log(4)
                  return this.getAllGoods.filter(item => item.title.toLowerCase().includes(name.toLowerCase()) && item.price>this.getMin && item.price<this.getMax);
               } else {
                  console.log(5)
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
                     const subTitles = this.getSubTypes.filter(item => item.uptype==id )
                     subTitles.forEach(title => {
                        let goods = this.getAllGoods.find(item => item.typeId==title.id && item.price>this.getMin && item.price<this.getMax)
                        if(goods) {
                           arr.push(goods)
                        }
                     })
                  
                     return arr
                  }   
               }
            } else {
               return this.getAllGoods.filter(item => item.price>this.getMin && item.price<this.getMax)
            }
         }
      }
   }
</script>

<style lang="scss" scoped>
   .filterReslts {
      margin-top: 40px;
      &__pagination {
         width: max-content;
         margin: 0 auto;
         margin-top: 30px;
      
      }
   }
</style>