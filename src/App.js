import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import Homepage from './component/homepage';
import Registration from './component/registration';
import Login from './component/login';

function App() {
  return (
    
      <Router>
        <Routes>
          <>
            <Route  path='/' element={<Homepage/>}/>
            <Route  path='/registration' element={<Registration/>}/>
            <Route  path='/login' element={<Login/>}/>
          </>
        </Routes>
      </Router>
    
  );
}

export default App;
