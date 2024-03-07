import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Inputs = () => {
    const form = useRef();

    const FilledFields = (e) =>
        e.target[0].value !== "" &&
        e.target[1].value !== "" &&
        e.target[2].value !== "";

    const sendEmail = (e) => {
        e.preventDefault();

        if (FilledFields(e)) {
            emailjs
                .sendForm(
                    "service_ehohtjc",
                    "template_nk18tbn",
                    form.current,
                    "TlYnMhGuiSQ68b96R"
                )
                .then(
                    (result) => {
                        toast.success("Message Successfully Sent!", { theme: "dark" });
                    },
                    (error) => {
                        toast.error("Message Send Failure", { theme: "dark" });
                    }
                );
            console.log("2");

            for (let index = 0; index < 3; index++) {
                const element = e.target[index];
                element.value = "";
            }
        } else {
            toast.warn("All fields shound be filed!", { theme: "dark" });
        }
    };
    return (
        <form ref={form} className="contact_form" onSubmit={sendEmail}>
            <div className="contact__inputs">
                <h3 className="input_title">Write me</h3>
                <input
                    type="text"
                    name="user_name"
                    className="contact-input"
                    placeholder="Your Name"
                />
                <input
                    type="email"
                    name="user_email"
                    className="contact-input"
                    placeholder="Email"
                />
                <textarea
                    name="message"
                    className="contact-input"
                    placeholder="WRITE YOUR MESSAGE"
                />
                <input
                    type="submit"
                    value="Send"
                    className="send_btn"
                />
                <ToastContainer />
            </div>
        </form>
    );
};

export default Inputs;
