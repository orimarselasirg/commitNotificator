// import './App.css'
import { Home } from './screens/Home/Home'
import { ChakraProvider } from "@chakra-ui/react"

function App() {

  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  )
}

export default App
