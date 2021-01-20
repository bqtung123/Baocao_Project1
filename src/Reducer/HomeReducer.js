const HomeReducer=(state,action)=>{
  if(action.type==='SEARCH'){
    return   action.all.filter(product => product.name.indexOf(action.query)>=0);
  }
  if(action.type==='FILTER'){
          if(action.id){
                  action.all=action.all.filter(product => product.name.indexOf(action.id)>=0);
          }
     if(action.query==='ALL'){  
             action.all.sort(function(a, b){return 0.5 - Math.random()});
         return action.all;
}

    if(action.query==='Under 100$')
            return action.all.filter(product=>product.price < 100 );
    if(action.query==='From 100$ to under 250$')
            return action.all.filter(product=>product.price >= 100 && product.price < 250 );
    if(action.query==='From 250$ to under 500$')
            return action.all.filter(product=>product.price >= 250 && product.price < 500 );
    if(action.query==='From 500$')
            return action.all.filter(product=>product.price >= 500 );
  }
  if(action.type==='DESCENDING'){
         state.sort(function(a,b){return b.price-a.price} );
  }
  if(action.type==='ASCENDING'){
        state.sort(function(a,b){return a.price-b.price} );
 }
  return state;
}

export default HomeReducer