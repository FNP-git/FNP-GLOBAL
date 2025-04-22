import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import BlogPage from './pages/BlogPage'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import BlogDetail from './pages/BlogDetail'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize() // Check screen size on initial load
    window.addEventListener('resize', handleResize)

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {!isMobile && <CustomCursor />} {/* Hide CustomCursor for screen size <= 768px */}
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
