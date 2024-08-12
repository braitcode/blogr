import './App.css'
import Footer from './components/Footer'
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
      {/* <Footer/>  */}

    </>
  )
}

export default App
