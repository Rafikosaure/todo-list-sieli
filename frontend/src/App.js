import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sign from './pages/Sign';
import SignUp from './pages/SignUp';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/sign' element={<Sign />} />
      </Routes>
    </Router>
  );
}

export default App;
