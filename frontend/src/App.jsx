import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WellnessRegistration from './pages/WellnessRegistration'
import PhotoCapture from './pages/PhotoCapture'
import SuccessPage from './pages/SuccessPage'
import MyParticipant from './pages/MyParticipant'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wellness" element={<WellnessRegistration />} />
        <Route path="/photo" element={<PhotoCapture />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/myparticipant" element={<MyParticipant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
