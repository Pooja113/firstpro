import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
// import Home from 'pages/Home'
import Instructions from 'pages/Instructions'

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Instructions />

    {/* <Home /> */}
  </QueryClientProvider>
)

export default App
