import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Courses from './Courses';
import MapView from './MapView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>QueerFit Connect</h1>
          <nav>
            <Link to="/courses" className="nav-link">Courses</Link>
            <Link to="/map" className="nav-link">Map</Link>
          </nav>
          <img src="https://opendoodles.s3-us-west-1.amazonaws.com/dancing.svg" alt="Dancing doodle" className="header-illustration" />
        </header>
        <main>
          <Routes>
            <Route path="/courses" element={<Courses />} />
            <Route path="/map" element={<MapView />} />
            <Route path="/" element={<Courses />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
