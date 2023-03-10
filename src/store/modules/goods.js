export default({
   state: {
      from: 0,
      offsite: 10,
      see: 10,
      min: 1,
      max: 1000000,
      adverCount: 0,
      goods: localStorage.getItem('goods')?JSON.parse(localStorage.getItem('goods')):[
         {id:1, marka: "Tümosan", new: true, delivery: true, typeId: 5, views: 911, fav: false, city: "Bakı", shop: true, title: "Tümosan 5275, 2021 il", price: 12211, date: "2023-01-12 12:45", src: "", status: "vip"},
         {id: 2, marka: "ITM", new: false, delivery: false, typeId: 5, views: 12, fav: false, city: "Qusar", shop: true, title: "Tırtıllı Ekskavator \"CASE CE CX350-8\", 2021 il", price: 297000 , date: "2021-05-12 09:33", src: "", status: "ad"},
         {id: 3, marka: "LADA", new: false, delivery: false, typeId: 3, views: 2211, fav: false, city: "Ağcabədi", shop: false, title: "LADA (VAZ) 2106, 2003 il", price: 7100, date: "2020-02-09", src: "", status: "ad"},
         {id: 4, marka: "", new: false, delivery: false, typeId: 7, views: 25678, fav: false, city: "Gəncə", shop: true, title: "Ofis oturacağı", price: 28, date: "2017-02-08 03:12", src: "", status: "ad"},
         {id: 5, marka: "", new: false, delivery: false, typeId: 11, views: 21124, fav: false, city: "Quba", shop: true, title: "Jalüz pərdə", price: 38, date: "2021-05-12 11:29", src: "", status: "vip"},
         {id: 6, marka: "Asus", new: true, delivery: true, typeId: 27, views: 5433, fav: false, city: "Ağdam", shop: false, title: "Asus Tuf Gaming FX507ZM-RS73", price: 2645, date: "2022-12-30 18:25", src: "", status: "vip"},
         {id: 7, marka: "İphone", new: true, delivery: true, typeId: 18, views: 4321, fav: false, city: "İsmayıllı", shop: true, title: "Apple iPhone 14 Pro Space Black 256GB/6GB", price: 2639, date: "2021-04-27 16:15", src: "", status: "ad"},
         {id: 8, marka: "", new: true, delivery: "", typeId: 33, views: 213, fav: false, city: "Bakı", shop: true, title: "2-otaqlı yeni tikili, Masazır qəs. 55 m²", price: 56500, date: "2022-08-12 19:12", src: "", status: "ad"},
         {id: 9, marka: "", new: false, delivery: "", typeId: 33, views: 543, fav: false, city: "Bakı", shop: false, title: "Həyət evi, Masazır qəs", price: 165000, date: "2018-04-19 08:30", src: "", status: "ad"},
         {id: 10, marka: "", new: false, delivery: "", typeId: 33, views: 888, fav: false, city: "Bakı", shop: true, title: "Həyət evi kirayə verilir", price: 70, date: "2018-05-02 17:35", src: "", status: "vip"},
         {id: 11, marka: "", new: false, delivery: true, typeId: 41, views: 5437, fav: false, city: "Bakı", shop: true, title: "Qızıl üzük", price: 170, date: "2020-11-10 18:45", src: "", status: "ad"},
         {id: 12, marka: "Cypres Pantelleria", new: true, delivery: true, typeId: 38, views: 759, fav: false, city: "Quba", shop: false, title: "\"Cypres Pantelleria\" ətri", price: 64, date: "2019-08-07 12:30", src: "", status: "ad"},
         {id: 13, marka: "Barcode", new: true, delivery: true, typeId: 23, views: 211, fav: false, city: "Qusar", shop: true, title: "Barcode printer \"Gprinter 1124D Thermal\"", price: 275, date: "2020-09-04 13:56", src: "", status: "vip"},
         {id: 14, marka: "", new: "", delivery: "false", typeId: 51, views: 1, fav: false, city: "Gəncə", shop: true, title: "Paltaryuyan təmiri", price: 10, date: "2021-08-21 11:51", src: "", status: "vip"},
         {id: 15, marka: "", new: "", delivery: "", typeId: 49, views: 10, fav: false, city: "Naxçıvan", shop: true, title: "Dron çəkilişi", price: 100, date: "2020-13-05 09:40", src: "", status: "ad"},
         {id: 16, marka: "", new: false, delivery: false, typeId: 34, views: 9, fav: false, city: "Qusar", shop: true, title: "Konteyner", price: 8400, date: "2020-09-03 13:13", src: "", status: "ad"},
         {id: 17, marka: "", new: false, delivery: "", typeId: 51, views: 19, fav: false, city: "İsmayıllı", shop: true, title: "Prefabrik evlər tikintisi", price: 401, date: "2021-14-11 16:19", src: "", status: "ad"},
         {id: 18, marka: "", new: false, delivery: true, typeId: 43, views: 192, fav: false, city: "Masallı", shop: true, title: "Kassa", price: 90, date: "2020-11-08 03:26", src: "", status: "ad"},
         {id: 19, marka: "K22", new: true, delivery: true, typeId: 62, views: 901, fav: false, city: "Gəncə", shop: true, title: "\"K22\" simsiz mikrofon", price: 59, date: "2017-04-13 12:25", src: "", status: "vip"},
         {id: 20, marka: "", new: false, delivery: true, typeId: 65, views: 878, fav: false, city: "Qusar", shop: true, title: "\"Qarabağ FK\" imzalı forma", price: 350, date: "2019-11-11 23:56", src: "", status: "vip"},
         {id: 21, marka: "Razor", new: true, delivery: true, typeId: 74, views: 214, fav: false, city: "Qusar", shop: true, title: "\"Razor\" uşaq motosikleti", price: 600, date: "2022-12-30 19:45", src: "", status: "vip"},
         {id: 22, marka: "Medeira", new: true, delivery: false, typeId: 77, views: 532, fav: false, city: "Bakı", shop: false, title: "Uşaq çarpayısı", price: 260, date: "2021-02-07 14:00", src: "", status: "ad"},
         {id: 23, marka: "Medeira", new: true, delivery: false, typeId: 77, views: 356, fav: false, city: "Bakı", shop: true, title: "Uşaq çarpayısı", price: 300, date: "2019-22-05 13:50", src: "", status: "ad"},
         {id: 24, marka: "Medeira", new: true, delivery: false, typeId: 74, views: 643, fav: false, city: "Bakı", shop: true, title: "Uşaq oturacaqları", price: 28, date: "2020-27-12 17:20", src: "", status: "ad"},
         {id: 25, marka: "", new: "", delivery: true, typeId: 86, views: 643, fav: false, city: "Ağdaş", shop: true, title: "Şotland pişiyi (cütləşdirmək üçün)", price: 90, date: "2021-02-21 21:00", src: "", status: "vip"},
         {id: 26, marka: "", new: true, delivery: true, typeId: 82, views: 145, fav: false, city: "Lənkəran", shop: true, title: "Quş damı", price: 650, date: "2020-05-12 14:50", src: "", status: ""},
         {id: 27, marka: "", new: "", delivery: true, typeId: 85, views: 678, fav: false, city: "Zaqatala", shop: true, title: "Pomeran şpits balaları", price: 1350, date: "2021-23-02 20:20", src: "", status: "vip"},
         {id: 28, marka: "", new: "", delivery: true, typeId: 85, views: 754, fav: false, city: "Balakən", shop: false, title: "Haski", price: 40, date: "2022-07-08 02:30", src: "", status: "vip"},
         {id: 29, marka: "", new: "", delivery: "", typeId: 89, views: 280, fav: false, city: "Qax", shop: true, title: "İnək", price: 1800 , date: "2021-09-12 04:21", src: "", status: "ad"},
         {id: 30, marka: "", new: "", delivery: "", typeId: 91, views: 321, fav: false, city: "Bakı", shop: true, title: "Avtoyuyucu tələb olunur", price: 30 , date: "2021-01-01 02:11", src: "", status: "ad"},
         {id: 31, marka: "", new: "", delivery: "",  typeId: 92, views: 221, fav: false, city: "Bakı", shop: true, title: "Dayə işi axtarıram", price: 400 , date: "2022-11-27 07:30", src: "", status: "ad"}
      ],
      goodImages: [
         {id: 1, goodId: 1, src: "id1-1.png"},
         {id: 2, goodId: 1, src: "id2-1.png"},
         {id: 2, goodId: 1, src: "id2-1.png"},
         {id: 2, goodId: 1, src: "id2-1.png"},
         {id: 2, goodId: 1, src: "id2-1.png"},
         {id: 2, goodId: 1, src: "id2-1.png"},
         {id: 2, goodId: 1, src: "id2-1.png"},
         {id: 2, goodId: 2, src: "id2-1.png"},
         {id: 3, goodId: 3, src: "id3-1.png"},
         {id: 4, goodId: 4, src: "id4-1.png"},
         {id: 5, goodId: 5, src: "id5-1.png"},
         {id: 6, goodId: 6, src: "id6-1.png"},
         {id: 7, goodId: 7, src: "id7-1.png"},
         {id: 8, goodId: 8, src: "id8-1.png"},
         {id: 9, goodId: 9, src: "id9-1.png"},
         {id: 10, goodId: 10, src: "id10-1.png"},
         {id: 11, goodId: 11, src: "id11-1.png"},  
         {id: 12, goodId: 12, src: "id12-1.png"},
         {id: 13, goodId: 13, src: "id13-1.png"},
         {id: 14, goodId: 14, src: "id14-1.png"},
         {id: 15, goodId: 15, src: "id15-1.png"},
         {id: 16, goodId: 16, src: "id16-1.png"},
         {id: 17, goodId: 17, src: "id17-1.png"},
         {id: 18, goodId: 18, src: "id18-1.png"},
         {id: 19, goodId: 19, src: "id19-1.png"},
         {id: 20, goodId: 20, src: "id20-1.png"},
         {id: 21, goodId: 21, src: "id21-1.png"},
         {id: 22, goodId: 22, src: "id22-1.png"},
         {id: 23, goodId: 23, src: "id23-1.png"},
         {id: 24, goodId: 24, src: "id24-1.png"},
         {id: 25, goodId: 25, src: "id25-1.png"},
         {id: 26, goodId: 26, src: "id26-1.png"},
         {id: 27, goodId: 27, src: "id27-1.png"},
         {id: 28, goodId: 28, src: "id28-1.png"},
         {id: 29, goodId: 29, src: "id29-1.png"},
         {id: 30, goodId: 30, src: "id30-1.png"},
         {id: 31, goodId: 31, src: "id31-1.png"}
      ]
   },
   getters: {
    getSee(state) {
      return state.see
    },
    getVipGoods(state) {
      return [...state.goods.filter(item => item.status=="vip").slice(state.from, state.offsite)];
    },
    getVipCount(state) {
      return state.goods.filter(item => item.status=="vip").length
    },
    getLastGoods(state) {
      let copy = [...state.goods];
      return copy.sort((a, b) => b.date-a.date).splice(state.from, state.offsite);
    },
    getAllImages(state) {
      return state.goodImages;
    },
    getAllGoods(state) {
      let copy = [...state.goods];
      return copy.sort((a, b) => b.date-a.date)
    },
    getMin(state) {
      return state.min
    },
    getMax(state) {
      return state.max
    },
    getAdverCount(state) {
      return state.adverCount
    }
   },
   mutations: {
      changePages(state, data) {
         state.from = (data.from-1)*state.see
         state.offsite=state.from+state.see
      },
      setAdverCount(state, count) {
         state.adverCount=count
      },
      getMNinMax(state, minMax) {
         state.min=+ minMax.min,
         state.max= +minMax.max
         console.log(state.min, state.max)
      },
      addFav(state, id) {
         state.goods=state.goods.map(item=>{
            if(item.id===id) {
               return {...item, fav:true}
            } else {
               return item
            }
         }) 
         localStorage.setItem('goods', JSON.stringify(state.goods))
      },
      delFav(state, id) {
         state.goods=state.goods.map(item=>{
            if(item.id===id) {
               return {...item, fav:false}
            } else {
               return item
            }
         }) 
         localStorage.setItem('goods', JSON.stringify(state.goods))
      }
   },
   actions: {
     
   },
})