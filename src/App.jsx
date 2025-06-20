import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
function App() {


  return (
     <BrowserRouter>
     <Link to="/about">About</Link>
          <Link to="/">Home</Link>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
