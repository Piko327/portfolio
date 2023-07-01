import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Inputs from "./Inputs";

const Contact = () => {
  return (
    <>
      <div className="contact_title" id="contact">
        <h2 className="contact_second_title"> Get in touch</h2>
        <h1 className="contact_main_title">Contact Me</h1>
      </div>

      <section className="contact_container">
        <ul className="card_container">
          <h3 className="input_title">Talk to me</h3>

          <li className="contact_card">
            <AiOutlineMail className="icon" />
            <h3 className="contact_card_title">Email</h3>
            <span className="card_data">fikii.business@gmail.com</span>
          </li>

          <li className="contact_card">
            <AiOutlinePhone className="icon" />
            <h3 className="contact_card_title">Phone</h3>
            <span className="card_data">+359885643812</span>
          </li>
        </ul>
        <Inputs />
      </section>
    </>
  );
};

export default Contact;
