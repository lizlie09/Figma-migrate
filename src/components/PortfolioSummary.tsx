import { Box, Flex, Text, Icon, Grid } from '@chakra-ui/react'
import { MdRemoveRedEye } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import StatCard from './StatCard'
import TotalPerformance from './TotalPerformance'
import AssetsDistribution from './AssetsDistribution'
import DebtOverview from './DebtOverview'
import PortfolioSection from './PortfolioSection'
import DeFiLoans from './DeFiLoans'

export default function PortfolioSummary() {
  return (
    <Box>
      {/* Header */}
      <Flex justify="space-between" align="center" mb={8}>
        <Flex align="baseline" gap={3}>
          <Text fontSize="32px" fontWeight="bold">Portfolio Summary</Text>
          <Text fontSize="14px" color="gray.400">Ethereum</Text>
        </Flex>
        <Flex gap={3}>
          <Icon as={MdRemoveRedEye} boxSize={5} color="brand.500" cursor="pointer" />
          <Icon as={FiSettings} boxSize={5} color="gray.400" cursor="pointer" />
        </Flex>
      </Flex>

      {/* Stat Cards */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={8}>
        <StatCard
          title="Total Assets"
          subtitle="All Accounts"
          value="$40,123,456 USD"
          profit="+$2560.78"
          percentage="+14.67%"
          icon="wallet"
          iconBg="#3B5998"
        />
        <StatCard
          title="Total Debts"
          subtitle="All Accounts"
          value="$5,147,258.69 USD"
          profit="+$2560.78"
          percentage="+14.67%"
          icon="debt"
          iconBg="#8B3A62"
        />
        <StatCard
          title="Net worth"
          subtitle="All Accounts"
          value="$34,976,198.09 USD"
          profit="+$2560.78"
          percentage="+14.67%"
          icon="trending"
          iconBg="#2D7A5F"
        />
      </Grid>

      {/* Total Performance Chart */}
      <TotalPerformance />

      {/* Assets Distribution and Debt Overview */}
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={6} mt={6}>
        <AssetsDistribution />
        <DebtOverview />
      </Grid>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* DeFi Loans */}
      <DeFiLoans />
    </Box>
  )
}
