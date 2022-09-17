import React from 'react'
import  HTML  from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import bootstrap from '../assets/bootstrap.svg'
import database from '../assets/database.svg'
import react from '../assets/react.svg'

const Tech = () => {
  return (
    <section id='tech' className='text-white'>
        <div className="triangle"></div>
        <div className="max-w-[800px] w-full mx-auto flex flex-col justify-start p-3 leading-tight">
            <div className='w-full flex justify-end'>
                <div className='bg-red w-[130px] h-[25px] my-[20px] ml-[210px]'>
                    <h2 className='text-xl font-bold ml-[-15px] mt-[-40px]'>tools.</h2>
                </div>
            </div>
            <h2 className='text-40 leading-10'>here is some of the <span className='font-bold'>cool</span> tech i <span className='font-bold'>work</span> with<span className='text-red'>.</span> </h2>
            <div className="flex flex-col justify-evenly items-center my-8">
              <div className="flex flex-row justify-between w-[75%] items-center mb-10 md:w-[50%]">
                <div className='flex flex-col items-center justify-center'>
                  <img src={ HTML } alt="html logo" />
                  <p className='text-md font-bold'>html<span className='text-red'>5</span></p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src={ css } alt="html logo" />
                  <p className='text-md font-bold'>cs<span className='text-red'>s</span>3</p>
                </div>
              </div>
              <div className="flex flex-row justify-between w-[75%] items-center mb-10 md:w-[50%]">
                <div className='flex flex-col items-center justify-center'>
                  <img src={ js } alt="html logo" />
                  <p className='text-md font-bold'>javasc<span className='text-red'>r</span>ipt</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src={ react } alt="html logo" />
                  <p className='text-md font-bold'>react<span className='text-red'>.</span>js</p>
                </div>
              </div>
              <div className="flex flex-row justify-between w-[75%] items-center md:w-[50%]">
                <div className='flex flex-col items-center justify-center'>
                  <img src={ bootstrap } alt="html logo" />
                  <p className='text-md font-bold'>bo<span className='text-red'>o</span>tstrap</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <img src={ database } alt="html logo" />
                  <p className='text-md font-bold'>mys<span className='text-red'>q</span>l</p>
                </div>
              </div>
            </div>
            <p className='text-md'>i'm always keeping up with and trying to learn some of the more up to date technologies<span className='text-red'>.</span> as a <span className='font-bold text-red'>developer</span>, i am always trying to improve my skills and build <span className='font-bold'>awesome</span> websites and web app<span className='text-red'>.</span></p>
        </div>
    </section>
  )
}

export default Tech