import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mobile, setMobile] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          mobile: mobile,
        });

        toast.success("User Registered Successfully!!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error.message);
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered!", {
          position: "bottom-center",
        });
      } else if (error.code === "auth/weak-password") {
        toast.error("The password is too weak!", {
          position: "bottom-center",
        });
      } else {
        toast.error("Registration failed! Please try again.", {
          position: "bottom-center",
        });
      }
    }
  };

  const styles = {
    page: {
      backgroundColor: '#1a1a1a',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    },
    card: {
      width: '100%',
      maxWidth: '500px',
      padding: '2.5rem',
      backgroundColor: '#2d2d2d',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      borderRadius: '20px',
      border: '1px solid #3d3d3d',
    },
    cardHeader: {
      textAlign: 'center',
      marginBottom: '2rem',
      fontSize: '2rem',
      fontWeight: '600',
      color: '#e50914',
      letterSpacing: '0.5px',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#ffffff',
      fontSize: '0.9rem',
      fontWeight: '500',
    },
    input: {
      width: '100%',
      padding: '0.875rem',
      fontSize: '1rem',
      backgroundColor: '#333333',
      border: '1px solid #454545',
      borderRadius: '8px',
      color: '#ffffff',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
    button: {
      width: '100%',
      backgroundColor: '#e50914',
      border: 'none',
      padding: '1rem',
      fontSize: '1.1rem',
      color: '#fff',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      fontWeight: '600',
      marginTop: '1rem',
    },
    buttonHover: {
      backgroundColor: '#f40612',
      transform: 'translateY(-2px)',
    },
    footerText: {
      textAlign: 'center',
      marginTop: '1.5rem',
      fontSize: '0.875rem',
      color: '#999999',
    },
  };

  const inputFocus = (e) => {
    e.target.style.backgroundColor = '#404040';
    e.target.style.borderColor = '#e50914';
  };

  const inputBlur = (e) => {
    e.target.style.backgroundColor = '#333333';
    e.target.style.borderColor = '#454545';
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h3 style={styles.cardHeader}>Register Member</h3>

        <form onSubmit={handleRegister}>
          <div style={styles.formGroup}>
            <label htmlFor="fname" style={styles.label}>
              First Name
            </label>
            <input
              type="text"
              id="fname"
              placeholder="Enter first name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              style={styles.input}
              onFocus={inputFocus}
              onBlur={inputBlur}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="lname" style={styles.label}>
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              placeholder="Enter last name"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              style={styles.input}
              onFocus={inputFocus}
              onBlur={inputBlur}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              onFocus={inputFocus}
              onBlur={inputBlur}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              onFocus={inputFocus}
              onBlur={inputBlur}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="mobile" style={styles.label}>
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={styles.input}
              onFocus={inputFocus}
              onBlur={inputBlur}
              required
            />
          </div>

          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
              e.target.style.transform = styles.buttonHover.transform;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = styles.button.backgroundColor;
              e.target.style.transform = 'none';
            }}
          >
            Register
          </button>
        </form>

        <div style={styles.footerText}>
          <p>By registering, you agree to our terms and conditions.</p>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default RegisterUser;