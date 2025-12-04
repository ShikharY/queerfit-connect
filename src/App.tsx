import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Courses from './Courses';
import MapView from './MapView';
import Profile from './Profile';
import './App.css';

function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="nav">
      <Link to="/courses" className={`nav-link ${location.pathname === '/courses' || location.pathname === '/' ? 'active' : ''}`}>
        <span className="nav-icon">🏋️</span>
        <span>Classes</span>
      </Link>
      <Link to="/map" className={`nav-link ${location.pathname === '/map' ? 'active' : ''}`}>
        <span className="nav-icon">🗺️</span>
        <span>Map</span>
      </Link>
      <Link to="/profile" className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}>
        <span className="nav-icon">👤</span>
        <span>Profile</span>
      </Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="header-content">
            <h1>QueerFit</h1>
            <Navigation />
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/courses" element={<Courses />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Courses />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
