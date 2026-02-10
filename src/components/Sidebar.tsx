import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { MdGridView } from 'react-icons/md'

export default function Sidebar() {
  return (
    <Box
      position={{ base: 'static', md: 'fixed' }}
      left={0}
      top={0}
      h={{ base: 'auto', md: '100vh' }}
      w={{ base: '100%', md: '260px' }}
      bg="#110E22"
      p={{ base: 3, md: 6 }}
      borderBottom={{ base: '1px solid #2A2641', md: 'none' }}
      zIndex={10}
    >
      <Text fontSize={{ base: '16px', md: '18px' }} fontWeight="bold" mb={{ base: 3, md: 8 }}>
        <Text as="span" color="#7D67FF">
          Crypto
        </Text>{' '}
        <Text as="span" color="white">
          Manager
        </Text>
      </Text>

      <Flex
        align="center"
        gap={3}
        p={3}
        bg="#2A2641"
        borderRadius="12px"
        cursor="pointer"
        w={{ base: '100%', md: 'auto' }}
      >
        <Icon as={MdGridView} boxSize={5} />
        <Text fontSize="14px" fontWeight="500">
          Portfolio Summary
        </Text>
      </Flex>
    </Box>
  )
}
