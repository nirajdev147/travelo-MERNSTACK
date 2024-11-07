import React from 'react'
import { Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Profile from '../pages/Profile'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'
import Admin from '../pages/Admin'
import Userlist from '../pages/Userlist'
import Tourlist from '../pages/Tourlist'
import AdminLogin from '../pages/AdminLogin'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/user-management" element={<Userlist />} />
      <Route path="/tour-management" element={<Tourlist />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      
    </Routes>
  )
}

export default Router