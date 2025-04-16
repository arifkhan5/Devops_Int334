// import React, { useState } from "react";
// import qrImage from "../Images/qr.jpeg";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const PaymentGateway = () => {
//   const [paymentDetails, setPaymentDetails] = useState({
//     cardNumber: "",
//     cardHolder: "",
//     expiryDate: "",
//     cvv: "",
//     paymentReference: "",
//     attachment: null,
//     proofName: "",
//     proofAmount: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const [cardType, setCardType] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [proofErrors, setProofErrors] = useState({});

//   const cardTypeDetector = (number) => {
//     const cardPatterns = {
//       visa: /^4[0-9]{0,}$/,
//       mastercard: /^5[1-5][0-9]{0,}$/,
//       amex: /^3[47][0-9]{0,}$/,
//     };
//     for (let [key, pattern] of Object.entries(cardPatterns)) {
//       if (pattern.test(number)) return key;
//     }
//     return null;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "cardNumber") {
//       setCardType(cardTypeDetector(value.replace(/\s+/g, "")));
//     }
//     setPaymentDetails((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     setPaymentDetails((prev) => ({
//       ...prev,
//       attachment: e.target.files[0],
//     }));
//   };

//   // Validation functions
//   const validateInputs = () => {
//     const errors = {};
//     const { cardNumber, cardHolder, expiryDate, cvv, paymentReference } = paymentDetails;

//     if (paymentMethod === "card") {
//       if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ""))) {
//         errors.cardNumber = "Invalid card number. Must be 16 digits.";
//       }
//       if (!/^[a-zA-Z\s]+$/.test(cardHolder) || cardHolder.trim() === "") {
//         errors.cardHolder = "Cardholder name is required.";
//       }
//       if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
//         errors.expiryDate = "Expiry date must be in MM/YY format.";
//       }
//       if (!/^\d{3}$/.test(cvv)) {
//         errors.cvv = "CVV must be 3 digits.";
//       }
//     }

//     if (paymentReference && !/^[a-zA-Z0-9]{6,}$/.test(paymentReference)) {
//       errors.paymentReference = "Payment reference should be alphanumeric with at least 6 characters.";
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const validateProofDetails = () => {
//     const proofErrors = {};
//     const { proofName, proofAmount } = paymentDetails;

//     if (!proofName.trim()) {
//       proofErrors.proofName = "Name is required.";
//     }
//     if (!proofAmount || isNaN(proofAmount)) {
//       proofErrors.proofAmount = "Amount is required and should be a valid number.";
//     }

//     setProofErrors(proofErrors);
//     return Object.keys(proofErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateInputs() && validateProofDetails()) {
//       toast.success("Payment processed successfully!", {
//         position: "top-center",
//         theme: "dark"
//       });
//     }
//   };

//   const handleProofSubmit = (e) => {
//     e.preventDefault();
//     if (validateProofDetails()) {
//       toast.success("Proof of payment submitted successfully!", {
//         position: "top-center",
//         theme: "dark"
//       });
//     }
//   };

//   const styles = {
//     pageContainer: {
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
//       padding: '2rem',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontFamily: "'Poppins', sans-serif",
//     },
//     container: {
//       width: '100%',
//       maxWidth: '600px',
//       backgroundColor: 'rgba(255, 255, 255, 0.95)',
//       borderRadius: '20px',
//       boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
//       padding: '2rem',
//     },
//     title: {
//       textAlign: 'center',
//       color: '#1a237e',
//       fontSize: '2rem',
//       marginBottom: '2rem',
//       fontWeight: '600',
//     },
//     methodToggle: {
//       display: 'flex',
//       gap: '1rem',
//       marginBottom: '2rem',
//     },
//     toggleButton: {
//       flex: 1,
//       padding: '1rem',
//       border: 'none',
//       borderRadius: '10px',
//       cursor: 'pointer',
//       fontSize: '1rem',
//       fontWeight: '500',
//       transition: 'all 0.3s ease',
//       backgroundColor: '#e8eaf6',
//       color: '#1a237e',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     },
//     activeToggle: {
//       backgroundColor: '#1a237e',
//       color: 'white',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '1.5rem',
//       },
//       inputGroup: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '0.5rem',
//       },
//       label: {
//         color: '#1a237e',
//         fontSize: '0.9rem',
//         fontWeight: '500',
//       },
//       input: {
//         padding: '0.8rem 1rem',
//         borderRadius: '8px',
//         border: '2px solid #e0e0e0',
//         fontSize: '1rem',
//         transition: 'all 0.3s ease',
//         outline: 'none',
//         backgroundColor: 'white',
//       },
//       inputFocus: {
//         borderColor: '#1a237e',
//         boxShadow: '0 0 0 4px rgba(26,35,126,0.1)',
//       },
//       error: {
//         color: '#f44336',
//         fontSize: '0.8rem',
//         marginTop: '0.25rem',
//       },
//       button: {
//         padding: '1rem',
//         backgroundColor: '#1a237e',
//         color: 'white',
//         border: 'none',
//         borderRadius: '8px',
//         fontSize: '1rem',
//         fontWeight: '500',
//         cursor: 'pointer',
//         transition: 'all 0.3s ease',
//         width: '100%',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       },
//       buttonHover: {
//         backgroundColor: '#283593',
//         boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//         transform: 'translateY(-2px)',
//       },
//       qrSection: {
//         textAlign: 'center',
//         padding: '2rem',
//       },
//       qrImage: {
//         width: '200px',
//         height: '200px',
//         margin: '2rem auto',
//         borderRadius: '10px',
//         boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
//         transition: 'transform 0.3s ease',
//       },
//       divider: {
//         margin: '2rem 0',
//         borderTop: '2px solid #e0e0e0',
//       },
//       cardTypeText: {
//         color: '#1a237e',
//         fontSize: '0.9rem',
//         marginTop: '0.5rem',
//       },
//       fileInput: {
//         padding: '0.8rem',
//         border: '2px dashed #1a237e',
//         borderRadius: '8px',
//         cursor: 'pointer',
//         transition: 'all 0.3s ease',
//       },
//     };
  
//     return (
//       <div style={styles.pageContainer}>
//         <div style={styles.container}>
//           <h2 style={styles.title}>Payment Gateway</h2>
  
//           <div style={styles.methodToggle}>
//             <button
//               style={{
//                 ...styles.toggleButton,
//                 ...(paymentMethod === "card" ? styles.activeToggle : {}),
//               }}
//               onClick={() => setPaymentMethod("card")}
//             >
//               Card Payment
//             </button>
//             <button
//               style={{
//                 ...styles.toggleButton,
//                 ...(paymentMethod === "qr" ? styles.activeToggle : {}),
//               }}
//               onClick={() => setPaymentMethod("qr")}
//             >
//               QR Payment
//             </button>
//           </div>
  
//           {paymentMethod === "card" ? (
//             <form onSubmit={handleSubmit} style={styles.form}>
//               <div style={styles.inputGroup}>
//                 <label style={styles.label}>Card Number</label>
//                 <input
//                   style={styles.input}
//                   type="text"
//                   name="cardNumber"
//                   placeholder="1234 5678 9012 3456"
//                   value={paymentDetails.cardNumber}
//                   onChange={handleInputChange}
//                   onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
//                   onBlur={(e) => Object.assign(e.target.style, styles.input)}
//                   required
//                 />
//                 {cardType && <div style={styles.cardTypeText}>Card Type: {cardType.toUpperCase()}</div>}
//                 {errors.cardNumber && <div style={styles.error}>{errors.cardNumber}</div>}
//               </div>
  
//               <div style={styles.inputGroup}>
//                 <label style={styles.label}>Card Holder Name</label>
//                 <input
//                   style={styles.input}
//                   type="text"
//                   name="cardHolder"
//                   placeholder="John Doe"
//                   value={paymentDetails.cardHolder}
//                   onChange={handleInputChange}
//                   onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
//                   onBlur={(e) => Object.assign(e.target.style, styles.input)}
//                   required
//                 />
//                 {errors.cardHolder && <div style={styles.error}>{errors.cardHolder}</div>}
//               </div>
  
//               <div style={{ display: 'flex', gap: '1rem' }}>
//                 <div style={{ ...styles.inputGroup, flex: 1 }}>
//                   <label style={styles.label}>Expiry Date</label>
//                   <input
//                     style={styles.input}
//                     type="text"
//                     name="expiryDate"
//                     placeholder="MM/YY"
//                     value={paymentDetails.expiryDate}
//                     onChange={handleInputChange}
//                     onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
//                     onBlur={(e) => Object.assign(e.target.style, styles.input)}
//                     required
//                   />
//                   {errors.expiryDate && <div style={styles.error}>{errors.expiryDate}</div>}
//                 </div>
  
//                 <div style={{ ...styles.inputGroup, flex: 1 }}>
//                   <label style={styles.label}>CVV</label>
//                   <input
//                     style={styles.input}
//                     type="password"
//                     name="cvv"
//                     placeholder="123"
//                     maxLength="3"
//                     value={paymentDetails.cvv}
//                     onChange={handleInputChange}
//                     onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
//                     onBlur={(e) => Object.assign(e.target.style, styles.input)}
//                     required
//                   />
//                   {errors.cvv && <div style={styles.error}>{errors.cvv}</div>}
//                 </div>
//               </div>
  
//               <button 
//                 type="submit" 
//                 style={styles.button}
//                 onMouseEnter={(e) => Object.assign(e.target.style, {...styles.button, ...styles.buttonHover})}
//                 onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
//               >
//                 Pay Now
//               </button>
//             </form>
//           ) : (
//             <div style={styles.qrSection}>
//               <h3>Scan QR Code to Pay</h3>
//               <img src={qrImage} alt="QR Code" style={styles.qrImage} />
//             </div>
//           )}
  
//           <div style={styles.divider}></div>
  
//           <form onSubmit={handleProofSubmit} style={styles.form}>
//             <h3 style={{...styles.title, fontSize: '1.5rem'}}>Proof of Payment</h3>
            
//             <div style={styles.inputGroup}>
//               <label style={styles.label}>Your Name</label>
//               <input
//                 style={styles.input}
//                 type="text"
//                 name="proofName"
//                 placeholder="Enter your name"
//                 value={paymentDetails.proofName}
//                 onChange={handleInputChange}
//                 onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
//                 onBlur={(e) => Object.assign(e.target.style, styles.input)}
//                 required
//               />
//               {proofErrors.proofName && <div style={styles.error}>{proofErrors.proofName}</div>}
//             </div>
  
//             <div style={styles.inputGroup}>
//               <label style={styles.label}>Amount</label>
//               <input
//                 style={styles.input}
//                 type="text"
//                 name="proofAmount"
//                 placeholder="Enter amount"
//                 value={paymentDetails.proofAmount}
//                 onChange={handleInputChange}
//                 onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
//                 onBlur={(e) => Object.assign(e.target.style, styles.input)}
//                 required
//               />
//               {proofErrors.proofAmount && <div style={styles.error}>{proofErrors.proofAmount}</div>}
//             </div>
  
//             <div style={styles.inputGroup}>
//               <label style={styles.label}>Payment Reference</label>
//               <input
//                 style={styles.input}
//                 type="text"
//                 name="paymentReference"
//                 placeholder="Enter payment reference"
//                 value={paymentDetails.paymentReference}
//                 onChange={handleInputChange}
//                 onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
//                 onBlur={(e) => Object.assign(e.target.style, styles.input)}
//               />
//               {errors.paymentReference && <div style={styles.error}>{errors.paymentReference}</div>}
//             </div>
  
//             <div style={styles.inputGroup}>
//               <label style={styles.label}>Attach Payment Proof</label>
//               <input
//                 style={styles.fileInput}
//                 type="file"
//                 name="attachment"
//                 onChange={handleFileChange}
//               />
//             </div>
  
//             <button 
//               type="submit" 
//               style={styles.button}
//               onMouseEnter={(e) => Object.assign(e.target.style, {...styles.button, ...styles.buttonHover})}
//               onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
//             >
//               Submit Proof
//             </button>
//           </form>
//         </div>
//         <ToastContainer />
//       </div>
//     );
//   };
  
//   export default PaymentGateway;


import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import qrImage from "../Images/qr.jpeg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PaymentGateway = () => {
  const navigate = useNavigate();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
    paymentReference: "",
    attachment: null,
    proofName: "",
    proofAmount: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardType, setCardType] = useState(null);
  const [errors, setErrors] = useState({});
  const [proofErrors, setProofErrors] = useState({});

  const handleBackToDashboard = () => {
    navigate('/user-dashboard');
  };

  const cardTypeDetector = (number) => {
    const cardPatterns = {
      visa: /^4[0-9]{0,}$/,
      mastercard: /^5[1-5][0-9]{0,}$/,
      amex: /^3[47][0-9]{0,}$/,
    };
    for (let [key, pattern] of Object.entries(cardPatterns)) {
      if (pattern.test(number)) return key;
    }
    return null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "cardNumber") {
      setCardType(cardTypeDetector(value.replace(/\s+/g, "")));
    }
    setPaymentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setPaymentDetails((prev) => ({
      ...prev,
      attachment: e.target.files[0],
    }));
  };
    // Validation functions
    const validateInputs = () => {
        const errors = {};
        const { cardNumber, cardHolder, expiryDate, cvv, paymentReference } = paymentDetails;
    
        if (paymentMethod === "card") {
          if (!/^\d{16}$/.test(cardNumber.replace(/\s+/g, ""))) {
            errors.cardNumber = "Invalid card number. Must be 16 digits.";
          }
          if (!/^[a-zA-Z\s]+$/.test(cardHolder) || cardHolder.trim() === "") {
            errors.cardHolder = "Cardholder name is required.";
          }
          if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
            errors.expiryDate = "Expiry date must be in MM/YY format.";
          }
          if (!/^\d{3}$/.test(cvv)) {
            errors.cvv = "CVV must be 3 digits.";
          }
        }
    
        if (paymentReference && !/^[a-zA-Z0-9]{6,}$/.test(paymentReference)) {
          errors.paymentReference = "Payment reference should be alphanumeric with at least 6 characters.";
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      const validateProofDetails = () => {
        const proofErrors = {};
        const { proofName, proofAmount } = paymentDetails;
    
        if (!proofName.trim()) {
          proofErrors.proofName = "Name is required.";
        }
        if (!proofAmount || isNaN(proofAmount)) {
          proofErrors.proofAmount = "Amount is required and should be a valid number.";
        }
    
        setProofErrors(proofErrors);
        return Object.keys(proofErrors).length === 0;
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInputs() && validateProofDetails()) {
          toast.success("Payment processed successfully!", {
            position: "top-center",
            theme: "dark"
          });
        }
      };
    
      const handleProofSubmit = (e) => {
        e.preventDefault();
        if (validateProofDetails()) {
          toast.success("Proof of payment submitted successfully!", {
            position: "top-center",
            theme: "dark"
          });
        }
      };
      const styles = {
        pageContainer: {
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: "'Poppins', sans-serif",
          position: 'relative', // Added for absolute positioning of back button
        },
        backButton: {
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px 20px',
          backgroundColor: 'white',
          color: '#1a237e',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          zIndex: 1000,
        },
        backButtonHover: {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          backgroundColor: '#f5f5f5',
        },
        container: {
          width: '100%',
          maxWidth: '600px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          padding: '2rem',
        },
        title: {
          textAlign: 'center',
          color: '#1a237e',
          fontSize: '2rem',
          marginBottom: '2rem',
          fontWeight: '600',
        },
        methodToggle: {
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
        },
        toggleButton: {
          flex: 1,
          padding: '1rem',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: '500',
          transition: 'all 0.3s ease',
          backgroundColor: '#e8eaf6',
          color: '#1a237e',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        activeToggle: {
          backgroundColor: '#1a237e',
          color: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        },
        form: {
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        },
        inputGroup: {
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        },
        label: {
          color: '#1a237e',
          fontSize: '0.9rem',
          fontWeight: '500',
        },
        input: {
          padding: '0.8rem 1rem',
          borderRadius: '8px',
          border: '2px solid #e0e0e0',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          outline: 'none',
          backgroundColor: 'white',
        },
        inputFocus: {
            borderColor: '#1a237e',
            boxShadow: '0 0 0 4px rgba(26,35,126,0.1)',
          },
          error: {
            color: '#f44336',
            fontSize: '0.8rem',
            marginTop: '0.25rem',
          },
          button: {
            padding: '1rem',
            backgroundColor: '#1a237e',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            width: '100%',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          },
          buttonHover: {
            backgroundColor: '#283593',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transform: 'translateY(-2px)',
          },
          qrSection: {
            textAlign: 'center',
            padding: '2rem',
          },
          qrImage: {
            width: '200px',
            height: '200px',
            margin: '2rem auto',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease',
          },
          divider: {
            margin: '2rem 0',
            borderTop: '2px solid #e0e0e0',
          },
          cardTypeText: {
            color: '#1a237e',
            fontSize: '0.9rem',
            marginTop: '0.5rem',
          },
          fileInput: {
            padding: '0.8rem',
            border: '2px dashed #1a237e',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          },
        };
      
        return (
          <div style={styles.pageContainer}>
            <button 
              style={styles.backButton}
              onClick={handleBackToDashboard}
              onMouseEnter={(e) => Object.assign(e.target.style, {...styles.backButton, ...styles.backButtonHover})}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.backButton)}
            >
              ← Back to Dashboard
            </button>
      
            <div style={styles.container}>
              <h2 style={styles.title}>Payment Gateway</h2>
      
              <div style={styles.methodToggle}>
                <button
                  style={{
                    ...styles.toggleButton,
                    ...(paymentMethod === "card" ? styles.activeToggle : {}),
                  }}
                  onClick={() => setPaymentMethod("card")}
                >
                  Card Payment
                </button>
                <button
                  style={{
                    ...styles.toggleButton,
                    ...(paymentMethod === "qr" ? styles.activeToggle : {}),
                  }}
                  onClick={() => setPaymentMethod("qr")}
                >
                  QR Payment
                </button>
              </div>
              {paymentMethod === "card" ? (
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Card Number</label>
              <input
                style={styles.input}
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={paymentDetails.cardNumber}
                onChange={handleInputChange}
                onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
                required
              />
              {cardType && <div style={styles.cardTypeText}>Card Type: {cardType.toUpperCase()}</div>}
              {errors.cardNumber && <div style={styles.error}>{errors.cardNumber}</div>}
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Card Holder Name</label>
              <input
                style={styles.input}
                type="text"
                name="cardHolder"
                placeholder="John Doe"
                value={paymentDetails.cardHolder}
                onChange={handleInputChange}
                onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
                onBlur={(e) => Object.assign(e.target.style, styles.input)}
                required
              />
              {errors.cardHolder && <div style={styles.error}>{errors.cardHolder}</div>}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ ...styles.inputGroup, flex: 1 }}>
                <label style={styles.label}>Expiry Date</label>
                <input
                  style={styles.input}
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={paymentDetails.expiryDate}
                  onChange={handleInputChange}
                  onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
                  onBlur={(e) => Object.assign(e.target.style, styles.input)}
                  required
                />
                {errors.expiryDate && <div style={styles.error}>{errors.expiryDate}</div>}
              </div>

              <div style={{ ...styles.inputGroup, flex: 1 }}>
                <label style={styles.label}>CVV</label>
                <input
                  style={styles.input}
                  type="password"
                  name="cvv"
                  placeholder="123"
                  maxLength="3"
                  value={paymentDetails.cvv}
                  onChange={handleInputChange}
                  onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
                  onBlur={(e) => Object.assign(e.target.style, styles.input)}
                  required
                />
                {errors.cvv && <div style={styles.error}>{errors.cvv}</div>}
              </div>
            </div>

            <button 
              type="submit" 
              style={styles.button}
              onMouseEnter={(e) => Object.assign(e.target.style, {...styles.button, ...styles.buttonHover})}
              onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
            >
              Pay Now
            </button>
          </form>
        ) : (
          <div style={styles.qrSection}>
            <h3>Scan QR Code to Pay</h3>
            <img src={qrImage} alt="QR Code" style={styles.qrImage} />
          </div>
        )}
                <div style={styles.divider}></div>

<form onSubmit={handleProofSubmit} style={styles.form}>
  <h3 style={{...styles.title, fontSize: '1.5rem'}}>Proof of Payment</h3>
  
  <div style={styles.inputGroup}>
    <label style={styles.label}>Your Name</label>
    <input
      style={styles.input}
      type="text"
      name="proofName"
      placeholder="Enter your name"
      value={paymentDetails.proofName}
      onChange={handleInputChange}
      onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
      onBlur={(e) => Object.assign(e.target.style, styles.input)}
      required
    />
    {proofErrors.proofName && <div style={styles.error}>{proofErrors.proofName}</div>}
  </div>

  <div style={styles.inputGroup}>
    <label style={styles.label}>Amount</label>
    <input
      style={styles.input}
      type="text"
      name="proofAmount"
      placeholder="Enter amount"
      value={paymentDetails.proofAmount}
      onChange={handleInputChange}
      onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
      onBlur={(e) => Object.assign(e.target.style, styles.input)}
      required
    />
    {proofErrors.proofAmount && <div style={styles.error}>{proofErrors.proofAmount}</div>}
  </div>

  <div style={styles.inputGroup}>
    <label style={styles.label}>Payment Reference</label>
    <input
      style={styles.input}
      type="text"
      name="paymentReference"
      placeholder="Enter payment reference"
      value={paymentDetails.paymentReference}
      onChange={handleInputChange}
      onFocus={(e) => Object.assign(e.target.style, {...styles.input, ...styles.inputFocus})}
      onBlur={(e) => Object.assign(e.target.style, styles.input)}
    />
    {errors.paymentReference && <div style={styles.error}>{errors.paymentReference}</div>}
  </div>

  <div style={styles.inputGroup}>
    <label style={styles.label}>Attach Payment Proof</label>
    <input
      style={styles.fileInput}
      type="file"
      name="attachment"
      onChange={handleFileChange}
    />
  </div>

  <button 
    type="submit" 
    style={styles.button}
    onMouseEnter={(e) => Object.assign(e.target.style, {...styles.button, ...styles.buttonHover})}
    onMouseLeave={(e) => Object.assign(e.target.style, styles.button)}
  >
    Submit Proof
  </button>
</form>
</div>
<ToastContainer />
</div>
);
};

export default PaymentGateway;