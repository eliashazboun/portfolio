import React from "react";

const Contact = () => {
  return (
    <div className="contact m-b4">
      <div className="section">
        <div className="container">
        <h1 className="text-center fz-xxl pad-b4">CONTACT</h1>

          <div className="row justify-space-around">
            <div className="contactitem text-center pad-1 col-12-sm col-12-md col-4-lg">
            <img width="64" height="64" src="https://img.icons8.com/3d-fluency/64/phone.png" alt="phone"/>
              <p className=" fz-xl text-center ">Phone</p>
              <p className=" fz-lg text-center ">(252)-469-8517</p>

            </div>
            <div className="contactitem text-center pad-1 col-12-sm col-12-md col-4-lg">
            <img width="60" height="60" src="https://img.icons8.com/papercut/60/000000/new-post.png" alt="new-post"/>

              <p className=" fz-xl text-center ">Email</p>
              <p className=" fz-lg text-center ">hazbounelias96@gmail.com</p>

            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
