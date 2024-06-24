import React from 'react'
import './style.css'
import { useState,useEffect } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Testomonial = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('/review.json')
      .then(response => response.json())
      .then(data =>setData(data))
      .catch(error => console.error('Error fetching data:', error));
    }, [])
    
    return(
    <div>
        <div className="testomonial-section">
            {/* <span><img src='/logo/is-less-than.png' /></span> */}
            <div className="testo-container">
            <div className="testo-text">
                <h1>What people think about Us..</h1>
            </div>
            <div className="testo-content">
                <Slide>
                    {data.map((item, index) => (   
                            <div className="each-slide-effect">
                                <div className='testos'>
                                    <img src={item.src} />
                                    <h3>{item.name}</h3>
                                    <p>{item.review}</p>
                                </div>
                            </div>
                            
                    ))}                
                </Slide>
            </div>
            </div>
            {/* <span><img src='/logo/is-greater-than.png' /></span> */}
        </div>
    </div>
    )
}

export default Testomonial
