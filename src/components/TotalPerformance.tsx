import { Box, Flex, Text, Icon, Button, ButtonGroup, Grid } from '@chakra-ui/react'
import { MdShowChart } from 'react-icons/md'
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'
import CryptoPerformanceCard from './CryptoPerformanceCard'

const data = [
  { month: 'May', value: 5000000 },
  { month: 'Jun', value: 5200000 },
  { month: 'Jul', value: 5100000 },
  { month: 'Aug', value: 5300000 },
  { month: 'Sep', value: 5500000 },
  { month: 'Oct', value: 5400000 },
  { month: 'Nov', value: 5800000 },
  { month: 'Dec', value: 6200000 },
  { month: 'Jan', value: 8500000 },
  { month: 'Feb', value: 10200000 },
  { month: 'Mar', value: 15800000 },
  { month: 'Apr', value: 35000000 },
]

export default function TotalPerformance() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={6}>
      {/* Total Performance Chart Container - spans columns 1 and 2 (Total Assets + Total Debts width) */}
      <Box gridColumn="span 2" bg="#110E22" borderRadius="12px" p={6}>
        <Flex justify="space-between" align="center" mb={4}>
          <Flex align="center" gap={3}>
            <Icon as={MdShowChart} boxSize={6} />
            <Text fontSize="20px" fontWeight="bold">Total Performance</Text>
          </Flex>

          <Flex align="center" gap={4}>
            <Flex align="center" gap={2} fontSize="13px">
              <Text color="gray.400">Sort By:</Text>
              <Button size="xs" bg="#2A2641" _hover={{ bg: '#2A2641' }}>Assets</Button>
              <Button size="xs" variant="ghost" color="gray.400">Net Worth</Button>
            </Flex>

            <ButtonGroup size="xs" isAttached>
              <Button bg="#2A2641" _hover={{ bg: '#2A2641' }}>3m</Button>
              <Button bg="#7D67FF" _hover={{ bg: '#7D67FF' }}>1y</Button>
              <Button bg="#2A2641" _hover={{ bg: '#2A2641' }}>Ytd</Button>
              <Button bg="#2A2641" _hover={{ bg: '#2A2641' }}>3y</Button>
              <Button bg="#2A2641" _hover={{ bg: '#2A2641' }}>5y</Button>
              <Button bg="#2A2641" _hover={{ bg: '#2A2641' }}>MAX</Button>
            </ButtonGroup>
          </Flex>
        </Flex>

        <Box h="220px">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2268D1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#2268D1" stopOpacity={0}/>
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
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1C1833',
                  border: '1px solid #2A2641',
                  borderRadius: '8px'
                }}
                formatter={(value: number) => [`$${(value / 1000000).toFixed(1)}M`, 'Value']}
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
      <Flex direction="column" gap={3}>
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
