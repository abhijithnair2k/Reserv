import React from 'react'
import '../style/landingpage.css'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsBusFilledIcon from '@mui/icons-material/DirectionsBusFilled';

const LandingHomePage = () => {
  return (
    <div className='landingpagehome'>
      <div className='search'>
        <br /><br /><br />
        <form action="">
          <div className='bend '>
          <div id='s1'>
            <DirectionsBusIcon id='i1' />
            <input type="text" placeholder='From' id='s4' className='in' />
          </div>
          <div id='s2'>
            <DirectionsBusFilledIcon id='i2' />
            <input type="text" placeholder='To' id='s4' />
          </div>
          <div id='s3'>
            <input type="date"  id='s4' />
          </div>
          <br />
          <button id='btn'>Submit</button>
          </div>
          
        </form>

      </div>

    </div>
  )
}

export default LandingHomePage