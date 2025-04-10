
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../Images/indexpage.jpg';

function IndexPage() {
    const services = [
        {
            name: 'Online Booking',
            description: 'Easy and convenient online booking for all community facilities.',
            image: 'onlinebooking.jpg',
        },
        {
            name: 'Maintenance Services',
            description: 'Regular maintenance and support for community infrastructure.',
            image: 'maintainance.jpg',
        },
        {
            name: 'Health Programs',
            description: 'Health check-ups and wellness programs for all community members.',
            image: 'health.jpg',
        },
        {
            name: 'Medical Facilities',
            description: 'Skill development workshops to empower community members.',
            image: 'ambulance.jpg',
        },
        {
            name: 'Community Events',
            description: 'Support for low-income families and students in need.',
            image: 'events.jpg',
        },
        {
            name: 'Security',
            description: 'Engaging events to foster community spirit and participation.',
            image: 'cctv.jpg',
        },
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: 'grey' }}>
            {/* Fixed Header */}
            <header style={{
                position: 'fixed',  // Fix the header at the top
                top: 0,             // Align it to the top
                left: 0,            // Align it to the left
                right: 0,           // Ensure it stretches across the screen
                backgroundColor: '#282c34',
                padding: '20px',
                color: 'white',
                zIndex: 1000,       // Ensure it's above other content
            }}>
                <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <ul style={{ listStyle: 'none', display: 'flex', padding: 0, margin: 0 }}>
                        <li><a href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', marginRight: '20px' }}>Home</a></li>
                        <li><a href="#about" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', marginRight: '20px' }}>About</a></li>
                        <li><a href="#services" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', marginRight: '20px' }}>Services</a></li>
                        <li><a href="#contact" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', marginRight: '20px' }}>Contact</a></li>
                    </ul>
                    <div>
                        <Link to="/user-login">
                            <button style={{ backgroundColor: '#61dafb', border: 'none', color: '#282c34', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px', marginRight: '10px' }}>
                                User Login
                            </button>
                        </Link>
                        <Link to="/admin-login">
                            <button style={{ backgroundColor: '#61dafb', border: 'none', color: '#282c34', padding: '10px 20px', fontSize: '16px', cursor: 'pointer', borderRadius: '5px' }}>
                                Admin Login
                            </button>
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Main content with offset to account for the fixed header */}
            <main style={{ paddingTop: '120px' }}>
                <section id="home" style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '85vh',
                    width: '100%',
                    textAlign: 'center',
                    color: '#fff',
                    padding: '50px 0'
                }}>
                    <h1>Welcome to My Website</h1>
                    <p>This is a simple homepage built with React. Customize it to showcase your content!</p>
                </section>

                <section id="about" style={{
                    backgroundImage: `url(/Images/about-background.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '20px',
                    color: '#fff',
                    textAlign: 'center',
                    backdropFilter: 'blur(5px)'
                }}>
                    <div style={{ background: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '8px' }}>
                        <h2>About Us</h2>
                        <p>We are a team of passionate developers building web solutions for all.</p>
                    </div>
                </section>

                <section id="services" style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <h2 style={{ marginBottom: '20px' }}>Our Services</h2>
                    <p style={{ marginBottom: '40px', color: '#555' }}>
                        Explore the services we offer, including online booking, maintenance, and more.
                    </p>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '20px',
                            maxWidth: '1000px',
                            margin: '0 auto',
                        }}
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                style={{
                                    background: '#fff',
                                    borderRadius: '8px',
                                    padding: '20px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                                }}
                            >
                                <img
                                    src={`/Images/${service.image}`}
                                    alt={service.name}
                                    style={{
                                        width: '100%',
                                        borderRadius: '8px',
                                        marginBottom: '15px',
                                        transition: 'transform 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                    }}
                                />
                                <h3 style={{ margin: '10px 0', color: '#333' }}>{service.name}</h3>
                                <p style={{ color: '#666', lineHeight: '1.6' }}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" style={{ padding: '40px 20px', textAlign: 'center', background: '#5B5B5B' }}>
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        backgroundColor: '#5B5B5B'
                    }}>
                        <h2>Contact Us</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                            <input type="text" placeholder="Your Name" style={{ marginBottom: '10px', padding: '15px' }} />
                            <input type="email" placeholder="Your Email" style={{ marginBottom: '10px', padding: '15px' }} />
                            <textarea placeholder="Your Message" rows="5" style={{ marginBottom: '10px', padding: '15px' }} />
                            <button type="submit" style={{ padding: '15px', backgroundColor: '#007BFF', color: '#fff' }}>Send Message</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer style={{ backgroundColor: '#282c34', color: 'white', padding: '20px' }}>
                <p>© 2024 My Website | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default IndexPage;
