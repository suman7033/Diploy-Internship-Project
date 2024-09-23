import React from 'react'
import "./page2.css"

const Page2 = () => {
  return (
    <div className='page2-div'>
        <div className='page2-1'>
          <img className="page2-img" src='https://printify.com/pfh/assets/legacy/higher-profits.svg'/>
          <h2 className='page2-headline'>higher Profits</h2>
          <h5>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</h5>
        </div>

        <div className='page2-1'>
           <img  className='page2-img' src='https://printify.com/pfh/assets/legacy/robust-scaling.svg'/>
           <h2 className='page2-headline'>Robust Scaling</h2>
           <h5>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</h5>
        </div>

        <div className='page2-1'>
           <img  className='page2-img' src='https://printify.com/pfh/assets/legacy/best-selection.svg'/>
           <h2 className='page2-headline'>Best Selection</h2>
           <h5>With 900+ products and top quality brands, you can choose the best products for your business.</h5>
        </div>
    </div>
  )
}

export default Page2
