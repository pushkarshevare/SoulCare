import React from 'react'
import './style.css'

const Book = () => {
  return (
    <div className='book-app'>
      <div className="book-form">
        <div className="form">
            <div className="fields">
                <h4>Name:</h4>
                <input type="text" name="name" id="name" />    
            </div>
            <div className="fields">
                <h4>Address:</h4>
                <input type="text" name="address" id="name" />
            </div>
            <div className="fields">
                <h4>Phone No:</h4>
                <input type="text" name="number" id="name" />
            </div>
            <div className="fields">
                <h4>Date of Appointment:</h4>
                <input type="date" name="date" id="" />
            </div>
            <div className="fields">
                <h4>Gender:</h4>
                <select name='Gender'>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
            </div>
            <div className="fields">
                <h4>Location:</h4>
                <select name='location'>
                  <option value="pune">Pune</option>
                  <option value="thane">Thane</option>
                  <option value="nashik">Nashik</option>
                  <option value="shirdi">Shirdi</option>
                </select>
            </div>
            <div className="fields">
              <h4>Query:</h4>
              <input type="textbox" name='query'/>
            </div>
            <div className="submit-btn">
                <button>Submit</button>         
            </div>
        </div>
      </div>
    </div>
  )
}

export default Book
