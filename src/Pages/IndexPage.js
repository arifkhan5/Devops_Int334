// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import backgroundImage from '../Images/indexpage.jpg';
// import emailjs from 'emailjs-com';

// function IndexPage() {
//     const services = [
//         {
//             name: 'Online Booking',
//             description: 'Easy and convenient online booking for all community facilities.',
//             image: 'onlinebooking.jpg',
//             icon: '🏢'
//         },
//         {
//             name: 'Maintenance Services',
//             description: 'Regular maintenance and support for community infrastructure.',
//             image: 'maintainance.jpg',
//             icon: '🔧'
//         },
//         {
//             name: 'Health Programs',
//             description: 'Health check-ups and wellness programs for all community members.',
//             image: 'health.jpg',
//             icon: '⚕️'
//         },
//         {
//             name: 'Medical Facilities',
//             description: 'Skill development workshops to empower community members.',
//             image: 'ambulance.jpg',
//             icon: '🚑'
//         },
//         {
//             name: 'Community Events',
//             description: 'Support for low-income families and students in need.',
//             image: 'events.jpg',
//             icon: '🎉'
//         },
//         {
//             name: 'Security',
//             description: 'Engaging events to foster community spirit and participation.',
//             image: 'cctv.jpg',
//             icon: '🔒'
//         },
//     ];

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [responseMessage, setResponseMessage] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const formData = {
//             name: name,
//             email: email,
//             message: message,
//         };

//         // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with your EmailJS credentials
//         emailjs
//             .send('service_ifidr47', 'template_wxxtmoc', formData, 'q_weFTArgr0o5lDz1')
//             .then(
//                 (response) => {
//                     setResponseMessage('Your message has been sent successfully!');
//                     setName('');
//                     setEmail('');
//                     setMessage('');
//                 },
//                 (error) => {
//                     setResponseMessage('There was an error sending your message.');
//                 }
//             );
//     };

//     const styles = {
//         mainContainer: {
//             fontFamily: "'Poppins', sans-serif",
//             backgroundColor: '#fafafa',
//             minHeight: '100vh',
//         },
//         header: {
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             background: 'rgba(25, 25, 25, 0.95)',
//             backdropFilter: 'blur(10px)',
//             color: '#fff',
//             padding: '15px 40px',
//             zIndex: 1000,
//             boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
//         },
//         nav: {
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             maxWidth: '1400px',
//             margin: '0 auto',
//         },
//         logo: {
//             color: '#fff',
//             fontSize: '24px',
//             fontWeight: '700',
//             textDecoration: 'none',
//             letterSpacing: '1px',
//             background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//         },
//         navContent: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '40px',
//         },
//         navLinks: {
//             display: 'flex',
//             gap: '30px',
//             listStyle: 'none',
//             padding: 0,
//             margin: 0,
//         },
//         navLink: {
//             color: '#fff',
//             textDecoration: 'none',
//             fontSize: '16px',
//             fontWeight: '500',
//             padding: '8px 16px',
//             borderRadius: '6px',
//             transition: 'all 0.3s ease',
//         },
//         buttonContainer: {
//             display: 'flex',
//             gap: '15px',
//         },
//         loginButton: {
//             background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
//             border: 'none',
//             color: '#fff',
//             padding: '12px 24px',
//             fontSize: '15px',
//             cursor: 'pointer',
//             borderRadius: '8px',
//             transition: 'all 0.3s ease',
//             fontWeight: '600',
//             textDecoration: 'none',
//             display: 'inline-block',
//             textAlign: 'center',
//             boxShadow: '0 4px 15px rgba(255, 65, 108, 0.2)',
//         },
//         adminButton: {
//             background: 'linear-gradient(45deg, #4B79A1, #283E51)',
//             border: 'none',
//             color: '#fff',
//             padding: '12px 24px',
//             fontSize: '15px',
//             cursor: 'pointer',
//             borderRadius: '8px',
//             transition: 'all 0.3s ease',
//             fontWeight: '600',
//             textDecoration: 'none',
//             display: 'inline-block',
//             textAlign: 'center',
//             boxShadow: '0 4px 15px rgba(75, 121, 161, 0.2)',
//         },
//         heroSection: {
//             backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment: 'fixed',
//             height: '100vh',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//             color: '#fff',
//             textAlign: 'center',
//             padding: '0 20px',
//         },
//         heroTitle: {
//             fontSize: '4.5rem',
//             fontWeight: '700',
//             marginBottom: '20px',
//             background: 'linear-gradient(45deg, #fff, #f0f0f0)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//         },
//         serviceSection: {
//             padding: '100px 40px',
//             background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//         },
//         serviceGrid: {
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//             gap: '30px',
//             maxWidth: '1400px',
//             margin: '0 auto',
//         },
//         serviceCard: {
//             background: '#fff',
//             borderRadius: '15px',
//             boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//             overflow: 'hidden',
//             transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//             padding: '30px',
//         },
//         contactSection: {
//             padding: '100px 40px',
//             background: 'linear-gradient(135deg, #fff 0%, #f5f7fa 100%)',
//         },
//         contactForm: {
//             maxWidth: '800px',
//             margin: '0 auto',
//             background: '#fff',
//             padding: '40px',
//             borderRadius: '15px',
//             boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//         },
//         input: {
//             width: '100%',
//             padding: '15px',
//             marginBottom: '20px',
//             border: '2px solid #eee',
//             borderRadius: '8px',
//             fontSize: '1rem',
//             transition: 'border-color 0.3s ease',
//             outline: 'none',
//         },
//         submitButton: {
//             background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
//             color: '#fff',
//             padding: '15px 30px',
//             border: 'none',
//             borderRadius: '8px',
//             fontSize: '1.1rem',
//             cursor: 'pointer',
//             transition: 'transform 0.3s ease',
//             fontWeight: '600',
//             width: '100%',
//         },
//         footer: {
//             background: 'linear-gradient(45deg, #1a1a1a, #2d2d2d)',
//             color: '#fff',
//             padding: '40px',
//             textAlign: 'center',
//         },
//     };

//     return (
//         <div style={styles.mainContainer}>
//             <header style={styles.header}>
//                 <nav style={styles.nav}>
//                     <Link to="/" style={styles.logo}>SocietySphere</Link>
//                     <div style={styles.navContent}>
//                         <ul style={styles.navLinks}>
//                             <li><a href="#home" style={styles.navLink}>Home</a></li>
//                             <li><a href="#services" style={styles.navLink}>Services</a></li>
//                             <li><a href="#contact" style={styles.navLink}>Contact</a></li>
//                         </ul>
//                         <div style={styles.buttonContainer}>
//                             <Link to="/login" style={styles.loginButton}>Login</Link>
//                             <Link to="/admin" style={styles.adminButton}>Admin</Link>
//                         </div>
//                     </div>
//                 </nav>
//             </header>

//             <section style={styles.heroSection}>
//                 <h1 style={styles.heroTitle}>Welcome to SocietySphere</h1>
//                 <p>Your community, your space.</p>
//             </section>

//             <section style={styles.serviceSection} id="services">
//                 <h2>Our Services</h2>
//                 <div style={styles.serviceGrid}>
//                     {services.map((service, index) => (
//                         <div key={index} style={styles.serviceCard}>
//                             <h3>{service.name}</h3>
//                             <p>{service.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             <section style={styles.contactSection} id="contact">
//                 <h2>Contact Us</h2>
//                 <div style={styles.contactForm}>
//                     <input
//                         style={styles.input}
//                         type="text"
//                         placeholder="Your Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                     />
//                     <input
//                         style={styles.input}
//                         type="email"
//                         placeholder="Your Email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <textarea
//                         style={styles.input}
//                         placeholder="Your Message"
//                         rows="6"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                     ></textarea>
//                     <button style={styles.submitButton} onClick={handleSubmit}>
//                         Send Message
//                     </button>
//                     {responseMessage && <p>{responseMessage}</p>}
//                 </div>
//             </section>

//             <footer style={styles.footer}>
//                 <p>&copy; 2024 SocietySphere. All Rights Reserved.</p>
//             </footer>
//         </div>
//     );
// }

// export default IndexPage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Images/indexpage.jpg';
import emailjs from 'emailjs-com';

function IndexPage() {
    const services = [
        {
            name: 'Online Booking',
            description: 'Easy and convenient online booking for all community facilities.',
            image: 'onlinebooking.jpg',
            icon: '🏢'
        },
        {
            name: 'Maintenance Services',
            description: 'Regular maintenance and support for community infrastructure.',
            image: 'maintainance.jpg',
            icon: '🔧'
        },
        {
            name: 'Health Programs',
            description: 'Health check-ups and wellness programs for all community members.',
            image: 'health.jpg',
            icon: '⚕️'
        },
        {
            name: 'Medical Facilities',
            description: 'Skill development workshops to empower community members.',
            image: 'ambulance.jpg',
            icon: '🚑'
        },
        {
            name: 'Community Events',
            description: 'Support for low-income families and students in need.',
            image: 'events.jpg',
            icon: '🎉'
        },
        {
            name: 'Security',
            description: 'Engaging events to foster community spirit and participation.',
            image: 'cctv.jpg',
            icon: '🔒'
        },
    ];

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name: name,
            email: email,
            message: message,
        };

        emailjs
            .send('service_ifidr47', 'template_wxxtmoc', formData, 'q_weFTArgr0o5lDz1')
            .then(
                (response) => {
                    setResponseMessage('Your message has been sent successfully!');
                    setName('');
                    setEmail('');
                    setMessage('');
                },
                (error) => {
                    setResponseMessage('There was an error sending your message.');
                }
            );
    };
    const styles = {
        mainContainer: {
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: '#fafafa',
            minHeight: '100vh',
        },
        header: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            background: 'rgba(25, 25, 25, 0.95)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
            padding: '15px 40px',
            zIndex: 1000,
            boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        },
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1400px',
            margin: '0 auto',
        },
        logo: {
            color: '#fff',
            fontSize: '24px',
            fontWeight: '700',
            textDecoration: 'none',
            letterSpacing: '1px',
            background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        navContent: {
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
        },
        navLinks: {
            display: 'flex',
            gap: '30px',
            listStyle: 'none',
            padding: 0,
            margin: 0,
        },
        navLink: {
            color: '#fff',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '500',
            padding: '8px 16px',
            borderRadius: '6px',
            transition: 'all 0.3s ease',
        },
        buttonContainer: {
            display: 'flex',
            gap: '15px',
        },
        loginButton: {
            background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
            border: 'none',
            color: '#fff',
            padding: '12px 24px',
            fontSize: '15px',
            cursor: 'pointer',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(255, 65, 108, 0.2)',
        },
        adminButton: {
            background: 'linear-gradient(45deg, #4B79A1, #283E51)',
            border: 'none',
            color: '#fff',
            padding: '12px 24px',
            fontSize: '15px',
            cursor: 'pointer',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            fontWeight: '600',
            textDecoration: 'none',
            display: 'inline-block',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(75, 121, 161, 0.2)',
        },

        heroSection: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            textAlign: 'center',
            padding: '0 20px',
        },
        heroTitle: {
            fontSize: '4.5rem',
            fontWeight: '700',
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #fff, #f0f0f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        aboutSection: {
            padding: '100px 40px',
            backgroundColor: '#fff',
            textAlign: 'center',
        },
        aboutContainer: {
            maxWidth: '1200px',
            margin: '0 auto',
        },
        aboutTitle: {
            fontSize: '2.5rem',
            marginBottom: '30px',
            color: '#333',
            fontWeight: '600',
        },
        aboutText: {
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#666',
            marginBottom: '30px',
            maxWidth: '800px',
            margin: '0 auto 40px',
        },
        aboutFeatures: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '40px',
        },
        featureItem: {
            padding: '30px',
            backgroundColor: '#f8f9fa',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
            },
        },
        serviceSection: {
            padding: '100px 40px',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        },
        serviceGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            maxWidth: '1400px',
            margin: '0 auto',
        },
        serviceCard: {
            background: '#fff',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            padding: '30px',
        },

        contactSection: {
            padding: '100px 40px',
            background: 'linear-gradient(135deg, #fff 0%, #f5f7fa 100%)',
        },
        contactForm: {
            maxWidth: '800px',
            margin: '0 auto',
            background: '#fff',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        },
        input: {
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            border: '2px solid #eee',
            borderRadius: '8px',
            fontSize: '1rem',
            transition: 'border-color 0.3s ease',
            outline: 'none',
        },
        submitButton: {
            background: 'linear-gradient(45deg, #FF416C, #FF4B2B)',
            color: '#fff',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            fontWeight: '600',
            width: '100%',
        },
        footer: {
            background: 'linear-gradient(45deg, #1a1a1a, #2d2d2d)',
            color: '#fff',
            padding: '40px',
            textAlign: 'center',
        },
        sectionTitle: {
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#333',
            fontWeight: '600',
        },
    };

    return (
        <div style={styles.mainContainer}>
            <header style={styles.header}>
                <nav style={styles.nav}>
                    <Link to="/" style={styles.logo}>SocietySphere</Link>
                    <div style={styles.navContent}>
                        <ul style={styles.navLinks}>
                            <li><a href="#home" style={styles.navLink}>Home</a></li>
                            <li><a href="#about" style={styles.navLink}>About</a></li>
                            <li><a href="#services" style={styles.navLink}>Services</a></li>
                            <li><a href="#contact" style={styles.navLink}>Contact</a></li>
                        </ul>
                    
<div style={styles.buttonContainer}>
    <Link 
        to="/user-login" 
        style={styles.loginButton}
        onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(255, 65, 108, 0.3)';
        }}
        onMouseLeave={(e) => {
            e.target.style.transform = 'none';
            e.target.style.boxShadow = '0 4px 15px rgba(255, 65, 108, 0.2)';
        }}
    >
        User Login
    </Link>
    <Link 
        to="/admin-login" 
        style={styles.adminButton}
        onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(75, 121, 161, 0.3)';
        }}
        onMouseLeave={(e) => {
            e.target.style.transform = 'none';
            e.target.style.boxShadow = '0 4px 15px rgba(75, 121, 161, 0.2)';
        }}
    >
        Admin Login
    </Link>
</div>
                    </div>
                </nav>
            </header>

            <section id="home" style={styles.heroSection}>
                <h1 style={styles.heroTitle}>Welcome to SocietySphere</h1>
                <p style={{ 
                    fontSize: '1.4rem', 
                    maxWidth: '800px',
                    lineHeight: '1.6',
                    marginBottom: '30px' 
                }}>
                    Your community, your space.
                </p>
            </section>

            <section id="about" style={styles.aboutSection}>
                <div style={styles.aboutContainer}>
                    <h2 style={styles.aboutTitle}>About Us</h2>
                    <p style={styles.aboutText}>
                        Our mission is to enhance the quality of life for all community members
                        by providing modern, accessible, and inclusive solutions. We believe in
                        fostering a strong sense of togetherness while addressing community
                        needs effectively.
                    </p>
                    <div style={styles.aboutFeatures}>
                        <div 
                            style={styles.featureItem}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-5px)';
                                e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'none';
                                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <h3 style={{ color: '#333', marginBottom: '15px' }}>Our Vision</h3>
                            <p>Creating connected and thriving communities through innovative solutions.</p>
                        </div>
                        <div 
                            style={styles.featureItem}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-5px)';
                                e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'none';
                                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <h3 style={{ color: '#333', marginBottom: '15px' }}>Our Values</h3>
                            <p>Integrity, innovation, and community-first approach in everything we do.</p>
                        </div>
                        <div 
                            style={styles.featureItem}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-5px)';
                                e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'none';
                                e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <h3 style={{ color: '#333', marginBottom: '15px' }}>Our Commitment</h3>
                            <p>Dedicated to providing exceptional service and support to our community.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" style={styles.serviceSection}>
                <h2 style={styles.sectionTitle}>Our Services</h2>
                <div style={styles.serviceGrid}>
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            style={styles.serviceCard}
                            onMouseEnter={(e) => {
                                e.target.style.transform = 'translateY(-10px)';
                                e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.transform = 'none';
                                e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ 
                                fontSize: '1.5rem',
                                marginBottom: '15px',
                                color: '#333'
                            }}>{service.name}</h3>
                            <p style={{ 
                                color: '#666',
                                lineHeight: '1.6'
                            }}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="contact" style={styles.contactSection}>
                <h2 style={styles.sectionTitle}>Contact Us</h2>
                <div style={styles.contactForm}>
                    <input
                        style={styles.input}
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={(e) => e.target.style.borderColor = '#FF416C'}
                        onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                    <input
                        style={styles.input}
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={(e) => e.target.style.borderColor = '#FF416C'}
                        onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                    <textarea
                        style={styles.input}
                        placeholder="Your Message"
                        rows="6"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onFocus={(e) => e.target.style.borderColor = '#FF416C'}
                        onBlur={(e) => e.target.style.borderColor = '#eee'}
                    ></textarea>
                    <button 
                        style={styles.submitButton}
                        onClick={handleSubmit}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'none'}
                    >
                        Send Message
                    </button>
                    {responseMessage && (
                        <p style={{ 
                            textAlign: 'center', 
                            marginTop: '20px',
                            color: responseMessage.includes('successfully') ? '#4CAF50' : '#f44336'
                        }}>
                            {responseMessage}
                        </p>
                    )}
                </div>
            </section>

            <footer style={styles.footer}>
                <p>&copy; 2024 SocietySphere. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default IndexPage;