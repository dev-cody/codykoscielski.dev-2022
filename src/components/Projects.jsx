import React from 'react'
import FlashPainters from '../assets/flash-painters.png'

const Projects = () => {

  return (
    <section id='projects' className='bg-white'>
      <div className="ml-10 md:ml-[400px] triangle-yellow"></div>
      <div className="max-w-[800px] w-full mx-auto flex flex-col justify-start p-3 leading-tight">
          <div className='w-full flex justify-center'>
              <div className='bg-red w-[170px] h-[35px] my-[20px]'>
                  <h2 className='text-xl font-bold ml-[-40px] mt-[-5px] text-dark'>Projects</h2>
              </div>
          </div>
          <p className='text-md text-center mt-3'>i appreciate you making it this far.<span className='text-red'>.</span>.</p>
          <h2 className='text-40'>here are <span className='font-bold'>some</span> great <span className='font-bold'>sites</span> that i have built<span className='text-red'>.</span></h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
            <div
              style={{ backgroundImage: `url(${FlashPainters})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div mt-3'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 text-center'>
                <span className='text-sm font-bold text-white tracking-wider'>
                  react.js and firebae application
                </span>
                <div className='pt-8 text-center'>
                  <a href='https://github.com/dev-cody/flash-painters-react' target="_blank" rel="noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>
                      github
                    </button>
                  </a>
                  <a href='https://flash-painters.web.app/' target="_blank" rel="noreferrer">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-md'>
                      demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Projects