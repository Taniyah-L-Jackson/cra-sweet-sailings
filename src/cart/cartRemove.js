import React from 'react'
import { useStateValue } from '../cart/gear/state'

//Remove items to cart
function RemoveFromCart(props) {
  const [{cart, count, total}, dispatch] = useStateValue()
  let items = cart

  return (
      <>
          <button
              style={{
                padding: '0px 15px',
                border: 'none',
                borderRadius: '20px',
                background: 'none', 
                boxShadow: '1px 1px 2px black',
                display: 'inline-block'}}

              onClick={() => {

                  items.forEach(cartItem => {
                      if (cartItem.id === props.id) {
                          cartItem.qty -= 1;
                      } 

                    if (cartItem.qty === 0) {
                        items = items.filter(product => product.qty > 0)
                    }
                  });

                  let updateCount = count - 1
                  if (updateCount < 0) {
                      return updateCount
                  }

                  dispatch({
                      type: 'changeCart',
                      newCart: items
                  })

                  dispatch({
                    type: 'changeCount',
                    newCount: updateCount
                })

                dispatch({
                    type: 'changeTotal',
                    newTotal: total - props.price
                })
              }}>
              -
          </button>
          
      </>
      
  )
}

export default RemoveFromCart

// dispatch calls the reducer method and updates the cart's state 
