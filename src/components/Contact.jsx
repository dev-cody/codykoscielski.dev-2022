import { React, useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const FORM_ENDPOINT = "";


const Contact = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const newEmail = collection(db, 'emails')
  

  const handleSubmit = (e) => {
    e.preventDefault()
    addDoc(newEmail, {name: name, email: email, message: message})
    setTimeout(() => {
      setFormSubmitted(true)
    }, 100)

    
  }

  if (formSubmitted) {
    return(
      <div className="">
        <h2>awesome, i look forward to chatting</h2>
      </div>
    )
  }

  return (
    <section id='tech' className='text-white'>
    <div className="contact-triangle"></div>
    <div className="max-w-[800px] w-full mx-auto flex flex-col justify-start p-3 leading-tight">
      <div className='w-full flex flex-start'>
            <div className='bg-red w-[250px] h-[30px] my-[20px] mr-auto'>
                <h2 className='text-xl font-bold mt-[-40px]'>let's chat</h2>
            </div>
        </div>
        <p className='text-md mt-3'>have a question, looking to hire, or need a website build?</p>
        <h2 className='text-40'>send me an email, let's make it happen!</h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-4 mb-10"
        action={FORM_ENDPOINT}
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
            <button
              className="bg-blue-500 bg-yellow active:bg-blue-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              send
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact