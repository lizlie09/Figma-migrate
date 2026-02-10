import {
  Box,
  Flex,
  Text,
  Icon,
  Button,
  Grid
} from '@chakra-ui/react'
import { MdAreaChart } from 'react-icons/md'
import { FiCalendar } from 'react-icons/fi'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts'
import CryptoPerformanceCard from './CryptoPerformanceCard'

const data = [
  { month: 'May', value: 300000 },
  { month: 'Jun', value: 1200000 },
  { month: 'Jul', value: 1400000 },
  { month: 'Aug', value: 1300000 },
  { month: 'Sep', value: 2100000 },
  { month: 'Oct', value: 1700000 },
  { month: 'Nov', value: 2600000 },
  { month: 'Dec', value: 5200000 },
  { month: 'Jan', value: 7800000 },
  { month: 'Feb', value: 8600000 },
  { month: 'Mar', value: 10200000 },
  { month: 'Apr', value: 14000000 }
]

export default function TotalPerformance() {
  return (
    <Grid
      templateColumns={{
        base: '1fr',
        lg: 'minmax(0, 1fr) 280px',
        xl: 'minmax(0, 1fr) 300px',
        '2xl': 'minmax(0, 1fr) 330px'
      }}
      gap={6}
      mb={6}
    >
      {/* Total Performance Chart Container - spans columns 1 and 2 (Total Assets + Total Debts width) */}
      <Box
        gridColumn={{ base: 'auto', xl: 'span 1' }}
        bg="#110E22"
        borderRadius="12px"
        p={{ base: 3, md: 4 }}
        h={{ base: '360px', md: '400px' }}
      >
        <Box mb={2}>
          <Flex align="center" gap={3} mb={2}>
            <Icon as={MdAreaChart} boxSize={6} />
            <Text fontSize={{ base: '18px', md: '20px' }} fontWeight="bold" whiteSpace="nowrap">
              Total Performance
            </Text>
          </Flex>

          <Flex align="center" gap={2} justify="flex-end" flexWrap="wrap">
            <Flex align="center" gap={2} fontSize="12px">
              <Text
                color="rgba(255, 255, 255, 0.85)"
                fontWeight="700"
                whiteSpace="nowrap"
              >
                Sort By:
              </Text>
              <Flex
                bg="#2A2641"
                p={0.5}
                borderRadius="8px"
                align="center"
                gap={0.5}
                overflowX="auto"
                maxW="100%"
              >
                <Button
                  size="xs"
                  h="24px"
                  px={3}
                  bg="#FFFFFF"
                  color="#1C1833"
                  _hover={{ bg: '#FFFFFF' }}
                  borderRadius="6px"
                  fontWeight="700"
                >
                  Assets
                </Button>
                <Button
                  size="xs"
                  h="24px"
                  px={3}
                  variant="ghost"
                  color="rgba(255, 255, 255, 0.5)"
                  _hover={{ bg: 'transparent', color: 'rgba(255, 255, 255, 0.7)' }}
                  borderRadius="6px"
                  fontWeight="600"
                >
                  Net Worth
                </Button>
              </Flex>
            </Flex>

            <Flex
              bg="#2A2641"
              p={0.5}
              borderRadius="8px"
              align="center"
              gap={0.5}
              overflowX="auto"
              maxW="100%"
            >
              <Button
                size="xs"
                h="24px"
                px={2.5}
                variant="ghost"
                color="rgba(255, 255, 255, 0.5)"
                _hover={{ bg: 'transparent', color: 'rgba(255, 255, 255, 0.7)' }}
                borderRadius="6px"
                fontWeight="600"
              >
                3m
              </Button>
              <Button
                size="xs"
                h="24px"
                px={2.5}
                bg="#FFFFFF"
                color="#1C1833"
                _hover={{ bg: '#FFFFFF' }}
                borderRadius="6px"
                fontWeight="700"
              >
                1y
              </Button>
              <Button
                size="xs"
                h="24px"
                px={2.5}
                variant="ghost"
                color="rgba(255, 255, 255, 0.5)"
                _hover={{ bg: 'transparent', color: 'rgba(255, 255, 255, 0.7)' }}
                borderRadius="6px"
                fontWeight="600"
              >
                Ytd
              </Button>
              <Button
                size="xs"
                h="24px"
                px={2.5}
                variant="ghost"
                color="rgba(255, 255, 255, 0.5)"
                _hover={{ bg: 'transparent', color: 'rgba(255, 255, 255, 0.7)' }}
                borderRadius="6px"
                fontWeight="600"
              >
                3y
              </Button>
              <Button
                size="xs"
                h="24px"
                px={2.5}
                variant="ghost"
                color="rgba(255, 255, 255, 0.5)"
                _hover={{ bg: 'transparent', color: 'rgba(255, 255, 255, 0.7)' }}
                borderRadius="6px"
                fontWeight="600"
              >
                5y
              </Button>
              <Button
                size="xs"
                h="24px"
                px={2.5}
                variant="ghost"
                color="rgba(255, 255, 255, 0.5)"
                _hover={{ bg: 'transparent', color: 'rgba(255, 255, 255, 0.7)' }}
                borderRadius="6px"
                fontWeight="600"
              >
                MAX
              </Button>
              <Icon as={FiCalendar} boxSize={4} color="rgba(255, 255, 255, 0.5)" mx={1} />
            </Flex>
          </Flex>
        </Box>

        <Box h={{ base: '260px', md: '280px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2268D1" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2268D1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2641" />
              <XAxis
                dataKey="month"
                stroke="#666"
                style={{ fontSize: '12px' }}
              />
              <YAxis
                stroke="#666"
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `${value / 1000000}M`}
                domain={[0, 40000000]}
                ticks={[0, 10000000, 20000000, 30000000, 40000000]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1C1833',
                  border: '1px solid #2A2641',
                  borderRadius: '8px'
                }}
                formatter={(value: number) => [
                  `$${(value / 1000000).toFixed(1)}M`,
                  'Value'
                ]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#2268D1"
                strokeWidth={2}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      {/* Market Price Cards - Separate boxes, no container */}
      <Flex direction="column" gap={3} w="100%">
        <CryptoPerformanceCard
          name="BTC"
          fullName="Bitcoin"
          value="$100,186"
          priceChange="P/L Daily -$16.78"
          percentage="+14.67%"
          chartColor="#FFC063"
        />
        <CryptoPerformanceCard
          name="ETH"
          fullName="Ethereum"
          value="$23,195"
          priceChange="P/L Daily -$516.78"
          percentage="+24.68%"
          chartColor="#7D67FF"
        />
        <CryptoPerformanceCard
          name="SOL"
          fullName="Solana"
          value="$511"
          priceChange="P/L Daily -$12.78"
          percentage="+64.11%"
          chartColor="#3EDD87"
        />
      </Flex>
    </Grid>
  )
}
