import React, { useState, useEffect } from 'react';
import { auth } from './firebase';

const AdminDashboard = () => {
  const [loginTime, setLoginTime] = useState('');

  useEffect(() => {
    const currentTime = new Date().toLocaleString();
    setLoginTime(currentTime);
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = '/';
      console.log('User logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  }

  const navigateToPage = (path) => {
    window.location.href = path;
  };

  const cards = [
    { 
      title: 'Register User', 
      path: '/register-user', 
      description: 'Manage user registrations',
      icon: '👥'
    },
    { 
      title: 'User Permissions', 
      path: '/user-permissions', 
      description: 'Set and edit permissions',
      icon: '🔒'
    },
    { 
      title: 'Reports', 
      path: '/reports', 
      description: 'Generate and view reports',
      icon: '📊'
    },
    { 
      title: 'Settings', 
      path: '/settings', 
      description: 'Manage system settings',
      icon: '⚙️'
    },
    { 
      title: 'Notifications', 
      path: '/notifications', 
      description: 'Manage notifications',
      icon: '🔔'
    },
    { 
      title: 'Activity Log', 
      path: '/activity-log', 
      description: 'View system activity logs',
      icon: '📝'
    },
  ];

  const styles = {
    dashboardContainer: {
      padding: '2rem',
      backgroundColor: '#1a1a1a',
      minHeight: '100vh',
      fontFamily: "'Poppins', sans-serif",
      color: '#ffffff',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#2d2d2d',
      padding: '1.5rem 2rem',
      borderRadius: '15px',
      marginBottom: '2rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
    },
    headerContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    headerText: {
      margin: 0,
      fontSize: '2rem',
      background: 'linear-gradient(45deg, #e50914, #ff5f6d)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      fontWeight: '600',
    },
    loginTimeText: {
      fontSize: '0.9rem',
      color: '#999',
    },
    logoutBtn: {
      backgroundColor: '#e50914',
      color: 'white',
      padding: '0.8rem 1.5rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      '&:hover': {
        backgroundColor: '#f40612',
        transform: 'translateY(-2px)',
      },
    },
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
      padding: '1rem',
    },
    card: {
      backgroundColor: '#2d2d2d',
      padding: '1.5rem',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '1px solid #3d3d3d',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    cardIcon: {
      fontSize: '2rem',
      marginBottom: '0.5rem',
    },
    cardTitle: {
      margin: 0,
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#ffffff',
    },
    cardDescription: {
      margin: 0,
      fontSize: '0.9rem',
      color: '#999',
      lineHeight: '1.4',
    },
    cardButton: {
      backgroundColor: '#333333',
      color: '#ffffff',
      padding: '0.8rem 1rem',
      border: '1px solid #454545',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: '500',
      transition: 'all 0.3s ease',
      marginTop: 'auto',
      '&:hover': {
        backgroundColor: '#e50914',
        borderColor: '#e50914',
      },
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerText}>Welcome, Admin!</h1>
          <p style={styles.loginTimeText}>
            Login Time: {loginTime}
          </p>
        </div>
        <button 
          style={styles.logoutBtn}
          onClick={handleLogout}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#f40612';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#e50914';
            e.target.style.transform = 'none';
          }}
        >
          Logout
        </button>
      </header>

      <div style={styles.cardsGrid}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => navigateToPage(card.path)}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            }}
          >
            <div style={styles.cardIcon}>{card.icon}</div>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardDescription}>{card.description}</p>
            <button
              style={styles.cardButton}
              onClick={(e) => {
                e.stopPropagation();
                navigateToPage(card.path);
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#e50914';
                e.target.style.borderColor = '#e50914';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#333333';
                e.target.style.borderColor = '#454545';
              }}
            >
              Go to {card.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;