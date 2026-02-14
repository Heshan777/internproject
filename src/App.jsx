import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import TokenPage from './pages/TokenPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/token" element={<TokenPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}
export default App