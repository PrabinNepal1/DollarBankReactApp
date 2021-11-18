import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


import Homepage from './component/homepage';
import Registration from './component/registration';
import Login from './component/login';
import Userpage from './component/userpage';

function App() {
  return (
    
      <Router>
        <Routes>
          <>
            <Route  path='/' element={<Homepage/>}/>
            <Route  path='/registration' element={<Registration/>}/>
            <Route  path='/login' element={<Login/>}/>
            <Route  path='/userpage' element={<Userpage/>}/>
          </>
        </Routes>
      </Router>
    
  );
}

export default App;
