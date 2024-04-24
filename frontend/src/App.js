import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sign from './pages/Sign';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import './App.css';


function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/sign' element={<Sign />} />
        </Routes>
    </Router>
  );
}

export default App;
