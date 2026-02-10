import type { AssetData } from '../types/portfolio'

export const assets: AssetData[] = [
  {
    token: 'BTC',
    balance: '28.89990',
    percentage: '84.15',
    value: '3,655,366',
    positionTypes: [
      {
        positionType: 'Staking & Wrapped',
        balance: '7.66565',
        percentage: '22.22',
        value: '967,904.95',
        tokens: [
          { token: 'cbBTC', tokenAmount: '1.90388 cbBTC', balance: '1.90388', value: '240,393.70' },
          { token: 'wBTC', tokenAmount: '2.00427 wBTC', balance: '2.00427', value: '253,046.00', networks: [{ network: 'Ethereum', tokenAmount: '2.00427 WBTC', balance: '2.00427', value: '253,046.00' }] },
          { token: 'LBTC', tokenAmount: '3.15374 LBTC', balance: '3.16075', apy: '0.41', value: '240,393.70', networks: [{ network: 'Ethereum', tokenAmount: '1.73960 LBTC', balance: '1.74471', value: '132,207.40' }, { network: 'Arbitrum', tokenAmount: '1.41414 LBTC', balance: '1.41604', value: '108,186.30' }] },
          { token: 'eBTC', tokenAmount: '1.85362 eBTC', balance: '1.85699', apy: '0.40', value: '234,071.55', networks: [{ network: 'Ethereum', tokenAmount: '1.85362 eBTC', balance: '1.85699', value: '234,071.55' }] },
        ],
      },
      {
        positionType: 'Wallet Balance',
        balance: '7.50831',
        percentage: '36.11',
        value: '948,922.50',
        tokens: [
          { token: 'BTC', balance: '3.50756', value: '442,830.50', networks: [{ network: 'Ethereum', tokenAmount: '3.50756 BTC', balance: '3.50756', value: '442,830.50' }] },
          { token: 'BTC', balance: '2.24652', value: '284,676.75', networks: [{ network: 'Arbitrum', tokenAmount: '2.24652 BTC', balance: '2.24652', value: '284,676.75' }] },
          { token: 'BTC', balance: '1.75423', value: '221,415.25', networks: [{ network: 'Base', tokenAmount: '1.75423 BTC', balance: '1.75423', value: '221,415.25' }] },
        ],
      },
      {
        positionType: 'Collateral',
        balance: '4.70699',
        percentage: '22.22',
        value: '594,658.10',
        protocols: [
          { protocol: 'Aave v3', market: 'Ethereum Core', balance: '2.80357', apy: '3.10', value: '354,264', tokens: [{ token: 'cbBTC', tokenAmount: '0.95000 cbBTC', balance: '0.95000', apy: '3.40', value: '120,000' }, { token: 'WBTC', tokenAmount: '0.75000 WBTC', balance: '0.75000', apy: '2.80', value: '95,000' }, { token: 'tBTC', tokenAmount: '0.63000 tBTC', balance: '0.63000', apy: '3.10', value: '80,000' }, { token: 'LBTC', tokenAmount: '0.47357 LBTC', balance: '0.47357', apy: '3.60', value: '59,264' }] },
          { protocol: 'Compound', market: 'Ethereum Core', balance: '1.90342', apy: '2.85', value: '240,393.70', tokens: [{ token: 'cbBTC', tokenAmount: '1.20000 cbBTC', balance: '1.20000', apy: '3.30', value: '160,803' }, { token: 'WBTC', tokenAmount: '0.45000 WBTC', balance: '0.45000', apy: '2.60', value: '56,850' }, { token: 'tBTC', tokenAmount: '0.18000 tBTC', balance: '0.18000', apy: '3.00', value: '22,740' }] },
        ],
      },
      {
        positionType: 'Liquidity Pools',
        balance: '9.01895',
        percentage: '19.44',
        value: '1,139,206.00',
        protocols: [
          { protocol: 'Uniswap', market: 'Ethereum', balance: '5.7610', percentage: '12.41', value: '727,506.25', poolPairs: [{ token: 'WBTC', poolPair: 'WBTC/ETH', tokenAmount: '2.00427 WBTC', balance: '2.00427', apy: '7.85', value: '253,046.00' }, { token: 'WBTC', poolPair: 'WBTC/LBTC', tokenAmount: '1.85319 WBTC', balance: '1.85319', apy: '6.40', value: '234,066.55' }, { token: 'LBTC', poolPair: 'LBTC/WBTC', tokenAmount: '1.90292 LBTC', balance: '1.90388', apy: '6.40', value: '240,393.70' }] },
          { protocol: 'Curve', market: 'Ethereum', balance: '3.25761', percentage: '7.02', value: '411,699.75', poolPairs: [{ token: 'WBTC', poolPair: 'WBTC/cbBTC', tokenAmount: '1.20150 WBTC', balance: '1.20150', apy: '5.90', value: '151,898.25' }, { token: 'LBTC', poolPair: 'LBTC/cbBTC', tokenAmount: '1.05611 LBTC', balance: '1.05611', apy: '5.40', value: '133,873.75' }, { token: 'cbBTC', poolPair: 'cbBTC/WBTC', tokenAmount: '1.00000 cbBTC', balance: '1.00000', apy: '6.10', value: '125,927.75' }] },
        ],
      },
      {
        positionType: 'Yield Loops',
        balance: '4.7823',
        percentage: '9.68',
        value: '604,044',
        protocols: [
          { protocol: 'Aave v3', market: 'Bitcoin Core', balance: '2.8912', netApy: '6.20', value: '365,044', walletAddresses: [{ address: '0xb5C9...Adf4', balance: '2.8912', netApy: '6.20', value: '365,044' }] },
          { protocol: 'Compound', market: 'Ethereum Core', balance: '1.8911', netApy: '5.80', value: '238,000', walletAddresses: [{ address: '0xa2D8...Bc3e', balance: '1.8911', netApy: '5.80', value: '238,000' }] },
        ],
      },
    ],
  },
  {
    token: 'ETH',
    balance: '137.4737',
    percentage: '13.77',
    value: '598,148',
    positionTypes: [
      {
        positionType: 'Wallet Balance',
        balance: '30.8414',
        percentage: '30.14',
        value: '134,127.19',
        tokens: [
          { token: 'ETH', balance: '18.5059', value: '80,514.88', networks: [{ network: 'Arbitrum', tokenAmount: '9.6847 ETH', balance: '9.6847', value: '42,136.84' }, { network: 'Ethereum', tokenAmount: '8.8206 ETH', balance: '8.8206', value: '38,378.43' }] },
          { token: 'WETH', balance: '12.3355', value: '53,612.30', networks: [{ network: 'Arbitrum', tokenAmount: '7.2150 WETH', balance: '7.2150', value: '31,353.20' }, { network: 'Ethereum', tokenAmount: '5.1205 WETH', balance: '5.1205', value: '22,259.10' }] },
        ],
      },
      {
        positionType: 'Staking',
        balance: '41.3207',
        percentage: '33.27',
        value: '179,785.62',
        tokens: [
          { token: 'wstETH', tokenAmount: '14.9220 wstETH', balance: '18.2321', apy: '2.50', value: '79,188.20', networks: [{ network: 'Ethereum', tokenAmount: '8.9532 wstETH', balance: '10.9474', value: '47,528.92' }, { network: 'Arbitrum', tokenAmount: '5.9688 wstETH', balance: '7.2847', value: '31,659.28' }] },
          { token: 'rETH', tokenAmount: '11.0382 rETH', balance: '12.7039', apy: '2.22', value: '55,257.70', networks: [{ network: 'Ethereum', tokenAmount: '8.0045 rETH', balance: '9.2063', value: '40,078.50' }, { network: 'Base', tokenAmount: '3.0337 rETH', balance: '3.4976', value: '15,179.20' }] },
          { token: 'weETH', tokenAmount: '9.6175 weETH', balance: '10.4201', apy: '3.00', value: '45,337.42', networks: [{ network: 'Ethereum', tokenAmount: '5.9184 weETH', balance: '6.4123', value: '27,899.92' }, { network: 'Arbitrum', tokenAmount: '3.6991 weETH', balance: '4.0078', value: '17,437.51' }] },
        ],
      },
      {
        positionType: 'Yield Loops',
        balance: '10.2139',
        percentage: '1.02',
        value: '47,999.64',
        protocols: [
          { protocol: 'Aave v3', market: 'Ethereum Core', balance: '6.1847', netApy: '7.40', value: '29,067', walletAddresses: [{ address: '0xb5C9...Adf4', balance: '6.1847', netApy: '7.40', value: '29,067', details: { currentPrice: '1.0000 ETH', liquidationPrice: '0.9217 ETH', healthFactor: '1.05', supplied: [{ token: 'weETH', tokenAmount: '462.62 weETH', balance: '502.85', apy: '4.20', value: '2,187,900' }], borrowed: [{ token: 'ETH', tokenAmount: '450.43 ETH', balance: '450.43', apy: '3.10', value: '1,959,821' }] } }] },
          { protocol: 'Aave v3', market: 'Arbitrum', balance: '4.0500', netApy: '7.60', value: '19,100', walletAddresses: [{ address: '0xb5C9...Adf4', balance: '4.0500', netApy: '7.60', value: '19,100', details: { currentPrice: '1.0000 ETH', liquidationPrice: '0.9079 ETH', healthFactor: '1.05', supplied: [{ token: 'wstETH', tokenAmount: '5.55 wstETH', balance: '5.02', apy: '3.80', value: '26,100' }], borrowed: [{ token: 'ETH', tokenAmount: '3.92 ETH', balance: '3.92', apy: '2.85', value: '20,400' }] } }] },
        ],
      },
      {
        positionType: 'Collateral',
        balance: '26.7509',
        percentage: '19.59',
        value: '116,389.68',
        protocols: [
          { protocol: 'Aave v3', market: 'Ethereum Core', balance: '14.4505', apy: '3.39', value: '62,894', tokens: [{ token: 'wstETH', tokenAmount: '3.1487 wstETH', balance: '5.1200', apy: '3.60', value: '22,279' }, { token: 'rETH', tokenAmount: '2.0974 rETH', balance: '3.4105', apy: '3.40', value: '14,844' }, { token: 'cbETH', tokenAmount: '1.9031 cbETH', balance: '3.0900', apy: '3.20', value: '13,455' }, { token: 'WETH', tokenAmount: '2.8013 WETH', balance: '2.8300', apy: '2.80', value: '12,315' }] },
          { protocol: 'Aave v3', market: 'Arbitrum', balance: '12.3004', apy: '3.22', value: '53,494', tokens: [{ token: 'weETH', tokenAmount: '2.9500 weETH', balance: '3.8500', apy: '3.80', value: '16,740' }, { token: 'wstETH', tokenAmount: '1.7200 wstETH', balance: '2.8500', apy: '3.60', value: '12,387' }, { token: 'MATIC', tokenAmount: '18,500 MATIC', balance: '1.9500', apy: '4.10', value: '8,475' }, { token: 'aETH', tokenAmount: '0.5400 aETH', balance: '0.5340', apy: '2.70', value: '2,348' }] },
        ],
      },
      {
        positionType: 'Liquidity Pools',
        balance: '38.5607',
        percentage: '17.00',
        value: '167,776.47',
        protocols: [
          { protocol: 'Uniswap', market: 'Ethereum', balance: '12.3004', percentage: '10.91', value: '107,731.63', poolPairs: [{ token: 'ETH', poolPair: 'ETH/WBTC', tokenAmount: '6.5003 ETH', balance: '6.5003', apy: '10.20', value: '28,282.12' }, { token: 'wstETH', poolPair: 'wstETH/weETH', tokenAmount: '2.1287 wstETH', balance: '5.2003', apy: '6.00', value: '11,313.05' }, { token: 'weETH', poolPair: 'wstETH/weETH', tokenAmount: '2.1046 weETH', balance: '4.5604', apy: '7.15', value: '11,313.06' }, { token: 'ETH', poolPair: 'ETH/weETH', tokenAmount: '2.1252 ETH', balance: '2.1252', apy: '7.15', value: '9,246.31' }, { token: 'weETH', poolPair: 'ETH/weETH', tokenAmount: '1.9615 weETH', balance: '2.1252', apy: '7.15', value: '9,246.30' }, { token: 'ETH', poolPair: 'DAI/ETH', tokenAmount: '0.3498 ETH', balance: '0.3498', apy: '5.40', value: '1,522.02' }] },
          { protocol: 'Curve', market: 'Ethereum', balance: '13.8004', percentage: '6.09', value: '60,044.34', poolPairs: [{ token: 'wstETH', poolPair: 'wstETH/ETH', tokenAmount: '3.1500 wstETH', balance: '3.5200', apy: '4.35', value: '23,120.00' }, { token: 'ETH', poolPair: 'rETH/ETH', tokenAmount: '1.6200 rETH', balance: '2.0200', apy: '5.60', value: '13,275.00' }, { token: 'weETH', poolPair: 'cbETH/ETH', tokenAmount: '1.5800 cbETH', balance: '1.9104', apy: '5.20', value: '12,555.00' }, { token: 'weETH', poolPair: 'weETH/ETH', tokenAmount: '1.3400 weETH', balance: '1.6900', apy: '4.90', value: '11,094.34' }] },
        ],
      },
    ],
  },
  { token: 'SOL', balance: '1,000', percentage: '2.08', value: '90,275' },
  { token: 'USD', balance: '35,779,667', percentage: '89.17', value: '35,779,667' },
]

export const debts = [
  { token: 'USDC', balance: '10500', value: '11,200' },
  { token: 'ETH', balance: '3.000', value: '87,734' },
]
