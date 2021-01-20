const cartReducer=(state,action) =>{
      let newItem;
      let updatedPrice;
      let indexItem;
      
      if(action.type==='ADD_TO_CART'){
           const check=state.shoppingCart.find(product => product.id ===action.id);
           if(check){
                 return state;
           }
           else{
                newItem=action.product;
                newItem['qty']=action.quantity?action.quantity:1;
                updatedPrice=newItem.price*newItem['qty'];
                 return{totalPrice:state.totalPrice+updatedPrice,Qty:state.Qty+newItem['qty'],shoppingCart:[...state.shoppingCart,newItem]}

           }

      }
      if(action.type==='INCREMENT'){
             action.cart.qty++;
             updatedPrice=action.cart.price;
             return {...state,totalPrice:state.totalPrice+updatedPrice,Qty:state.Qty+1};

      }
      if(action.type==='DECREMENT'){
             if(action.cart.qty>1)  {action.cart.qty--;
            updatedPrice=action.cart.price;
            return {...state,totalPrice:state.totalPrice-updatedPrice,Qty:state.Qty-1};}

     }
     if(action.type==='REMOVE'){
         indexItem=state.shoppingCart.findIndex(product => product.id===action.id);
         updatedPrice=action.cart.qty*action.cart.price;
         state.shoppingCart.splice(indexItem,1)
         return {...state,totalPrice:state.totalPrice-updatedPrice,Qty:state.Qty-action.cart.qty};
     }
      return state;
}

export default cartReducer