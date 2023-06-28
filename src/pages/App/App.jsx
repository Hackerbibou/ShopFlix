import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Movies from '../Movies/Movies'
import MenuBar from '../../components/MenuBar/MenuBar';
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="">
      { user ?
          <>
            <MenuBar/>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path='/movies' element={<Movies/>}/>
              {/* Route components in here */}
              {/* <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} /> */}
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}