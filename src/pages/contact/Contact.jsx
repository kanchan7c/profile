import React from 'react';
import './Contact.scss';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8crg5u4',
        'template_u429bpe',
        form.current,
        'R88BjSK7x6Pr_va_b',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    alert('Thank you for reaching out!');
  };
  return (
    <div className='contact_page'>
      <div className='contact-social'>
        <a
          href='https://www.facebook.com/profile.php?id=100010316479068'
          className='facebook'
          target='_blank'
          rel='noreferrer'
        >
          <FacebookIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/kanchan-chaudhary-a38568bb/'
          className='linkedin'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon />
        </a>
        <a
          href='https://github.com/kanchan7c'
          className='github'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
        </a>
      </div>
      <div className='contact-entry'>
        <form ref={form} onSubmit={sendEmail} className='contact-form'>
          <label>Name</label>
          <input type='text' name='user_name' placeholder='Your Name' />
          <label>Email</label>
          <input type='email' name='user_email' placeholder='Your Email' />
          <label>Message</label>
          <textarea name='message' placeholder='Type Your Message...' />
          <button type='submit' className='btn contact-btn'>
            Send <KeyboardDoubleArrowRightIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
