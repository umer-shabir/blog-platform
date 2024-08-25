import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import CreateBlogPage from './pages/CreateBlogPage'
import NavBar from './components/NavBar'
import { Container, CssBaseline } from '@mui/material'

const App = () => {

  return (
    <Container>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}  />
        <Route path="/blog/:id" element={<BlogPage />}  />
        <Route path="/create" element={<CreateBlogPage />}  />
      </Routes>
    </Container>
  )
}

export default App