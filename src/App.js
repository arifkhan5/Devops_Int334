import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLoginPage from './Pages/AdminLoginPage';
import IndexPage from './Pages/IndexPage';
import UserDashboard from './Pages/UserDashboard';
import UserLoginPage from './Pages/UserLoginPage';
import AdminDashboard from './Pages/AdminDashboard';
import RegisterUser from './Pages/RegisterUser';
import PaymentGateway from './Pages/PaymentGateway';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/register-user" element={<RegisterUser/>} />
        <Route path="/payment-gateway" element={<PaymentGateway/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;




// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useState } from 'react';
// import IndexPage from './Pages/IndexPage';
// import AdminLoginPage from './Pages/AdminLoginPage';
// import UserLoginPage from './Pages/UserLoginPage';
// import AdminDashboard from './Pages/AdminDashboard';
// import UserDashboard from './Pages/UserDashboard';
// import RegisterUser from './Pages/RegisterUser';
// import ProtectedRoute from './Pages/ProtectedRoute';

// function App() {
//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Track user login state
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Track admin login state

//   return (
//     <Router>
//       <Routes>
//         {/* Default Landing Page */}
//         <Route path="/" element={<IndexPage />} />

//         {/* Public Routes */}
//         <Route
//           path="/admin-login"
//           element={<AdminLoginPage setIsAdminLoggedIn={setIsAdminLoggedIn} />}
//         />
//         <Route
//           path="/user-login"
//           element={<UserLoginPage setIsUserLoggedIn={setIsUserLoggedIn} />}
//         />

//         {/* Protected Routes */}
//         <Route
//           path="/user-dashboard"
//           element={
//             <ProtectedRoute isAllowed={isUserLoggedIn}>
//               <UserDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/admin-dashboard"
//           element={
//             <ProtectedRoute adminRequired={true} isAllowed={isAdminLoggedIn}>
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/register-user"
//           element={
//             <ProtectedRoute adminRequired={true} isAllowed={isAdminLoggedIn}>
//               <RegisterUser />
//             </ProtectedRoute>
//           }
//         />

//         {/* Redirect unknown routes */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
