import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar.jsx';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Episodes from './Pages/Episodes/Episodes.jsx';
import Location from './Pages/Location/Location.jsx';
import CardDetail from './components/Cards/CardDetail.jsx';

import NotFound from './components/NotFound/NotFound.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:id' element={<CardDetail/>}/>

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/location" element={<Location />} />

        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </Router>
  );
}

export default App
