import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const inputTag = {
    width: '100%',
    padding: '10px 20px', 
    borderRadius: '5px',
    border: '1px solid grey',
}

const title = {
    paddingTop: '10px',
    fontFamily: 'SSPro'
}
    
function Person() {

    const [submitBtn, setSubmit] = useState('block')
    const [nextBtn, setNext] = useState('none')

    const [info, setInfo] = useState({
        Fname: '',
        Lname: '',
        email: '',
        st_address: '',
        city_town: '',
        province: '',
        country: '', 
        zip: '',
    })   

    const handleChange = (event) => {
        const {name, value} = event.target
        setInfo(prevState => {
            return{...prevState, [name]: value}
        })
    }
    
    const handleSubmit = (event) =>  {

        // console.log(store)

        event.preventDefault();
        fetch('http://localhost:3090/api/person_info/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data)
        })
        .catch(error => {
            console.log('Error:', error)
        })
        
        setSubmit(prevType => prevType = 'none')
        setNext(prevType => prevType = 'block') 
        
    }

    return (
        <>
            <div style={{background: '#F1E7D2'}}>
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12">

                            <h1 style={{marginTop: '50px', fontSize: '35px', fontFamily: 'Lob2Bold', textAlign: 'center'}}>
                                Purchase Ready! Just Fill Out The Form Below
                            </h1>
                            <hr style={{border: '1px solid #3F2A2D'}}/>

                        </div>
                    </div>

                    <form onSubmit={handleSubmit} style={{paddingBottom: '50px'}}>

                        <div className="row">

                            <div className="col-sm-4">

                                <h4 style={title}>First Name:</h4>                               
                                <input 
                                type="text"
                                name='Fname'
                                value={info.Fname}
                                onChange={handleChange}
                                placeholder='First Name'
                                style={inputTag}
                                />

                            </div>

                            <div className="col-sm-4">
                                
                                <h4 style={title}>Last Name:</h4>
                                <input 
                                    type="text" 
                                    name="Lname"
                                    value={info.Lname}
                                    onChange={handleChange}
                                    placeholder='Last Name' 
                                    style={inputTag}/>
                            </div>

                            <div className="col-sm-4">
                                
                                <h4 style={title}>Email:</h4>
                                <input 
                                    type="text" 
                                    name="email"
                                    value={info.email}
                                    onChange={handleChange}
                                    placeholder='Email' 
                                    style={inputTag}/>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-sm-4">
                                <h4 style={title}>Address</h4>
                                <input 
                                    type="text" 
                                    name="st_address"
                                    value={info.st_address}
                                    onChange={handleChange}
                                    placeholder='Address' style={inputTag}/>                                    
                            </div>

                            <div className="col-sm-4">
                                <h4 style={title}>City/Town</h4>
                                <input 
                                    type="text" 
                                    name="city_town"
                                    value={info.city_town}
                                    onChange={handleChange}
                                    placeholder='Address' style={inputTag}/>                                       
                            </div>

                            <div className="col-sm-4">
                                <h4 style={title}>State/Province/Region</h4>
                                <input 
                                    type="text" 
                                    name="province" 
                                    value={info.province}
                                    onChange={handleChange}
                                    placeholder='State/Province/Region' style={inputTag}/>                                    
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-sm-4">
                                <h4 style={title}>Country</h4>
                                <input 
                                    type="text" 
                                    name="country"
                                    value={info.country}
                                    onChange={handleChange}
                                    placeholder='Country' 
                                    style={inputTag}/>                                    
                            </div>

                            <div className="col-sm-2">
                                <h4 style={title}>Zip</h4>
                                <input 
                                    type="text" 
                                    name="zip"
                                    value={info.zip}
                                    onChange={handleChange}
                                    placeholder='Zip Code' 
                                    maxLength='12' 
                                    style={inputTag}/>                                    
                            </div>
                        </div>

                        <div className="row" style={{marginTop: '50px', marginBottom: '30px'}}>
                            
                            <div className="col-sm-12" style={{display: submitBtn}}>
                                <button style={{width: '100%', padding: '20px 0px', background: '#3F2A2D', border: 'none', borderRadius: '20px', color: 'white', fontSize: '30px', fontFamily: 'Lob2Bold', textAlign: 'center'}}>
                                        Submit
                                </button>
                            </div>

                            <div className="col-sm-12" style={{display: nextBtn}}>
                                <Link to='/cardInfo'>
                                    <button style={{width: '100%', padding: '20px 0px', background: '#3F2A2D', border: 'none', borderRadius: '20px', color: 'white', fontSize: '30px', fontFamily: 'Lob2Bold', textAlign: 'center'}}>
                                            Continue To Next Step
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </form>


                </div>                
            </div>
        </>
    )
}

export default Person