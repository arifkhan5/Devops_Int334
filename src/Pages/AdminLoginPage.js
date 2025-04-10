import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../Images/logo.JPG';

function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const adminsRef = collection(db, 'Admins');
            const q = query(adminsRef, where('Email', '==', email));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                toast.error('No admin found with this email.');
                return;
            }

            let isValid = false;
            querySnapshot.forEach((doc) => {
                const adminData = doc.data();
                if (adminData.Password === password) {
                    isValid = true;
                }
            });

            if (isValid) {
                toast.success('Login successful!');
                setTimeout(() => navigate('/admin-dashboard'), 1500);
            } else {
                toast.error('Invalid password.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An error occurred during login. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div style={styles.loginCard}>
                <div style={styles.leftPanel}>
                    <div style={styles.formContainer}>
                        <h1 style={styles.heading}>Welcome Back</h1>
                        <p style={styles.subText}>Please sign in to your admin account</p>
                        <form style={styles.form} onSubmit={handleLogin}>
                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Email Address</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={styles.input}
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div style={styles.inputGroup}>
                                <label style={styles.label}>Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    style={styles.input}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <button 
                                type="submit" 
                                style={styles.loginButton}
                                disabled={isLoading}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#283593';
                                    e.target.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#1a237e';
                                    e.target.style.transform = 'none';
                                }}
                            >
                                {isLoading ? 'Signing in...' : 'Sign In'}
                            </button>
                        </form>
                    </div>
                </div>
                <div style={styles.rightPanel}>
                    <img src={logo} alt="Logo" style={styles.logoImage} />
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7ff 0%, #c3e8ff 100%)',
        padding: '20px',
    },
    loginCard: {
        display: 'flex',
        width: '1000px',
        height: '600px',
        backgroundColor: '#fff',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    },
    leftPanel: {
        flex: 1,
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: '#fff',
    },
    rightPanel: {
        flex: 1,
        background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    logoImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    formContainer: {
        maxWidth: '400px',
        margin: '0 auto',
        width: '100%',
    },
    heading: {
        fontSize: '32px',
        fontWeight: '700',
        color: '#1a237e',
        marginBottom: '10px',
        textAlign: 'center',
    },
    subText: {
        fontSize: '16px',
        color: '#666',
        marginBottom: '30px',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
    },
    label: {
        fontSize: '14px',
        color: '#333',
        fontWeight: '500',
    },
    input: {
        padding: '12px 16px',
        border: '2px solid #e0e0e0',
        borderRadius: '10px',
        fontSize: '16px',
        transition: 'all 0.3s ease',
        outline: 'none',
    },
    loginButton: {
        backgroundColor: '#1a237e',
        color: '#fff',
        padding: '14px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontWeight: '600',
        marginTop: '10px',
    },
};

export default AdminLoginPage;