import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { MdPieChart } from 'react-icons/md'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'BTC', value: 48, color: '#FFC063' },
  { name: 'ETH', value: 33, color: '#7D67FF' },
  { name: 'SOL', value: 20, color: '#3EDD87' }
]

export default function AssetsDistribution() {
  return (
    <Box bg="#110E22" borderRadius="12px" p={{ base: 4, md: 6 }}>
      <Flex align="center" gap={3} mb={6}>
        <Icon as={MdPieChart} boxSize={6} />
        <Text fontSize={{ base: '18px', md: '20px' }} fontWeight="bold">
          Assets Distribution
        </Text>
      </Flex>

      <Flex
        align="center"
        justify="center"
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 6, md: 12 }}
      >
        <Box
          h={{ base: '210px', md: '250px' }}
          w={{ base: '210px', md: '250px' }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>

        <Box w={{ base: '100%', md: 'auto' }}>
          {data.map((item) => (
            <Flex key={item.name} align="center" gap={2} mb={3} justify={{ base: 'center', md: 'flex-start' }}>
              <Box w="12px" h="12px" borderRadius="full" bg={item.color} />
              <Text fontSize="14px">
                <Text as="span" fontWeight="600">
                  {item.name}
                </Text>{' '}
                <Text as="span" color="gray.400">
                  {item.value}%
                </Text>
              </Text>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  )
}
