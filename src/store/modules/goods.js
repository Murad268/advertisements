export default({
   state: {
      offsite: 10,
      goods: [
         {id:1, shop: true, title: "Tümosan 5275, 2021 il", price: 12211, date: "", src: "", date: "", status: "vip"},
         {id: 2, shop: true, title: "Tırtıllı Ekskavator \"CASE CE CX350-8\", 2021 il", price: 297000 , date: "", src: "", status: "ad"},
         {id: 3, shop: false, title: "LADA (VAZ) 2106, 2003 il", price: 7100, date: "", src: "", status: "ad"},
         {id: 4, shop: true, title: "Ofis oturacağı", price: 28, date: "", src: "", status: "ad"},
         {id: 5, shop: true, title: "Jalüz pərdə", price: 38, date: "", src: "", status: "vip"},
         {id: 6, shop: false, title: "Asus Tuf Gaming FX507ZM-RS73", price: 2645, date: "", src: "", status: "vip"},
         {id: 7, shop: true, title: "Apple iPhone 14 Pro Space Black 256GB/6GB", price: 2639, date: "", src: "", status: "ad"},
         {id: 8, shop: true, title: "2-otaqlı yeni tikili, Masazır qəs. 55 m²", price: 56500, date: "", src: "", status: "ad"},
         {id: 9, shop: false, title: "Həyət evi, Masazır qəs", price: 165000, date: "", src: "", status: "ad"},
         {id: 10, shop: true, title: "Həyət evi kirayə verilir, Quba r.", price: 70, date: "", src: "", status: "vip"},
         {id: 11, shop: true, title: "Qızıl üzüklər", price: 170, date: "", src: "", status: "ad"},
         {id: 12, shop: false, title: "\"Cypres Pantelleria\" ətri", price: 64, date: "", src: "", status: "ad"},
         {id: 13, shop: true, title: "Barcode printer \"Gprinter 1124D Thermal\"", price: 275, date: "", src: "", status: "vip"},
         {id: 14, shop: true, title: "Paltaryuyan təmiri", price: 10, date: "", src: "", status: "vip"},
         {id: 15, shop: true, title: "Dron çəkilişi", price: 100, date: "", src: "", status: "ad"},
         {id: 16, shop: true, title: "Konteyner", price: 8400, date: "", src: "", status: "ad"},
         {id: 17, shop: true, title: "Prefabrik evlər tikintiki", price: 401, date: "", src: "", status: "ad"},
         {id: 18, shop: true, title: "Kassa", price: 90, date: "", src: "", status: "ad"},
         {id: 19, shop: true, title: "\"K22\" simsiz mikrofon", price: 59, date: "", src: "", status: "vip"},
         {id: 20, shop: true, title: "\"Qarabağ FK\" imzalı forma", price: 350, date: "", src: "", status: "vip"},
         {id: 21, shop: true, title: "\"Razor\" uşaq motosikleti", price: 600, date: "", src: "", status: "vip"},
         {id: 22, shop: false, title: "Uşaq çarpayısı ", price: 260, date: "", src: "", status: "ad"},
         {id: 23, shop: true, title: "Uşaq çarpayısı", price: 300, date: "", src: "", status: "ad"},
         {id: 24, shop: true, title: "Uşaq oturacaqları", price: 28, date: "", src: "", status: "ad"},
         {id: 25, shop: true, title: "Şotland pişiyi (cütləşdirmək üçün)", price: 90, date: "", src: "", status: "vip"},
         {id: 26, shop: true, title: "Quş dam", price: 650, date: "", src: "", status: ""},
         {id: 27, shop: true, title: "Pomeran şpits balaları", price: 1350, date: "", src: "", status: "vip"},
         {id: 28, shop: false, title: "Haski", price: 40, date: "", src: "", status: "vip"},
         {id: 29, shop: true, title: "İnək", price: 1800 , date: "", src: "", status: "ad"},
         {id: 30, shop: true, title: "Avtoyuyucu tələb olunur", price: 600 , date: "", src: "", status: "ad"},
         {id: 31, shop: true,title: "Dayə işi axtarıram", price: 400 , date: "", src: "", status: "ad"}
      ]
   },
   getters: {
    getVipGoods(state) {
      return state.goods.filter(item => item.status=="vip").splice(0, state.offsite);
    }
   },
   mutations: {
   },
   actions: {
   },
})