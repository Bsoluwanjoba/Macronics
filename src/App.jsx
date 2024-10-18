import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar' 
import Homepage from './pages/Home/Homepage' 

export default function App() {
  return (
   <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/" element={<Navbar />} />
   </Routes>
  )
}
