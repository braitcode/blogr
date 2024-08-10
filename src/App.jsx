import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'



function App() {
 // please do not add or change anything in this file except your route which should enable you to access your production.
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
