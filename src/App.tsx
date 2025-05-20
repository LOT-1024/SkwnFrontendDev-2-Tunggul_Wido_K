import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import FinancePage from './pages/FinancePage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/finance" element={<FinancePage />} />
    </Routes>
  )
}

export default App
