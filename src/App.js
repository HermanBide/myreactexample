import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import { 
  Routes, 
  Route, 
  // Router, 
  // Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      REact is running 
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
