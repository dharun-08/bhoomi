import React from 'react'
import './body.css'
import bodyPicOne from '../../Assets/agriculture-economy.png'

const body = () => {
  return (
    <div>
      <div className="container">
        <div className="picOne">
          <img src={bodyPicOne} alt='bodyPicOne' />
        </div>
      </div>
    </div>
  )
}

export default body