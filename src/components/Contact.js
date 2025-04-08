// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="jyoti kumari" required />
        <input type="email" placeholder="jyotikumarimuza@gmail.com" required />
        <textarea placeholder="Hello Jyoti,

I went through your portfolio and I’m really impressed with your skills in React and frontend development. I’d love to connect and know more about your projects.

Looking forward to hearing from you.

Thanks,
[jyoti kumari]

" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
