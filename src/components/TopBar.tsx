import { Flex, Select, Text, Icon, Avatar, Box } from '@chakra-ui/react'
import { MdNotifications } from 'react-icons/md'
import { FiChevronDown } from 'react-icons/fi'

export default function TopBar() {
  return (
    <Flex
      h="70px"
      px={6}
      align="center"
      justify="flex-end"
      // borderBottom="1px solid"
      // borderColor="#2A2641"
    >
      <Flex align="center" gap={4}>
        <Select
          w="100px"
          bg="#1C1833"
          border="none"
          fontWeight="600"
          defaultValue="USD"
          icon={<FiChevronDown />}
        >
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="USD">USD</option>
        </Select>

        <Select
          w="280px"
          bg="#1C1833"
          border="none"
          fontSize="13px"
          icon={<FiChevronDown />}
          defaultValue="0xa5c8c"
        >
          <option value="0xa5c8c">0xa5c8c8c0bf2881d3f38af4e87de6ffa1afd</option>
        </Select>

        <Box position="relative">
          <Icon as={MdNotifications} boxSize={6} color="white" cursor="pointer" />
        </Box>

        <Avatar
          size="sm"
          bg="cyan.400"
          name="User"
          cursor="pointer"
        />
      </Flex>
    </Flex>
  )
}
