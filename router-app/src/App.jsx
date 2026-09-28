import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Users from './components/Users.jsx'

function App() {
  return (
    <BrowserRouter>
      <h1>Router Demo</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App