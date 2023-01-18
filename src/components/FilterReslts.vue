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
         ...mapGetters(['getLastGoods']),
         vipResults() {
            let arr = this.getResults(this.$route.params.city, this.$route.params.name, this.$route.params.filter)
            if(arr) {
               return this.getResults(this.$route.params.city, this.$route.params.name, this.$route.params.filter).filter(item => item.status=="vip");
            } else {
               console.log(arr)
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
               console.log("a")
               return this.getLastGoods.filter(item => item.city == city);
            } else if(city!="bütün_şəhərlər" && name!="bütün_elanlar" && filter == "bütün_kateqoriyalar") {
               console.log("b")
               return this.getLastGoods.filter(item => item.city==city && item.title.toLowerCase().includes(name.toLowerCase()));
            } else if(city=="bütün_şəhərlər" && name!="bütün_elanlar" && filter == "bütün_kateqoriyalar") {
               console.log("c")
               return this.getLastGoods.filter(item => item.title.toLowerCase().includes(name.toLowerCase()));
            } else if(city!="bütün_şəhərlər" && name == "bütün_elanlar" && filter == "bütün_kateqoriyalar") {
               console.log("d")
               return this.getLastGoods.filter(item => item.title.toLowerCase().includes(name.toLowerCase()));
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