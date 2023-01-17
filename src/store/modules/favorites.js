export default({
   state: {
      favorites: localStorage.getItem('favorites')? JSON.parse(localStorage.getItem('favorites')) : []
   },
   mutations: {
      addFavorites(state, favorites) {
         favorites.fav=true;
         state.favorites=[...state.favorites, favorites];
         localStorage.setItem('favorites', JSON.stringify(state.favorites))
      },
      deleteFav(state, id) {
         state.favorites=state.favorites.filter(item => item.id != id);
         localStorage.setItem('favorites', JSON.stringify(state.favorites))
      }
   },
   actions: {  
   },
   getters: {
      getFavLenght(state) {
         return state.favorites.length
      },
      favoritesList(state) {
         return state.favorites
      }
   }
})