import React, { useState } from 'react'
import Hero from './hero'

function Feedback() {

    const [info] = useState({
        firstName: '',
        lastName: '',
        email: '',
        cInput: ''
    })  

    const handleChange = (event) => {
        const {name, value} = event.target 
        this.setState({[name] : value})
    }

    const handleSubmit = () => {
        alert('Form Submitted!')
    }

    return(
        <>  
            <Hero
                h1Style = {{
                    position: 'absolute', marginTop: '3%', marginLeft: '27%', fontSize: '55px', fontFamily: 'PlayBall', color: 'white', textTransform: 'capitalize', textShadow: '1px 1px 10px black', zIndex: '1'
                }}
                header='Where Should We Sail Next?'
                img={'/cra-sweet-sailings/media/download(resized).jpg'}
            />

            <div style={{height: '650px', background: '#F1E7D2'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">

                            <h2 style={{marginTop: '26%', fontSize: '40px', fontFamily: 'Lob2', textAlign: 'center'}}>
                                Note: Please read the 'About' section first!!
                            </h2>
                            <p style={{marginTop: '8%', fontSize: '25px', fontFamily: 'SSPro', textAlign: 'center'}}>There are more places to explore and more snacks to try, and our selection is only just the beginning! Know a spot that has a delicious selection of delights? Just fill out the form the right, and we'll notify you if your location is our next stop!</p>

                        </div>

                        <div className="col-sm-6">
                            <form onSubmit={handleSubmit} style={{marginTop: '12%', marginLeft: '15%'}}>

                                <h2 style={{fontFamily: 'Lob2'}}>Name: </h2>
                                <input
                                style={{padding: '10px', marginRight: '20px', height: '35px', width: '190px', fontFamily: 'SSPro'}}  
                                type="text" 
                                name="firstName"
                                value={info.firstName}
                                onChange={handleChange}
                                placeholder="First Name"/>

                                <input 
                                style={{padding: '10px', height: '35px', width: '190px', fontFamily: 'SSPro'}} 
                                type="text" 
                                name="lastName"
                                value={info.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"/>

                                <h2 style={{fontFamily: 'Lob2'}}>Email:</h2>
                                <input
                                    style={{padding: '10px', height: '35px', width: '400px', fontFamily: 'SSPro'}} 
                                    type="text"
                                    name='email'
                                    value={info.email}
                                    onChange={handleChange}
                                    placeholder='SweetSailsYum@gmail.com'/>

                                <textarea 
                                    style={{marginTop: '40px', padding: '15px', width: '400px', fontFamily: 'SSPro'}} 
                                    name='cInput'
                                    value={info.cInput}
                                    onChange={handleChange}
                                    placeholder="Tell us about your favorite treats here! Also include the location of said treats. Go into as much detail as you can, because the best treats have the best descriptions!"
                                    cols="30" 
                                    rows="10">
                                </textarea>

                                <button style={{marginTop: '10px', height: '60px', width: '400px', background: '#3F2A2D', border: 'none', borderRadius: '15px', display: 'block'}}
                                >
                                    <p style={{marginTop: '3px', color: 'white', fontSize: '35px', fontFamily: 'Lob2'}}>
                                        Submit
                                    </p>
                                </button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feedback