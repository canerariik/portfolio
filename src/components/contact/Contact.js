import React, { useEffect, useRef, useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { RiCheckLine } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    var timeout;
    if (isSent) {
      timeout = setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [isSent]);

  const handleSent = () => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      form.current.reset();
    }, 3000)
  }

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_g9fpyjb',
        'template_ley4dhd',
        form.current,
        'mJR5iYxTnePbZzm5M'
      )
      .then(
        (result) => {
          console.log(result.text);
          handleSent();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>canerariik@hotmail.com</h5>
            <a href="mailto:canerariik@hotmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Reach from Linkedin</h5>
            <a href="https://www.linkedin.com/in/canerarik0/" target="_blank">
              Contact
            </a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+90595</h5>
            <a target="_blank">
              Contact me
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          {isSent ? (
            <div className='isSent'>
              <RiCheckLine className='sent__icon' />
              <p>Email sent successfully!</p>
            </div>
          ) : (
            <button type="submit" className="btn btn-primary sendBtn">
              Send Message
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
