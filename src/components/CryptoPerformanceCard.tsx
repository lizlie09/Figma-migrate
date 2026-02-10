import { Box, Flex, Text, Image } from '@chakra-ui/react'
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
  { value: 75 }
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
  const iconMap: Record<string, string> = {
    BTC: '/images/btc.png',
    ETH: '/images/eth.png',
    SOL: '/images/sol.png'
  }
  const iconSrc = iconMap[name]

  return (
    <Box
      bg="#110E22"
      borderRadius="8px"
      p={{ base: 3, md: 3 }}
      minH={{ base: '110px', md: '118px' }}
      flex="1"
      minW={0}
      transition="all 0.2s"
    >
      <Flex align="center" gap={2} mb={1.5}>
        {iconSrc ? (
          <Image src={iconSrc} alt={name} boxSize="28px" borderRadius="full" />
        ) : (
          <Flex
            w="28px"
            h="28px"
            bg={chartColor}
            borderRadius="full"
            align="center"
            justify="center"
            fontSize="11px"
            fontWeight="bold"
            color="white"
          >
            {name.charAt(0)}
          </Flex>
        )}
        <Box>
          <Text fontSize="13px" fontWeight="600" color="white">
            {name}
          </Text>
          <Text fontSize="10px" color="gray.400">
            {fullName}
          </Text>
        </Box>
      </Flex>

      <Flex justify="space-between" align="center" mb={0.5}>
        <Text fontSize="16px" fontWeight="bold" color="white">
          {value}
        </Text>
        <Box h={{ base: '36px', md: '40px' }} w={{ base: '74px', md: '88px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={miniChartData}>
              <defs>
                <linearGradient
                  id={`gradient-${name}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={chartColor} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
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

      <Flex justify="space-between" align="center" fontSize="11px">
        <Text color="gray.400">{priceChange}</Text>
        <Text color={isPositive ? '#3EDD87' : '#F46565'} fontWeight="600">
          {percentage}
        </Text>
      </Flex>
    </Box>
  )
}
