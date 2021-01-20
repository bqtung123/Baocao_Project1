import React, { useContext } from 'react'
import Context from '../Context/Context'
import StripeCheckout from 'react-stripe-checkout'

function Cart(){
    const {shoppingCart,totalPrice,Qty,dispatch}=useContext(Context)
  const handleToken=(token)=>{
    console.log(token);
  }
    return (
        <div className='cart-container'>
            <div className='cart-details' style={{marginTop:'30px'}}>
                    {shoppingCart.length>0?
                    shoppingCart.map(cart => 
                        <div className='cart' key={cart.id}>
                                    <span className='cart-image'><img src={cart.img} alt='not found'></img></span>
                                    <span className='cart-product-name'>{cart.name}</span>
                                    <span className='cart-product-price'>${cart.price}.00</span>
                                    <span className='inc' onClick={()=>dispatch({type:"INCREMENT",cart,id:cart.id})}><i className="fas fa-plus"  ></i></span>
                                    <span className='product-quantity'>{cart.qty}</span>
                                    <span className='dec' onClick={()=>dispatch({type:"DECREMENT",cart,id:cart.id})}><i className="fas fa-minus"></i></span>
                                    <span className='product-total-price'>${cart.price*cart.qty}.00</span>
                                    <span className='delete-product' onClick={()=>dispatch({type:"REMOVE",cart,id:cart.id})}><i className="fas fa-trash-alt" ></i></span>
                        </div>
            
                    )
                    : "Sorry your cart is currently empty"
                    }
            </div>
            {shoppingCart.length>0? <div className='cart-summary'>
                            <div className='summary'>
                                            <h3>Cart Summary</h3>
                                            <div className='total-items'>
                                                        <div className='items'>Total Items</div>
                                                        <div className='items-count'>{Qty}</div>
                                            </div>
                                            <div className='total-price-section'>
                                                        <div className='just-title'>Total Price</div>
                                                        <div className='items-price'>${totalPrice}.00</div>
                                            </div>
                                            <div className='stripe-section'>
                                          <StripeCheckout
                                          stripeKey='pk_test_51HxEFEEoYMwU5DZRzYOFEFOx7X5d9Fgj8ZmNQM78lxGZhu3AFetR1xNcYfl3vH0JvTAKzBXgZ0pcx9Z7rIcDjx2F00SJaBpqqn'
                                          token={handleToken}
                                          billingAddress
                                          shippingAddress
                                          amount={totalPrice*100}
                                          name='All products'
                                          >
                                              
                                          </StripeCheckout>
                                            </div>

                            </div>
                    </div>
                    :' '  }
        </div>

    )
  ;
}

export default Cart