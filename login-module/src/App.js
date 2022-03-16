import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import Gallery from './components/Gallery';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent/>}/>
        <Route path="/register" element={<RegisterComponent/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
    </Router>
  );
}

export default App;
