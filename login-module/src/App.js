import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

function App() {
  return (
    <div className="App">
      <LoginComponent />
    </div>
  );
}

export default App;
