import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './firebase';
import logo from '../Images/logo.JPG';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Login Successful!', {
                position: "top-center",
                autoClose: 2000,
            });
            setTimeout(() => {
                window.location.href = "/user-dashboard";
            }, 2000);
        } catch (error) {
            if (error.code === 'auth/invalid-email') {
                toast.error("Invalid Email Address");
            } else if (error.code === 'auth/wrong-password') {
                toast.error("Incorrect Password");
            } else {
                toast.error("Login Failed. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #f5f7ff 0%, #c3e8ff 100%)',
            padding: '20px',
            fontFamily: "'Poppins', sans-serif",
        },
        loginCard: {
            display: 'flex',
            maxWidth: '1000px',
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            height: '600px',
        },
        leftPanel: {
            flex: 1,
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
        },
        rightPanel: {
            flex: 1,
            position: 'relative',
            overflow: 'hidden',
        },
        rightPanelImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
        },
        heading: {
            fontSize: '32px',
            color: '#1a237e',
            marginBottom: '10px',
            fontWeight: '700',
            textAlign: 'left',
        },
        subText: {
            fontSize: '16px',
            color: '#666',
            marginBottom: '30px',
            textAlign: 'left',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            width: '100%',
            maxWidth: '400px',
        },
        inputGroup: {
            position: 'relative',
        },
        input: {
            width: '100%',
            padding: '15px',
            paddingLeft: '45px',
            border: '2px solid #e1e1e1',
            borderRadius: '12px',
            fontSize: '15px',
            transition: 'all 0.3s ease',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: '#333',
        },
        inputIcon: {
            position: 'absolute',
            left: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#666',
        },
        options: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
            fontSize: '14px',
            color: '#666',
        },
        checkboxLabel: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
        },
        checkbox: {
            width: '16px',
            height: '16px',
            accentColor: '#1a237e',
        },
        loginButton: {
            backgroundColor: '#1a237e',
            color: '#fff',
            padding: '15px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontWeight: '600',
            marginTop: '20px',
            position: 'relative',
            overflow: 'hidden',
        },
        signupText: {
            marginTop: '20px',
            fontSize: '14px',
            color: '#666',
            textAlign: 'center',
        },
        link: {
            color: '#1a237e',
            textDecoration: 'none',
            fontWeight: '600',
            transition: 'color 0.3s ease',
        },
        loadingSpinner: {
            width: '20px',
            height: '20px',
            border: '3px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            borderTopColor: '#fff',
            animation: 'spin 1s ease infinite',
            margin: '0 auto',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.loginCard}>
                <div style={styles.leftPanel}>
                    <h1 style={styles.heading}>Welcome Back</h1>
                    <p style={styles.subText}>Please sign in to your account</p>

                    <form style={styles.form} onSubmit={handleLogin}>
                        <div style={styles.inputGroup}>
                            <i className="fas fa-envelope" style={styles.inputIcon}></i>
                            <input
                                type="email"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={styles.input}
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#1a237e';
                                    e.target.style.boxShadow = '0 0 0 2px rgba(26,35,126,0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#e1e1e1';
                                    e.target.style.boxShadow = 'none';
                                }}
                                required
                            />
                        </div>

                        <div style={styles.inputGroup}>
                            <i className="fas fa-lock" style={styles.inputIcon}></i>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={styles.input}
                                onFocus={(e) => {
                                    e.target.style.borderColor = '#1a237e';
                                    e.target.style.boxShadow = '0 0 0 2px rgba(26,35,126,0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#e1e1e1';
                                    e.target.style.boxShadow = 'none';
                                }}
                                required
                            />
                        </div>

                        <div style={styles.options}>
                            <label style={styles.checkboxLabel}>
                                <input type="checkbox" style={styles.checkbox} />
                                Remember me
                            </label>
                            <a 
                                href="/forgot-password" 
                                style={styles.link}
                                onMouseOver={(e) => e.target.style.color = '#283593'}
                                onMouseOut={(e) => e.target.style.color = '#1a237e'}
                            >
                                Forgot password?
                            </a>
                        </div>

                        <button 
                            type="submit" 
                            style={styles.loginButton}
                            disabled={isLoading}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = '#283593';
                                e.target.style.transform = 'translateY(-2px)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = '#1a237e';
                                e.target.style.transform = 'none';
                            }}
                        >
                            {isLoading ? (
                                <div style={styles.loadingSpinner}></div>
                            ) : (
                                'Sign In'
                            )}
                        </button>

                        <p style={styles.signupText}>
                            Don't have an account?{' '}
                            <a 
                                href="/#contact" 
                                style={styles.link}
                                onMouseOver={(e) => e.target.style.color = '#283593'}
                                onMouseOut={(e) => e.target.style.color = '#1a237e'}
                            >
                                Contact Us
                            </a>
                        </p>
                    </form>
                </div>

                <div style={styles.rightPanel}>
                    <img 
                        src={logo} 
                        alt="Login" 
                        style={styles.rightPanelImage}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.target.style.transform = 'none'}
                    />
                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
}

export default UserLoginPage;