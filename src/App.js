import './App.css';
import React from 'react'
import Studio from './studio/Studio';
// import FrontPage from './pages/frontPage';
// import Navbar from './components/navbar';
// import Footer from './components/footer';
import DesignTshirt from './pages/designTshirt';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path='/' element={<FrontPage />} /> */}
          <Route path='/design' element={<DesignTshirt />} />
          <Route path='/design-studio' element={<Studio />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;