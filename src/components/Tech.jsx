import React from 'react'

const Tech = () => {
  return (
    <div id='tech' className='text-white'>
        <div className="triangle"></div>
        <div className="max-w-[800px] w-full mx-auto flex flex-col justify-start p-3 leading-tight">
            <div className='w-full flex justify-end'>
                <div className='bg-red w-[130px] h-[25px] my-[20px] ml-[210px]'>
                    <h2 className='text-xl font-bold ml-[-15px] mt-[-40px]'>tools.</h2>
                </div>
            </div>
            <h2 className='text-40 leading-10'>some of the <span className='font-bold'>cool</span> tech i <span className='font-bold'>work</span> with<span className='text-red'>.</span> </h2>
        </div>
    </div>
  )
}

export default Tech