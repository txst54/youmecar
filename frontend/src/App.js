import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Banner from './components/PageComponents/Banners/Banner';

import Signup from './views/Forms/Signup';
import Dashboard from './views/Dashboard/Dashboard';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import RiderPickUp from './views/PickUp/RiderPickUp';

import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyA8QL8C4xTMhoTNlyvYs5I9Hd7ctuxnbzA",
  authDomain: "hacktx23-1a7df.firebaseapp.com",
  projectId: "hacktx23-1a7df",
  storageBucket: "hacktx23-1a7df.appspot.com",
  messagingSenderId: "901530409930",
  appId: "1:901530409930:web:4eb8cce6dd5cbacde7cd33",
  measurementId: "G-5VNJRCS9ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

function App() {
  const [isSignedIn, setSignedIn] = useState(false);
  const [role, setRole] = useState("signedOut");

  useEffect(() => {
    const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // attach listener to auth state change
  function onAuthStateChanged(user) {
    if (user) {
      setSignedIn(true);
      user.getIdTokenResult(true).then((idTokenResult) => {
        setRole(idTokenResult.claims.role)
        console.log(idTokenResult.claims.role)
      })
    }
  }

  const getUser = () => {
    // fetch user data from firebase rtdb based on their role
    return 0
  }
  const renderUserContent = () => {
    // if role is not defined, then they are not registered: redirect them to sign up page
    if (role === undefined) {
      return <Signup />
    }
    console.log(role);
    return <Dashboard user={getUser(getAuth().currentUser)} role={role}/>
  }

  console.log(role)
  return (
    <div className="bg-youmeblue h-screen">
      <NavBar signedIn={isSignedIn} setSignedIn={setSignedIn}/>
      {!isSignedIn ? 
        <div>
          <Routes>
            <Route path="/eventPage" element={<Banner title="bruh convention" subtitle="Bruh"/>} />
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/login" element={<Login auth={auth} provider={provider} setSignedIn={(val) => setSignedIn(val)}/>}/>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/riderpickup" element={<RiderPickUp />}/>
          </Routes>
        </div>
         : 
        renderUserContent()
      }
      <Footer />
    </div>
  );
}

export default App;
