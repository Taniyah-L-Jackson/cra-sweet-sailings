import React from 'react'
import { useStateValue } from '../cart/gear/state'

//Add items to cart
function AddToCart(props) {
  const [{cart, count, total}, dispatch] = useStateValue()

  return (
      <>
          <button
              style={{height: '60px', width: '40%', borderRadius: '30px', border:'none', fontSize: '20px', fontFamily: 'Lob2', background: '#3F2A2D', color: 'white'}}

              onClick={() => {
                  let items = cart
                  let found = false; //used to check if item is new or already in cart

                  items.forEach(cartItem => {
                      if (cartItem.id === props.id) {
                          cartItem.qty += 1;
                          found = true;
                      } 
                  });
              
                  if (!found) {
                    items.push({
                        id: props.id,
                        title: props.title,
                        price: props.price,
                        qty: 1
                      });
                  }
                  
                  dispatch({
                      type: 'changeCart',
                      newCart: items
                  })

                  dispatch({
                    type: 'changeCount',
                    newCount: count + 1
                })

                dispatch({
                    type: 'changeTotal',
                    newTotal: total + props.price
                })

              }}>
                Add to Cart
          </button>          
      </>
  )
}

export default AddToCart

// dispatch calls the reducer method and updates the cart's state 
