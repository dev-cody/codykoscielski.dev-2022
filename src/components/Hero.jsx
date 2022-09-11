import React from 'react'
import { TiArrowRightOutline } from 'react-icons/ti';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center p-3 leading-tight'>
        <p className='text-sm'>
          <span className='font-bold'>hello,</span> my name is
        </p>
        <h1 className='font-bold text-lg'>
          Cody Koscielski
        </h1>
        <h2 className='text-40 leading-none mb-2'>
          i'm a front-end web <span className='font-bold'>developer<span className='text-red'>.</span></span>
        </h2>
        <p className='text-sm mb-4'>
          i <span className='font-bold'>build</span> and sometimes design beautiful, interactive, and <span className='font-bold'>responsive</span> websites for the <span className='font-bold'>modern</span> web<span className='text-red'>.</span> come check out some of my <span className='font-bold'>projects</span><span className='text-red'>.</span>
        </p>
        <button className='bg-yellow w-[200px] p-2 rounded-xl text-md flex flex-row items-center justify-center'>come hang<TiArrowRightOutline size={ 35 } className='ml-2'/></button>
      </div>
    </div>
  )
}

export default Hero