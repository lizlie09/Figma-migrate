import { Box, Flex, Text } from '@chakra-ui/react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'

interface CryptoPerformanceCardProps {
  name: string
  fullName: string
  value: string
  priceChange: string
  percentage: string
  chartColor: string
}

const miniChartData = [
  { value: 20 },
  { value: 35 },
  { value: 25 },
  { value: 45 },
  { value: 40 },
  { value: 55 },
  { value: 50 },
  { value: 65 },
  { value: 60 },
  { value: 75 },
]

export default function CryptoPerformanceCard({
  name,
  fullName,
  value,
  priceChange,
  percentage,
  chartColor
}: CryptoPerformanceCardProps) {
  const isPositive = percentage.startsWith('+')

  return (
    <Box 
      bg="#110E22" 
      borderRadius="8px" 
      p={4}
      transition="all 0.2s"
    >
      <Flex align="center" gap={2} mb={3}>
        <Flex
          w="32px"
          h="32px"
          bg={chartColor}
          borderRadius="full"
          align="center"
          justify="center"
          fontSize="12px"
          fontWeight="bold"
          color="white"
        >
          {name.charAt(0)}
        </Flex>
        <Box>
          <Text fontSize="14px" fontWeight="600" color="white">{name}</Text>
          <Text fontSize="11px" color="gray.400">{fullName}</Text>
        </Box>
      </Flex>

      <Flex justify="space-between" align="center" mb={2}>
        <Text fontSize="18px" fontWeight="bold" color="white">{value}</Text>
        <Box h="50px" w="100px">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={miniChartData}>
              <defs>
                <linearGradient id={`gradient-${name}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={chartColor} stopOpacity={0.4}/>
                  <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke={chartColor}
                strokeWidth={2}
                fill={`url(#gradient-${name})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Flex>

      <Flex justify="space-between" align="center" fontSize="12px">
        <Text color="gray.400">{priceChange}</Text>
        <Text color={isPositive ? '#3EDD87' : '#F46565'} fontWeight="600">
          {percentage}
        </Text>
      </Flex>
    </Box>
  )
}
