import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../cart/gear/state'
import RemoveFromCart from './cartRemove'

function Empty() {

    return (

        <div style={{height: '525px', background: '#F1E7D2'}}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <img className='center-block img-responsive' 
                        style={{height: '300px', maxWidth: '100%', padding: '60px'}} src="/cra-sweet-sailings/media/shoppingBag.png" alt="sad shopping bag"/>
                        <h1 style={{margin: '0px', fontSize: '45px', fontFamily: 'Lob2', textAlign: 'center'}}>Nothing In Cart</h1>
                    </div>
                </div> 
            </div>
        </div>
    )
}

function Loading() {
    return (
        <>
            <h2>Loading...</h2>
        </>
    )
}

function ShowCart() {

  const [ {cart, total} ] = useStateValue()
  const [ load ] = useState(false)

    const List = (props) => {

        return (
            <>
                <ul style={{marginTop: '35px', fontSize: '25px', fontFamily: 'SSPro'}}>

                    <li style={{padding: '0px 10px', display: 'inline'}}>
                        {props.title} 
                    </li>

                    <li style={{padding: '0px 10px', display: 'inline'}}>
                        Qty: {props.qty}
                    </li>

                    <li style={{padding: '0px 10px', display: 'inline'}}>
                        <RemoveFromCart id={props.id} {...props}/>
                    </li>

                </ul>
 
            </>
        )
    }
        
    const show = cart.length === 0 ? {display: 'none'} : {display: 'block'}

    const productSlides = load ? <Loading /> : cart.map((item, idx) => {

        return <List key={idx} {...item}/>})


    return (
        <>
            {cart.length === 0 ? <Empty/> :

                <div style={{height: '525px', background: '#F1E7D2'}}>
                    <div className="container">

                        <div className="row">
                            <div className="col-sm-8" style={{height: '350px', marginTop: '60px', background: 'whitesmoke', overflowY: 'scroll'}}>
                                {productSlides}
                            </div>

                            <div className="col-sm-4" style={show}>
                                <h2 style={{marginTop: '80%', fontFamily: 'Lob2', fontSize: '40px', textAlign: 'center'}}>Total: ${total.toFixed(2)}</h2>
                                
                                <Link to='/personInfo' style={{color: 'white'}}>
                                    <button style={{height: '60px', width: '100%', borderRadius: '15px', boxShadow: '0px 5px 5px black', background: 'green', fontSize: '30px', fontFamily: 'Lob2Bold', textAlign: 'center'}}>
                                        Checkout
                                    </button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default ShowCart
