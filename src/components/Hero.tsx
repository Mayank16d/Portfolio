import React from 'react'
import image1 from '@/Image/WhatsApp Image 2023-09-18 at 19.00.06.jpg'
import Image from 'next/image'

function Hero() {
  return (
    <div className='md:flex items-center p-6'>
        <div className=''>
            {/* <img src={image1} alt="mayank" className='w-1/2 h-64 rounded-full'/> */}
            <Image src={image1} alt="mayank" className='w-50% rounded-full'/>
        </div>
        <div>
            <h1 className=' text-3xl text-center pt-6 text-green-400'> Hi, I'm Mayank 👋</h1>
            <p className=' text-cyan-400 text-xl pt-4 px-4'> I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
            
            <p className='text-yellow-400 pt-2 text-center'> Surat,Gujarat</p>
            <p className=' text-yellow-400 pt-2 text-center'>🟢 Available for New Projects</p>
        </div>
        
    </div>
  )
}

export default Hero