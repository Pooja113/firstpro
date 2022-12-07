import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Home from 'pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Instructions from 'pages/Instructions'
import Thankyou from 'pages/Thankyou'
import Registration from 'pages/Registration'
import FailPage from 'pages/FailPage'
import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'
import { useState } from 'react'
import { LoaderContext } from 'context/loader'

const queryClient = new QueryClient()

const App = () => {
  const [loader, setLoader] = useState(false)

  return (
    <QueryClientProvider client={queryClient}>
      <LoaderContext.Provider value={{ loader, setLoader }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="instructions" element={<Instructions />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="test" element={<Home />} />
            <Route path="thankyou" element={<Thankyou />} />
            <Route path="sorry" element={<FailPage />} />
            <Route path="admin" element={<Login />} />
          </Routes>
        </BrowserRouter>{' '}
      </LoaderContext.Provider>
    </QueryClientProvider>
  )
}

export default App
