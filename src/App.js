import React from 'react'
import  './index.css'
import HomeScreen from './Screen/HomeScreen.js'
import ProductScreen from './Screen/ProductScreen.js'
import CategoriesProduct from './Screen/CategoriesProduct.js'
import Cart from './Screen/Cart.js'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import CartContextProvider from './Context/CartContext'
import SideBarContextProvider from './Context/SideBarContextProvider'
import NavBar from './Screen/NavBar'
import SingIn from './Screen/SignIn'
import Sidebar from './Screen/Sidebar'

  class App extends React.Component{
    
    
    render(){
    return (
    <BrowserRouter>
    <CartContextProvider> 
      <SideBarContextProvider>
              <NavBar/>   
                    <main>
                            <Switch>
                              <Route path='/' exact={true} component={HomeScreen}></Route>
                              <Route path='/product/:id'  component={ProductScreen}/> 
                              <Route path='/Cart' component={Cart}></Route>
                              <Route path='/SignIn' component={SingIn}></Route>
                              <Route path='/CategoriesProduct/:id' component={CategoriesProduct}></Route>
                            </Switch>
                      </main>
                      <Sidebar/>
      </SideBarContextProvider>
   </CartContextProvider>            
   </BrowserRouter>


            );
    }
  }


  export default App;

 