import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import EventBanner from './components/PageComponents/EventBanner';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/eventPage" element={<EventBanner eventName="bruh convention" eventDesc = "Bruh"/>} />
          <Route path="*" element={<Navigate replace to="/" />} />
				</Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
