import React from 'react'
import Navbar from '../components/Navbar';
import Questionaire from "maestroReceipts/Questionaire";
import './receipts.css';

const Receipts = () => {
  return (
    <div className='receipts-container'>
      <Navbar />
      <Questionaire />
    </div>
  )
}

export default Receipts