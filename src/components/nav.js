import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {

    const listStyle = {
        padding: '0px 10px', 
        fontSize: '20px',
        fontFamily: 'Macondo', 
        display: 'inline'
    }

    return (
    <>
        <div style={{position: 'relative', margin: '0px', height: '60px', background: '#022B3A'}}>
            <div className='container'>
                <noscript>[Nav]</noscript>        
                <div className='row'>

                    <div className="col-sm-3" style={{position: 'relative', margin: '10px 0px', height: '35px', width: '200px', borderRadius: '30px', background: '#1F8487'}}>

                        <img className='img-responsive' style={{marginTop: '0px', marginLeft: '6px', height: '35px', width: '35px'}} src="/cra-sweet-sailings/media/icons8-sail-48.png" alt="Sweet Sailings Logo"/>

                        <p style={{position: 'absolute', top: '18%', left: '32%', color: 'white', fontSize: '18px', fontFamily: 'Macondo'}}>
                            Sweet Sailings
                        </p>

                    </div>

                    <div className="col-sm-7">
                        <ul style={{marginTop: '15px', marginLeft: '-30px', listStyleType: 'none'}}>
                            <li style={listStyle}>
                                <Link to='/' style={{color: 'white'}}>Home</Link>
                            </li>
                            <li style={listStyle}>
                                <Link to='/about' style={{color: 'white'}}>About Us</Link>
                            </li>
                            <li style={listStyle}> 
                                <Link to='/products' style={{color: 'white'}}>Products</Link>
                            </li>
                            <li style={listStyle}>
                                <Link to='/feedback'style={{color: 'white'}}>Feedback</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Nav