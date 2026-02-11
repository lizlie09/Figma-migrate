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
import { FaEthereum } from 'react-icons/fa';

export default function DeFiLoans() {
  const [isDeFiExpanded, setIsDeFiExpanded] = useState(false);
  const [expandedDebts, setExpandedDebts] = useState<Set<string>>(new Set());

  const debts = [
    { token: 'USDC', balance: '10500', value: '11,200' },
    { token: 'ETH', balance: '3.000', value: '87,734' },
  ];

  const toggleDebt = (token: string) => {
    const newExpanded = new Set(expandedDebts);
    if (newExpanded.has(token)) {
      newExpanded.delete(token);
    } else {
      newExpanded.add(token);
    }
    setExpandedDebts(newExpanded);
  };

  const formatNumber = (num: string) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Box bg="#110E22" borderRadius="12px" p={{ base: 4, md: 6 }}>
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
        >
          <Icon
            as={isDeFiExpanded ? FiChevronUp : FiChevronDown}
            boxSize={4}
            color="white"
          />
        </Flex>
      </Flex>

      <Box mt={4} fontSize={{ base: '14px', md: '18px' }} mb={4}>
        <Flex gap={4} flexWrap="wrap" mb={2}>
          <Text color="gray.400">
            Total Collateral:{' '}
            <Text as="span" color="#FFC063" fontWeight="600">
              62,315 USD
            </Text>
          </Text>
          <Text color="gray.400" display={{ base: 'none', md: 'block' }}>
            |
          </Text>
          <Text color="gray.400">
            Total Debt:{' '}
            <Text as="span" color="#F46565" fontWeight="600">
              5,147,258.69 USD
            </Text>
          </Text>
          <Text color="gray.400" display={{ base: 'none', md: 'block' }}>
            |
          </Text>
          <Text color="gray.400">
            Total Positions:{' '}
            <Text as="span" color="white" fontWeight="600">
              3
            </Text>
          </Text>
        </Flex>
        <Text color="gray.400">
          Total Liquidation Threshold:{' '}
          <Text as="span" color="#7D67FF" fontWeight="600">
            82.50%
          </Text>
        </Text>
      </Box>

      <Collapse in={isDeFiExpanded} animateOpacity>
        <Box overflowX="auto">
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th
                  color="gray.400"
                  fontWeight="normal"
                  fontSize="12px"
                  textTransform="none"
                >
                  Token
                </Th>
                <Th
                  color="gray.400"
                  fontWeight="normal"
                  fontSize="12px"
                  textTransform="none"
                  isNumeric
                >
                  Balance
                </Th>
                <Th
                  color="gray.400"
                  fontWeight="normal"
                  fontSize="12px"
                  textTransform="none"
                  isNumeric
                >
                  Value (USD)
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {debts.map((debt) => {
                const isExpanded = expandedDebts.has(debt.token);

                return (
                  <React.Fragment key={debt.token}>
                    <Tr
                      cursor="pointer"
                      onClick={() => toggleDebt(debt.token)}
                      _hover={{ bg: '#2A2641' }}
                    >
                      <Td>
                        <Flex align="center" gap={2}>
                          <Icon
                            as={isExpanded ? FiChevronDown : FiChevronRight}
                            boxSize={4}
                            color="white"
                          />
                          {debt.token === 'ETH' && (
                            <Icon as={FaEthereum} boxSize={5} color="#2268D1" />
                          )}
                          {debt.token === 'USDC' && (
                            <Image
                              src="/images/usdc.png"
                              alt="USDC"
                              boxSize={5}
                            />
                          )}
                          <Text fontWeight="500">{debt.token}</Text>
                        </Flex>
                      </Td>
                      <Td isNumeric>{formatNumber(debt.balance)}</Td>
                      <Td isNumeric fontWeight="600">
                        {formatNumber(debt.value)} USD
                      </Td>
                    </Tr>
                    {isExpanded && (
                      <Tr>
                        <Td colSpan={3} p={4} color="gray.400" fontSize="14px">
                          {/* Additional debt details can be added here */}
                          <Text>Debt details for {debt.token}...</Text>
                        </Td>
                      </Tr>
                    )}
                  </React.Fragment>
                );
              })}
              <Tr borderTop="1px solid" borderColor="gray.700">
                <Td fontWeight="bold">TOTAL</Td>
                <Td></Td>
                <Td isNumeric fontWeight="bold">
                  98,934 USD
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Collapse>
    </Box>
  );
}
