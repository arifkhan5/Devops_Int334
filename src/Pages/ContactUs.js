// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_ifidr47', 'template_wxxtmoc', form.current, {
//         publicKey: 'q_weFTArgr0o5lDz1',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       <label>Email</label>
//       <input type="email" name="from_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default ContactUs;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      message: form.current.message.value,
      to_name: 'Admin', // Add recipient name if needed
    };

    emailjs
      .send(
        'service_ifidr47', 
        'template_wxxtmoc', 
        formData, // Send the formData object
        'q_weFTArgr0o5lDz1'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus('Email sent successfully!');
          form.current.reset(); // Clear form after successful send
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus('Failed to send email. Please try again.');
        },
      );
  };

  const styles = {
    container: {
      maxWidth: '500px',
      margin: '40px auto',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      backgroundColor: '#fff',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    label: {
      fontWeight: '500',
      marginBottom: '5px',
    },
    input: {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '16px',
    },
    textarea: {
      padding: '10px',
      borderRadius: '4px',
      border: '1px solid #ddd',
      fontSize: '16px',
      minHeight: '100px',
    },
    button: {
      padding: '12px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
    },
    status: {
      textAlign: 'center',
      marginTop: '15px',
      color: '#4CAF50',
    }
  };

  return (
    <div style={styles.container}>
      <form ref={form} onSubmit={sendEmail} style={styles.form}>
        <label style={styles.label}>Name</label>
        <input 
          type="text" 
          name="from_name" 
          style={styles.input}
          required 
        />
        
        <label style={styles.label}>Email</label>
        <input 
          type="email" 
          name="from_email" 
          style={styles.input}
          required 
        />
        
        <label style={styles.label}>Message</label>
        <textarea 
          name="message" 
          style={styles.textarea}
          required 
        />
        
        <button type="submit" style={styles.button}>
          Send Message
        </button>

        {status && <p style={styles.status}>{status}</p>}
      </form>
    </div>
  );
};

export default ContactUs;
