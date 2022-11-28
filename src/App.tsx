//import FailPage from 'pages/FailPage'
//import Thankyou from 'pages/Thankyou'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import Home from 'pages/Home'
//import Instructions from 'pages/Instructions'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <Instructions /> */}

    <Home />
    {/* <Thankyou /> */}
    {/* <FailPage /> */}
  </QueryClientProvider>
)

export default App
