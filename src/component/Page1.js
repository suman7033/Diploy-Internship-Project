import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import "./page1.css"

const Page1 = () => {
  return (
    <div className='page1'>
       <div className='part-1'>
          <h1 className='page1-headline'>Create and sell custom products</h1>
          <CheckIcon fontSize='small' sx={{color: 'green'}} /> &nbsp;100% Free to use<br/>
          <CheckIcon fontSize='small' sx={{color: 'green'}} /> &nbsp;900+ High-Quality Products<br/>
          <CheckIcon fontSize='small' sx={{color: 'green'}} /> &nbsp;Largest global print network <br/><br/>
          <button className='page1-btn'>Start for free</button> &nbsp; &nbsp;
          <button className='page1-btn'>How it works?</button>
          <h5>Trusted by over 8M sellers around the world</h5>
       </div>
       <div className='part-2'>
          <img className='page1-img' src='https://printify.com/wp-content/uploads/2022/01/Design-Challange-Designs-Examples.gif'/>
       </div>
       <div>
         
       </div>
    </div>
  )
}

export default Page1
