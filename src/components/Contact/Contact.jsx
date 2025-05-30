import React, { useRef, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";//also importing the css class of toastifies
import emailjs from '@emailjs/browser';


function Contact() {

  const form = useRef();
  const [isMailSent,setIsMailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();//used so that, when i click on SUBMIT=> my page does not reload, just sends the email
    emailjs
    .sendForm(
      "service_62oofkf", // service id in Email Services of EmailJS
      "template_iq3xrbp", // email template id in Email Templates of EmailJS
      form.current,
      "MlZgfwE5INz85P_Ir", //public key in Accounts of EmailJS
    ).then(
      () => {
        setIsMailSent(true);
        form.current.reset();// resets form fields
        toast.success("Email sent successfully !!!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
      },
      (error) => {
        // toast.error("Error sending message",error);
        console.error("Error sending email:", error);
        toast.error("Oops,email not sent !",{
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        })
      }
    )




  }

  return (
    <section 
    id='contact'
    className='py-24 pb-24 px-4 sm:px-[4vw] md:px-[6vw] lg:px-[2vw] font-sans bg-skill-grad
    flex flex-col items-center justify-center'
    >
      <ToastContainer/>
      <div className='text-center mb-16'>
        <h2 className='text-white text-bold text-3xl sm:text-4xl'>EDUCATION</h2>
        <div className='w-40 h-1 bg-[#8245ec] mx-auto mt-2'></div>
        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          "Programmers are not to be measured by their ingenuity and their logic but by the completeness of their communication."
        </p>
        <p className='text-gray-400 mt-4 text-xl font-bold '>{'\u00A0'}— Alan J. Perlis</p>
      </div>

      {/* Contact form */}
      <div className='mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-500 transform transition-transform duration-300 hover:scale-105'>
        <h3 className='text-white text-center font-semibold text-xl'>Drop a message!</h3>

        <form 
        className='flex flex-col mt-4 space-y-4'
        ref={form}
        onSubmit={sendEmail}
        >
          <input 
          name='user_email' 
          type="email" 
          required 
          placeholder='Enter your email id' 
          className='w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          <input 
          name='user_name' 
          type="text" 
          required 
          placeholder='Enter your name' 
          className='w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          <input 
          name='subject' 
          type="text" 
          required 
          placeholder='Enter the subject' 
          className='w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          <textarea 
          name='message' 
          type="text" 
          required 
          placeholder='Write your message...' 
          className='w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500'
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            // onClick={() => handleSubmit()}
          >
            Send
          </button>

        </form>

      </div>



    </section>
  )
}

export default Contact