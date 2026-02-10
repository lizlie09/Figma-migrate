import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { MdPieChart } from 'react-icons/md'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'BTC', value: 48, color: '#FFC063' },
  { name: 'ETH', value: 33, color: '#7D67FF' },
  { name: 'SOL', value: 20, color: '#3EDD87' },
]

export default function AssetsDistribution() {
  return (
    <Box bg="#110E22" borderRadius="12px" p={6}>
      <Flex align="center" gap={3} mb={6}>
        <Icon as={MdPieChart} boxSize={6} />
        <Text fontSize="20px" fontWeight="bold">Assets Distribution</Text>
      </Flex>

      <Flex align="center" justify="space-between">
        <Box h="250px" w="250px">
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
          <Flex
            position="absolute"
            top="50%"
            left="125px"
            transform="translate(-50%, -50%)"
            direction="column"
            align="center"
          >
            <Text fontSize="18px" fontWeight="bold">Assets</Text>
          </Flex>
        </Box>

        <Box>
          {data.map((item) => (
            <Flex key={item.name} align="center" gap={2} mb={3}>
              <Box w="12px" h="12px" borderRadius="full" bg={item.color} />
              <Text fontSize="14px">
                <Text as="span" fontWeight="600">{item.name}</Text>{' '}
                <Text as="span" color="gray.400">{item.value}%</Text>
              </Text>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Box>
  )
}
