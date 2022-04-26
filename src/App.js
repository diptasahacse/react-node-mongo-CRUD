import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import User from './components/User/User';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/users' element={<User></User>}></Route>
        <Route path='/user/:userId' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
