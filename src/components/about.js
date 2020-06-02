import React from 'react'
import Hero from './hero'

function About() {
    
    return(
        <>
            <Hero
                h1Style = {{
                    position: 'absolute', marginTop: '3%', marginLeft: '37%', fontSize: '50px', fontFamily: 'PlayBall', color: 'white', textTransform: 'capitalize', textShadow: '1px 1px 10px black', zIndex: '1'
                }}
                header='Meet Our Crew!'
                img={'/cra-sweet-sailings/media/philippines/toa-heftiba-LBMvueaBKT8-unsplash(resized).jpg'}
            />

            <noscript>[About Us]</noscript>
            <div style={{background: '#3F2A2D'}}>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">

                            <h2 style={{marginTop: '50px', color: 'white', fontSize: '40px', fontFamily: 'Lob2Bold', textDecoration: 'underline', textAlign: 'center'}}>
                                A Little Bit About Us!
                            </h2>

                            <p style={{margin: '100px 0px', color: 'white', fontSize: '25px', fontFamily: 'SSPro', textAlign: 'center'}}>
                                Greetings from Sweet Sailings! We're a small company dedicated to sailing across the world to fulfill our sweet tooth! However, these aren't your usual highly-popular locations we travel to! We know that there are more undiscovered treats out there waiting to be eaten, and we'll travel to the most unique spots to find them! Our sugar-loving taste buds refuse to be bound to the commonly used regions for sweet pickings, and we want to be the first to put new delights on the world map! So, no matter how far we have to go, we will always be ready to satisfy our need for sweets!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{height: '650px', background: '#F1E7D2'}}>

                <noscript>[The Main People]</noscript>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 style={{marginTop: '50px', color: '#3F2A2D', fontSize: '40px', fontFamily: 'Lob2Bold', textDecoration: 'underline', textAlign: 'center'}}>
                                Captains
                            </h2>
                            </div>
                    </div>
                    <div className="row" style={{marginTop: '5%', textAlign: 'center'}} >

                        <div className="col-sm-4">
                            <img className='center-block img-responsive' style={{height: '250px', border: '10px solid white', borderRadius: '50%', boxShadow: '1px 1px 10px black'}} src="/cra-sweet-sailings/media/profile_pic.png" alt="President/Founder"/>
                            <h3 style={{fontFamily: 'Lob2Bold'}}>Lulu Larganhage</h3>
                            <h4 style={{fontFamily: 'SSProB'}}>Founder</h4>
                            <p style={{fontFamily: 'SSPro'}}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga natus nam dolorum quidem qui sapiente eveniet quibusdam facere numquam unde?
                                Favorite treat is Baklava.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <img className='center-block img-responsive' style={{height: '250px', border: '10px solid white', borderRadius: '50%', boxShadow: '1px 1px 10px black'}} src="/cra-sweet-sailings/media/profile_pic.png" alt="Supervisior"/>
                            <h3 style={{fontFamily: 'Lob2Bold'}}>Lulu Larganhage</h3>
                            <h4 style={{fontFamily: 'SSProB'}}>Supervisior</h4>
                            <p style={{fontFamily: 'SSPro'}}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga natus nam dolorum quidem qui sapiente eveniet quibusdam facere numquam unde?
                                Favorite treat is Baklava.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <img className='center-block img-responsive' style={{height: '250px', border: '10px solid white', borderRadius: '50%', boxShadow: '1px 1px 10px black'}} src="/cra-sweet-sailings/media/profile_pic.png" alt="Manager"/>
                            <h3 style={{fontFamily: 'Lob2Bold'}}>Lulu Larganhage</h3>
                            <h4 style={{fontFamily: 'SSProB'}}>Manager</h4>
                            <p style={{fontFamily: 'SSPro'}}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga natus nam dolorum quidem qui sapiente eveniet quibusdam facere numquam unde?
                                Favorite treat is Baklava.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About