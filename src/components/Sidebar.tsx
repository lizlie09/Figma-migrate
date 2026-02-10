import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { MdGridView } from 'react-icons/md'

export default function Sidebar() {
  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      h="100vh"
      w="260px"
      bg="#110E22"
      p={6}
    >
      <Text fontSize="18px" fontWeight="bold" mb={8}>
        <Text as="span" color="#7D67FF">Crypto</Text>{' '}
        <Text as="span" color="white">Manager</Text>
      </Text>

      <Flex
        align="center"
        gap={3}
        p={3}
        bg="#7D67FF"
        borderRadius="8px"
        cursor="pointer"
      >
        <Icon as={MdGridView} boxSize={5} />
        <Text fontSize="14px" fontWeight="500">Portfolio Summary</Text>
      </Flex>
    </Box>
  )
}
