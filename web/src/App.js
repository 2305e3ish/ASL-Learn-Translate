import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Learn from './pages/Learn';
import LearnDetail from './pages/LearnDetail';
import Play from './pages/Play';
import Translate from './pages/Translate';
import Practice from './pages/Practice';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />           {/* Home Page */}
          <Route path="/learn" element={<Learn />} />       {/* Learn Landing */}
          <Route path="/learn/beginner/:level" element={<LearnDetail />} /> {/* Learn Detail for each letter */}
          <Route path="/play" element={<Play />} />         {/* Play */}
          <Route path="/translate" element={<Translate />} />{/* Translate */}
          <Route path="/practice" element={<Practice />} />  {/* Practice */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
