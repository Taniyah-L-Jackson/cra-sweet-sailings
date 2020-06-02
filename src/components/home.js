import React from 'react'
import Hero from './hero'

function Home() {
    return(
        <>
            <Hero
                h1Style = {{
                    position: 'absolute', marginTop: '3%', marginLeft: '18%', color: 'white', fontSize: '55px', fontFamily: 'PlayBall', textTransform: 'capitalize', textShadow: '1px 1px 10px black', zIndex: '1'
                }}
                header='Hop aboard and take a trip with us!'
                img={'/cra-sweet-sailings/media/philippines/louie-martinez-PriGaAJYxq4-unsplash(resized).jpg'}
            />

            <noscript>[Top Main]</noscript>
            <div style={{height: '650px', background: '#F1E7D2'}}>

                <div className='container'>
                    <div className="row">
                        <div className="col-sm-6">
                            
                            <img className='img-responsive' style={{position: 'absolute', height: '280px', width: '330px', top: '75px', left: '45px', border: '8px solid white', boxShadow: '1px 1px  10px black'}} 
                                src="/cra-sweet-sailings/media/sweetFillNs/ginger_pear_chai_ice_cream.jpg" alt="SweetA"/>

                            <img className='img-responsive' style={{position: 'absolute', height: '300px', width: '250px', top: '170px', left: '270px', border: '8px solid white', boxShadow: '1px 1px  10px black', zIndex: '1'}} 
                                src="/cra-sweet-sailings/media/sweetFillNs/roastedPineapple.jpg" alt="SweetB"/>

                            <img className='img-responsive' style={{position: 'absolute', height: '200px', width: '300px', top: '350px', left: '30spx', border: '8px solid white', boxShadow: '1px 1px  10px black'}} 
                                src="/cra-sweet-sailings/media/sweetFillNs/cremePuff.jpg" alt="SweetC"/>

                        </div>

                        <div className="col-sm-6">
                            <h2 style={{marginTop: '30%', fontSize: '45px',  fontFamily: 'Lob2Bold', textAlign: 'center'}}>
                                Worldwide Exotic Treats!
                            </h2>
                            <p style={{marginTop: '50px', fontSize: '25px', fontFamily: 'SSPro', textAlign: 'center'}}>
                                Choose from a fine selection of exquisite goods, carefully chosen by our professional crew. Then, experience the exotic flavors for yourself as we set sail to deliver right to your front door! 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{height: '650px', background: '#3F2A2D', color: 'white'}}>
                <div className='container'>
                    <div className="row">

                        <div className="col-sm-6">
                            <h2 style={{marginTop: '25%', fontSize: '40px', fontFamily: 'Lob2Bold', textAlign: 'center'}}>
                                Quick And On-Time Delivery!
                            </h2>
                            <p style={{marginTop: '50px', fontSize: '25px', fontFamily: 'SSPro', textAlign: 'center'}}>
                                We pride ourselves in being the best in speedy deliveries that get you your desserts on time and in the freshest condition. If fact, we have decided to put our confidence on display, with a guaranteed free delivery if we are a day over the intended delivery date! Customer satisfaction at it's finest!
                            </p>
                        </div>

                        <div className="col-sm-6">
                            
                            <img className='img-responsive' style={{marginTop: '20%', height: '400px', width: '500px',  border: '8px solid white', boxShadow: '1px 1px  10px black', float: 'right'}} 
                                src="/cra-sweet-sailings/media/rosebox-BFdSCxmqvYc-unsplash.jpg" alt="delivery"/>
                        </div>

                    </div>
                </div>
            </div>

            <div style={{height: '650px', background: '#F1E7D2', color: 'black'}}>
                <div className='container'>
                    <div className="row">

                        <div className="col-sm-6">
                            
                            <img className='center-block img-responsive' style={{marginTop: '20%', height: '400px', width: '500px', border: '8px solid white', boxShadow: '1px 1px  10px black', float: 'left'}} 
                                src="/cra-sweet-sailings/media/patrick-tomasso-fMntI8HAAB8-unsplash.jpg" alt="customer service"/>
                        </div>

                        <div className="col-sm-6">
                            <h2 style={{marginTop: '30%', fontSize: '45px', fontFamily: 'Lob2Bold', textAlign: 'center'}}>
                                Great Customer Service!
                            </h2>
                            <p style={{marginTop: '50px', fontSize: '25px',fontFamily: 'SSPro', textAlign: 'center'}}>
                            Our Employees are always on stand-by and ready to answer any questions you may have. We pride ourselves in being kindhearted and very understanding to all our customers! 
                            </p>
                        </div>
 
                    </div>
                </div>
            </div>
            
        </>
    )

}

export default Home

// Pictures are from google and unsplash
