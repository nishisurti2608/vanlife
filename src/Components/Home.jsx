import Logo from "./Logo"


const Home = () => {
  return (
    <>
    <Logo/>
    <nav className="flex bg-amber-100">
        <ul>
            <li>Home</li>
            <li>About</li>
        </ul>
    </nav>
    </>
  )
}

export default Home