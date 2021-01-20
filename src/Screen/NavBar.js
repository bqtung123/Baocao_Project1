import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import MyContext from '../Context/Context'
const openMenu= ()=>{
    document.querySelector('.sidebar').classList.add("open")
  }

function NavBar(){
const {Qty} =useContext(MyContext);
    return  (
    <div className="header">
        <button onClick={openMenu} className='menuButton'> &#9776;</button>
        <Link to='/' id='amazona'>amazona</Link>
        <div className="sub-header">
                <div>
                      <span className='shoppingCart'>
                             <Link to='/Cart'>
                                   <i className="fas fa-cart-plus"></i>
                                   <span className='cartCount'>{Qty}</span>
                              </Link>
                              <Link to='/SignIn'>
                              <i className="fas fa-sign-in-alt"> Sign In</i>
                              </Link>
                      </span>
                </div>
        </div>
    </div>
    )
}
export default NavBar