import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs, { sendForm } from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
      console.log('123',form);
    emailjs.sendForm("service_g8xvs6q", "template_j66b6x3", form.current, "OCJxnizNSPVkq72Md")

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>meteabalajmi@gmail.com</h5>
            <a href='mailto:meteabalajmi@gmail.com'id='link'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>0503430690</h5>
            <a href='https://api.whatsapp.com/send?phone=0503430690' id='link' target='_blank'>Send a message</a>
          </article>


        </div>


        {/* END OF CONTACT OPTIONS */}


        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' id='send'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact