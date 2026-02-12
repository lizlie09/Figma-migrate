import { Box, Flex, Icon, Image, Td, Text, Tr, Collapse } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';

import { formatNumber, getTokenIconSrc } from './portfolioSectionUtils';
import type {
  SuppliedBorrowedToken,
  WalletAddressData,
  WalletDetails,
} from '../types/portfolio';

interface WalletDetailsRowProps {
  wallet: WalletAddressData & { details: WalletDetails };
  walletKey: string;
  isWalletExpanded: boolean;
  assetToken: string;
}

export default function WalletDetailsRow({
  wallet,
  walletKey,
  isWalletExpanded,
  assetToken,
}: WalletDetailsRowProps) {
  return (
    <Tr>
      <Td h="45px" colSpan={4} p={0}>
        <Collapse in={isWalletExpanded} animateOpacity>
          <Box pr={4} py={4} bg="#11C1833" maxW="1000px" w="100%">
            {/* Price Info Box */}
            <Box bg="#222038" borderRadius="12px" p={2} mb={4} border="1px solid" borderColor="#4A4360">
              <Flex w="100%" justify="space-between" gap={6}>
                <Box flex="1" minW={0} textAlign="left">
                  <Text color="gray.400" fontSize="14px" mb={1}>
                    Current Price:
                  </Text>
                  <Text fontWeight="600">{wallet.details.currentPrice}</Text>
                </Box>

                <Box flex="1" minW={0} textAlign="center">
                  <Text color="gray.400" fontSize="14px" mb={1}>
                    Liquidation Price:
                  </Text>
                  <Text fontWeight="600">{wallet.details.liquidationPrice}</Text>
                </Box>

                <Box flex="1" minW={0} textAlign="right">
                  <Text color="gray.400" fontSize="14px" mb={1}>
                    Health Factor:
                  </Text>
                  <Box display="inline-block" mt={0.5}>
                    <Box
                      bg="#E05A5A"
                      borderRadius="4px"
                      px={2}
                      py={1}
                    >
                      <Text
                        fontWeight="bold"
                        color="white"
                        fontSize="12px"
                      >
                        {wallet.details.healthFactor}
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Box>

            {/* Supplied & Borrowed Container */}
            <Box
              border="1px solid"
              borderColor="#4A4360"
              borderRadius="10px"
              p={4}
              bg="#222038"
            >
              {/* Supplied Section */}
              <Box mb={4}>
                <Text fontWeight="bold" mb={3} fontSize="14px">
                  Supplied
                </Text>
                <Box>
                  {wallet.details.supplied.map((token: SuppliedBorrowedToken, idx: number) => {
                  const tokenIconSrc = getTokenIconSrc(token.token);
                  return (
                    <Box
                      key={`${walletKey}-supplied-${idx}`}
                      mb={idx < wallet.details.supplied.length - 1 ? 3 : 0}
                    >
                      <Flex w="100%" justify="space-between" gap={4}>
                        <Box flex="1" minW={0}>
                          <Text color="gray.400" fontSize="12px" mb={1}>
                            Token
                          </Text>
                          <Flex align="center" gap={2}>
                            {tokenIconSrc && (
                              <Image
                                src={tokenIconSrc}
                                alt={token.token}
                                boxSize={5}
                              />
                            )}
                            <Text fontWeight="600">{token.token}</Text>
                            <Icon
                              as={FiInfo}
                              boxSize={4}
                              color="#FFFFFF"
                              _hover={{ color: 'gray.300' }}
                            />
                          </Flex>
                        </Box>

                        <Box flex="1" minW={0} textAlign="center">
                          <Text color="gray.400" fontSize="12px" mb={1}>
                            Token Amount
                          </Text>
                          <Text fontWeight="600">{token.tokenAmount}</Text>
                        </Box>

                        <Box flex="1" minW={0} textAlign="center">
                          <Text color="gray.400" fontSize="12px" mb={1}>
                            Balance ({assetToken})
                          </Text>
                          <Text fontWeight="bold">{formatNumber(token.balance)}</Text>
                        </Box>

                        <Box flex="1" minW={0} textAlign="center">
                          <Text color="gray.400" fontSize="12px" mb={1}>
                            Supplied APY
                          </Text>
                          <Text color="#4CAF50" fontWeight="bold">
                            {token.apy}%
                          </Text>
                        </Box>

                        <Box flex="1" minW={0} textAlign="right">
                          <Text color="gray.400" fontSize="12px" mb={1}>
                            Value (USD)
                          </Text>
                          <Text fontWeight="bold">{formatNumber(token.value)} USD</Text>
                        </Box>
                      </Flex>
                    </Box>
                  );
                })}
              </Box>
              </Box>

              {/* Borrowed Section */}
              <Box>
                <Text fontWeight="bold" mb={3} fontSize="14px">
                  Borrowed
                </Text>
                <Box>
                  {wallet.details.borrowed.map((token: SuppliedBorrowedToken, idx: number) => {
                  const tokenIconSrc = getTokenIconSrc(token.token);
                  return (
                    <Box
                      key={`${walletKey}-borrowed-${idx}`}
                      mb={idx < wallet.details.borrowed.length - 1 ? 3 : 0}
                    >
                      <Flex w="100%" justify="space-between" gap={4}>
                        <Box flex="1" minW={0}>
                          <Text color="gray.400" fontSize="12px" mb={1}>
                            Token
                          </Text>
                          <Flex align="center" gap={2}>
                            {tokenIconSrc && (
                              <Image
                                src={tokenIconSrc}
                                alt={token.token}
                                boxSize={5}
                              />
                            )}
                            <Text fontWeight="600">{token.token}</Text>
                          </Flex>
                        </Box>

                        <Box flex="1" minW={0} textAlign="center">
                          <Text color="gray.400" fontSize="12px" mb={1}>
                            Token Amount
                          </Text>
                          <Text fontWeight="600">{token.tokenAmount}</Text>
                        </Box>

                        <Box flex="1" minW={0} textAlign="center">
                          <Text color="gray.400" fontSize="12px" mb={1}>
                            Balance ({assetToken})
                          </Text>
                          <Text fontWeight="bold">{formatNumber(token.balance)}</Text>
                        </Box>

                        <Box flex="1" minW={0} textAlign="center">
                          <Text color="gray.400" fontSize="12px" mb={1}>
                            Borrowed APY
                          </Text>
                          <Text color="#FF9800" fontWeight="bold">
                            {token.apy}%
                          </Text>
                        </Box>

                        <Box flex="1" minW={0} textAlign="right">
                          <Text color="gray.400" fontSize="12px" mb={1}>
                            Value (USD)
                          </Text>
                          <Text fontWeight="bold">{formatNumber(token.value)} USD</Text>
                        </Box>
                      </Flex>
                    </Box>
                  );
                })}
              </Box>
              </Box>
            </Box>
          </Box>
        </Collapse>
      </Td>
    </Tr>
  );
}

