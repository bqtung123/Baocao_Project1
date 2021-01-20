import React,{useState,useContext} from 'react'
import data from '../data.js';
import { Link } from 'react-router-dom';
import Context from '../Context/Context'

function ProductScreen(props){
    console.log(props.match.params.id);
    const product=data.products.find(x => x.id ===props.match.params.id )
    const {dispatch}=useContext(Context)
    const [quantity,setQty]=useState(1);
    return  (
        <div >
            <div className='back-to-result'>
                <Link to='/'>Back to result</Link>
            </div>
    
            <div className='details'>
    
                <div className='details-image'>
                    <img src={product.img} alt="product"></img>
                </div>
                    
                <div className='details-infor'>
                    <ul>
                    <li> 
                        <h4>{product.name}</h4>
                    </li>
    
                    <li>
                        {product.rate} Stars ({product.review} Reviews)
                    </li>
    
                    <li>
                      Price:  <b> ${product.price}.00</b>
                    </li>
    
                    <li>
                        Description:
                        <div>
                            {product.description}
                        </div>
                    </li>
                    </ul>
                </div>
                
                <div className='details-action'>
                        <ul>
                                <li>
                                    Price: ${product.price*quantity}.00
                                </li>
    
                                <li>
                                    Status:{product.status}
                                </li>
    
                                <li>
                                  <span> Qty: </span> 
                                    <span className='inc' onClick={()=>setQty(quantity+1)}><i className="fas fa-plus"  ></i></span>
                                            <span>{"    "+quantity+"    "}</span>  
                                     <span className='dec'  onClick={()=>quantity>1?setQty(quantity-1):''}><i className="fas fa-minus"></i></span>
                                </li>
    
                                <li>
                                    <button class='button' onClick={()=>dispatch({type:'ADD_TO_CART',id:product.id,product,quantity:quantity})}>ADD TO CART</button>
                                </li>
    
    
                        </ul>
                </div>
            </div>
           
         </div>
         )
        ;
}

export default ProductScreen