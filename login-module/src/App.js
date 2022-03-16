import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import Workspace from './components/Workspace';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent/>}/>
        <Route path="/register" element={<RegisterComponent/>}/>
        <Route path="/workspace" element={<Workspace/>}/>
      </Routes>
    </Router>
  );
}

export default App;
