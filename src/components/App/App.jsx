import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddFormPage from '../../page/AddFormPage/AddFormPage'
import NotFoundPage from '../../page/NotFoundPage/NotFoundPage'
import PostPage from '../../page/PostsPage/PostPage'
import Nav from '../Nav'

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<PostPage />} />
        <Route path='/addform' element={<AddFormPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
