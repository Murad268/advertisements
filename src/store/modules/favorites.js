export default({
   state: {
      favorites: localStorage.getItem('favorites')? JSON.parse(localStorage.getItem('favorites')) : []
   },
   mutations: {
      addFavorites(state, favorites) {
         state.favorites=[...state.favorites, favorites];
         localStorage.setItem('favorites', JSON.stringify(state.favorites))
         console.log(state.favorites)
      }
   },
   actions: {  
   }
})