import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai';
import { RiLinkedinFill } from 'react-icons/ri'

const About = () => {

   const user = {
        linkedIn: 'https://www.linkedin.com/in/codykoscielski/',
        github: 'https://github.com/dev-cody'
    }
    return (
    <div className='bg-white' id='about'>
        <div className="max-w-[800px] w-full mx-auto flex flex-col justify-start p-3 leading-tight">
            <div className='bg-red w-[220px] h-[40px] ml-10 my-[40px]'>
                <h2 className='text-xl font-bold ml-[-30px] text-dark'>about.</h2>
            </div>
            <h3 className='text-40 leading-10'>
                welcome, nice to <span className='font-bold'>see</span> ya. have a <span className='font-bold'>look</span> around<span className='text-red'>!</span>
            </h3>
            <p>
            i am passionate about bulding excellent websites that provide intangible value to my clients. i specialize in building websites for creative individuals and small-businesses, like yourself. if you could have anything on the web, what would it be?
            </p>
            <div className="flex mt-3 flex-row justify-evenly items-center">
                <a className='flex flex-col justify-center items-center' href={ user.github } target="_blank" rel="noreferrer">
                    <div className='bg-dark rounded-xl p-3'>
                        <AiOutlineGithub size={ 75 } color={'#fff'}/>
                    </div>
                    <p className='font-bold text-md'>Github</p>
                </a>
                <a className='flex flex-col justify-center items-center' href={ user.linkedIn } target="_blank" rel="noreferrer">
                    <div className='bg-dark rounded-xl p-3'>
                        <RiLinkedinFill size={ 75 } color={'#fff'}/>
                    </div>
                    <p className='font-bold text-md'>Github</p>
                </a>
            </div>
        </div>
    </div>
    )
}

export default About