import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
const Contact = () => {
  const onSubmitHAnder = () => {};
  return (
    <section className="contact_container">
      <div className="contact_title">
        <h2 className="contact_second_title"> Get in touch</h2>
        <h1 className="contact_main_title">Contact Me</h1>
      </div>

      <ul className="card_container">
        <li className="contact_card">
          <AiOutlineMail className="icon" />
          <h3 className="contact_card_title">Email</h3>
          <span className="card_data">fiki.busnes@gmail.com</span>
        </li>
        <li className="contact_card">
          <AiOutlinePhone className="icon" />
          <h3 className="contact_card_title">Phone</h3>
          <span className="card_data">088 5643 812</span>
        </li>
      </ul>
      <form onSubmit={onSubmitHAnder} className="contact_form">
        <div className="Contact_inputs">
        <h3 className="input_title">Write me</h3>
          <div className="contact_content">
            <input type="email" className="contact-input" placeholder="Email" />
          </div>

          <div className="contact_content">
            <input
              type="name"
              className="contact-input"
              placeholder="Your Name"
            />
          </div>

          <div className="contact_content">
            <input
              type="text"
              className="contact-input"
              placeholder="Write your message"
            />
          </div>
        </div>
        <button className="send_btn">
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
