import StoryGenerator from './components/StoryGenerator'
import { CssBaseline, Container } from '@mui/material'
import './App.css'

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <StoryGenerator />
      </Container>
    </>
  )
}

export default App
