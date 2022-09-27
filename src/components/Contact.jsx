import { React, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const Contact = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [captchaToken, setCaptchaToken] = useState(false)
  const [formError, setFormError] = useState(false)

  const newEmail = collection(db, 'emails')
  

  const handleSubmit = (e) => {
    let newDate = new Date()
    e.preventDefault()
    
    if(captchaToken) {
      addDoc(newEmail, {name: name, email: email, message: message, date: newDate})  
      setFormSubmitted(true)
    } else {
      setFormSubmitted(false)
      setFormError(true)
    }
  }

  const getToken = (token) => {
    if(token) {
      setFormError(false)
      setCaptchaToken(true)
    }
  }

  const handleExpire = (token) => {
    setCaptchaToken(false)
  }

  return (
    <section id='contact' className='text-white'>
    <div className="contact-triangle"></div>
    <div className="max-w-[800px] w-full mx-auto flex flex-col justify-start p-3 leading-tight">
      <div className='w-full flex flex-start'>
            <div className='bg-red w-[250px] h-[30px] my-[20px] mr-auto'>
                <h2 className='text-xl font-bold mt-[-40px]'>let's chat</h2>
            </div>
        </div>
        <p className='text-md mt-3'>have a question, looking to hire, or need a website build?</p>
        <h2 className='text-40'>send me an email, let's make it happen!</h2>
        { formSubmitted ? 
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-10 text-center">
          <h2 className='text-40 text-dark'>thanks for reaching out</h2>
          <p className='text-md text-dark'>i look forward to building your ideas</p>
        </div> : 
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-10"
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="mb-3 pt-0">
            <input
              type="text"
              placeholder="your name"
              name="name"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-dark rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="email"
              placeholder="email"
              name="email"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-dark rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="mb-3 pt-0">
            <textarea
              placeholder="your message"
              name="message"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-dark rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
              onChange={(e) => {
                setMessage(e.target.value)
              }}
            />
          </div>
          <div className="mb-3 pt-0">
            <ReCAPTCHA
              sitekey="6LdxJg8iAAAAAGFnxK4kFUe_W_W0kn9p7A3DXIQF"
              onChange={getToken}
              onExpired={handleExpire}
            />
          </div>
          {formError ? <h2 className='text-dark text-center text-md'>so <span className='font-bold'>you</span> are a <span className='font-bold'>robot</span><span className='text-red'>?</span> </h2> : <div className="mb-3 pt-0">
            <button
              className="bg-blue-500 bg-yellow active:bg-blue-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              send
            </button>
          </div> }   

        </form> }
      </div>
    </section>
  )
}

export default Contact