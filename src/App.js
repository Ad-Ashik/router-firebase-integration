import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import Register from './components/Register/Register';
import RequerAuth from './components/RequerAuth/RequerAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/orders' element={
          <RequerAuth>
            <Order></Order>
          </RequerAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
