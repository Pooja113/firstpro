import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Home from 'pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Instructions from 'pages/Instructions'
import Thankyou from 'pages/Thankyou'
import Registration from 'pages/Registration'
import Dashboard from 'pages/Dashboard'
import FailPage from 'pages/FailPage'
import Login from 'pages/Login'
import { useState } from 'react'
import { LoaderContext } from 'context/loader'
import Loader from 'components/Loader'
import ProtectedRoutes from 'components/ProtectedRoutes'
import { AnswerContext } from 'context/answers'

const queryClient = new QueryClient()

const App = () => {
  const [loader, setLoader] = useState(false)
  const [answers, setAnswers] = useState<IAnswer[]>([])

  return (
    <>
      {loader && <Loader />}
      <QueryClientProvider client={queryClient}>
        <AnswerContext.Provider value={{ answers, setAnswers }}>
          <LoaderContext.Provider value={{ loader, setLoader }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Registration />} />
                <Route path="admin" element={<Login />} />
                <Route path="/" element={<ProtectedRoutes />}>
                  <Route path="instructions" element={<Instructions />} />
                  <Route path="test" element={<Home />} />
                  <Route path="thankyou" element={<Thankyou />} />
                  <Route path="sorry" element={<FailPage />} />
                  <Route path="admin/dashboard" element={<Dashboard />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </LoaderContext.Provider>
        </AnswerContext.Provider>
      </QueryClientProvider>
    </>
  )
}

export default App
