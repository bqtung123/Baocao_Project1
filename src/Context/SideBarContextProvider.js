import React,{useReducer} from 'react'
import SideBarContext from './SideBarContext'
import HomeReducer from '../Reducer/HomeReducer'
import data from '../data.js';
function SideBarContextProvider(props){
    const [productArray,start]=useReducer(HomeReducer,[...data.products]);
   return (
      <SideBarContext.Provider value={{productList:[...productArray],start}}>
             {props.children}
      </SideBarContext.Provider>
   )
}

export default SideBarContextProvider