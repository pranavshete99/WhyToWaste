import React from 'react'
import Frame from '../images/Frame.png'

function Home() {
  return (
    <div>
      <div className='w-full h-[837px] bg-[#016A70]'>
        <nav className='w-[1400px] h-[75px] bg-white relative top-[50px] mx-auto rounded-xl flex items-center justify-between p-5'>
          <div className='flex font-bold text-xl'>
            WhytoWaste
          </div>
          <ul className='flex space-x-10 text-lg'>
            <li>
              Home
            </li>
            <li>
              Service
            </li>
            <li>
              Our Work
            </li>
            <li>
              Contact
            </li>
          </ul>
          <div className='flex space-x-8'>
            <button className='bg-[#016A70] text-white text-[16px] font-bold px-6 py-2 rounded-lg'>Register</button>
            <button className='text-black text-[16px] font-bold px-6 py-2 rounded-lg border-2 border-[#016A70]'>Log In</button>
          </div>
        </nav>
        <div className='my-20'>
          <p className='ml-40'>Together, We Can Reduce Waste!</p>
          <div className='h-[82px] w-[600px] bg-slate-400 ml-40'>
            <p className=''>WhyToWaste is an innovative platform dedicated to minimizing food waste by seamlessly connecting food donors with charitable organizations. 
            We believe that no food should go to waste when there are people in need.</p>
          </div>
          <div>
            <img src={Frame} alt="Image" className="w-[505px] h-[488px]"/>
          </div>
        </div>
      </div>

      <div>
        Impact
      </div>
      <div>
        services
      </div>
      <div>
        work
      </div>
      <footer>
        footer
      </footer>
    </div>
  )
}

export default Home
