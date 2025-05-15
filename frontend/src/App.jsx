import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import BlogPage from './pages/BlogPage'
import Contact from './pages/Contact'
import BlogDetail from './pages/BlogDetail'
import { Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader' // ✅ import the loader

const App = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000) // Adjust the duration as needed
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader /> // ✅ show loader first

  return (
    <>
      {!isMobile && <CustomCursor />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </>
  )
}

export default App
