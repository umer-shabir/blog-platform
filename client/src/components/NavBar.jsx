import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Blog Platform</Typography>
          <Box>
            <Button color="inherit" component={Link} to="/" sx={{ marginRight: 2 }}>Home</Button>
            <Button color="inherit" component={Link} to="/create">Create Blog</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar