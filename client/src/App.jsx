import React, { useContext } from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import {Toaster} from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext'

const App = () => {
  const { authUser } = useContext(AuthContext);

  return (
    <div className="w-full min-h-screen bg-black relative bg-[url('./assets/bgImage.svg')]  bg-contain bg-no-repeat bg-center">
      <Toaster/>
      {/* ----------- Routes Section ----------- */}
      <div className="flex-grow">
        <Routes>
          <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/login" />} />
          <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
          <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        </Routes>
      </div>

      {/* ----------- Footer ----------- */}
      <footer className="text-center text-white text-sm py-4 opacity-70">
        Crafted with ⚡ by Dripta Patra • © 2025
      </footer>
    </div>
  )
}

export default App