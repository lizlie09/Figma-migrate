import {
  Flex,
  Select,
  Icon,
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react'
import { MdNotifications } from 'react-icons/md'
import { FiChevronDown } from 'react-icons/fi'
import { useState } from 'react'

export default function TopBar() {
  const [currency, setCurrency] = useState('USD')

  return (
    <Flex
      h="70px"
      px={{ base: 3, md: 6 }}
      align="center"
      justify="flex-end"
      borderBottom="1px solid"
      borderColor="#2A2641"
      // borderBottom="1px solid"
      // borderColor="#2A2641"
    >
      <Flex align="center" gap={{ base: 2, md: 4 }} w="100%" justify="flex-end" flexWrap="wrap">
        <Menu placement="bottom-start">
          <MenuButton
            as={Button}
            w={{ base: '88px', md: '100px' }}
            h={{ base: '32px', md: '40px' }}
            bg="#1C1833"
            color="white"
            border="none"
            fontSize={{ base: '12px', md: '14px' }}
            fontWeight="600"
            rightIcon={<FiChevronDown />}
            _hover={{ bg: '#2A2641' }}
            _active={{ bg: '#2A2641' }}
            _expanded={{ bg: '#2A2641' }}
            _focus={{ boxShadow: 'none' }}
            _focusVisible={{ boxShadow: 'none', outline: 'none' }}
          >
            {currency}
          </MenuButton>
          <MenuList bg="#1C1833" borderColor="#2A2641" minW={{ base: '88px', md: '100px' }}>
            {['BTC', 'ETH', 'USD'].map((item) => (
              <MenuItem
              color="white"
                key={item}
                bg="transparent"
                _hover={{ bg: '#2A2641' }}
                onClick={() => setCurrency(item)}
                fontSize={{ base: '12px', md: '14px' }}
              >
                {item}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <Select
          w={{ base: '160px', sm: '220px', md: '280px' }}
          maxW="100%"
          minW={0}
          bg="#1C1833"
          border="none"
          fontSize="13px"
          icon={<FiChevronDown />}
          defaultValue="0xa5c8c"
        >
          <option value="0xa5c8c">0xa5c8c8c0bf2881d3f38af4e87de6ffa1afd</option>
        </Select>

        <Box position="relative">
          <Icon
            as={MdNotifications}
            boxSize={6}
            color="white"
            cursor="pointer"
          />
        </Box>

        <Avatar size="sm" bg="cyan.400" name="User" cursor="pointer" />
      </Flex>
    </Flex>
  )
}
