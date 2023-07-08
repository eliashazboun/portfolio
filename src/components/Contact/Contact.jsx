import React, { useRef } from "react";
import "./Contact.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import emailjs from "@emailjs/browser";

const Contact = React.forwardRef((props, ref) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g0353ll",
        "template_yiakx0v",
        form.current,
        "GEs7rv04u2jm4z0m8"
      )
      .then(
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
    <div className="contact" ref={ref}>
      <div className="wrapper">
        <KeyboardArrowUpOutlinedIcon
          className="contact-arrow-up"
          onClick={() => props.handler(props.targetUp)}
        />
        <div className="top"></div>

        <div className="form">
          <h1>Contact Me!</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required={true} />
            <label>Email</label>
            <input type="email" name="user_email" required={true} />
            <label>Message</label>
            <textarea name="message" required={true} />
            <input type="submit" value="Send" className="button" />
          </form>
        </div>
      </div>
    </div>
  );
});

export default Contact;
