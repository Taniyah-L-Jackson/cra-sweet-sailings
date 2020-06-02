import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { StateProvider } from './cart/gear/state'

//pages
import Nav from './components/nav'
import Home from './components/home'
import About from './components/about'
import Products from './components/products'
import ProductsSingle from './components/productsSingle'
import Person from './components/personInfo'
import Card from './components/cardInfo'
import Confirm from './components/confirm'
import Feedback from './components/feedback'
import Footer from './components/footer'

//cart
import ShowCart from './cart/cartList'


function App() {

  // All items related to cart are global variables
  const initialState = {
    count: 0, //tbe counter next to cart
    cart: [], //items in cart
    total: 0, //total price
  }
    

  const reducer = (state, action) => {
    switch (action.type) { //refers to dispatch action
      
      case 'changeCart': //updates cart items
        return {
          ...state,
          cart: action.newCart,
        };
      
      case 'changeCount': //updates cart count
        return {
          ...state,
          count: action.newCount
        }
      
      case 'changeTotal': //updates cart's total price
        return {
          ...state,
          total: action.newTotal
        }
        
      default: //display new state
        return state;
    }
  };
  
  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}> {/*Used to make the cart global on pages*/}
          <Nav/> {/* kept outside switch to remain stagnant */}
          <Switch> {/* flip page content based on path link */}
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About}/>
            <Route path='/feedback' component={Feedback} />
            <Route path='/products' component={Products} exact/> 
            <Route path='/products/:id' component={ProductsSingle}/>
            <Route path='/cartItems' component={ShowCart}/>
            <Route path='/personInfo' component={Person} />
            <Route path='/cardInfo' component={Card} />
            <Route path='/confirm' component={Confirm}/> 
          </Switch>
          <Footer/> {/* kept outside switch to remain stagnant */}
      </StateProvider>
    </>
  );
}

export default App;
//make a redirect route
//make a 404 page