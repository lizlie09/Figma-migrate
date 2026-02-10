import React, { useState } from 'react'
import { Box, Flex, Text, Icon, Table, Thead, Tbody, Tr, Th, Td, Collapse } from '@chakra-ui/react'
import { MdAccountBalanceWallet } from 'react-icons/md'
import { FiChevronDown, FiChevronRight, FiChevronUp, FiInfo } from 'react-icons/fi'
import { FaBitcoin, FaEthereum, FaSort } from 'react-icons/fa'
import { SiSolana } from 'react-icons/si'
import { assets, debts } from '../data/portfolioData'


export default function PortfolioSection() {
  const [isPortfolioExpanded, setIsPortfolioExpanded] = useState(false)
  const [expandedAssets, setExpandedAssets] = useState<Set<string>>(new Set())
  const [expandedPositionTypes, setExpandedPositionTypes] = useState<Set<string>>(new Set())
  const [expandedTokens, setExpandedTokens] = useState<Set<string>>(new Set())
  const [expandedProtocols, setExpandedProtocols] = useState<Set<string>>(new Set())
  const [expandedWalletAddresses, setExpandedWalletAddresses] = useState<Set<string>>(new Set())
  const [expandedDebts, setExpandedDebts] = useState<Set<string>>(new Set())

  const toggleAsset = (token: string) => {
    const newExpanded = new Set(expandedAssets)
    if (newExpanded.has(token)) {
      newExpanded.delete(token)
    } else {
      newExpanded.add(token)
    }
    setExpandedAssets(newExpanded)
  }

  const togglePositionType = (key: string) => {
    const newExpanded = new Set(expandedPositionTypes)
    if (newExpanded.has(key)) {
      newExpanded.delete(key)
    } else {
      newExpanded.add(key)
    }
    setExpandedPositionTypes(newExpanded)
  }

  const toggleToken = (key: string) => {
    const newExpanded = new Set(expandedTokens)
    if (newExpanded.has(key)) {
      newExpanded.delete(key)
    } else {
      newExpanded.add(key)
    }
    setExpandedTokens(newExpanded)
  }

  const toggleProtocol = (key: string) => {
    const newExpanded = new Set(expandedProtocols)
    if (newExpanded.has(key)) {
      newExpanded.delete(key)
    } else {
      newExpanded.add(key)
    }
    setExpandedProtocols(newExpanded)
  }

  const toggleWalletAddress = (key: string) => {
    const newExpanded = new Set(expandedWalletAddresses)
    if (newExpanded.has(key)) {
      newExpanded.delete(key)
    } else {
      newExpanded.add(key)
    }
    setExpandedWalletAddresses(newExpanded)
  }

  const toggleDebt = (token: string) => {
    const newExpanded = new Set(expandedDebts)
    if (newExpanded.has(token)) {
      newExpanded.delete(token)
    } else {
      newExpanded.add(token)
    }
    setExpandedDebts(newExpanded)
  }

  const getTokenIcon = (token: string) => {
    switch (token) {
      case 'BTC':
        return FaBitcoin
      case 'ETH':
        return FaEthereum
      case 'SOL':
        return SiSolana
      default:
        return null
    }
  }

  const formatNumber = (num: string) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <Box bg="#110E22" borderRadius="12px" p={6} mb={6}>
      <Flex justify="space-between" align="center" mb={4}>
        <Flex align="center" gap={3}>
          <Icon as={MdAccountBalanceWallet} boxSize={6} color="#7D67FF" />
          <Text fontSize="20px" fontWeight="bold">Portfolio</Text>
        </Flex>
        <Icon
          as={isPortfolioExpanded ? FiChevronUp : FiChevronDown}
          boxSize={5}
          color="gray.400"
          cursor="pointer"
          onClick={() => setIsPortfolioExpanded(!isPortfolioExpanded)}
        />
      </Flex>

      <Flex mb={6} fontSize="14px" gap={4} flexWrap="wrap">
        <Text color="gray.400">
          Total Assets: <Text as="span" color="#2268D1" fontWeight="600">40,123,456 USD</Text>
        </Text>
        <Text color="gray.400">|</Text>
        <Text color="gray.400">
          Total Debt: <Text as="span" color="#F46565" fontWeight="600">5,147,258.69 USD</Text>
        </Text>
        <Text color="gray.400">|</Text>
        <Text color="gray.400">
          Net Worth: <Text as="span" color="#3EDD87" fontWeight="600">34,976,198.09 USD</Text>
        </Text>
      </Flex>

      <Collapse in={isPortfolioExpanded} animateOpacity>
        {/* Total Assets Section */}
        <Box mb={8}>
          <Text fontSize="18px" fontWeight="bold" mb={4} color="#FFC063" pb={2}>
            Total Assets
          </Text>
          <Box overflowX="auto">
            <Table variant="simple" size="sm">
              <Thead>
                <Tr borderBottom="1px solid" borderColor="#2A2A35">
                  <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" h="35px" textAlign="left">
                    <Flex align="center" gap={2} justify="flex-start">
                      Token
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                  <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" isNumeric h="35px">
                    <Flex align="center" gap={2} justify="flex-end">
                      Balance
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                  <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" isNumeric h="35px">
                    <Flex align="center" gap={2} justify="flex-end">
                      Percentage
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                  <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" isNumeric backgroundColor="#1C1833" h="35px">
                    <Flex align="center" gap={2} justify="flex-end">
                      Value (USD)
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {assets.map((asset) => {
                  const isExpanded = expandedAssets.has(asset.token)
                  const hasChildren = asset.positionTypes && asset.positionTypes.length > 0
                  const TokenIcon = getTokenIcon(asset.token)

                  return (
                    <>
                      <Tr
                        key={asset.token}
                        cursor={hasChildren ? 'pointer' : 'default'}
                        onClick={() => hasChildren && toggleAsset(asset.token)}
                        _hover={hasChildren ? { bg: '#2A2641' } : {}}
                        borderBottom="1px solid"
                        borderColor="#2A2A35"
                      >
                        <Td h="35px">
                          <Flex align="center" gap={2}>
                            {hasChildren && (
                              <Icon
                                as={isExpanded ? FiChevronDown : FiChevronRight}
                                boxSize={4}
                                color="gray.400"
                              />
                            )}
                            {TokenIcon && (
                              <Icon
                                as={TokenIcon}
                                boxSize={5}
                                color={
                                  asset.token === 'BTC'
                                    ? '#FFC063'
                                    : asset.token === 'ETH'
                                    ? '#2268D1'
                                    : '#21D6AE'
                                }
                              />
                            )}
                            {!TokenIcon && asset.token === 'USD' && (
                              <Text fontSize="18px" fontWeight="bold" color="#FFC063">
                                $
                              </Text>
                            )}
                            <Text fontWeight="500">{asset.token}</Text>
                          </Flex>
                        </Td>
                        <Td h="35px" isNumeric>{formatNumber(asset.balance)}</Td>
                        <Td h="35px" isNumeric>{asset.percentage}%</Td>
                        <Td h="35px" isNumeric fontWeight="600">
                          {formatNumber(asset.value)} USD
                        </Td>
                      </Tr>
                      {hasChildren && (
                        <Tr>
                          <Td colSpan={4} p={0} h={isExpanded ? "auto" : "0"}>
                            <Collapse in={isExpanded} animateOpacity>
                              <Box py={0} pl={8} bg="#110E22" borderLeft="2px solid" borderColor="#2A2A35">
                                <Table variant="simple" size="sm" sx={{ borderSpacing: 0, borderCollapse: 'collapse', tableLayout: 'fixed', width: '100%' }}>
                                  <Thead>
                                    <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                      <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" h="35px" textAlign="left" minW="200px" w="25%">
                                        <Flex align="center" gap={2} justify="flex-start" pl={8}>
                                          Position Type
                                          <Icon as={FaSort} boxSize={4} color="white" />
                                        </Flex>
                                      </Th>
                                      <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" isNumeric backgroundColor="#1C1833" h="35px">
                                        <Flex align="center" gap={2} justify="flex-end">
                                          Balance ({asset.token})
                                          <Icon as={FaSort} boxSize={4} color="white" />
                                        </Flex>
                                      </Th>
                                      <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" isNumeric backgroundColor="#1C1833" h="35px">
                                        <Flex align="center" gap={2} justify="flex-end">
                                          Percentage
                                          <Icon as={FaSort} boxSize={4} color="white" />
                                        </Flex>
                                      </Th>
                                      <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" isNumeric backgroundColor="#1C1833" h="35px">
                                        <Flex align="center" gap={2} justify="flex-end" pr={28}>
                                          Value (USD)
                                          <Icon as={FaSort} boxSize={4} color="white" />
                                        </Flex>
                                      </Th>
                                    </Tr>
                                  </Thead>
                                  <Tbody>
                                    {asset.positionTypes?.map((positionType) => {
                                      const positionKey = `${asset.token}-${positionType.positionType}`
                                      const isPositionExpanded = expandedPositionTypes.has(positionKey)
                                      const hasTokens = positionType.tokens && positionType.tokens.length > 0
                                      const hasProtocols = positionType.protocols && positionType.protocols.length > 0

                                      return (
                                        <React.Fragment key={positionKey}>
                                          <Tr
                                            key={positionKey}
                                            cursor={hasTokens || hasProtocols ? 'pointer' : 'default'}
                                            onClick={() => (hasTokens || hasProtocols) && togglePositionType(positionKey)}
                                            _hover={hasTokens || hasProtocols ? { bg: '#2A2641' } : {}}
                                            borderBottom="1px solid"
                                            borderColor="#2A2A35"
                                          >
                                            <Td h="35px" minW="200px" w="25%">
                                              <Flex align="center" gap={2} pl={8} pr={4}>
                                                {(hasTokens || hasProtocols) && (
                                                  <Icon
                                                    as={isPositionExpanded ? FiChevronDown : FiChevronRight}
                                                    boxSize={4}
                                                    color="gray.400"
                                                  />
                                                )}
                                                <Text>{positionType.positionType}</Text>
                                              </Flex>
                                            </Td>
                                            <Td h="35px" isNumeric>{formatNumber(positionType.balance)}</Td>
                                            <Td h="35px" isNumeric>{positionType.percentage}%</Td>
                                            <Td h="35px" isNumeric fontWeight="600">
                                              <Flex justify="flex-end" pr={18}>
                                                {formatNumber(positionType.value)} USD
                                              </Flex>
                                            </Td>
                                          </Tr>
                                          {/* Tokens within Position Type */}
                                          {hasTokens && (
                                            <Tr sx={{ verticalAlign: 'top' }}>
                                              <Td colSpan={4} p={0} m={0} verticalAlign="top" sx={{ padding: '0 !important', margin: '0 !important', borderBottom: 'none !important', lineHeight: 0 }}>
                                                <Collapse in={isPositionExpanded} animateOpacity>
                                                  <Box py={0} m={0} pl={8} bg="#110E22" sx={{ lineHeight: 'normal' }} borderLeft="2px solid" borderColor="#2A2A35">
                                                    <Table variant="simple" size="sm" sx={{ borderSpacing: 0, borderCollapse: 'collapse' }}>
                                                      <Thead>
                                                        <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                          <Th h="35px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" textAlign="left" minW="200px" w="25%">
                                                            <Flex align="center" gap={2} pl={20} justify="flex-start">
                                                              Token
                                                              <Icon as={FaSort} boxSize={4} color="white" />
                                                            </Flex>
                                                          </Th>
                                                          {(positionType.positionType === 'Staking' || positionType.positionType === 'Staking & Wrapped') && (
                                                            <>
                                                              <Th h="35px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833">
                                                                <Flex align="center" gap={2}>
                                                                  Token Amount
                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                </Flex>
                                                              </Th>
                                                              <Th h="35px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" isNumeric backgroundColor="#1C1833">
                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                  Balance ({asset.token})
                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                </Flex>
                                                              </Th>
                                                              <Th h="35px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" isNumeric backgroundColor="#1C1833">
                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                  APY (%)
                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                </Flex>
                                                              </Th>
                                                            </>
                                                          )}
                                                          {positionType.positionType === 'Wallet Balance' && (
                                                            <>
                                                              <Th h="35px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" isNumeric backgroundColor="#1C1833">
                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                  Balance ({asset.token})
                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                </Flex>
                                                              </Th>
                                                            </>
                                                          )}
                                                          <Th h="35px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" isNumeric backgroundColor="#1C1833">
                                                            <Flex align="center" gap={2} justify="flex-end" pr={20}>
                                                              Value (USD)
                                                              <Icon as={FaSort} boxSize={4} color="white" />
                                                            </Flex>
                                                          </Th>
                                                        </Tr>
                                                      </Thead>
                                                      <Tbody>
                                                        {positionType.tokens?.map((token) => {
                                                          const tokenKey = `${positionKey}-${token.token}`
                                                          const isTokenExpanded = expandedTokens.has(tokenKey)
                                                          const hasNetworks = token.networks && token.networks.length > 0

                                                          return (
                                                            <>
                                                              <Tr
                                                                key={tokenKey}
                                                                cursor={hasNetworks ? 'pointer' : 'default'}
                                                                onClick={() => hasNetworks && toggleToken(tokenKey)}
                                                                _hover={hasNetworks ? { bg: '#2A2641' } : {}}
                                                                borderBottom="1px solid"
                                                                borderColor="#2A2A35"
                                                              >
                                                                <Td h="35px" minW="200px" w="25%">
                                                                  <Flex align="center" gap={2} pl={20}>
                                                                    {hasNetworks && (
                                                                      <Icon
                                                                        as={isTokenExpanded ? FiChevronDown : FiChevronRight}
                                                                        boxSize={4}
                                                                        color="gray.400"
                                                                      />
                                                                    )}
                                                                    {token.token === 'ETH' && (
                                                                      <Icon as={FaEthereum} boxSize={5} color="#2268D1" />
                                                                    )}
                                                                    {token.token === 'BTC' && (
                                                                      <Icon as={FaBitcoin} boxSize={5} color="#FFC063" />
                                                                    )}
                                                                    {(token.token === 'WETH' || token.token === 'wstETH' || token.token === 'rETH' || token.token === 'weETH' || token.token === 'cbETH' || token.token === 'aETH' || token.token === 'cbBTC' || token.token === 'wBTC' || token.token === 'WBTC' || token.token === 'LBTC' || token.token === 'eBTC' || token.token === 'tBTC') && (
                                                                      <Text fontSize="14px" fontWeight="bold">
                                                                        {token.token}
                                                                      </Text>
                                                                    )}
                                                                    {token.token === 'MATIC' && (
                                                                      <Text fontSize="14px" fontWeight="bold">
                                                                        MATIC
                                                                      </Text>
                                                                    )}
                                                                    <Text>{token.token}</Text>
                                                                  </Flex>
                                                                </Td>
                                                                {(positionType.positionType === 'Staking' || positionType.positionType === 'Staking & Wrapped') && token.tokenAmount && (
                                                                  <Td h="35px">{token.tokenAmount}</Td>
                                                                )}
                                                                <Td h="35px" isNumeric>{formatNumber(token.balance)}</Td>
                                                                {(positionType.positionType === 'Staking' || positionType.positionType === 'Staking & Wrapped') && token.apy && (
                                                                  <Td h="35px" isNumeric>
                                                                    <Flex align="center" gap={1}>
                                                                      {token.apy}%
                                                                      <Icon as={FiInfo} boxSize={3} color="gray.400" />
                                                                    </Flex>
                                                                  </Td>
                                                                )}
                                                                <Td h="35px" isNumeric fontWeight="600">
                                                                  <Flex justify="flex-end" pr={20}>
                                                                    {formatNumber(token.value)} USD
                                                                  </Flex>
                                                                </Td>
                                                              </Tr>
                                                              {hasNetworks && (
                                                                <Tr sx={{ verticalAlign: 'top' }}>
                                                                  <Td colSpan={(positionType.positionType === 'Staking' || positionType.positionType === 'Staking & Wrapped') ? 5 : 3} p={0} m={0} verticalAlign="top" sx={{ padding: '0 !important', margin: '0 !important', borderBottom: 'none !important', lineHeight: 0 }}>
                                                                    <Collapse in={isTokenExpanded} animateOpacity>
                                                                      <Box py={0} m={0} pl={8} bg="#110E22" sx={{ lineHeight: 'normal' }} borderLeft="2px solid" borderColor="#2A2A35">
                                                                        <Table variant="simple" size="sm" sx={{ borderSpacing: 0, borderCollapse: 'collapse' }}>
                                                                          <Thead>
                                                                            <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="35px">
                                                                                <Flex align="center" gap={2} pl={28} pr={4} justify="flex-start">
                                                                                  Network
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="35px">
                                                                                <Flex align="center" gap={2}>
                                                                                  Token Amount
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                                  Balance ({asset.token})
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                <Flex align="center" gap={2} justify="flex-end" pr={4}>
                                                                                  Value (USD)
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                            </Tr>
                                                                          </Thead>
                                                                          <Tbody>
                                                                            {token.networks?.map((network, idx) => (
                                                                              <Tr 
                                                                                key={`${tokenKey}-${network.network}-${idx}`} 
                                                                                borderBottom="1px solid"
                                                                                borderColor="#2A2A35"
                                                                              >
                                                                                <Td h="35px">
                                                                                  <Flex align="center" gap={2} pl={28} pr={4}>                                                                                    {network.network === 'Arbitrum' && (
                                                                                      <Box w={5} h={5} bg="#2268D1" borderRadius="50%" />
                                                                                    )}
                                                                                    {network.network === 'Ethereum' && (
                                                                                      <Icon as={FaEthereum} boxSize={5} color="#2268D1" />
                                                                                    )}
                                                                                    {network.network === 'Base' && (
                                                                                      <Box w={5} h={5} bg="#1A71FF" borderRadius="50%" />
                                                                                    )}
                                                                                    <Text>{network.network}</Text>
                                                                                  </Flex>
                                                                                </Td>
                                                                                <Td h="35px">{network.tokenAmount}</Td>
                                                                                <Td h="35px" isNumeric>{formatNumber(network.balance)}</Td>
                                                                                <Td h="35px" isNumeric fontWeight="600">
                                                                                  <Flex align="center" gap={1} justify="flex-end" pr={4}>
                                                                                    {formatNumber(network.value)} USD
                                                                                    <Icon as={FiInfo} boxSize={3} color="gray.400" />
                                                                                  </Flex>
                                                                                </Td>
                                                                              </Tr>
                                                                            ))}
                                                                          </Tbody>
                                                                        </Table>
                                                                      </Box>
                                                                    </Collapse>
                                                                  </Td>
                                                                </Tr>
                                                              )}
                                                            </>
                                                          )
                                                        })}
                                                      </Tbody>
                                                    </Table>
                                                  </Box>
                                                </Collapse>
                                              </Td>
                                            </Tr>
                                          )}
                                          {/* Protocols within Position Type (Collateral, Yield Loops, Liquidity Pools) */}
                                          {hasProtocols && (
                                            <Tr>
                                              <Td colSpan={4} p={0} m={0} sx={{ padding: '0 !important', margin: '0 !important', borderBottom: 'none !important' }}>
                                                <Collapse in={isPositionExpanded} animateOpacity>
                                                  <Box py={0} pl={8} bg="#110E22" borderLeft="2px solid" borderColor="#2A2A35">
                                                    <Table variant="simple" size="sm">
                                                      <Thead>
                                                        <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                          <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="35px">
                                                            <Flex align="center" gap={2} pl={8} justify="flex-start">
                                                              Protocol
                                                              <Icon as={FaSort} boxSize={4} color="white" />
                                                            </Flex>
                                                          </Th>
                                                          {(positionType.positionType === 'Liquidity Pools' || 
                                                            positionType.positionType === 'Collateral' ||
                                                            positionType.positionType === 'Yield Loops') && (
                                                            <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="35px">
                                                              <Flex align="center" gap={2}>
                                                                Market
                                                                <Icon as={FaSort} boxSize={4} color="white" />
                                                              </Flex>
                                                            </Th>
                                                          )}
                                                          <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                            <Flex align="center" gap={2} justify="flex-end">
                                                              Balance ({asset.token})
                                                              <Icon as={FaSort} boxSize={4} color="white" />
                                                            </Flex>
                                                          </Th>
                                                          {positionType.positionType === 'Liquidity Pools' && (
                                                            <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                              <Flex align="center" gap={2} justify="flex-end">
                                                                Percentage
                                                                <Icon as={FaSort} boxSize={4} color="white" />
                                                              </Flex>
                                                            </Th>
                                                          )}
                                                          {positionType.positionType === 'Collateral' && (
                                                            <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                              <Flex align="center" gap={2} justify="flex-end">
                                                                APY (%)
                                                                <Icon as={FaSort} boxSize={4} color="white" />
                                                              </Flex>
                                                            </Th>
                                                          )}
                                                          {positionType.positionType === 'Yield Loops' && (
                                                            <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                              <Flex align="center" gap={2} justify="flex-end">
                                                                Net APY
                                                                <Icon as={FaSort} boxSize={4} color="white" />
                                                              </Flex>
                                                            </Th>
                                                          )}
                                                          <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                            <Flex align="center" gap={2} justify="flex-end">
                                                              Value (USD)
                                                              <Icon as={FaSort} boxSize={4} color="white" />
                                                            </Flex>
                                                          </Th>
                                                        </Tr>
                                                      </Thead>
                                                      <Tbody>
                                                        {positionType.protocols?.map((protocol) => {
                                                          const protocolKey = `${positionKey}-${protocol.protocol}-${protocol.market || ''}`
                                                          const isProtocolExpanded = expandedProtocols.has(protocolKey)
                                                          const hasTokens = protocol.tokens && protocol.tokens.length > 0
                                                          const hasPoolPairs = protocol.poolPairs && protocol.poolPairs.length > 0
                                                          const hasWalletAddresses = protocol.walletAddresses && protocol.walletAddresses.length > 0

                                                          return (
                                                            <>
                                                              <Tr
                                                                key={protocolKey}
                                                                cursor={hasTokens || hasPoolPairs || hasWalletAddresses ? 'pointer' : 'default'}
                                                                onClick={() => (hasTokens || hasPoolPairs || hasWalletAddresses) && toggleProtocol(protocolKey)}
                                                                _hover={hasTokens || hasPoolPairs || hasWalletAddresses ? { bg: '#2A2641' } : {}}
                                                                borderBottom="1px solid"
                                                                borderColor="#2A2A35"
                                                              >
                                                                <Td h="35px">
                                                                  <Flex align="center" gap={2} pl={8}>
                                                                    {(hasTokens || hasPoolPairs || hasWalletAddresses) && (
                                                                      <Icon
                                                                        as={isProtocolExpanded ? FiChevronDown : FiChevronRight}
                                                                        boxSize={4}
                                                                        color="gray.400"
                                                                      />
                                                                    )}
                                                                    <Text>{protocol.protocol}</Text>
                                                                  </Flex>
                                                                </Td>
                                                                {protocol.market && <Td h="35px">{protocol.market}</Td>}
                                                                <Td h="35px" isNumeric>{formatNumber(protocol.balance)}</Td>
                                                                {protocol.percentage && <Td h="35px" isNumeric>{protocol.percentage}%</Td>}
                                                                {protocol.apy && (
                                                                  <Td h="35px" isNumeric>
                                                                    <Flex align="center" gap={1}>
                                                                      {protocol.apy}%
                                                                      <Icon as={FiInfo} boxSize={3} color="gray.400" />
                                                                    </Flex>
                                                                  </Td>
                                                                )}
                                                                {protocol.netApy && (
                                                                  <Td h="35px" isNumeric>
                                                                    <Flex align="center" gap={1}>
                                                                      <Text color="#3EDD87">{protocol.netApy}%</Text>
                                                                    </Flex>
                                                                  </Td>
                                                                )}
                                                                <Td h="35px" isNumeric fontWeight="600">
                                                                  {formatNumber(protocol.value)} USD
                                                                </Td>
                                                              </Tr>
                                                              {/* Wallet Addresses within Protocol (Yield Loops) */}
                                                              {hasWalletAddresses && (
                                                                <Tr>
                                                                  <Td colSpan={positionType.positionType === 'Yield Loops' ? 5 : 5} p={0} m={0} sx={{ padding: '0 !important', margin: '0 !important', borderBottom: 'none !important' }}>
                                                                    <Collapse in={isProtocolExpanded} animateOpacity>
                                                                      <Box py={0} pl={8} bg="#110E22" borderLeft="2px solid" borderColor="#2A2A35">
                                                                        <Table variant="simple" size="sm">
                                                                          <Thead>
                                                                            <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="35px">
                                                                                <Flex align="center" gap={2} pl={8} justify="flex-start">
                                                                                  Wallet Address
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                                  Balance ({asset.token})
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                                  Net APY
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                                  Value (USD)
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                            </Tr>
                                                                          </Thead>
                                                                          <Tbody>
                                                                            {protocol.walletAddresses?.map((wallet) => {
                                                                              const walletKey = `${protocolKey}-${wallet.address}`
                                                                              const isWalletExpanded = expandedWalletAddresses.has(walletKey)
                                                                              const hasDetails = wallet.details !== undefined

                                                                              return (
                                                                                <>
                                                                                  <Tr
                                                                                    key={walletKey}
                                                                                    cursor={hasDetails ? 'pointer' : 'default'}
                                                                                    onClick={() => hasDetails && toggleWalletAddress(walletKey)}
                                                                                    _hover={hasDetails ? { bg: '#2A2641' } : {}}
                                                                                    borderBottom="1px solid"
                                                                                    borderColor="#2A2A35"
                                                                                  >
                                                                                    <Td h="35px">
                                                                                      <Flex align="center" gap={2} pl={8}>
                                                                                        {hasDetails && (
                                                                                          <Icon
                                                                                            as={isWalletExpanded ? FiChevronDown : FiChevronRight}
                                                                                            boxSize={4}
                                                                                            color="gray.400"
                                                                                          />
                                                                                        )}
                                                                                        <Icon as={MdAccountBalanceWallet} boxSize={4} color="gray.400" />
                                                                                        <Text fontFamily="monospace" fontSize="12px">
                                                                                          {wallet.address}
                                                                                        </Text>
                                                                                      </Flex>
                                                                                    </Td>
                                                                                    <Td h="35px" isNumeric>{formatNumber(wallet.balance)}</Td>
                                                                                    <Td h="35px" isNumeric>
                                                                                      <Text color="#3EDD87">{wallet.netApy}%</Text>
                                                                                    </Td>
                                                                                    <Td h="35px" isNumeric fontWeight="600">
                                                                                      {formatNumber(wallet.value)} USD
                                                                                    </Td>
                                                                                  </Tr>
                                                                                  {hasDetails && wallet.details && (
                                                                                    <Tr>
                                                                                      <Td h="35px" colSpan={4} p={0}>
                                                                                        <Collapse in={isWalletExpanded} animateOpacity>
                                                                                          <Box pl={8} pr={4} py={4} bg="#110E22">
                                                                                            {/* Price Info Box */}
                                                                                            <Box bg="#2A2641" borderRadius="8px" p={4} mb={4}>
                                                                                              <Flex direction="column" gap={2}>
                                                                                                <Flex justify="space-between">
                                                                                                  <Text color="gray.400" fontSize="12px">Current Price:</Text>
                                                                                                  <Text fontWeight="600">{wallet.details.currentPrice}</Text>
                                                                                                </Flex>
                                                                                                <Flex justify="space-between">
                                                                                                  <Text color="gray.400" fontSize="12px">Liquidation Price:</Text>
                                                                                                  <Text fontWeight="600">{wallet.details.liquidationPrice}</Text>
                                                                                                </Flex>
                                                                                                <Flex justify="space-between" align="center">
                                                                                                  <Text color="gray.400" fontSize="12px">Health Factor:</Text>
                                                                                                  <Box bg="#3EDD87" borderRadius="4px" px={2} py={1}>
                                                                                                    <Text fontWeight="bold" color="white" fontSize="12px">
                                                                                                      {wallet.details.healthFactor}
                                                                                                    </Text>
                                                                                                  </Box>
                                                                                                </Flex>
                                                                                              </Flex>
                                                                                            </Box>

                                                                                            {/* Supplied Section */}
                                                                                            <Box mb={4}>
                                                                                              <Text fontWeight="bold" mb={2} fontSize="14px">
                                                                                                Supplied
                                                                                              </Text>
                                                                                              <Table variant="simple" size="sm">
                                                                                                <Thead>
                                                                                                  <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="35px">
                                                                                                      <Flex align="center" gap={2} pl={8} justify="flex-start">
                                                                                                        Token
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="35px">
                                                                                                      <Flex align="center" gap={2}>
                                                                                                        Token Amount
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                                      <Flex align="center" gap={2} justify="flex-end">
                                                                                                        Balance ({asset.token})
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                                      <Flex align="center" gap={2} justify="flex-end">
                                                                                                        Supplied APY
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                                      <Flex align="center" gap={2} justify="flex-end">
                                                                                                        Value (USD)
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                  </Tr>
                                                                                                </Thead>
                                                                                                <Tbody>
                                                                                                  {wallet.details.supplied.map((token, idx) => (
                                                                                                    <Tr 
                                                                                                      key={`${walletKey}-supplied-${idx}`} 
                                                                                                      borderBottom="1px solid"
                                                                                                      borderColor="#2A2A35"
                                                                                                    >
                                                                                                      <Td h="35px">
                                                                                                        <Flex align="center" gap={2} pl={8}>
                                                                                                          {(token.token === 'weETH' || token.token === 'wstETH') && (
                                                                                                            <Text fontSize="14px" fontWeight="bold">
                                                                                                              {token.token}
                                                                                                            </Text>
                                                                                                          )}
                                                                                                          {token.token === 'ETH' && (
                                                                                                            <Icon as={FaEthereum} boxSize={5} color="#2268D1" />
                                                                                                          )}
                                                                                                          <Text>{token.token}</Text>
                                                                                                          <Icon as={FiInfo} boxSize={3} color="gray.400" />
                                                                                                        </Flex>
                                                                                                      </Td>
                                                                                                      <Td h="35px">{token.tokenAmount}</Td>
                                                                                                      <Td h="35px" isNumeric fontWeight="bold">
                                                                                                        {formatNumber(token.balance)}
                                                                                                      </Td>
                                                                                                      <Td h="35px" isNumeric>
                                                                                                        <Text color="#3EDD87" fontWeight="bold">
                                                                                                          {token.apy}%
                                                                                                        </Text>
                                                                                                      </Td>
                                                                                                      <Td h="35px" isNumeric fontWeight="bold">
                                                                                                        {formatNumber(token.value)} USD
                                                                                                      </Td>
                                                                                                    </Tr>
                                                                                                  ))}
                                                                                                </Tbody>
                                                                                              </Table>
                                                                                            </Box>

                                                                                            {/* Borrowed Section */}
                                                                                            <Box>
                                                                                              <Text fontWeight="bold" mb={2} fontSize="14px">
                                                                                                Borrowed
                                                                                              </Text>
                                                                                              <Table variant="simple" size="sm">
                                                                                                <Thead>
                                                                                                  <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="35px">
                                                                                                      <Flex align="center" gap={2} pl={8} justify="flex-start">
                                                                                                        Token
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="35px">
                                                                                                      <Flex align="center" gap={2}>
                                                                                                        Token Amount
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                                      <Flex align="center" gap={2} justify="flex-end">
                                                                                                        Balance ({asset.token})
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                                      <Flex align="center" gap={2} justify="flex-end">
                                                                                                        Borrowed APY
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                                      <Flex align="center" gap={2} justify="flex-end">
                                                                                                        Value (USD)
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                  </Tr>
                                                                                                </Thead>
                                                                                                <Tbody>
                                                                                                  {wallet.details.borrowed.map((token, idx) => (
                                                                                                    <Tr 
                                                                                                      key={`${walletKey}-borrowed-${idx}`} 
                                                                                                      borderBottom="1px solid"
                                                                                                      borderColor="#2A2A35"
                                                                                                    >
                                                                                                      <Td h="35px">
                                                                                                        <Flex align="center" gap={2} pl={8}>
                                                                                                          {token.token === 'ETH' && (
                                                                                                            <Icon as={FaEthereum} boxSize={5} color="#2268D1" />
                                                                                                          )}
                                                                                                          <Text>{token.token}</Text>
                                                                                                        </Flex>
                                                                                                      </Td>
                                                                                                      <Td h="35px">{token.tokenAmount}</Td>
                                                                                                      <Td h="35px" isNumeric fontWeight="bold">
                                                                                                        {formatNumber(token.balance)}
                                                                                                      </Td>
                                                                                                      <Td h="35px" isNumeric>
                                                                                                        <Text color="#FFC063" fontWeight="bold">
                                                                                                          {token.apy}%
                                                                                                        </Text>
                                                                                                      </Td>
                                                                                                      <Td h="35px" isNumeric fontWeight="bold">
                                                                                                        {formatNumber(token.value)} USD
                                                                                                      </Td>
                                                                                                    </Tr>
                                                                                                  ))}
                                                                                                </Tbody>
                                                                                              </Table>
                                                                                            </Box>
                                                                                          </Box>
                                                                                        </Collapse>
                                                                                      </Td>
                                                                                    </Tr>
                                                                                  )}
                                                                                </>
                                                                              )
                                                                            })}
                                                                          </Tbody>
                                                                        </Table>
                                                                      </Box>
                                                                    </Collapse>
                                                                  </Td>
                                                                </Tr>
                                                              )}
                                                              {/* Tokens within Protocol (Collateral) */}
                                                              {hasTokens && (
                                                                <Tr>
                                                                  <Td colSpan={5} p={0} m={0} sx={{ padding: '0 !important', margin: '0 !important', borderBottom: 'none !important' }}>
                                                                    <Collapse in={isProtocolExpanded} animateOpacity>
                                                                      <Box py={0} pl={8} bg="#110E22" borderLeft="2px solid" borderColor="#2A2A35">
                                                                        <Table variant="simple" size="sm">
                                                                          <Thead>
                                                                            <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="35px">
                                                                                <Flex align="center" gap={2} pl={8} justify="flex-start">
                                                                                  Token
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="35px">
                                                                                <Flex align="center" gap={2}>
                                                                                  Token Amount
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                                  Balance ({asset.token})
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                                  APY (%)
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                                  Value (USD)
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                            </Tr>
                                                                          </Thead>
                                                                          <Tbody>
                                                                            {protocol.tokens?.map((token) => (
                                                                              <Tr 
                                                                                key={`${protocolKey}-${token.token}`} 
                                                                                borderBottom="1px solid"
                                                                                borderColor="#2A2A35"
                                                                              >
                                                                                <Td h="35px">
                                                                                  <Text fontSize="14px" fontWeight="bold" pl={8}>{token.token}</Text>
                                                                                </Td>
                                                                                <Td h="35px">{token.tokenAmount}</Td>
                                                                                <Td h="35px" isNumeric>{formatNumber(token.balance)}</Td>
                                                                                <Td h="35px" isNumeric>
                                                                                  <Flex align="center" gap={1}>
                                                                                    {token.apy}%
                                                                                    <Icon as={FiInfo} boxSize={3} color="gray.400" />
                                                                                  </Flex>
                                                                                </Td>
                                                                                <Td h="35px" isNumeric fontWeight="600">
                                                                                  {formatNumber(token.value)} USD
                                                                                </Td>
                                                                              </Tr>
                                                                            ))}
                                                                          </Tbody>
                                                                        </Table>
                                                                      </Box>
                                                                    </Collapse>
                                                                  </Td>
                                                                </Tr>
                                                              )}
                                                              {/* Pool Pairs within Protocol (Liquidity Pools) */}
                                                              {hasPoolPairs && (
                                                                <Tr>
                                                                  <Td colSpan={5} p={0} m={0} sx={{ padding: '0 !important', margin: '0 !important', borderBottom: 'none !important' }}>
                                                                    <Collapse in={isProtocolExpanded} animateOpacity>
                                                                      <Box py={0} pl={8} bg="#110E22" borderLeft="2px solid" borderColor="#2A2A35">
                                                                        <Table variant="simple" size="sm">
                                                                          <Thead>
                                                                            <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="35px">
                                                                                <Flex align="center" gap={2} pl={8} justify="flex-start">
                                                                                  Token
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="35px">
                                                                                <Flex align="center" gap={2}>
                                                                                  Pool Pair
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="35px">
                                                                                <Flex align="center" gap={2}>
                                                                                  Token Amount
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                                  Balance ({asset.token})
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                                  APY (%)
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="35px">
                                                                                <Flex align="center" gap={2} justify="flex-end">
                                                                                  Value (USD)
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                            </Tr>
                                                                          </Thead>
                                                                          <Tbody>
                                                                            {protocol.poolPairs?.map((poolPair, idx) => (
                                                                              <Tr 
                                                                                key={`${protocolKey}-${poolPair.poolPair}-${idx}`} 
                                                                                borderBottom="1px solid"
                                                                                borderColor="#2A2A35"
                                                                              >
                                                                                <Td h="35px">
                                                                                  <Flex align="center" gap={2} pl={8}>
                                                                                    {poolPair.token === 'ETH' && <Icon as={FaEthereum} boxSize={5} color="#2268D1" />}
                                                                                    {(poolPair.token === 'wstETH' || poolPair.token === 'weETH') && (
                                                                                      <Text fontSize="14px" fontWeight="bold">{poolPair.token}</Text>
                                                                                    )}
                                                                                    <Text>{poolPair.token}</Text>
                                                                                  </Flex>
                                                                                </Td>
                                                                                <Td h="35px">{poolPair.poolPair}</Td>
                                                                                <Td h="35px">{poolPair.tokenAmount}</Td>
                                                                                <Td h="35px" isNumeric>{formatNumber(poolPair.balance)}</Td>
                                                                                <Td h="35px" isNumeric>
                                                                                  <Flex align="center" gap={1}>
                                                                                    {poolPair.apy}%
                                                                                    <Icon as={FiInfo} boxSize={3} color="gray.400" />
                                                                                  </Flex>
                                                                                </Td>
                                                                                <Td h="35px" isNumeric fontWeight="600">
                                                                                  {formatNumber(poolPair.value)} USD
                                                                                </Td>
                                                                              </Tr>
                                                                            ))}
                                                                          </Tbody>
                                                                        </Table>
                                                                      </Box>
                                                                    </Collapse>
                                                                  </Td>
                                                                </Tr>
                                                              )}
                                                            </>
                                                          )
                                                        })}
                                                      </Tbody>
                                                    </Table>
                                                  </Box>
                                                </Collapse>
                                              </Td>
                                            </Tr>
                                          )}
                                        </React.Fragment>
                                      )
                                    })}
                                  </Tbody>
                                </Table>
                              </Box>
                            </Collapse>
                          </Td>
                        </Tr>
                      )}
                    </>
                  )
                })}
                <Tr borderTop="1px solid" borderColor="#2A2A35">
                  <Td fontWeight="bold">TOTAL</Td>
                  <Td></Td>
                  <Td></Td>
                  <Td isNumeric fontWeight="bold">
                    40,123,456 USD
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Box>

        {/* Total Debts Section */}
        <Box>
          <Text fontSize="18px" fontWeight="bold" mb={4} color="#EE6E6E" pb={2}>
            Total Debts
          </Text>
          <Box overflowX="auto">
            <Table variant="simple" size="sm">
              <Thead>
                <Tr borderBottom="1px solid" borderColor="#2A2A35">
                  <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left">
                    <Flex align="center" gap={2} justify="flex-start">
                      Token
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                  <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric>
                    <Flex align="center" gap={2} justify="flex-end">
                      Balance
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                  <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric>
                    <Flex align="center" gap={2} justify="flex-end">
                      Value (USD)
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {debts.map((debt) => {
                  const isExpanded = expandedDebts.has(debt.token)
                  const DebtIcon = getTokenIcon(debt.token)

                  return (
                    <>
                      <Tr
                        key={debt.token}
                        cursor="pointer"
                        onClick={() => toggleDebt(debt.token)}
                        _hover={{ bg: '#2A2641' }}
                        borderBottom="1px solid"
                        borderColor="#2A2A35"
                      >
                        <Td h="35px">
                          <Flex align="center" gap={2}>
                            <Icon
                              as={isExpanded ? FiChevronDown : FiChevronRight}
                              boxSize={4}
                              color="gray.400"
                            />
                            {DebtIcon && (
                              <Icon
                                as={DebtIcon}
                                boxSize={5}
                                color={debt.token === 'ETH' ? '#2268D1' : '#2268D1'}
                              />
                            )}
                            {!DebtIcon && debt.token === 'USDC' && (
                              <Text fontSize="18px" fontWeight="bold" color="#2268D1">
                                $USDC
                              </Text>
                            )}
                            <Text fontWeight="500">{debt.token}</Text>
                          </Flex>
                        </Td>
                        <Td h="35px" isNumeric>{formatNumber(debt.balance)}</Td>
                        <Td h="35px" isNumeric fontWeight="600">
                          {formatNumber(debt.value)} USD
                        </Td>
                      </Tr>
                      {isExpanded && (
                        <Tr>
                          <Td h="35px" colSpan={3} p={4} color="gray.400" fontSize="14px">
                            {/* Additional debt details can be added here */}
                            <Text>Debt details for {debt.token}...</Text>
                          </Td>
                        </Tr>
                      )}
                    </>
                  )
                })}
                <Tr borderTop="1px solid" borderColor="#2A2A35">
                  <Td fontWeight="bold">TOTAL</Td>
                  <Td></Td>
                  <Td isNumeric fontWeight="bold">
                    98,934 USD
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Collapse>
    </Box>
  )
}
