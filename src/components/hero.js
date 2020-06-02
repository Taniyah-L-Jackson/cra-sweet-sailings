import React from 'react'

function Hero(props) {
    return (
        <>
            <noscript>[Hero]</noscript>
            <h1 style={props.h1Style}>{props.header}</h1>
            <img style={{position: 'relative', margin: '0', padding: '0', height: '575px', width: '100%'}} src={props.img} alt="Hero"/>
        </>
    )
}

export default Hero