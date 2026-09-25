import { Routes, Route } from 'react-router-dom'
import { PageLayout } from './components/Layout'
import Home from './pages/Home'
import TreatmentPage from './pages/TreatmentPage'
import CasesPage from './pages/CasesPage'
import GuidePage from './pages/GuidePage'

export default function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tratament/:slug" element={<TreatmentPage />} />
        <Route path="/cazuri" element={<CasesPage />} />
        <Route path="/ghid" element={<GuidePage />} />
        <Route path="/ghid/:slug" element={<GuidePage />} />
      </Routes>
    </PageLayout>
  )
}
