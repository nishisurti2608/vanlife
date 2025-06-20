import Logo from "./Logo"
import {  Link } from 'react-router-dom'


const Home = () => {
  return (
 <>
    <header className="flex  bg-orange-100 justify-between items-center">
    <Logo/>
    <nav className="flex p-4">
        <ul  className="flex gap-5 items-center">
               
     <Link to="/"><li className=" font-semibold text-md text-gray-800 ">Home</li></Link>
     <Link to="/about"><li className="font-semibold text-md text-gray-800 ">About</li></Link> 
     <Link to="/vans"><li className="font-semibold text-md text-gray-800 ">Vans</li></Link> 
        </ul>
    </nav>
    </header>
      <div
        className="h-[90dvh]  bg-black/50 bg-blend-overlay bg-[url('https://images.unsplash.com/photo-1678273514045-38bd4d55cdcd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex items-center justify-center"
      >
           
        <div className=" w-1/2">
        <h1 className="text-white text-8xl font-bold bg-opacity-50 p-4 rounded">
        You got the travel plans, we got the travel vans.
        </h1>
        <p className="text-white text-xl font-bold bg-opacity-50 p-4 rounded">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
Find your van</p>
    <button className="text-white bg-amber-600 w-full mt-10 px-30 py-4 rounded-xl cursor-pointer">Find Your Van</button>
        </div>
      </div>
      <footer className="bg-gray-800 flex justify-center content-center">
        <p className="text-white p-4">Copyright by VanLife 2025</p>
      </footer>
    </>
  )
}

export default Home