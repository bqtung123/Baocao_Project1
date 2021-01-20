import React,{useReducer} from 'react'
import cartReducer from '../Reducer/CartReducer'
import CartContext from './Context'


function CartContextProvider(props){
    const [state,dispatch]=useReducer(cartReducer,{shoppingCart:[],totalPrice:0,Qty:0})
   return (
      <CartContext.Provider value={{...state,dispatch}}>
             {props.children}
      </CartContext.Provider>
   )
}

export default CartContextProvider