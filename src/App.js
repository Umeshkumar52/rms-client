import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login';
import AdminDash from './pages/AdminDash'
import FoodMenu from './pages/FoodMenu';
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/admin' element={<AdminDash/>}/>
    <Route path='/menu' element={<FoodMenu/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
