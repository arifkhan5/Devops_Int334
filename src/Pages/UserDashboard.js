import React, { useState } from "react";
import { auth, db } from './firebase';
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [activeNav, setActiveNav] = useState('Dashboard');

  const styles = {
    dashboardContainer: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#f0f2f5',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
    },
    sidebar: {
      width: '280px',
      backgroundColor: '#1a237e',
      padding: '2rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      height: '100vh',
      boxShadow: '4px 0 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
      left: 0,
      top: 0,
    },
    logo: {
      color: '#fff',
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '2rem',
      textAlign: 'center',
      letterSpacing: '1px',
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      margin: '0',
      flex: 1,
    },
    navItem: {
      margin: '0.8rem 0',
      padding: '0.8rem 1rem',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      position: 'relative',
      zIndex: 1001,
    },
    navItemActive: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      transform: 'translateX(5px)',
    },
    logoutContainer: {
      marginTop: 'auto',
      paddingBottom: '2rem',
      position: 'relative',
      zIndex: 1001,
    },
    logoutBtn: {
      width: '100%',
      padding: '1rem',
      backgroundColor: '#f44336',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'all 0.3s ease',
    },
    mainContent: {
      marginLeft: '280px',
      padding: '2rem',
      width: 'calc(100% - 280px)',
      overflowX: 'hidden',
      position: 'relative',
      zIndex: 1,
    },
    header: {
      backgroundColor: '#fff',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    welcomeText: {
      fontSize: '24px',
      fontWeight: '600',
      color: '#1a237e',
      margin: 0,
    },
    cardsContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem',
      position: 'relative',
      zIndex: 2,
    },
    card: {
      backgroundColor: '#fff',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      minWidth: '280px',
      position: 'relative',
      zIndex: 3,
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#1a237e',
      marginBottom: '1rem',
    },
    cardText: {
      color: '#666',
      marginBottom: '1rem',
    },
    cardButton: {
      padding: '0.8rem 1.5rem',
      backgroundColor: '#1a237e',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      zIndex: 4,
    },
    activitySection: {
      backgroundColor: '#fff',
      padding: '1.5rem',
      borderRadius: '12px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      marginTop: '2rem',
      position: 'relative',
      zIndex: 2,
    },
    activityTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#1a237e',
      marginBottom: '1rem',
    },
    activityList: {
      listStyle: 'none',
      padding: 0,
    },
    activityItem: {
      padding: '1rem',
      borderBottom: '1px solid #eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  };

  const navItems = [
    'Dashboard',
    'Profile',
    'Notices',
    'Requests',
    'Payments',
    'Settings'
  ];

  const handleNavigation = (buttonText) => {
    if (buttonText === 'Payment Gateway') {
      navigate('/payment-gateway');
    }
  };

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log("No user data found");
          }
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div style={styles.dashboardContainer}>
      <nav style={styles.sidebar}>
        <h1 style={styles.logo}>Society Sphere</h1>
        <ul style={styles.navList}>
          {navItems.map((item) => (
            <li
              key={item}
              style={{
                ...styles.navItem,
                ...(activeNav === item ? styles.navItemActive : {}),
              }}
              onClick={() => setActiveNav(item)}
              onMouseEnter={(e) => {
                if (activeNav !== item) {
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateX(5px)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeNav !== item) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'none';
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <div style={styles.logoutContainer}>
          <button
            style={styles.logoutBtn}
            onClick={handleLogout}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#d32f2f';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#f44336';
              e.target.style.transform = 'none';
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      <main style={styles.mainContent}>
        <header style={styles.header}>
          <h2 style={styles.welcomeText}>
            Welcome, {userDetails ? userDetails.firstName : "Guest"}
          </h2>
          <div style={{ color: '#666' }}>
            {new Date().toLocaleDateString()}
          </div>
        </header>

        <div style={styles.cardsContainer}>
          {[
            {
              title: 'Payment',
              text: 'Pay pending amounts',
              buttonText: 'Payment Gateway'
            },
            {
              title: 'Request Query',
              text: 'Raise a new query or request',
              buttonText: 'New Request'
            },
            {
              title: 'Active Requests',
              text: '2 service requests in progress',
              buttonText: 'Track Requests'
            }
          ].map((card, index) => (
            <div
              key={index}
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
              }}
            >
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardText}>{card.text}</p>
              <button
                style={styles.cardButton}
                onClick={() => handleNavigation(card.buttonText)}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#283593'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1a237e'}
              >
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>

        <section style={styles.activitySection}>
          <h3 style={styles.activityTitle}>Recent Activity</h3>
          <ul style={styles.activityList}>
            <li style={styles.activityItem}>
              <span>Maintenance Request #123</span>
              <span style={{ color: '#666' }}>2 hours ago</span>
            </li>
            <li style={styles.activityItem}>
              <span>Payment Received</span>
              <span style={{ color: '#666' }}>Yesterday</span>
            </li>
            <li style={styles.activityItem}>
              <span>Notice: Community Meeting</span>
              <span style={{ color: '#666' }}>2 days ago</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;