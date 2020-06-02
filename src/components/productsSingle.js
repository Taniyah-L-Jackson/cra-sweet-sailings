import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../cart/gear/state'
import AddToCart from '../cart/cardAdd'


//Display Product
function ProductsSingle(props) {

    const [{count}] = useStateValue()
    const [items, setItems] = useState([]); //display array of objects
    const [loading, setLoading] = useState('block');
    const [isLoaded, setLoaded] = useState('none');
    const {id} = props.match.params

    useEffect(() => {

        fetch(`http://localhost:3090/api/product_list/id/${id}`)
            .then(res => res.json())
            .then(items => {

                const itemData = items.map(item => (
        
                    <div className="row" key={item.id}>

                        <div className="col-sm-6" style={{paddingTop: '5%', paddingBottom: '2%'}}>

                            <h2 style={{height: '70px', color: '#3F2A2D', fontFamily: 'Lob2Bold', textAlign: 'center', lineHeight: '1.5'}}>
                                {item.title}
                            </h2>
                            <hr style={{marginTop: '0px', marginBottom: '40px', border: '1px solid black'}}/>

                            <img className='center-block img-responsive' style={{marginBottom: '40px', height: '400px', maxWidth: '100%', border: '10px solid white', boxShadow: '1px 1px 10px black'}} src={item.image} alt={item.title}/>                          
  
                        </div>

                        <div className="col-sm-6" style={{paddingTop: '15%', paddingLeft: '5%'}}>

                            <h2 style={{fontSize: '35px', fontFamily: 'Lob2'}}>Description: </h2>
                            <p style={{padding: '10px 0px', fontSize: '20px', fontFamily: 'SSPro'}}>{item.description}</p>
                            <p style={{marginBottom: '60px', fontSize: '18px', fontFamily: 'SSProB'}}>Price: ${(item.price).toFixed(2)}</p>

                            <AddToCart id={id} {...item}/>

                            <Link to='/cartItems' style={{position:'absolute', bottom: '-10px', left: '300px', color: 'black', fontSize: '50px', display: 'inline'}}><i className="fas fa-shopping-cart"></i></Link> 

                            <div style={{position: 'absolute', height: '30px', width: '30px', bottom: '35px', right: '215px', background: '#3F2A2D', borderRadius: '50%', color: 'white', fontSize: '23px', fontFamily: 'SSPro', textAlign: 'center', lineHeight: '1.3', display: 'inline'}}>
                                {count}
                            </div>

                        </div>
                    </div>
        
                ));

                setItems(itemData);
                setLoading(prevShow => prevShow = 'none')
                setLoaded(prevShow => prevShow = 'block')
            });

    }, [id, count]);

    return (
        <div>
            <div className="div" style={{background: '#F1E7D2'}}>

                <div className="container" style={{display: isLoaded}}>
                    {items}
                </div>
                
                <div className="container" style={{display: loading}}>
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Loading...</h1>
                        </div>
                    </div>
                </div>

            </div>

            <div style={{background: '#3F2A2D'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <Link to='/products'><h2 style={{height: '50px', fontSize: '30px', color: 'white', fontFamily: 'Lob2Bold', textAlign: 'center', lineHeight: '1.5'}}>Back To Products</h2></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    //componentDidMount is the array passed as a param
}

export default ProductsSingle