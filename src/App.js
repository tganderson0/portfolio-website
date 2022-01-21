import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/header/header';
import Home from './page/Home';
import About from './page/About';
import Projects from './page/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
