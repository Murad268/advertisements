export default ({
   state: {
      left: false
   },
   getters: {
      getLeft(state) {
         return state.left
      }
   },
   mutations: {
      setLeft(state) {
         state.left = true
      },
      closeMenu(state) {
         state.left = false
         console.log("a")
      }
   }
})