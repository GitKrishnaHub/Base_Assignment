import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Upload from './components/upload/Upload';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/upload' element={<Upload/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
