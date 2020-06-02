import React from 'react'

function Confirm() {

    const todayMonth = (new Date().getMonth() + 1) //get current month
    const todayDay = new Date().getDate(); //get current day
    const todayYear = new Date().getFullYear(); //get current year

    return (
        <>
            <div style={{position: 'absolute', top: '40%', left: '26%', color: 'black', fontFamily:'Lob2', textAlign: 'center'}}>
                <h1 style={{fontSize: '50px'}}>Purchase Confirmed!</h1>
                <h2 style={{fontSize: '40px'}}>Your Order is Set To Arrive 3 days from:</h2>
                <p style={{fontSize: '30px'}}>{todayMonth}/{todayDay}/{todayYear}</p>
            </div>

            <img className='img-responsive' style={{height: '525px', width: '100%', border: '15px solid white'}} src="/cra-sweet-sailings/media/ghana/shameika-black-TD4659GFQxY-unsplash(resized).jpg" alt="postcard"/>
        </>
    )
}

export default Confirm