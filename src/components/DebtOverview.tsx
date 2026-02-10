import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import { MdBarChart } from 'react-icons/md'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

const data = [
  { name: 'Total Assets', value: 40000000, color: '#3EDD87' },
  { name: 'Total Collateral', value: 20000000, color: '#FFC063' },
  { name: 'Total Debt', value: 8000000, color: '#F46565' },
]

export default function DebtOverview() {
  return (
    <Box bg="#110E22" borderRadius="12px" p={6}>
      <Flex align="center" gap={3} mb={6}>
        <Icon as={MdBarChart} boxSize={6} />
        <Text fontSize="20px" fontWeight="bold">Debt Overview</Text>
      </Flex>

      <Box h="280px">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A2641" />
            <XAxis
              dataKey="name"
              stroke="#666"
              style={{ fontSize: '11px' }}
              angle={0}
              textAnchor="middle"
            />
            <YAxis
              stroke="#666"
              style={{ fontSize: '12px' }}
              tickFormatter={(value) => `${value / 10000000}0M`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1C1833',
                border: '1px solid #2A2641',
                borderRadius: '8px'
              }}
              formatter={(value: number) => [`$${(value / 1000000).toFixed(1)}M`, '']}
            />
            <Bar
              dataKey="value"
              fill="#8884d8"
              radius={[8, 8, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  )
}
