import React, { useState } from 'react'
import { Box, Flex, Text, Icon, Image, Table, Thead, Tbody, Tr, Th, Td, Collapse, Tooltip } from '@chakra-ui/react'
import { MdAccountBalanceWallet } from 'react-icons/md'
import { FiChevronDown, FiChevronRight, FiChevronUp, FiInfo } from 'react-icons/fi'
import { FaSort } from 'react-icons/fa'
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

  const getTokenIconSrc = (token: string): string | null => {
    switch (token) {
      case 'BTC':
        return '/images/btc.png'
      case 'ETH':
        return '/images/eth.png'
      case 'SOL':
        return '/images/sol.png'
      case 'USD':
        return '/images/usd.png'
      case 'WETH':
        return '/images/WETH.png'
      default:
        return null
    }
  }

  const formatNumber = (num: string) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <Box bg="#110E22" borderRadius="12px" p={6} pr={8} mb={6}>
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
          <Box overflowX="auto" pr={4}>
            <Table variant="simple" size="sm" width="100%">
              <Thead>
                <Tr borderBottom="1px solid" borderColor="#2A2A35">
                  <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" h="45px" textAlign="left">
                    <Flex align="center" gap={2} justify="flex-start" pl={28} fontWeight={"bold"}>
                      Token
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                  <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" h="45px">
                    <Flex align="center" gap={2} justify="flex-start" pl={10} fontWeight={"bold"}>
                      Balance
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                  <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" h="45px">
                    <Flex align="center" gap={2} justify="flex-start" pl={10} fontWeight={"bold"}>
                      Percentage
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                  <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" h="45px" textAlign="left">
                    <Flex align="center" gap={2} justify="flex-start" pr={10} fontWeight={"bold"}>
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
                  const tokenIconSrc = getTokenIconSrc(asset.token)

                  return (
                    <React.Fragment key={asset.token}>
                      <Tr
                        cursor={hasChildren ? 'pointer' : 'default'}
                        onClick={() => hasChildren && toggleAsset(asset.token)}
                        _hover={hasChildren ? { bg: '#2A2641' } : {}}
                        borderBottom="1px solid"
                        borderColor="#2A2A35"
                      >
                        <Td h="45px">
                          <Flex align="center" gap={2} pl={28}>
                            {hasChildren && (
                              <Icon
                                as={isExpanded ? FiChevronDown : FiChevronRight}
                                boxSize={4}
                                color="gray.400"
                              />
                            )}
                            {tokenIconSrc && (
                              <Image src={tokenIconSrc} alt={asset.token} boxSize={5} />
                            )}
                            {!tokenIconSrc && asset.token === 'USD' && (
                              <Text fontSize="18px" fontWeight="bold" color="#FFC063">
                                $
                              </Text>
                            )}
                            <Text fontWeight="500">{asset.token}</Text>
                          </Flex>
                        </Td>
                        <Td h="45px">
                          <Flex justify="flex-start" pl={10}>{formatNumber(asset.balance)} </Flex>
                        </Td>
                        <Td h="45px">
                          <Flex justify="flex-start" pl={10}>{asset.percentage}%</Flex>
                        </Td>
                        <Td h="45px">
                          <Flex justify="flex-start" pr={10}>
                            {formatNumber(asset.value)}
                          </Flex>
                        </Td>
                      </Tr>
                      {hasChildren && (
                        <Tr>
                          <Td colSpan={4} p={0} h={isExpanded ? "auto" : "0"}>
                            <Collapse in={isExpanded} animateOpacity>
                              <Box py={0} bg="#110E22">
                                <Table variant="simple" size="sm" sx={{ borderSpacing: 0, borderCollapse: 'collapse', tableLayout: 'fixed', width: '100%' }}>
                                  <Thead>
                                    <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                      <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" h="45px" textAlign="left"  sx={{ whiteSpace: 'nowrap' }}>
                                        <Flex align="center" gap={2} justify="flex-start" fontWeight={"bold"} pl={40}>
                                          Position Type
                                          <Icon as={FaSort} boxSize={4} color="white" />
                                        </Flex>
                                      </Th>
                                      <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" h="45px" textAlign="left" sx={{ whiteSpace: 'nowrap' }}>
                                        <Flex align="center" gap={2} justify="flex-start" fontWeight={"bold"} pl={28}>
                                          Balance ({asset.token})
                                          <Icon as={FaSort} boxSize={4} color="white" />
                                        </Flex>
                                      </Th>
                                      <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" h="45px" textAlign="left" >
                                        <Flex align="center" gap={2} justify="flex-start" fontWeight={"bold"} pl={16}>
                                          Percentage
                                          <Icon as={FaSort} boxSize={4} color="white" />
                                        </Flex>
                                      </Th>
                                      <Th color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" h="45px" textAlign="left" >
                                        <Flex align="center" gap={2} justify="flex-start" fontWeight={"bold"} pl={4}>
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
                                            <Td h="45px" pl={40}>
                                              <Flex align="center" gap={2} sx={{ whiteSpace: 'nowrap' }}>
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
                                            <Td h="45px" textAlign="left" >
                                              <Flex justify="flex-start" pl={28}>{formatNumber(positionType.balance)}</Flex>
                                            </Td>
                                            <Td h="45px" textAlign="left" >
                                              <Flex justify="flex-start" pl={16}>{positionType.percentage}%</Flex>
                                            </Td>
                                            <Td h="45px" textAlign="left" >
                                              <Flex justify="flex-start" pl={4}>
                                                {formatNumber(positionType.value)}
                                              </Flex>
                                            </Td>
                                          </Tr>
                                          {/* Tokens within Position Type */}
                                          {hasTokens && (
                                            <Tr sx={{ verticalAlign: 'top' }}>
                                              <Td colSpan={4} p={0} m={0} verticalAlign="top" sx={{ padding: '0 !important', margin: '0 !important', borderBottom: 'none !important', lineHeight: 0 }}>
                                                <Collapse in={isPositionExpanded} animateOpacity>
                                                  <Box py={0} m={0} bg="#110E22" sx={{ lineHeight: 'normal' }}>
                                                    <Table variant="simple" size="sm" sx={{ borderSpacing: 0, borderCollapse: 'collapse' }}>
                                                      <Thead>
                                                        <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                          <Th h="45px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" textAlign="left" >
                                                            <Flex align="center" gap={2} justify="flex-start" pl={48} fontWeight={"bold"}>
                                                              Token
                                                              <Icon as={FaSort} boxSize={4} color="white" />
                                                            </Flex>
                                                          </Th>
                                                          {(positionType.positionType === 'Staking' || positionType.positionType === 'Staking & Wrapped') && (
                                                            <>
                                                              <Th h="45px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" sx={{ whiteSpace: 'nowrap' }}>
                                                                <Flex align="center" gap={2} fontWeight={"bold"}>
                                                                  Token Amount
                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                </Flex>
                                                              </Th>
                                                              <Th h="45px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" isNumeric backgroundColor="#1C1833" sx={{ whiteSpace: 'nowrap' }}>
                                                                <Flex align="center" gap={2} justify="flex-start" fontWeight={"bold"}>
                                                                  Balance ({asset.token})
                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                </Flex>
                                                              </Th>
                                                              <Th h="45px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" isNumeric backgroundColor="#1C1833" sx={{ whiteSpace: 'nowrap' }}>
                                                                <Flex align="center" gap={2} justify="flex-start" fontWeight={"bold"}>
                                                                  APY (%)
                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                </Flex>
                                                              </Th>
                                                              <Th h="45px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" textAlign="left" sx={{ whiteSpace: 'nowrap' }}>
                                                                <Flex align="center" gap={2} justify="flex-start" pl={2} fontWeight={"bold"}>
                                                                  Value (USD)
                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                </Flex>
                                                              </Th>
                                                            </>
                                                          )}

                                                          {positionType.positionType === 'Wallet Balance' && (
                                                            <>
                                                              <Th h="45px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" textAlign="left">
                                                                <Flex align="center" gap={2} justify="flex-start" pl={20} fontWeight={"bold"}>
                                                                  Balance ({asset.token})
                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                </Flex>
                                                              </Th>
                                                              <Th h="45px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" textAlign="left">
                                                                <Flex align="center" gap={2} justify="flex-start" pl={44} fontWeight={"bold"}>
                                                                  Value (USD)
                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                </Flex>
                                                              </Th>
                                                            </>
                                                          )}

                                                          {positionType.positionType !== 'Wallet Balance' &&
                                                            positionType.positionType !== 'Staking' &&
                                                            positionType.positionType !== 'Staking & Wrapped' && (
                                                              <Th h="45px" color="white" fontWeight="normal" fontSize="14px" textTransform="none" backgroundColor="#1C1833" textAlign="left">
                                                                <Flex align="center" gap={2} justify="flex-start" pl={44}>
                                                                  Value (USD)
                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                </Flex>
                                                              </Th>
                                                            )}
                                                        </Tr>
                                                      </Thead>
                                                      <Tbody>
                                                        {positionType.tokens?.map((token, tokenIndex) => {
                                                          const tokenKey = `${positionKey}-${token.token}-${tokenIndex}`
                                                          const isTokenExpanded = expandedTokens.has(tokenKey)
                                                          const hasNetworks = token.networks && token.networks.length > 0
                                                          const isStakingPosition = positionType.positionType === 'Staking' || positionType.positionType === 'Staking & Wrapped'
                                                          const isWalletBalancePosition = positionType.positionType === 'Wallet Balance'
                                                          const balanceCellPadding = isWalletBalancePosition ? 20 : isStakingPosition ? 0 : 20
                                                          const valueCellPadding = isWalletBalancePosition ? 44 : isStakingPosition ? 2 : 44

                                                          return (
                                                            <React.Fragment key={tokenKey}>
                                                              <Tr
                                                                cursor={hasNetworks ? 'pointer' : 'default'}
                                                                onClick={() => hasNetworks && toggleToken(tokenKey)}
                                                                _hover={hasNetworks ? { bg: '#2A2641' } : {}}
                                                                borderBottom="1px solid"
                                                                borderColor="#2A2A35"
                                                              >
                                                                <Td h="45px">
                                                                  <Flex align="center" gap={2} pl={48}>
                                                                    {hasNetworks && (
                                                                      <Icon
                                                                        as={isTokenExpanded ? FiChevronDown : FiChevronRight}
                                                                        boxSize={4}
                                                                        color="gray.400"
                                                                      />
                                                                    )}
                                                                    {token.token === 'ETH' && (
                                                                      <Image src="/images/eth.png" alt="ETH" boxSize={5} />
                                                                    )}
                                                                    {token.token === 'BTC' && (
                                                                      <Image src="/images/btc.png" alt="BTC" boxSize={5} />
                                                                    )}
                                                                    {token.token === 'WETH' && (
                                                                      <Image src="/images/WETH.png" alt="WETH" boxSize={5} />
                                                                    )}
                                                                    {token.token === 'wstETH' && (
                                                                      <Image src="/images/wstETH.png" alt="wstETH" boxSize={5} />
                                                                    )}
                                                                    {token.token === 'rETH' && (
                                                                      <Image src="/images/rETH.png" alt="rETH" boxSize={5} />
                                                                    )}
                                                                    {token.token === 'weETH' && (
                                                                      <Image src="/images/weETH.png" alt="weETH" boxSize={5} />
                                                                    )}
                                                                    <Text
                                                                      fontSize="14px"
                                                                      fontWeight={
                                                                        token.token === 'wstETH' ||
                                                                        token.token === 'rETH' ||
                                                                        token.token === 'weETH' ||
                                                                        token.token === 'cbETH' ||
                                                                        token.token === 'aETH' ||
                                                                        token.token === 'cbBTC' ||
                                                                        token.token === 'wBTC' ||
                                                                        token.token === 'WBTC' ||
                                                                        token.token === 'LBTC' ||
                                                                        token.token === 'eBTC' ||
                                                                        token.token === 'tBTC' ||
                                                                        token.token === 'MATIC'
                                                                          ? 'bold'
                                                                          : 'normal'
                                                                      }
                                                                    >
                                                                      {token.token}
                                                                    </Text>
                                                                  </Flex>
                                                                </Td>
                                                                {isStakingPosition && token.tokenAmount && (
                                                                  <Td h="45px">
                                                                    <Flex align="center" gap={3} justify="flex-start" >{token.tokenAmount}</Flex>
                                                                  </Td>
                                                                )}
                                                                <Td
                                                                  h="45px"
                                                                  textAlign="left"
                                                                 >
                                                                  <Flex justify="flex-start" pl={balanceCellPadding}>{formatNumber(token.balance)}</Flex>
                                                                </Td>
                                                                {isStakingPosition && token.apy && (
                                                                  <Td h="45px">
                                                                    <Flex align="center" gap={3} justify="flex-start">
                                                                      {token.apy}%
                                                                      <Tooltip
                                                                        placement="left"
                                                                        hasArrow
                                                                        arrowShadowColor="#8A63D2"
                                                                        bg="#26214B"
                                                                        color="white"
                                                                        border="1px solid"
                                                                        borderColor="#8A63D2"
                                                                        borderRadius="8px"
                                                                        px={2}
                                                                        py={1.5}
                                                                        label={
                                                                          <Box>
                                                                            <Text fontWeight="bold" fontSize="11px" mb={0.5}>
                                                                              Staking APR
                                                                            </Text>
                                                                            <Text fontSize="11px" textDecoration="underline">
                                                                              {token.apy}%
                                                                            </Text>
                                                                          </Box>
                                                                        }
                                                                      >
                                                                        <Box as="span" cursor="help" display="inline-flex">
                                                                          <Icon as={FiInfo} boxSize={4} color="#FFFFFF" _hover={{ color: 'gray.300' }} />
                                                                        </Box>
                                                                      </Tooltip>
                                                                    </Flex>
                                                                  </Td>
                                                                )} 
                                                                <Td h="45px" textAlign="left" >
                                                                  <Flex justify="flex-start" pl={valueCellPadding}>{formatNumber(token.value)}</Flex>
                                                                </Td>
                                                              </Tr>
                                                              {hasNetworks && (
                                                                <Tr sx={{ verticalAlign: 'top' }}>
                                                                  <Td colSpan={isStakingPosition ? 5 : 3} p={0} m={0} verticalAlign="top" sx={{ padding: '0 !important', margin: '0 !important', borderBottom: 'none !important', lineHeight: 0 }}>
                                                                    <Collapse in={isTokenExpanded} animateOpacity>
                                                                      <Box py={0} m={0} bg="#110E22" sx={{ lineHeight: 'normal' }}>
                                                                        <Table variant="simple" size="sm" sx={{ borderSpacing: 0, borderCollapse: 'collapse' }}>
                                                                          <Thead>
                                                                            <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="45px">
                                                                                <Flex align="center" gap={2} pr={4} justify="flex-start" pl={60}>
                                                                                  Network
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="45px">
                                                                                <Flex align="center" gap={2} pl={10} >
                                                                                  Token Amount
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="45px" textAlign="right">
                                                                                <Flex align="center" gap={2} justify="flex-start" pl={10}>
                                                                                  Balance ({asset.token})
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="45px" textAlign="right" >
                                                                                <Flex align="center" gap={2} justify="flex-start" pl={10}>
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
                                                                                <Td h="45px">
                                                                                  <Flex align="center" gap={2} pl={60}>
                                                                                    {network.network === 'Arbitrum' && (
                                                                                      <Image src="/images/arbitrum,.png" alt="Arbitrum" boxSize={5} />
                                                                                    )}
                                                                                    {network.network === 'Ethereum' && (
                                                                                      <Image src="/images/eth.png" alt="ETH" boxSize={5} />
                                                                                    )}
                                                                                    {network.network === 'Base' && (
                                                                                      <Box w={5} h={5} bg="#1A71FF" borderRadius="50%" />
                                                                                    )}
                                                                                    <Text>{network.network}</Text>
                                                                                  </Flex>
                                                                                </Td>
                                                                                <Td h="45px">
                                                                                  <Flex align="center" gap={3} justify="flex-start" pl={10}>
                                                                                    {network.tokenAmount}
                                                                                  </Flex>
                                                                                </Td>
                                                                                <Td h="45px" textAlign="left">
                                                                                  <Flex justify="flex-start" pl={10}>{formatNumber(network.balance)}</Flex>
                                                                                </Td>
                                                                                <Td h="45px" textAlign="left">
                                                                                  <Flex align="center" gap={3} justify="flex-start" pl={10}>
                                                                                    {formatNumber(network.value)}
                                                                                    <Tooltip
                                                                                      placement="left"
                                                                                      hasArrow
                                                                                      arrowShadowColor="#8A63D2"
                                                                                      bg="#26214B"
                                                                                      color="white"
                                                                                      border="1px solid"
                                                                                      borderColor="#8A63D2"
                                                                                      borderRadius="8px"
                                                                                      px={2}
                                                                                      py={1.5}
                                                                                      label={
                                                                                        <Box>
                                                                                          <Text fontWeight="bold" fontSize="11px" mb={0.5}>Wallet Address</Text>
                                                                                          <Text fontSize="11px" textDecoration="underline">{network.walletAddress ?? `${formatNumber(network.value)} USD`}</Text>
                                                                                        </Box>
                                                                                      }
                                                                                    >
                                                                                      <Box as="span" cursor="help" display="inline-flex">
                                                                                        <Icon as={FiInfo} boxSize={4} color="#FFFFFF" _hover={{ color: 'gray.300' }} />
                                                                                      </Box>
                                                                                    </Tooltip>
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
                                          {/* Protocols within Position Type (Collateral, Yield Loops, Liquidity Pools) */}
                                          {hasProtocols && (
                                            <Tr>
                                              <Td colSpan={4} p={0} m={0} sx={{ padding: '0 !important', margin: '0 !important', borderBottom: 'none !important' }}>
                                                <Collapse in={isPositionExpanded} animateOpacity>
                                                  <Box py={0} bg="#110E22">
                                                    <Table variant="simple" size="sm">
                                                      <Thead>
                                                        <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                          <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="45px">
                                                            <Flex align="center" gap={2} justify="flex-start">
                                                              Protocol
                                                              <Icon as={FaSort} boxSize={4} color="white" />
                                                            </Flex>
                                                          </Th>
                                                          {(positionType.positionType === 'Liquidity Pools' || 
                                                            positionType.positionType === 'Collateral' ||
                                                            positionType.positionType === 'Yield Loops') && (
                                                            <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="45px">
                                                              <Flex align="center" gap={2}>
                                                                Market
                                                                <Icon as={FaSort} boxSize={4} color="white" />
                                                              </Flex>
                                                            </Th>
                                                          )}
                                                          <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                            <Flex align="center" gap={2} justify="flex-start">
                                                              Balance ({asset.token})
                                                              <Icon as={FaSort} boxSize={4} color="white" />
                                                            </Flex>
                                                          </Th>
                                                          {positionType.positionType === 'Liquidity Pools' && (
                                                            <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                              <Flex align="center" gap={2} justify="flex-start">
                                                                Percentage
                                                                <Icon as={FaSort} boxSize={4} color="white" />
                                                              </Flex>
                                                            </Th>
                                                          )}
                                                          {positionType.positionType === 'Collateral' && (
                                                            <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                              <Flex align="center" gap={2} justify="flex-start">
                                                                APY (%)
                                                                <Icon as={FaSort} boxSize={4} color="white" />
                                                              </Flex>
                                                            </Th>
                                                          )}
                                                          {positionType.positionType === 'Yield Loops' && (
                                                            <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                              <Flex align="center" gap={2} justify="flex-start">
                                                                Net APY
                                                                <Icon as={FaSort} boxSize={4} color="white" />
                                                              </Flex>
                                                            </Th>
                                                          )}
                                                          <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                            <Flex align="center" gap={2} justify="flex-start">
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
                                                            <React.Fragment key={protocolKey}>
                                                              <Tr
                                                                cursor={hasTokens || hasPoolPairs || hasWalletAddresses ? 'pointer' : 'default'}
                                                                onClick={() => (hasTokens || hasPoolPairs || hasWalletAddresses) && toggleProtocol(protocolKey)}
                                                                _hover={hasTokens || hasPoolPairs || hasWalletAddresses ? { bg: '#2A2641' } : {}}
                                                                borderBottom="1px solid"
                                                                borderColor="#2A2A35"
                                                              >
                                                                <Td h="45px">
                                                                  <Flex align="center" gap={2}>
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
                                                                {protocol.market && <Td h="45px">{protocol.market}</Td>}
                                                                <Td h="45px" isNumeric>{formatNumber(protocol.balance)}</Td>
                                                                {protocol.percentage && <Td h="45px" isNumeric>{protocol.percentage}%</Td>}
                                                                {protocol.apy && (
                                                                  <Td h="45px" isNumeric>
                                                                    <Flex align="center" gap={1}>
                                                                      {protocol.apy}%
                                                                      <Icon as={FiInfo} boxSize={3} color="gray.400" />
                                                                    </Flex>
                                                                  </Td>
                                                                )}
                                                                {protocol.netApy && (
                                                                  <Td h="45px" isNumeric>
                                                                    <Flex align="center" gap={1}>
                                                                      <Text color="#3EDD87">{protocol.netApy}%</Text>
                                                                    </Flex>
                                                                  </Td>
                                                                )}
                                                                <Td h="45px" isNumeric fontWeight="600">
                                                                  {formatNumber(protocol.value)} USD
                                                                </Td>
                                                              </Tr>
                                                              {/* Wallet Addresses within Protocol (Yield Loops) */}
                                                              {hasWalletAddresses && (
                                                                <Tr>
                                                                  <Td colSpan={positionType.positionType === 'Yield Loops' ? 5 : 5} p={0} m={0} sx={{ padding: '0 !important', margin: '0 !important', borderBottom: 'none !important' }}>
                                                                    <Collapse in={isProtocolExpanded} animateOpacity>
                                                                      <Box py={0} bg="#110E22">
                                                                        <Table variant="simple" size="sm">
                                                                          <Thead>
                                                                            <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="45px">
                                                                                <Flex align="center" gap={2} justify="flex-start">
                                                                                  Wallet Address
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                <Flex align="center" gap={2} justify="flex-start">
                                                                                  Balance ({asset.token})
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                <Flex align="center" gap={2} justify="flex-start">
                                                                                  Net APY
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                <Flex align="center" gap={2} justify="flex-start">
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
                                                                                <React.Fragment key={walletKey}>
                                                                                  <Tr
                                                                                    cursor={hasDetails ? 'pointer' : 'default'}
                                                                                    onClick={() => hasDetails && toggleWalletAddress(walletKey)}
                                                                                    _hover={hasDetails ? { bg: '#2A2641' } : {}}
                                                                                    borderBottom="1px solid"
                                                                                    borderColor="#2A2A35"
                                                                                  >
                                                                                    <Td h="45px">
                                                                                      <Flex align="center" gap={2}>
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
                                                                                    <Td h="45px" isNumeric>{formatNumber(wallet.balance)}</Td>
                                                                                    <Td h="45px" isNumeric>
                                                                                      <Text color="#3EDD87">{wallet.netApy}%</Text>
                                                                                    </Td>
                                                                                    <Td h="45px" isNumeric fontWeight="600">
                                                                                      {formatNumber(wallet.value)} USD
                                                                                    </Td>
                                                                                  </Tr>
                                                                                  {hasDetails && wallet.details && (
                                                                                    <Tr>
                                                                                      <Td h="45px" colSpan={4} p={0}>
                                                                                        <Collapse in={isWalletExpanded} animateOpacity>
                                                                                          <Box pr={4} py={4} bg="#110E22">
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
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="45px">
                                                                                                      <Flex align="center" gap={2} justify="flex-start">
                                                                                                        Token
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="45px">
                                                                                                      <Flex align="center" gap={2}>
                                                                                                        Token Amount
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                                      <Flex align="center" gap={2} justify="flex-start">
                                                                                                        Balance ({asset.token})
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                                      <Flex align="center" gap={2} justify="flex-start">
                                                                                                        Supplied APY
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                                      <Flex align="center" gap={2} justify="flex-start">
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
                                                                                                      <Td h="45px">
                                                                                                        <Flex align="center" gap={2}>
                                                                                                          {(token.token === 'weETH' || token.token === 'wstETH') && (
                                                                                                            <Text fontSize="14px" fontWeight="bold">
                                                                                                              {token.token}
                                                                                                            </Text>
                                                                                                          )}
                                                                                                          {token.token === 'ETH' && (
                                                                                                            <Image src="/images/eth.png" alt="ETH" boxSize={5} />
                                                                                                          )}
                                                                                                          {token.token === 'WETH' && (
                                                                                                            <Image src="/images/WETH.png" alt="WETH" boxSize={5} />
                                                                                                          )}
                                                                                                          <Text>{token.token}</Text>
                                                                                                          <Icon as={FiInfo} boxSize={3} color="gray.400" />
                                                                                                        </Flex>
                                                                                                      </Td>
                                                                                                      <Td h="45px">{token.tokenAmount}</Td>
                                                                                                      <Td h="45px" isNumeric fontWeight="bold">
                                                                                                        {formatNumber(token.balance)}
                                                                                                      </Td>
                                                                                                      <Td h="45px" isNumeric>
                                                                                                        <Text color="#3EDD87" fontWeight="bold">
                                                                                                          {token.apy}%
                                                                                                        </Text>
                                                                                                      </Td>
                                                                                                      <Td h="45px" isNumeric fontWeight="bold">
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
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="45px">
                                                                                                      <Flex align="center" gap={2} justify="flex-start">
                                                                                                        Token
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="45px">
                                                                                                      <Flex align="center" gap={2}>
                                                                                                        Token Amount
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                                      <Flex align="center" gap={2} justify="flex-start">
                                                                                                        Balance ({asset.token})
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                                      <Flex align="center" gap={2} justify="flex-start">
                                                                                                        Borrowed APY
                                                                                                        <Icon as={FaSort} boxSize={4} color="white" />
                                                                                                      </Flex>
                                                                                                    </Th>
                                                                                                    <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                                      <Flex align="center" gap={2} justify="flex-start">
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
                                                                                                      <Td h="45px">
                                                                                                        <Flex align="center" gap={2}>
                                                                                                          {token.token === 'ETH' && (
                                                                                                            <Image src="/images/eth.png" alt="ETH" boxSize={5} />
                                                                                                          )}
                                                                                                          {token.token === 'WETH' && (
                                                                                                            <Image src="/images/WETH.png" alt="WETH" boxSize={5} />
                                                                                                          )}
                                                                                                          <Text>{token.token}</Text>
                                                                                                        </Flex>
                                                                                                      </Td>
                                                                                                      <Td h="45px">{token.tokenAmount}</Td>
                                                                                                      <Td h="45px" isNumeric fontWeight="bold">
                                                                                                        {formatNumber(token.balance)}
                                                                                                      </Td>
                                                                                                      <Td h="45px" isNumeric>
                                                                                                        <Text color="#FFC063" fontWeight="bold">
                                                                                                          {token.apy}%
                                                                                                        </Text>
                                                                                                      </Td>
                                                                                                      <Td h="45px" isNumeric fontWeight="bold">
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
                                                              {/* Tokens within Protocol (Collateral) */}
                                                              {hasTokens && (
                                                                <Tr>
                                                                  <Td colSpan={5} p={0} m={0} sx={{ padding: '0 !important', margin: '0 !important', borderBottom: 'none !important' }}>
                                                                    <Collapse in={isProtocolExpanded} animateOpacity>
                                                                      <Box py={0} bg="#110E22">
                                                                        <Table variant="simple" size="sm">
                                                                          <Thead>
                                                                            <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="45px">
                                                                                <Flex align="center" gap={2} justify="flex-start">
                                                                                  Token
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="45px">
                                                                                <Flex align="center" gap={2}>
                                                                                  Token Amount
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                <Flex align="center" gap={2} justify="flex-start">
                                                                                  Balance ({asset.token})
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                <Flex align="center" gap={2} justify="flex-start">
                                                                                  APY (%)
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                <Flex align="center" gap={2} justify="flex-start">
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
                                                                                <Td h="45px">
                                                                                  <Flex align="center" gap={2}>
                                                                                    {token.token === 'ETH' && <Image src="/images/eth.png" alt="ETH" boxSize={5} />}
                                                                                    {token.token === 'BTC' && <Image src="/images/btc.png" alt="BTC" boxSize={5} />}
                                                                                    {token.token === 'WETH' && <Image src="/images/WETH.png" alt="WETH" boxSize={5} />}
                                                                                    {token.token === 'SOL' && <Image src="/images/sol.png" alt="SOL" boxSize={5} />}
                                                                                    {token.token === 'USD' && <Image src="/images/usd.png" alt="USD" boxSize={5} />}
                                                                                    <Text fontSize="14px" fontWeight="bold">{token.token}</Text>
                                                                                  </Flex>
                                                                                </Td>
                                                                                <Td h="45px">{token.tokenAmount}</Td>
                                                                                <Td h="45px" isNumeric>{formatNumber(token.balance)}</Td>
                                                                                <Td h="45px" isNumeric>
                                                                                  <Flex align="center" gap={1}>
                                                                                    {token.apy}%
                                                                                    <Icon as={FiInfo} boxSize={3} color="gray.400" />
                                                                                  </Flex>
                                                                                </Td>
                                                                                <Td h="45px" isNumeric fontWeight="600">
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
                                                                      <Box py={0} bg="#110E22">
                                                                        <Table variant="simple" size="sm">
                                                                          <Thead>
                                                                            <Tr borderBottom="1px solid" borderColor="#2A2A35">
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="45px">
                                                                                <Flex align="center" gap={2} justify="flex-start">
                                                                                  Token
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="45px">
                                                                                <Flex align="center" gap={2}>
                                                                                  Pool Pair
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="45px">
                                                                                <Flex align="center" gap={2}>
                                                                                  Token Amount
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                <Flex align="center" gap={2} justify="flex-start">
                                                                                  Balance ({asset.token})
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                <Flex align="center" gap={2} justify="flex-start">
                                                                                  APY (%)
                                                                                  <Icon as={FaSort} boxSize={4} color="white" />
                                                                                </Flex>
                                                                              </Th>
                                                                              <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" isNumeric h="45px">
                                                                                <Flex align="center" gap={2} justify="flex-start">
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
                                                                                <Td h="45px">
                                                                                  <Flex align="center" gap={2}>
                                                                                    {poolPair.token === 'ETH' && <Image src="/images/eth.png" alt="ETH" boxSize={5} />}
                                                                                    {poolPair.token === 'WETH' && <Image src="/images/WETH.png" alt="WETH" boxSize={5} />}
                                                                                    {(poolPair.token === 'wstETH' || poolPair.token === 'weETH') && (
                                                                                      <Text fontSize="14px" fontWeight="bold">{poolPair.token}</Text>
                                                                                    )}
                                                                                    <Text>{poolPair.token}</Text>
                                                                                  </Flex>
                                                                                </Td>
                                                                                <Td h="45px">{poolPair.poolPair}</Td>
                                                                                <Td h="45px">{poolPair.tokenAmount}</Td>
                                                                                <Td h="45px" isNumeric>{formatNumber(poolPair.balance)}</Td>
                                                                                <Td h="45px" isNumeric>
                                                                                  <Flex align="center" gap={1}>
                                                                                    {poolPair.apy}%
                                                                                    <Icon as={FiInfo} boxSize={3} color="gray.400" />
                                                                                  </Flex>
                                                                                </Td>
                                                                                <Td h="45px" isNumeric fontWeight="600">
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
                    </React.Fragment>
                  )
                })}
                <Tr borderTop="1px solid" borderColor="#2A2A35">
                  <Td h="45px" fontWeight="bold">
                    <Flex pl={28}>TOTAL</Flex>
                  </Td>
                  <Td h="45px"></Td>
                  <Td h="45px"></Td>
                  <Td h="45px" fontWeight="bold" textAlign="left" pr={10}>
                    <Flex justify="flex-start" pr={10}>40,123,456 USD</Flex>
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
          <Box overflowX="auto" pr={4}>
            <Table variant="simple" size="sm" width="100%">
              <Thead>
                <Tr borderBottom="1px solid" borderColor="#2A2A35">
                  <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" textAlign="left" h="45px">
                    <Flex align="center" gap={2} justify="flex-start" pl={10}>
                      Token
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                  <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="45px">
                    <Flex align="center" gap={2} justify="flex-start">
                      Balance
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                  <Th color="white" fontWeight="normal" fontSize="14px" backgroundColor="#1C1833" textTransform="none" h="45px">
                    <Flex align="center" gap={2} justify="flex-start" pr={10}>
                      Value (USD)
                      <Icon as={FaSort} boxSize={4} color="white" />
                    </Flex>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {debts.map((debt) => {
                  const isExpanded = expandedDebts.has(debt.token)
                  const debtIconSrc = getTokenIconSrc(debt.token)

                  return (
                    <React.Fragment key={debt.token}>
                      <Tr
                        cursor="pointer"
                        onClick={() => toggleDebt(debt.token)}
                        _hover={{ bg: '#2A2641' }}
                        borderBottom="1px solid"
                        borderColor="#2A2A35"
                      >
                        <Td h="45px">
                          <Flex align="center" gap={2} pl={10}>
                            <Icon
                              as={isExpanded ? FiChevronDown : FiChevronRight}
                              boxSize={4}
                              color="gray.400"
                            />
                            {debtIconSrc && (
                              <Image src={debtIconSrc} alt={debt.token} boxSize={5} />
                            )}
                            {!debtIconSrc && debt.token === 'USDC' && (
                              <Text fontSize="18px" fontWeight="bold" color="#2268D1">
                                $USDC
                              </Text>
                            )}
                            <Text fontWeight="500">{debt.token}</Text>
                          </Flex>
                        </Td>
                        <Td h="45px">
                          <Flex justify="flex-start">{formatNumber(debt.balance)}</Flex>
                        </Td>
                        <Td h="45px" fontWeight="600">
                          <Flex justify="flex-start" pr={10}>
                            {formatNumber(debt.value)} USD
                          </Flex>
                        </Td>
                      </Tr>
                      {isExpanded && (
                        <Tr>
                          <Td h="45px" colSpan={3} p={4} color="gray.400" fontSize="14px">
                            {/* Additional debt details can be added here */}
                            <Text>Debt details for {debt.token}...</Text>
                          </Td>
                        </Tr>
                      )}
                    </React.Fragment>
                  )
                })}
                <Tr borderTop="1px solid" borderColor="#2A2A35">
                  <Td h="45px" fontWeight="bold">
                    <Flex pl={10}>TOTAL</Flex>
                  </Td>
                  <Td h="45px"></Td>
                  <Td h="45px" fontWeight="bold">
                    <Flex justify="flex-start" pr={10}>98,934 USD</Flex>
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
