import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent/>}/>
        <Route path="/register" element={<RegisterComponent/>}/>
      </Routes>
    </Router>
  );
}

export default App;
