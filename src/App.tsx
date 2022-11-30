import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Home from 'pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Instructions from 'pages/Instructions'
import Thankyou from 'pages/Thankyou'
import Registration from 'pages/Registration'
import FailPage from 'pages/FailPage'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="instructions" element={<Instructions />} />
        <Route path="test" element={<Home />} />
        <Route path="thankyou" element={<Thankyou />} />
        <Route path="sorry" element={<FailPage />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)

export default App
