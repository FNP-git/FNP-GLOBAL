import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import BlogPage from './pages/BlogPage'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'

const App = () => {
  return (
    <>
    <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
