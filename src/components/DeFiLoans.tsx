import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Icon,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Collapse,
} from '@chakra-ui/react';
import { MdAccountBalance } from 'react-icons/md';
import { FiChevronDown, FiChevronRight, FiChevronUp } from 'react-icons/fi';
import { FaSort } from 'react-icons/fa';
import { getTokenIconSrc } from './portfolioSectionUtils';
import InfoTooltipIcon from './InfoTooltipIcon';

// Types
interface CollateralAsset {
  token: string;
  suppliedApy: string;
  amount: string;
  valueUsd: string;
}

interface BorrowAsset {
  token: string;
  borrowedApy: string;
  amount: string;
  valueUsd: string;
}

interface MarketPosition {
  market: string;
  marketIcon: string;
  collateralUsd: string;
  debtUsd: string;
  healthFactor: string;
  collaterals?: CollateralAsset[];
  borrows?: BorrowAsset[];
}

interface ProtocolPosition {
  protocol: string;
  protocolIcon: string;
  totalCollateralUsd: string;
  totalDebtUsd: string;
  totalHealthFactor: string;
  markets?: MarketPosition[];
}

interface WalletLoans {
  walletAddress: string;
  protocols: ProtocolPosition[];
  totalCollateralUsd: string;
  totalDebtUsd: string;
  totalHealthFactor: string;
}

// Mock data matching the design images
const DEFI_LOANS_DATA: {
  totalCollateralUsd: string;
  totalDebtUsd: string;
  totalPositions: number;
  totalLiquidationThreshold: string;
  wallets: WalletLoans[];
} = {
  totalCollateralUsd: '62,315',
  totalDebtUsd: '5,147,258.69',
  totalPositions: 3,
  totalLiquidationThreshold: '82.50',
  wallets: [
    {
      walletAddress: '0xb5C98c0D2861D39C538Aff4e87CEE946ffa1Adf4',
      totalCollateralUsd: '214,629',
      totalDebtUsd: '64,691',
      totalHealthFactor: '1.45',
      protocols: [
        {
          protocol: 'Aave v3',
          protocolIcon: '/images/aave.png',
          totalCollateralUsd: '159,006',
          totalDebtUsd: '46,653',
          totalHealthFactor: '1.48',
          markets: [
            {
              market: 'Ethereum Core',
              marketIcon: '/images/eth.png',
              collateralUsd: '55,623',
              debtUsd: '18,038',
              healthFactor: '1.42',
              collaterals: [
                {
                  token: 'cbBTC',
                  suppliedApy: '0.35',
                  amount: '0.95000',
                  valueUsd: '120,000',
                },
                {
                  token: 'WBTC',
                  suppliedApy: '0.30',
                  amount: '0.75000',
                  valueUsd: '95,000',
                },
                {
                  token: 'tBTC',
                  suppliedApy: '0.40',
                  amount: '0.63000',
                  valueUsd: '80,000',
                },
                {
                  token: 'LBTC',
                  suppliedApy: '0.25',
                  amount: '0.47357',
                  valueUsd: '80,000',
                },
              ],
              borrows: [
                {
                  token: 'USDC',
                  borrowedApy: '2.10',
                  amount: '11,038',
                  valueUsd: '11,038',
                },
                {
                  token: 'USDT',
                  borrowedApy: '2.45',
                  amount: '7,000',
                  valueUsd: '7,000',
                },
              ],
            },
            {
              market: 'Polygon',
              marketIcon: '/images/MATIC.png',
              collateralUsd: '53,236',
              debtUsd: '15,258',
              healthFactor: '1.38',
              collaterals: [
                {
                  token: 'weETH',
                  suppliedApy: '0.80',
                  amount: '2.9500',
                  valueUsd: '16,740',
                },
                {
                  token: 'wstETH',
                  suppliedApy: '3.10',
                  amount: '1.7200',
                  valueUsd: '12,387',
                },
                {
                  token: 'MATIC',
                  suppliedApy: '5.20',
                  amount: '18,500',
                  valueUsd: '8,475',
                },
                {
                  token: 'aETH',
                  suppliedApy: '2.95',
                  amount: '0.5400',
                  valueUsd: '2,348',
                },
              ],
              borrows: [
                {
                  token: 'USDC',
                  borrowedApy: '2.35',
                  amount: '14,150',
                  valueUsd: '14,150',
                },
                {
                  token: 'DAI',
                  borrowedApy: '4.80',
                  amount: '11,000',
                  valueUsd: '11,000',
                },
              ],
            },
            {
              market: 'Arbitrum',
              marketIcon: '/images/arbitrum,.png',
              collateralUsd: '50,147',
              debtUsd: '13,357',
              healthFactor: '1.31',
              collaterals: [
                {
                  token: 'ARB',
                  suppliedApy: '4.80',
                  amount: '9,500',
                  valueUsd: '11,400',
                },
                {
                  token: 'rETH',
                  suppliedApy: '2.90',
                  amount: '5.2000',
                  valueUsd: '17,680',
                },
                {
                  token: 'wstETH',
                  suppliedApy: '3.50',
                  amount: '5.9000',
                  valueUsd: '21,067',
                },
              ],
              borrows: [
                {
                  token: 'USDC',
                  borrowedApy: '2.60',
                  amount: '8,357',
                  valueUsd: '8,357',
                },
                {
                  token: 'ARB',
                  borrowedApy: '5.10',
                  amount: '5,000',
                  valueUsd: '5,000',
                },
              ],
            },
          ],
        },
        {
          protocol: 'Compound',
          protocolIcon: '/images/Compound.png',
          totalCollateralUsd: '55,623',
          totalDebtUsd: '18,038',
          totalHealthFactor: '1.55',
          markets: [
            {
              market: 'Ethereum Core',
              marketIcon: '/images/eth.png',
              collateralUsd: '55,623',
              debtUsd: '18,038',
              healthFactor: '1.55',
              collaterals: [
                {
                  token: 'cbBTC',
                  suppliedApy: '2.80',
                  amount: '1.2000',
                  valueUsd: '160,803',
                },
                {
                  token: 'WBTC',
                  suppliedApy: '2.10',
                  amount: '0.4500',
                  valueUsd: '56,850',
                },
                {
                  token: 'tBTC',
                  suppliedApy: '1.95',
                  amount: '0.1800',
                  valueUsd: '22,740',
                },
              ],
              borrows: [
                {
                  token: 'USDC',
                  borrowedApy: '2.05',
                  amount: '8,357',
                  valueUsd: '9,258',
                },
                {
                  token: 'DAI',
                  borrowedApy: '2.30',
                  amount: '11,000',
                  valueUsd: '6,000',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      walletAddress: '0xd833BBeaea157eA5B6aAe3b59De8b9B8864D8D10',
      totalCollateralUsd: '102,480',
      totalDebtUsd: '71,350',
      totalHealthFactor: '1.34',
      protocols: [
        {
          protocol: 'Aave v3',
          protocolIcon: '/images/aave.png',
          totalCollateralUsd: '102,480',
          totalDebtUsd: '71,350',
          totalHealthFactor: '1.34',
          markets: [
            {
              market: 'Ethereum Core',
              marketIcon: '/images/eth.png',
              collateralUsd: '44,820',
              debtUsd: '29,400',
              healthFactor: '1.36',
              collaterals: [
                {
                  token: 'wstETH',
                  suppliedApy: '3.20',
                  amount: '3.1487',
                  valueUsd: '22,279',
                },
                {
                  token: 'rETH',
                  suppliedApy: '0.01',
                  amount: '2.0974',
                  valueUsd: '14,844',
                },
                {
                  token: 'cbETH',
                  suppliedApy: '0.01',
                  amount: '1.9031',
                  valueUsd: '13,455',
                },
                {
                  token: 'WETH',
                  suppliedApy: '3.20',
                  amount: '2.8013',
                  valueUsd: '12,315',
                },
              ],
              borrows: [
                {
                  token: 'USDC',
                  borrowedApy: '1.25',
                  amount: '8,000',
                  valueUsd: '8,000',
                },
                {
                  token: 'USDT',
                  borrowedApy: '1.25',
                  amount: '8,000',
                  valueUsd: '8,000',
                },
              ],
            },
            {
              market: 'Arbitrum',
              marketIcon: '/images/arbitrum,.png',
              collateralUsd: '32,660',
              debtUsd: '25,150',
              healthFactor: '1.31',
              collaterals: [
                {
                  token: 'wstETH',
                  suppliedApy: '3.80',
                  amount: '4.9000',
                  valueUsd: '20,560',
                },
                {
                  token: 'WETH',
                  suppliedApy: '3.80',
                  amount: '2.9500',
                  valueUsd: '16,740',
                },
                {
                  token: 'WBTC',
                  suppliedApy: '0.25',
                  amount: '0.1873',
                  valueUsd: '8,520',
                },
                {
                  token: 'aETH',
                  suppliedApy: '3.80',
                  amount: '0.5400',
                  valueUsd: '2,348',
                },
              ],
              borrows: [
                {
                  token: 'USDC',
                  borrowedApy: '2.35',
                  amount: '14,150',
                  valueUsd: '14,150',
                },
                {
                  token: 'ARB',
                  borrowedApy: '4.80',
                  amount: '11,000',
                  valueUsd: '11,000',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

function getHealthFactorColor(hf: string): string {
  const n = parseFloat(hf);
  if (n >= 1.4) return '#3EDD87'; // green
  return '#D4A574'; // yellowish/orange for lower
}

function getSuppliedApyColor(apy: string): string {
  const n = parseFloat(apy);
  if (n >= 1) return '#3EDD87'; // green for positive APY
  if (n < 0.1) return 'rgba(255, 255, 255, 0.4)'; // muted grey for very low (e.g. 0.01%)
  return '#F46565'; // red for low APY
}

export default function DeFiLoans() {
  const [isDeFiExpanded, setIsDeFiExpanded] = useState(false);
  const [expandedProtocols, setExpandedProtocols] = useState<Set<string>>(
    new Set(),
  );
  const [expandedMarkets, setExpandedMarkets] = useState<Set<string>>(
    new Set(),
  );

  const toggleProtocol = (key: string) => {
    setExpandedProtocols((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const toggleMarket = (key: string) => {
    setExpandedMarkets((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <Box
      bg="#110E22"
      borderRadius="12px"
      p={6}
      pr={8}
      mb={6}
      sx={{
        '& table th, & table td': {
          textAlign: 'left !important',
        },
        '& table [data-is-numeric=true]': {
          textAlign: 'left !important',
        },
      }}
    >
      <Flex justify="space-between" align="center" mb={4}>
        <Flex align="center" gap={3}>
          <Icon as={MdAccountBalance} boxSize={6} color="white" />
          <Text fontSize={{ base: '18px', md: '20px' }} fontWeight="bold">
            DeFi Loans
          </Text>
        </Flex>
        <Flex
          w="36px"
          h="36px"
          bg="#2A2641"
          borderRadius="12px"
          align="center"
          justify="center"
          cursor="pointer"
          border="1px solid"
          borderColor="rgba(255, 255, 255, 0.12)"
          onClick={() => setIsDeFiExpanded(!isDeFiExpanded)}
          flexShrink={0}
        >
          <Icon
            as={isDeFiExpanded ? FiChevronUp : FiChevronDown}
            boxSize={4}
            color="white"
          />
        </Flex>
      </Flex>

      <Flex
        gap={4}
        flexWrap="wrap"
        align="center"
        fontSize={{ base: '14px', md: '16px' }}
      >
        <Text color="gray.400">
          Total Collateral:{' '}
          <Text as="span" color="#FFC063" fontWeight="600">
            {DEFI_LOANS_DATA.totalCollateralUsd} USD
          </Text>
        </Text>
        <Box w="1px" h="4" bg="gray.600" />
        <Text color="gray.400">
          Total Debt:{' '}
          <Text as="span" color="#F46565" fontWeight="600">
            {DEFI_LOANS_DATA.totalDebtUsd} USD
          </Text>
        </Text>
        <Box w="1px" h="4" bg="gray.600" />
        <Text color="gray.400">
          Total Positions:{' '}
          <Text as="span" color="white" fontWeight="600">
            {DEFI_LOANS_DATA.totalPositions}
          </Text>
        </Text>
      </Flex>
      <Text color="gray.400" fontSize={{ base: '14px', md: '16px' }} mt={1}>
        Total Liquidation Threshold:{' '}
        <Text as="span" color="#7D67FF" fontWeight="600">
          {DEFI_LOANS_DATA.totalLiquidationThreshold}%
        </Text>
      </Text>

      <Collapse in={isDeFiExpanded} animateOpacity>
        {DEFI_LOANS_DATA.wallets.map((wallet) => (
          <Box
            key={wallet.walletAddress}
            mb={6}
            overflow="visible"
            sx={{ overflow: 'visible' }}
            mt={6}
          >
            <Text color="white" fontSize="14px" mb={3}>
              Wallet: {wallet.walletAddress}
            </Text>
            <Box
              overflowX="auto"
              pr={4}
              minW="min-content"
              sx={{ overflowY: 'visible' }}
            >
              <Table
                variant="simple"
                size="sm"
                width="100%"
                minW="560px"
                sx={{ tableLayout: 'auto' }}
              >
                <Thead>
                  <Tr borderBottom="1px solid" borderColor="#2A2A35">
                    <Th
                      color="white"
                      fontWeight="normal"
                      fontSize="14px"
                      textTransform="none"
                      backgroundColor="#1C1833"
                      h="45px"
                      minW="160px"
                      textAlign="left"
                    >
                      <Flex
                        align="center"
                        gap={2}
                        justify="flex-start"
                        pl={28}
                        fontWeight="bold"
                      >
                        Protocol
                        <Icon as={FaSort} boxSize={4} color="white" />
                      </Flex>
                    </Th>
                    <Th
                      color="white"
                      fontWeight="normal"
                      fontSize="14px"
                      textTransform="none"
                      backgroundColor="#1C1833"
                      h="45px"
                      minW="140px"
                    >
                      <Flex
                        align="center"
                        gap={2}
                        justify="flex-start"
                        pl={10}
                        fontWeight="bold"
                      >
                        Total Collateral (USD)
                        <Icon as={FaSort} boxSize={4} color="white" />
                      </Flex>
                    </Th>
                    <Th
                      color="white"
                      fontWeight="normal"
                      fontSize="14px"
                      textTransform="none"
                      backgroundColor="#1C1833"
                      h="45px"
                      minW="120px"
                    >
                      <Flex
                        align="center"
                        gap={2}
                        justify="flex-start"
                        pl={10}
                        fontWeight="bold"
                      >
                        Total Debt (USD)
                        <Icon as={FaSort} boxSize={4} color="white" />
                      </Flex>
                    </Th>
                    <Th
                      color="white"
                      fontWeight="normal"
                      fontSize="14px"
                      textTransform="none"
                      backgroundColor="#1C1833"
                      h="45px"
                      minW="120px"
                      textAlign="left"
                    >
                      <Flex
                        align="center"
                        gap={2}
                        justify="flex-start"
                        pr={10}
                        fontWeight="bold"
                      >
                        Total Health Factor
                        <Icon as={FaSort} boxSize={4} color="white" />
                      </Flex>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {wallet.protocols.map((protocol) => {
                    const protocolKey = `${wallet.walletAddress}-${protocol.protocol}`;
                    const hasMarkets =
                      protocol.markets && protocol.markets.length > 0;
                    const isProtocolExpanded =
                      expandedProtocols.has(protocolKey);

                    return (
                      <React.Fragment key={protocolKey}>
                        <Tr
                          cursor={hasMarkets ? 'pointer' : 'default'}
                          onClick={() =>
                            hasMarkets && toggleProtocol(protocolKey)
                          }
                          _hover={hasMarkets ? { bg: '#2A2641' } : {}}
                          borderBottom="1px solid"
                          borderColor="#2A2A35"
                        >
                          <Td h="45px">
                            <Flex align="center" gap={2} pl={28}>
                              <Icon
                                as={
                                  hasMarkets && isProtocolExpanded
                                    ? FiChevronDown
                                    : FiChevronRight
                                }
                                boxSize={4}
                                color="white"
                              />
                              <Image
                                src={protocol.protocolIcon}
                                alt={protocol.protocol}
                                boxSize={6}
                                borderRadius="full"
                                objectFit="contain"
                              />
                              <Text
                                color="white"
                                fontWeight="500"
                                fontSize="14px"
                              >
                                {protocol.protocol}
                              </Text>
                            </Flex>
                          </Td>
                          <Td h="45px">
                            <Flex justify="flex-start" pl={10}>
                              {protocol.totalCollateralUsd}
                            </Flex>
                          </Td>
                          <Td h="45px">
                            <Flex justify="flex-start" pl={10}>
                              {protocol.totalDebtUsd}
                            </Flex>
                          </Td>
                          <Td h="45px">
                            <Flex justify="flex-start" pr={10}>
                              <Text
                                color={getHealthFactorColor(
                                  protocol.totalHealthFactor,
                                )}
                                fontWeight="500"
                                fontSize="14px"
                              >
                                {protocol.totalHealthFactor}
                              </Text>
                            </Flex>
                          </Td>
                        </Tr>

                        {/* Nested Markets table */}
                        {hasMarkets &&
                          isProtocolExpanded &&
                          protocol.markets && (
                            <Tr sx={{ verticalAlign: 'top' }}>
                              <Td colSpan={4} p={0} verticalAlign="top">
                                <Box>
                                  <Box overflowX="auto">
                                    <Table
                                      variant="simple"
                                      size="sm"
                                      sx={{
                                        borderSpacing: 0,
                                        borderCollapse: 'collapse',
                                      }}
                                    >
                                      <Thead>
                                        <Tr
                                          borderBottom="1px solid"
                                          borderColor="#2A2A35"
                                        >
                                          <Th
                                            color="white"
                                            fontWeight="normal"
                                            fontSize="14px"
                                            textTransform="none"
                                            backgroundColor="#1C1833"
                                            h="45px"
                                            minW="140px"
                                            textAlign="left"
                                          >
                                            <Flex
                                              align="center"
                                              gap={2}
                                              justify="flex-start"
                                              pl={40}
                                              fontWeight="bold"
                                            >
                                              Market
                                              <Icon
                                                as={FaSort}
                                                boxSize={4}
                                                color="white"
                                              />
                                            </Flex>
                                          </Th>
                                          <Th
                                            color="white"
                                            fontWeight="normal"
                                            fontSize="14px"
                                            textTransform="none"
                                            backgroundColor="#1C1833"
                                            h="45px"
                                            minW="120px"
                                          >
                                            <Flex
                                              align="center"
                                              gap={2}
                                              justify="flex-start"
                                              pl={10}
                                              fontWeight="bold"
                                            >
                                              Collateral (USD)
                                              <Icon
                                                as={FaSort}
                                                boxSize={4}
                                                color="white"
                                              />
                                            </Flex>
                                          </Th>
                                          <Th
                                            color="white"
                                            fontWeight="normal"
                                            fontSize="14px"
                                            textTransform="none"
                                            backgroundColor="#1C1833"
                                            h="45px"
                                            minW="100px"
                                          >
                                            <Flex
                                              align="center"
                                              gap={2}
                                              justify="flex-start"
                                              pl={10}
                                              fontWeight="bold"
                                            >
                                              Debt (USD)
                                              <Icon
                                                as={FaSort}
                                                boxSize={4}
                                                color="white"
                                              />
                                            </Flex>
                                          </Th>
                                          <Th
                                            color="white"
                                            fontWeight="normal"
                                            fontSize="14px"
                                            textTransform="none"
                                            backgroundColor="#1C1833"
                                            h="45px"
                                            minW="100px"
                                            textAlign="left"
                                          >
                                            <Flex
                                              align="center"
                                              gap={2}
                                              justify="flex-start"
                                              pr={10}
                                              fontWeight="bold"
                                            >
                                              Health Factor
                                              <Icon
                                                as={FaSort}
                                                boxSize={4}
                                                color="white"
                                              />
                                            </Flex>
                                          </Th>
                                        </Tr>
                                      </Thead>
                                      <Tbody>
                                        {protocol.markets.map((market) => {
                                          const marketKey = `${protocolKey}-${market.market}`;
                                          const hasDetails =
                                            (market.collaterals &&
                                              market.collaterals.length > 0) ||
                                            (market.borrows &&
                                              market.borrows.length > 0);
                                          const isMarketExpanded =
                                            expandedMarkets.has(marketKey);

                                          return (
                                            <React.Fragment key={marketKey}>
                                              <Tr
                                                cursor={
                                                  hasDetails
                                                    ? 'pointer'
                                                    : 'default'
                                                }
                                                onClick={() =>
                                                  hasDetails &&
                                                  toggleMarket(marketKey)
                                                }
                                                _hover={
                                                  hasDetails
                                                    ? { bg: '#2A2641' }
                                                    : {}
                                                }
                                                borderBottom="1px solid"
                                                borderColor="#2A2A35"
                                              >
                                                <Td h="45px" pl={40}>
                                                  <Flex align="center" gap={2}>
                                                    {hasDetails && (
                                                      <Icon
                                                        as={
                                                          isMarketExpanded
                                                            ? FiChevronDown
                                                            : FiChevronRight
                                                        }
                                                        boxSize={4}
                                                        color="white"
                                                      />
                                                    )}
                                                    {!hasDetails && (
                                                      <Box w="4" />
                                                    )}
                                                    <Image
                                                      src={market.marketIcon}
                                                      alt={market.market}
                                                      boxSize={5}
                                                      borderRadius="full"
                                                      objectFit="contain"
                                                    />
                                                    <Text
                                                      color="white"
                                                      fontSize="14px"
                                                    >
                                                      {market.market}
                                                    </Text>
                                                  </Flex>
                                                </Td>
                                                <Td h="45px">
                                                  <Flex
                                                    justify="flex-start"
                                                    pl={10}
                                                  >
                                                    {market.collateralUsd}
                                                  </Flex>
                                                </Td>
                                                <Td h="45px">
                                                  <Flex
                                                    justify="flex-start"
                                                    pl={10}
                                                  >
                                                    {market.debtUsd}
                                                  </Flex>
                                                </Td>
                                                <Td h="45px">
                                                  <Flex
                                                    justify="flex-start"
                                                    pr={10}
                                                  >
                                                    <Text
                                                      color={getHealthFactorColor(
                                                        market.healthFactor,
                                                      )}
                                                      fontSize="14px"
                                                    >
                                                      {market.healthFactor}
                                                    </Text>
                                                  </Flex>
                                                </Td>
                                              </Tr>

                                              {/* Your Collaterals & Your Borrows (card layout, same as Yield Loops UI) */}
                                              {hasDetails &&
                                                isMarketExpanded && (
                                                  <Tr
                                                    sx={{
                                                      verticalAlign: 'top',
                                                    }}
                                                  >
                                                    <Td
                                                      colSpan={4}
                                                      p={0}
                                                      verticalAlign="top"
                                                      borderBottom="none"
                                                      sx={{
                                                        overflow: 'visible',
                                                      }}
                                                      bg="#1C1833"
                                                    >
                                                      <Box
                                                        p={4}
                                                        pr={6}
                                                        py={4}
                                                        maxW="900px"
                                                        w="100%"
                                                        ml="auto"
                                                      >
                                                        <Box
                                                          // border="1px solid"
                                                          // borderColor="#4A4360"
                                                          borderRadius="12px"
                                                          p={4}
                                                          bg="#262241"
                                                          mt={2}
                                                        >
                                                          {market.collaterals &&
                                                            market.collaterals
                                                              .length > 0 && (
                                                              <Box
                                                                mb={4}
                                                                mt={2}
                                                              >
                                                                <Text
                                                                  color="#FFC063"
                                                                  fontWeight="bold"
                                                                  mb={3}
                                                                  fontSize="16px"
                                                                  pl={4}
                                                                >
                                                                  Your
                                                                  Collaterals
                                                                </Text>
                                                                <Box
                                                                  // border="1px solid"
                                                                  // borderColor="rgba(255, 255, 255, 0.12)"
                                                                  // borderRadius="12px"
                                                                  p={4}
                                                                >
                                                                  {market.collaterals.map(
                                                                    (
                                                                      c,
                                                                      idx,
                                                                    ) => (
                                                                      <Box
                                                                        key={
                                                                          c.token
                                                                        }
                                                                        mb={
                                                                          idx <
                                                                          market
                                                                            .collaterals!
                                                                            .length -
                                                                            1
                                                                            ? 4
                                                                            : 0
                                                                        }
                                                                        bg="#262241"
                                                                        borderRadius="8px"
                                                                        p={4}
                                                                        border="1px solid"
                                                                        borderColor="#4A4360"
                                                                      >
                                                                        <Flex
                                                                          w="100%"
                                                                          justify="space-between"
                                                                          gap={
                                                                            4
                                                                          }
                                                                          flexWrap="wrap"
                                                                        >
                                                                          <Box
                                                                            flex="1"
                                                                            minW="140px"
                                                                          >
                                                                            <Text
                                                                              color="rgba(255, 255, 255, 0.5)"
                                                                              fontSize="14px"
                                                                              mb={
                                                                                1
                                                                              }
                                                                              pl={
                                                                                4
                                                                              }
                                                                            >
                                                                              Assets
                                                                            </Text>
                                                                            <Flex
                                                                              align="center"
                                                                              gap={
                                                                                2
                                                                              }
                                                                              pl={
                                                                                4
                                                                              }
                                                                            >
                                                                              {getTokenIconSrc(
                                                                                c.token,
                                                                              ) && (
                                                                                <Image
                                                                                  src={
                                                                                    getTokenIconSrc(
                                                                                      c.token,
                                                                                    )!
                                                                                  }
                                                                                  alt={
                                                                                    c.token
                                                                                  }
                                                                                  boxSize={
                                                                                    5
                                                                                  }
                                                                                  borderRadius="full"
                                                                                />
                                                                              )}
                                                                              <Text
                                                                                fontWeight="600"
                                                                                color="white"
                                                                              >
                                                                                {
                                                                                  c.token
                                                                                }
                                                                              </Text>
                                                                              <InfoTooltipIcon
                                                                                label={`Info for ${c.token}`}
                                                                                placement="top"
                                                                              />
                                                                            </Flex>
                                                                          </Box>
                                                                          <Box
                                                                            flex="1"
                                                                            minW="100px"
                                                                            textAlign="left"
                                                                          >
                                                                            <Text
                                                                              color="rgba(255, 255, 255, 0.5)"
                                                                              fontSize="14px"
                                                                              mb={
                                                                                1
                                                                              }
                                                                              pl={
                                                                                4
                                                                              }
                                                                            >
                                                                              Supplied
                                                                              APY
                                                                              (%)
                                                                            </Text>
                                                                            <Text
                                                                              color={getSuppliedApyColor(
                                                                                c.suppliedApy,
                                                                              )}
                                                                              fontWeight="bold"
                                                                              pl={
                                                                                4
                                                                              }
                                                                            >
                                                                              {
                                                                                c.suppliedApy
                                                                              }
                                                                              %
                                                                            </Text>
                                                                          </Box>
                                                                          <Box
                                                                            flex="1"
                                                                            minW="80px"
                                                                            textAlign="left"
                                                                          >
                                                                            <Text
                                                                              color="rgba(255, 255, 255, 0.5)"
                                                                              fontSize="14px"
                                                                              mb={
                                                                                1
                                                                              }
                                                                              pl={
                                                                                4
                                                                              }
                                                                            >
                                                                              Amount
                                                                            </Text>
                                                                            <Text
                                                                              fontWeight="600"
                                                                              pl={
                                                                                4
                                                                              }
                                                                              color="white"
                                                                            >
                                                                              {
                                                                                c.amount
                                                                              }
                                                                            </Text>
                                                                          </Box>
                                                                          <Box
                                                                            flex="1"
                                                                            minW="80px"
                                                                            textAlign="left"
                                                                          >
                                                                            <Text
                                                                              color="rgba(255, 255, 255, 0.5)"
                                                                              fontSize="14px"
                                                                              mb={
                                                                                1
                                                                              }
                                                                              pl={
                                                                                4
                                                                              }
                                                                            >
                                                                              Value
                                                                              (USD)
                                                                            </Text>
                                                                            <Text
                                                                              fontWeight="bold"
                                                                              pl={
                                                                                4
                                                                              }
                                                                              color="white"
                                                                            >
                                                                              {
                                                                                c.valueUsd
                                                                              }
                                                                            </Text>
                                                                          </Box>
                                                                        </Flex>
                                                                      </Box>
                                                                    ),
                                                                  )}
                                                                </Box>
                                                              </Box>
                                                            )}
                                                          {market.borrows &&
                                                            market.borrows
                                                              .length > 0 && (
                                                              <Box>
                                                                <Text
                                                                  color="#F46565"
                                                                  fontWeight="bold"
                                                                  mb={3}
                                                                  fontSize="16px"
                                                                  pl={4}
                                                                >
                                                                  Your Borrows
                                                                </Text>
                                                                <Box
                                                                  // border="1px solid"
                                                                  // borderColor="rgba(255, 255, 255, 0.12)"
                                                                  // borderRadius="12px"
                                                                  p={4}
                                                                >
                                                                  {market.borrows.map(
                                                                    (
                                                                      b,
                                                                      idx,
                                                                    ) => (
                                                                      <Box
                                                                        key={
                                                                          b.token
                                                                        }
                                                                        mb={
                                                                          idx <
                                                                          market
                                                                            .borrows!
                                                                            .length -
                                                                            1
                                                                            ? 4
                                                                            : 0
                                                                        }
                                                                        bg="#262241"
                                                                        borderRadius="8px"
                                                                        p={4}
                                                                        border="1px solid"
                                                                        borderColor="#4A4360"
                                                                      >
                                                                        <Flex
                                                                          w="100%"
                                                                          justify="space-between"
                                                                          gap={
                                                                            4
                                                                          }
                                                                          flexWrap="wrap"
                                                                        >
                                                                          <Box
                                                                            flex="1"
                                                                            minW="140px"
                                                                          >
                                                                            <Text
                                                                              color="rgba(255, 255, 255, 0.5)"
                                                                              fontSize="14px"
                                                                              mb={
                                                                                1
                                                                              }
                                                                              pl={
                                                                                4
                                                                              }
                                                                            >
                                                                              Assets
                                                                            </Text>
                                                                            <Flex
                                                                              align="center"
                                                                              gap={
                                                                                2
                                                                              }
                                                                              pl={
                                                                                4
                                                                              }
                                                                            >
                                                                              {getTokenIconSrc(
                                                                                b.token,
                                                                              ) && (
                                                                                <Image
                                                                                  src={
                                                                                    getTokenIconSrc(
                                                                                      b.token,
                                                                                    )!
                                                                                  }
                                                                                  alt={
                                                                                    b.token
                                                                                  }
                                                                                  boxSize={
                                                                                    5
                                                                                  }
                                                                                  borderRadius="full"
                                                                                />
                                                                              )}
                                                                              <Text
                                                                                fontWeight="600"
                                                                                color="white"
                                                                              >
                                                                                {
                                                                                  b.token
                                                                                }
                                                                              </Text>
                                                                            </Flex>
                                                                          </Box>
                                                                          <Box
                                                                            flex="1"
                                                                            minW="100px"
                                                                            textAlign="left"
                                                                          >
                                                                            <Text
                                                                              color="rgba(255, 255, 255, 0.5)"
                                                                              fontSize="14px"
                                                                              mb={
                                                                                1
                                                                              }
                                                                              pl={
                                                                                4
                                                                              }
                                                                            >
                                                                              Borrowed
                                                                              APY
                                                                              (%)
                                                                            </Text>
                                                                            <Text
                                                                              color="#FF9800"
                                                                              fontWeight="bold"
                                                                              pl={
                                                                                4
                                                                              }
                                                                            >
                                                                              {
                                                                                b.borrowedApy
                                                                              }
                                                                              %
                                                                            </Text>
                                                                          </Box>
                                                                          <Box
                                                                            flex="1"
                                                                            minW="80px"
                                                                            textAlign="left"
                                                                          >
                                                                            <Text
                                                                              color="rgba(255, 255, 255, 0.5)"
                                                                              fontSize="14px"
                                                                              mb={
                                                                                1
                                                                              }
                                                                              pl={
                                                                                4
                                                                              }
                                                                            >
                                                                              Amount
                                                                            </Text>
                                                                            <Text
                                                                              fontWeight="600"
                                                                              pl={
                                                                                4
                                                                              }
                                                                              color="white"
                                                                            >
                                                                              {
                                                                                b.amount
                                                                              }
                                                                            </Text>
                                                                          </Box>
                                                                          <Box
                                                                            flex="1"
                                                                            minW="80px"
                                                                            textAlign="left"
                                                                          >
                                                                            <Text
                                                                              color="rgba(255, 255, 255, 0.5)"
                                                                              fontSize="14px"
                                                                              mb={
                                                                                1
                                                                              }
                                                                              pl={
                                                                                4
                                                                              }
                                                                            >
                                                                              Value
                                                                              (USD)
                                                                            </Text>
                                                                            <Text
                                                                              fontWeight="bold"
                                                                              pl={
                                                                                4
                                                                              }
                                                                              color="white"
                                                                            >
                                                                              {
                                                                                b.valueUsd
                                                                              }
                                                                            </Text>
                                                                          </Box>
                                                                        </Flex>
                                                                      </Box>
                                                                    ),
                                                                  )}
                                                                </Box>
                                                              </Box>
                                                            )}
                                                        </Box>
                                                      </Box>
                                                    </Td>
                                                  </Tr>
                                                )}
                                            </React.Fragment>
                                          );
                                        })}
                                      </Tbody>
                                    </Table>
                                  </Box>
                                </Box>
                              </Td>
                            </Tr>
                          )}
                      </React.Fragment>
                    );
                  })}
                  {/* TOTAL row */}
                  <Tr mb={8}>
                    <Td h="45px">
                      <Flex align="center" pl={28}>
                        <Text color="white" fontWeight="700" fontSize="14px">
                          TOTAL
                        </Text>
                      </Flex>
                    </Td>
                    <Td h="45px">
                      <Flex
                        justify="flex-start"
                        pl={10}
                        fontWeight="600"
                        color="white"
                        fontSize="14px"
                      >
                        {wallet.totalCollateralUsd}
                      </Flex>
                    </Td>
                    <Td h="45px">
                      <Flex
                        justify="flex-start"
                        pl={10}
                        fontWeight="600"
                        color="white"
                        fontSize="14px"
                      >
                        {wallet.totalDebtUsd}
                      </Flex>
                    </Td>
                    <Td h="45px">
                      <Flex justify="flex-start" pr={10}>
                        <Text
                          color={getHealthFactorColor(wallet.totalHealthFactor)}
                          fontWeight="600"
                          fontSize="14px"
                        >
                          {wallet.totalHealthFactor}
                        </Text>
                      </Flex>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Box>
        ))}
      </Collapse>
    </Box>
  );
}
