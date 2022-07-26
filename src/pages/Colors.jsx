import React from 'react'
import Navbar from '../components/Navbar'
import Questionaire from "maestroColors/Questionaire";
import './Colors.css'

const Colors = () => {
  return (
    <div className='colors-container'>
      <Navbar/>
      <Questionaire />
    </div>
  )
}

export default Colors