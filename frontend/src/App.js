import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Banner from './components/PageComponents/Banners/Banner';
import OrgSignup from './views/Forms/OrgSignup';
import Dashboard from './views/Dashboard/Dashboard';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/eventPage" element={<Banner title="bruh convention" subtitle="Bruh"/>} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/form" element={<OrgSignup />}/>
				</Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
