// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children, isAllowed }) => {
//   return isAllowed ? children : <Navigate to="/" />;
// };

// export default ProtectedRoute;

import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "./firebase"; // Adjust import if necessary

const ProtectedRoute = ({ children, adminRequired, redirectPath = "/" }) => {
  const [isAllowed, setIsAllowed] = useState(null); // Loading state
  const [isAdmin, setIsAdmin] = useState(false); // Admin check state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // If adminRequired is true, check if the user has admin privileges
        if (adminRequired) {
          // Assuming you're using Firestore and the user's role is stored in the 'users' collection
          const userDoc = await db.collection("users").doc(user.uid).get();
          const userData = userDoc.data();
          
          if (userData && userData.role === "admin") {
            setIsAdmin(true); // User is an admin
          } else {
            setIsAdmin(false); // User is not an admin
          }
        }

        setIsAllowed(true); // User is authenticated
      } else {
        setIsAllowed(false); // User is not authenticated
      }
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, [adminRequired]);

  // Show a loading state while checking authentication and role
  if (isAllowed === null) {
    return <div>Loading...</div>; // You can replace this with a spinner or a more styled loading screen
  }

  // If authenticated and not an admin but accessing admin page, redirect
  if (adminRequired && !isAdmin) {
    return <Navigate to="/no-access" />; // Redirect to a no-access page or some other page
  }

  // If authenticated, allow the children to render
  if (isAllowed) {
    // If the user is an admin, redirect to admin dashboard, else user dashboard
    if (isAdmin && redirectPath === "/login") {
      return <Navigate to="/admin-dashboard" />;
    }
    if (!isAdmin && redirectPath === "/login") {
      return <Navigate to="/user-dashboard" />;
    }

    return children;
  }

  // If not authenticated, redirect to the login page
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
