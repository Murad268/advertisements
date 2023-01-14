let show = [
   {id: 1, goodId: 1, src: "id1-1"},
   {id: 2, goodId: 2, src: "id2-1"},
   {id: 3, goodId: 3, src: "id3-1"},
   {id: 4, goodId: 4, src: "id4-1"},
   {id: 5, goodId: 5, src: "id5-1"},
   {id: 6, goodId: 6, src: "id6-1"},
   {id: 7, goodId: 7, src: "id7-1"},
   {id: 8, goodId: 8, src: "id8-1"},
   {id: 9, goodId: 9, src: "id9-1"},
   {id: 10, goodId: 10, src: "id10-1"},
   {id: 11, goodId: 11, src: "id11-1"},  
   {id: 12, goodId: 12, src: "id12-1"},
   {id: 13, goodId: 13, src: "id13-1"},
   {id: 14, goodId: 14, src: "id14-1"},
   {id: 15, goodId: 15, src: "id15-1"},
   {id: 16, goodId: 16, src: "id16-1"},
   {id: 17, goodId: 17, src: "id17-1"},
   {id: 18, goodId: 18, src: "id18-1"},
   {id: 19, goodId: 19, src: "id19-1"},
   {id: 20, goodId: 20, src: "id20-1"},
   {id: 21, goodId: 21, src: "id21-1"},
   {id: 22, goodId: 22, src: "id22-1"},
   {id: 23, goodId: 23, src: "id23-1"},
   {id: 24, goodId: 24, src: "id24-1"},
   {id: 25, goodId: 25, src: "id25-1"},
   {id: 26, goodId: 26, src: "id26-1"},
   {id: 27, goodId: 27, src: "id27-1"},
   {id: 28, goodId: 28, src: "id28-1"},
   {id: 29, goodId: 29, src: "id29-1"},
   {id: 30, goodId: 30, src: "id30-1"},
   {id: 31, goodId: 31, src: "id31-1"}
]

function getAllImages(state, goodId) {
   return state.find(item=>item.goodId==goodId);
 }

 console.log(getAllImages(show, 1).src)