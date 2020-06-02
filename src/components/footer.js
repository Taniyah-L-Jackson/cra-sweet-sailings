import React from 'react'

function Footer() {
    return(
        <div style={{background: '#022B3A', color: 'white', fontSize: '13px'}}>

            <div className="container">
                <div className='row' style={{marginTop: '35px'}}>

                <noscript>[Footer]</noscript>

                    <div className="col-sm-3">
                        <h4 style={{fontFamily: 'Macondo'}}>Contact Us!</h4>

                        <ul style={{marginTop: '25px', padding: '0px', listStyleType: 'none'}}>
                            <li>+44 456 789 011</li>
                            <li>SweetSailsYum@gmail.com</li>
                            <li>Find A Store</li>
                        </ul>
                    </div>

                    <div className="col-sm-3">
                        <h4 style={{fontFamily: 'Macondo'}}>Lorem.</h4>
                        <ul style={{marginTop: '25px', padding: '0px', listStyleType: 'none'}}>
                            <li>Lorem.</li>
                            <li>Fugit!</li>
                            <li>Quod!</li>
                            <li>Recusandae.</li>
                            <li>Harum.</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h4 style={{fontFamily: 'Macondo'}}>Lorem.</h4>
                        <ul style={{marginTop: '25px', padding: '0px', listStyleType: 'none'}}>
                            <li>Lorem.</li>
                            <li>Fugit!</li>
                            <li>Quod!</li>
                            <li>Recusandae.</li>
                            <li>Harum.</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h4 style={{fontFamily: 'Macondo'}}> Subscribe To Lorem!</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <input type="text" placeholder='Email'
                        style={{padding: '1px 5px'}}/>
                        <button style={{color: 'black'}}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer