const mutations={
   UPDATE_LINKS(state,payload){
       state.links=payload;
     /*var newData = state.products.concat(payload.data);
      var dup = newData.filter((product, index, self) =>
          index === self.findIndex((t) => (
              t.id === product.id
          ))
      )
    state.products=dup ;*/

  },

};

export default mutations;