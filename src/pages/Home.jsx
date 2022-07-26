import React from 'react'
import Navbar from '../components/Navbar';
import Typography from '@mui/material/Typography';
import './Home.css'
import Card from '../components/NuCard';
import ReceiptImg from '../assets/receipts.png';
import ColorImg from '../assets/color-icon.png';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-title-container'>
        <Typography variant="h3" className='home-title'>Welcome to Maestro</Typography>
        <Typography variant="h4" className='home-title' sx={{ marginTop: '40px'}}>Choose one of the below questionaire sources</Typography>
      </div>
      <div className='home-links'>
        <Card altText="Receipt Image" image={ReceiptImg} title="Receipts" description="Transcribe receipt data" route="receipts"/>
        <Card altText="Color Image" image={ColorImg} title="Colors" description="Answer questions about colors and themes" route="colors"/>
      </div>
      <div className='home-filler'></div>
    </div>
  )
}

export default Home