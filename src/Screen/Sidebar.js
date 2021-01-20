import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import SideBarContext from '../Context/SideBarContext'
import data from '../data.js';
const closeMenu=()=>{
    document.querySelector('.sidebar.open').classList.remove("open")
  }
function Sidebar(){
    const {start}=useContext(SideBarContext);
return (
    <aside className="sidebar">
    <h3>Shopping Categories</h3>
    <button onClick={closeMenu} className='menuButton close-button'> &#9776;</button>
    <ul >
        <li><Link to='/CategoriesProduct/Pants'  onClick={()=>{start({type:"SEARCH",query:'Pants',all:data.products});closeMenu()}}>Pants</Link></li>
        <li><Link to='/CategoriesProduct/shirt' onClick={()=>{start({type:"SEARCH",query:'shirt',all:data.products});closeMenu()}}>T-shirt</Link></li>
        <li><Link to='/CategoriesProduct/Jacket' onClick={()=>{start({type:"SEARCH",query:'Jacket',all:data.products});closeMenu()}}>Jacket</Link></li>
        <li><Link to='/CategoriesProduct/Hat' onClick={()=>{start({type:"SEARCH",query:'Hat',all:data.products});closeMenu()}}>Hat</Link></li>
    </ul>
</aside>

)

}

export default Sidebar
