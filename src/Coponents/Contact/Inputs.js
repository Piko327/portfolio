import React, { useRef} from 'react'
import emailjs from '@emailjs/browser';

const Inputs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ehohtjc', 'template_nk18tbn', form.current, 'TlYnMhGuiSQ68b96R')
        .then((result) => {
         ("Message succsesfuly sended")
        }, (error) => {
          ("Message not send cucrectly ")
        });


    };
  return (


    <form ref={form} className="contact_form"  onSubmit={sendEmail}>
    <div className="contact_inputs">
    <h3 className="input_title">Write me</h3>
      <input type="text" name="user_name"  className="contact-input"
         placeholder="Your Name" />
      <input type="email"  name="user_email" className="contact-input"
       placeholder="Email" />
      <textarea name="message"   className="contact-input" placeholder='WRITE YOUR MESSAGE'/>
      <input type="submit" value="Send"  className="send_btn" />
    
      </div>
    </form>
  )
}

 export default  Inputs