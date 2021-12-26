import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Error from '../pages/Error'
import Pages from '../pages/Pages'
import PostIdPage from '../pages/PostIdPage'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/posts'
          element={<Pages />} />
        <Route path='/about'
          element={<About />} />
        <Route exact path='/posts/:id'
          element={<PostIdPage />} />
        <Route path='/error'
          element={<Error />} />
        <Route path="*" element={<Navigate replace to="/error" />} />
      </Routes>
    </div>
  )
}

export default AppRouter
