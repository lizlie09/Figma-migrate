import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import PortfolioSummary from './components/PortfolioSummary';

function App() {
  return (
    <Flex minH="100vh" bg="#0B091A" direction={{ base: 'column', md: 'row' }}>
      <Sidebar />
      <Box
        flex="1"
        ml={{ base: 0, md: '260px' }}
        w={{ base: '100%', md: 'auto' }}
      >
        <TopBar />
        <Box p={{ base: 3, md: 6 }}>
          <PortfolioSummary />
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
