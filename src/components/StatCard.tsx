import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { MdAccountBalanceWallet, MdTrendingUp } from 'react-icons/md'
import { FaMoneyBillWave } from 'react-icons/fa'

interface StatCardProps {
  title: string
  subtitle: string
  value: string
  profit: string
  percentage: string
  icon: 'wallet' | 'debt' | 'trending'
  iconBg: string
}

export default function StatCard({ title, subtitle, value, profit, percentage, icon, iconBg }: StatCardProps) {
  const getIcon = () => {
    switch (icon) {
      case 'wallet':
        return MdAccountBalanceWallet
      case 'debt':
        return FaMoneyBillWave
      case 'trending':
        return MdTrendingUp
    }
  }

  return (
    <Box
      bg="#110E22"
      borderRadius="12px"
      p={6}
      position="relative"
      overflow="hidden"
    >
      <Flex align="flex-start" gap={3} mb={4}>
        <Flex
          w="40px"
          h="40px"
          bg={iconBg}
          borderRadius="8px"
          align="center"
          justify="center"
        >
          <Icon as={getIcon()} boxSize={5} />
        </Flex>
        <Box>
          <Text fontSize="14px" fontWeight="600" mb={1}>{title}</Text>
          <Text fontSize="12px" color="gray.400">{subtitle}</Text>
        </Box>
      </Flex>

      <Text fontSize="24px" fontWeight="bold" mb={3}>{value}</Text>

      <Flex align="center" gap={2} fontSize="13px">
        <Text color="gray.300">Monthly Profit</Text>
        <Text color="green.400" fontWeight="600">{profit}</Text>
        <Text color="green.400" fontWeight="600">{percentage}</Text>
      </Flex>
    </Box>
  )
}
