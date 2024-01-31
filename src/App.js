import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Starter from './slides/Starter';
import FirstSlide from './slides/FirstSlide';
import SecondSlide from './slides/SecondSlide';
import ThirdSlide from './slides/ThirdSlide';
import Love from './slides/Sucess';

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='background'></div>
        <div className='main'>
          <Router>
            <Routes>
              <Route path="/" element={<Starter />} />
              <Route path="/first" element={<FirstSlide />} />
              <Route path="/second" element={<SecondSlide />} />
              <Route path="/third" element={<ThirdSlide />} />
              <Route path="/we-are-in-love" element={<Love />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
