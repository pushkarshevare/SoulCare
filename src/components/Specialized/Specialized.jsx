import React from 'react'
import './style.css'

const Specialized = () => {
  return (
    <div className='special'>
      <div className="special-text">
        <h1>Our Specialized Department</h1>
      </div>
      <div className="special-section">
        <div className="special-container">
          <div className="heading">
            <img src='/logo/cancer.png'/> 
            <h3>Cancer</h3>
          </div>
            <p>Cancer is a term for a group of diseases characterized by uncontrolled cell growth. Cells in the body begin to grow and divide at an abnormally rapid pace, forming masses called tumors. Tumors can be benign (non-cancerous) or malignant (cancerous).
            </p>
        </div>
        <div className="special-container">
        <div className="heading">
            <img src='/logo/floss.png'/> 
            <h3>Dental Care</h3>
          </div>
            <p>Dental care is crucial for maintaining overall health and well-being. Proper oral hygiene prevents tooth decay, gum disease, and bad breath, and plays a significant role in your ability to eat, speak, and enjoy a good quality of life.
            </p>
        </div>
        <div className="special-container">
        <div className="heading">
            <img src='/logo/heart.png'/> 
            <h3>Cardiology</h3>
          </div>
            <p>Cardiology is the branch of medicine that focuses on diagnosing and treating diseases and conditions of the heart and blood vessels (the cardiovascular system). Cardiologists are doctors who specialize in this field, providing care for heart conditions ranging from congenital defects to acquired diseases like coronary artery disease.
            </p>
        </div>
        <div className="special-container">
        <div className="heading">
            <img src='/logo/gastroenterology.png'/> 
            <h3>Gastroenterology</h3>
          </div>
            <p>Gastroenterology is the branch of medicine focused on the digestive system and its disorders. This specialty deals with the diagnosis, treatment, and prevention of conditions affecting the gastrointestinal (GI) tract, which includes the esophagus, stomach, intestines, liver, gallbladder, and pancreas
            </p>
        </div>
        <div className="special-container">
          <div className="heading">
            <img src='/logo/mental-health.png'/> 
            <h3>Mental Health</h3>
          </div>
            <p>Mental health encompasses our emotional, psychological, and social well-being. It influences how we think, feel, and behave, and affects our ability to handle stress, relate to others, and make decisions. Mental health is crucial at every stage of life, from childhood and adolescence through adulthood.
            </p>
        </div>
        <div className="special-container">
          <div className="heading">
            <img src='/logo/dermathology.png'/> 
            <h3>Dermatology</h3>
          </div>
            <p>Dermatology is the branch of medicine that focuses on the diagnosis, treatment, and prevention of skin, hair, and nail disorders. Dermatologists are medical doctors specialized in managing a wide array of dermatological conditions, ranging from cosmetic issues to serious diseases.
            </p>
        </div>
      </div>
      <div className="view">
        <p>view more....</p>
      </div>
    </div>
  )
}

export default Specialized
