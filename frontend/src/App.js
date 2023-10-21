import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Banner from './components/PageComponents/Banners/Banner';
import OrgSignup from './views/Forms/OrgSignup';
import Dashboard from './views/Dashboard/Dashboard';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import { Routes, Route, Navigate } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useState, useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  function onAuthStateChanged(user) {
    if (user) {
      setSignedIn(true);
      console.log(user)
      setRole(user.role);
    }
  }

  useEffect(() => {
    const subscriber = getAuth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <div className="bg-youmeblue h-screen">
      <NavBar />
      <div>
        <Routes>
          <Route path="/eventPage" element={<Banner title="bruh convention" subtitle="Bruh"/>} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/form" element={<OrgSignup />}/>
          <Route path="/login" element={<Login auth={auth} provider={provider} setSignedIn={(val) => setSignedIn(val)}/>}/>
          <Route path="/landingpage" element={<LandingPage />}/>
				</Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
