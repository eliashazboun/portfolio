import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ButtonRow from "../ButtonRow/ButtonRow";
import { Fade } from "react-awesome-reveal";

const Contact = ( ) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_g0353ll", "template_yiakx0v", form.current, "GEs7rv04u2jm4z0m8").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    form.current.reset();
  };
  return (
    <div className="contact">
      <div className="container-sm">
        <Fade triggerOnce cascade>
          <h1 className="text-center fz-xxl">CONTACT</h1>
          <form className="display-f flex-d-col gap-4 pad-t4" ref={form} onSubmit={sendEmail}>
            <input className="pad-1" type="text" placeholder="Name"  name="user_name" required={true} />
            <input className="pad-1" type="email" placeholder="Email" name="user_email" required={true} />
            <textarea name="message" className="pad-1" rows={7} placeholder="Message" required={true} />
            <div className="display-f justify-center">

              <ButtonRow items={['Send']}/>
            </div>
          </form>
          </Fade>

      </div>
    </div>
  );
};

export default Contact;
