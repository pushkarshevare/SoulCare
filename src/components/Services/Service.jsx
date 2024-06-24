import React from 'react'
import './style.css'
import { useState,useEffect } from 'react'; 

const Service = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
     fetch('/services.json')
     .then(response =>response.json())
     .then(data =>setService(data))
    }, [])
    

  return (
    <div>
    <div className="service-heading">
        <img src='/logo/bg-service.jpg' />
        <div className="service-text">
            <h1>Our Services</h1>
            <input type="text" name="search" id="" placeholder='Search Here.....'/>
            
        </div>
    </div>
    <div className="special-section">
        {
            service.map((item)=>(
                
        <div className="special-container">
          <div className="heading">
            <img src={item.image}/> 
            <h3>{item.name}</h3>
          </div>
            <p>{item.description}</p>
        </div>
            ))
        }
    </div>
    </div>
  )
}

export default Service
