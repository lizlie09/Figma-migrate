import { Box, Flex } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import PortfolioSummary from './components/PortfolioSummary'

function App() {
  return (
    <Flex minH="100vh" bg="#0B091A">
      <Sidebar />
      <Box flex="1" ml="260px">
        <TopBar />
        <Box p={6}>
          <PortfolioSummary />
        </Box>
      </Box>
    </Flex>
  )
}

export default App
