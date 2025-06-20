import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'
import Vans from './Components/Vans.jsx'
import "./server"
function App() {


  return (
     <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
       <Route path='/vans' element={<Vans/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
