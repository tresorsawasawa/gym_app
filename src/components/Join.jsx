import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eaefcks', 'template_el3qr9a', form.current, '698y4GKjnFWmS1fI1');

    document.querySelector('.email-container').reset();
  };

  return (
    <section id="join-us" className="join">
      <div className="left-j">
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>

        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>

      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            id="email"
            type="email"
            name="user_email"
            className="input_email"
            placeholder="Enter your email address"
            required
          />
          <input
            type="submit"
            value="Join Us"
            className="btn btn-j"
          />
        </form>
      </div>
    </section>
  );
};

export default Join;
