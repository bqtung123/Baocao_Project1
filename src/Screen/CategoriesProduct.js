import data from '../data.js';
import {Link} from 'react-router-dom'
import React,{useContext,useState} from 'react'
import CartContext from '../Context/Context'
import Banner from './Banner.js'
import SideBarContext from '../Context/SideBarContext'
function CategoriesProduct(props){
    console.log(props.match.params.id);
       const {dispatch}=useContext(CartContext);
       const [input,setInput]=useState('');
       const [select,setSelect]=useState('');
       const {productList,start}=useContext(SideBarContext);
      
    return (
       <div>
              <div className='search'>
                      <input id='ip' type='text' value={input} placeholder='Search Anything You Want......' onChange={(event)=>setInput(event.target.value)}/>
                      <div id='srch' onClick={()=>start({type:"SEARCH",query:input,all:data.products})}>
                      <i className="fas fa-search"></i>
                      </div>
              </div>
              <Banner/>
                  <div className='function'>
                      
                       
                       <div className='List'>
                        <div className='Label'>Filter:</div>
                        <select className='filter' value={select} onChange={(event)=> setSelect(event.target.value)} onClick={()=>start({type:'FILTER',query:select,all:data.products,id:props.match.params.id})}>
                                        <option value="ALL">ALL</option>
                                        <option value="Under 100$"> Less 100$</option>
                                        <option value="From 100$ to under 250$">100$ - 250$</option>
                                        <option value="From 250$ to under 500$"> 250$ - 500$</option>
                                        <option value="From 500$"> Greater 500$</option>
                        </select>        
                   </div>
                 
                   </div>
              <ul className="grid-container">
     {productList.length>0?productList.map(product => 
        <li key={product.id}>
               <div className="grid-item">
                       <Link to={'/product/'+product.id}><img src={product.img} alt={product.name}></img></Link>
                       <p className="name"><Link to={'/product/'+product.id}>{product.name}</Link></p>
                       <p className="brand">{product.brand}</p>
                       <p className='price'>${product.price}.00</p>
                
                       <div className='addToCart' onClick={() => dispatch({type:'ADD_TO_CART',product,id:product.id})} >
                              ADD TO CART  </div>
                                {product.status==='hot' ?<div className='hot'>Hot</div>:''}
                                {product.status==='new' ?<div className='new'>New</div>:''}
               </div>
       </li>): 'Not Found'
       }
       </ul>
       </div>
    ) ;

}

export default CategoriesProduct