import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../cart/gear/state'
import Hero from './hero'


function ProductSetup() {
  const [{count}] = useStateValue()

    const [type, setType] = useState('small')
    const [products, setProducts] = useState([]); //display array of objects
    const [loading, setLoading] = useState('block');
    const [show, setShow] = useState('none');




    useEffect(() => {

        // if not working, make sure XAMPP is on!!
        fetch(`http://localhost:3090/api/product_list/types/${type}`)
            .then(res => res.json())
            .then(products => {

                const productData = products.map(product => (

                    <div className="col-sm-6 col-lg-4" key={product.id} style={{paddingBottom: '50px'}}> 
                    {/* get unique id */}

                        <img className='img-responsive' style={{height: '300px', width: '100%', border: '10px solid white', boxShadow: '1px 1px 10px black'}} src={product.image} alt={product.title}/>

                        <Link to={`/products/${product.id}`}> 
                        {/*links to product single page to display one item's info*/}

                            <h3 style={{height: '50px', background: '#3F2A2D', color: 'white', fontSize: '22px', fontFamily: 'SSPro', textAlign: 'center', textShadow: '1px 1px 10px black', lineHeight: '2.3'}}>{product.title}</h3>

                        </Link>

                    </div>
                ));
                setProducts(productData);
                setLoading(prevLoading => prevLoading = 'none')
                setShow(prevShow => prevShow = 'block')

            });        
    }, [type]);

    const LargePro = () => {
        setType(prevType => prevType = 'large')
    }

    const SmallPro = () => {
        setType(prevType => prevType = 'small')
    }

    const Drinks = () => {
        setType(prevType => prevType = 'drinks')
    }

    return (

        <>
            <Hero
                h1Style = {{
                    position: 'absolute', marginTop: '3%', marginLeft: '17%', fontSize: '55px', fontFamily: 'PlayBall', color: 'white', textTransform: 'capitalize', textShadow: '1px 1px 10px black', zIndex: '1'
                }}
                header='From Exotic Fruits To Delicious Desserts'
                img={'/cra-sweet-sailings/media/sweetFillNs/exotic-combo.jpg'}
            />

            <div style={{height: '100px', background: '#3F2A2D', color: 'white'}}>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <h1 style={{marginTop: '30px', fontFamily: 'Lob2Bold', textAlign: 'center'}}>
                                Browse Our Finest Selections!
                            </h1>
                        </div>

                        <div className="col-sm-3" style={{marginTop: '10px', marginLeft: '45px'}}>

                            <ul style={{marginTop: '20px', padding: '0px', listStyleType: 'none'}}>

                                <li>
                                    
                                    <h2 style={{color: 'white', fontFamily: 'Lob2Bold', display: 'inline'}}>
                                        In Cart: 
                                    </h2> 

                                </li>

                                <li style={{display: 'inline'}}> 
                                    <Link to='/cartItems' style={{position:'absolute', top: '10px', left: '135px', color: 'white', fontSize: '50px'}}><i className="fas fa-shopping-cart"></i></Link> 
                                </li>

                                <li style={{position: 'absolute', height: '30px', width: '30px', top: '5px', left: '180px', background: '#F1E7D2', border: '1px solid black', borderRadius: '50%', color: 'black', fontSize: '23px', textAlign: 'center', lineHeight: '1.3', display: 'inline'}}>
                                    {count}
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{paddingBottom: '4%', background: '#F1E7D2'}}>

               <div className="container">
                   <div className="row" style={{paddingTop: '2%'}}>

                       <div className="col-sm-12">
                           <ul style={{padding: '0px'}}>
                               <li style={{display: 'inline'}}>
                                   <button onClick={LargePro} style={{marginTop: '30px', marginLeft: '45px', color: '#3F2A2D', background: 'none', border: 'none', fontFamily: 'Lob2',  fontSize: '40px'}}>Desserts</button>
                                </li>

                               <li style={{display: 'inline'}}>
                                    <button onClick={SmallPro} style={{marginTop: '30px', marginLeft: '28%', marginRight:'30%', fontSize: '40px', fontFamily: 'Lob2', color: '#3F2A2D', background: 'none', border: 'none'}}>Treats</button>
                               </li>

                               <li style={{display: 'inline'}}>
                                    <button onClick={Drinks} style={{marginTop: '30px', fontSize: '40px', fontFamily: 'Lob2', color: '#3F2A2D', background: 'none', border: 'none'}}>Drinks</button>
                               </li>
                           </ul>

                           <hr style={{border: '1px solid #3F2A2D'}}/>

                       </div>
                   </div>

                    <div className="row" style={{display: loading}}>
                        <div className="col-sm-12">
                            <h1>Loading...</h1>
                        </div>
                    </div>

                   <div className="row" style={{paddingTop: '5%', display: show}}>
                        {products}
                    </div>

                </div>

            </div>
        </>
    )

}

export default ProductSetup



//componentDidMount is the array passed as a param
// the product list will display the first three items fromm a list of items in each category
// when the right button is clicked, the next list of items will be shown from the last index plus one
// when the left button is clicked, the previous list of items will be shown from the last index minus one
// no loops!

// when an item is clicked, the user will be transferred to the product single page
// only info related to that one product will appear, along with an 'add to cart' button and 'checkout' button
// a back button will lead them back to the previous page