import { useState, useEffect } from 'react'
import { Container, Typography, Button, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import blogService from '../services/blogService'


const HomePage = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await blogService.getAllBlogs()
        setBlogs(blogs)
      } catch (err) {
        console.error(err)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <Container>
      <Typography variant="h4" style={{ margin: '16px 0' }}>Blog Posts</Typography>
      {blogs.map(blog => (
        <Card key={blog.id} variant="outlined" style={{ margin: '16px 0' }}>
          <CardContent>
            <Typography variant="h5">{blog.title}</Typography>
            <Typography variant="body2" color="textSecondary">{blog.author}</Typography>
            <Typography variant="body1" style={{ marginTop: '8px' }}>{blog.content.substring(0, 100)}</Typography>
            <Link to={`/blog/${blog.id}`}>
              <Button variant="contained" color="warning" style={{ marginTop: '8px' }}>Read More</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </Container>
  )
}

export default HomePage