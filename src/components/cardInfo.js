import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
    
const reduceCardNum = {
    width: '70%',
    padding: '10px 20px', 
    borderRadius: '5px',
    border: '1px solid black',
    WebkitAppearance: 'none'
}
const reduceSize = {
    width: '30%',
    padding: '10px 20px', 
    borderRadius: '5px',
    border: '1px solid black',
    WebkitAppearance: 'none'
}

const pDisplay = {
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '20px',
    display: 'inline'
}

const title = {
    paddingTop: '10px',
    fontFamily: 'SSPro'
}

function Card() {

    const history = useHistory()

    const [info, setInfo] = useState({
        card_type: '',
        card_num: '',
        cvv: '',
        expire_mth: '',
        expire_yr: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target
        setInfo(prevState => {
            return{...prevState, [name]: value}
        })
    }
    
    const handleSubmit = (event) =>  {
        
        event.preventDefault();
        let cardCheck = Number(info.card_num)
        let cvvCheck = Number(info.cvv)

        if(isNaN(cardCheck) || isNaN(cvvCheck)) {
            alert('Invalid format entered. Please check card/cvv')

        }else if(cardCheck.length < 16 || cvvCheck.length < 16) {

            alert('Vaild input too short. Please check card/cvv')

        }else{
            fetch('http://localhost:3090/api/card_info/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(info),
            })
            .then(response => response.json())
            .then(data => {
                history.replace('/cardinfo')
                history.push("/confirm")
            })
            .catch((error) => {
                console.log(error);
            })
        }  
    }

    return (
        <>
            <div style={{background: '#F1E7D2'}}>
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12">

                            <h1 style={{marginTop: '50px', fontSize: '35px', fontFamily: 'Lob2Bold', textAlign: 'center'}}>
                                Almost Done! Enter Payment Method:
                            </h1>
                            <hr style={{border: '1px solid #3F2A2D'}}/>

                        </div>
                    </div>

                    <form onSubmit={handleSubmit} style={{paddingBottom: '50px'}}>

                        <div className="row">

                            <div className="col-sm-6">
                                <h4 style={title}>Card Number</h4>
                                <input 
                                    type="text"
                                    name="card_num"
                                    id="cardNumber"
                                    value={info.card_num}
                                    onChange={handleChange} 
                                    placeholder='0000 0000 0000 0000' 
                                    maxLength='16' 
                                    style={reduceCardNum}/>
                            </div>

                            <div className="col-sm-6">

                                <h4 style={title}>Expires</h4>

                                <input 
                                    type="number"
                                    name="expire_mth"
                                    id="monthVal"
                                    value={info.expire_mth}
                                    onChange={handleChange} 
                                    placeholder='month' 
                                    min = '1'
                                    max ='12' 
                                    style={reduceSize}/>
                                
                                <p style={pDisplay}>/</p>

                                <input 
                                    type="number"
                                    name="expire_yr"
                                    id="yearVal"
                                    value={info.expire_yr}
                                    onChange={handleChange} 
                                    placeholder='year' 
                                    max = '23'
                                    min = '20'
                                    style={reduceSize}/>

                            </div>

                        </div>

                        <div className="row">
                            <div className="col-sm-6">

                                <h4 style={title}>CVV</h4>
                                <input 
                                    type="text"
                                    name="cvv"
                                    id="cvvNum"
                                    value={info.cvv}
                                    onChange={handleChange} 
                                    placeholder='123' 
                                    maxLength='3' 
                                    style={reduceSize}/>
                            </div>

                            <div className="col-sm-6">
                                <h4 style={title}>Card Type</h4>
                                <select 
                                    name="card_type" 
                                    id="c_type"
                                    value={info.card_type}
                                    onChange={handleChange}
                                    style={{padding: '10px 20px', width: '30%', border: 'none', boxShadow: '3px 3px 2px black'}}>
                                        <option value="Debit">Debit</option>
                                        <option value="Credit">Credit</option>
                                        <option value="GiftC">Gift Card</option>
                                </select>                                    
                            </div>

                        </div>

                        <div className="row" style={{marginTop: '50px', marginBottom: '30px'}}>

                            {/* redirect to products page */}
                            <div className="col-sm-6">

                            
                                <Link to='/products'> 
                                    <button style={{height: '80px', width: '50%', background: 'red', borderRadius: '20px', color: 'black', fontSize: '30px', fontFamily: 'Lob2', textAlign: 'center'}}>
                                    Cancel Purchase
                                    </button>
                                </Link>
                                
                                
                            </div>

                            <div className="col-sm-6">
                                <button style={{height: '80px', width: '50%', borderRadius: '20px', background: 'green', color: 'white', fontSize: '30px', fontFamily: 'Lob2'}}>Confirm Purchase</button>
                            </div>
                        </div>
                    </form>                    
                </div>                
            </div>
        </>
    )
    
}

export default Card