export interface NetworkData {
  network: string;
  tokenAmount: string;
  balance: string;
  value: string;
  walletAddress?: string;
}

export interface SuppliedBorrowedToken {
  token: string;
  tokenAmount: string;
  balance: string;
  apy: string;
  value: string;
}

export interface WalletDetails {
  currentPrice: string;
  liquidationPrice: string;
  healthFactor: string;
  supplied: SuppliedBorrowedToken[];
  borrowed: SuppliedBorrowedToken[];
}

export interface WalletAddressData {
  address: string;
  balance: string;
  netApy: string;
  value: string;
  details?: WalletDetails;
}

export interface ProtocolData {
  protocol: string;
  market?: string;
  balance: string;
  percentage?: string;
  apy?: string;
  netApy?: string;
  value: string;
  tokens?: TokenData[];
  poolPairs?: PoolPairData[];
  walletAddresses?: WalletAddressData[];
}

export interface PoolPairData {
  token: string;
  poolPair: string;
  tokenAmount: string;
  balance: string;
  apy: string;
  value: string;
}

export interface TokenData {
  token: string;
  tokenAmount?: string;
  balance: string;
  apy?: string;
  value: string;
  networks?: NetworkData[];
}

export interface PositionTypeData {
  positionType: string;
  balance: string;
  percentage: string;
  value: string;
  tokens?: TokenData[];
  protocols?: ProtocolData[];
}

export interface AssetData {
  token: string;
  balance: string;
  percentage: string;
  value: string;
  positionTypes?: PositionTypeData[];
}
