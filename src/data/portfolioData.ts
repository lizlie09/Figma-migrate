import type { AssetData } from '../types/portfolio';

export const assets: AssetData[] = [
  {
    token: 'BTC',
    balance: '28.89990',
    percentage: '84.15',
    value: '3,655,366',
    positionTypes: [
      {
        positionType: 'Staking & Wrapped',
        balance: '7.6656',
        percentage: '22.22',
        value: '967,904',
        tokens: [
          {
            token: 'cbBTC',
            tokenAmount: '1.9038 cbBTC',
            balance: '1.9038',
            apy: 'No APY',
            value: '240,393',
            networks: [
              {
                network: 'Ethereum',
                tokenAmount: '1.9038 cbBTC',
                balance: '1.9038',
                value: '240,393',
              },
            ],
          },
          {
            token: 'WBTC',
            tokenAmount: '2.0042 WBTC',
            balance: '2.0042',
            apy: 'No APY',
            value: '253,046',
            networks: [
              {
                network: 'Ethereum',
                tokenAmount: '2.0042 WBTC',
                balance: '2.0042',
                value: '253,046',
              },
            ],
          },
          {
            token: 'LBTC',
            tokenAmount: '3.1537 LBTC',
            balance: '3.1607',
            apy: '0.41',
            value: '240,393',
            networks: [
              {
                network: 'Ethereum',
                tokenAmount: '1.7396 LBTC',
                balance: '1.7447',
                value: '132,207',
              },
              {
                network: 'Arbitrum',
                tokenAmount: '1.4141 LBTC',
                balance: '1.4160',
                value: '108,186',
              },
            ],
          },
          {
            token: 'eBTC',
            tokenAmount: '1.8536 eBTC',
            balance: '1.8569',
            apy: '0.40',
            value: '234,071',
            networks: [
              {
                network: 'Ethereum',
                tokenAmount: '1.85362 eBTC',
                balance: '1.8569',
                value: '234,071',
              },
            ],
          },
        ],
      },
      {
        positionType: 'Wallet Balance',
        balance: '7.5083',
        percentage: '36.11',
        value: '948,922',
        tokens: [
          {
            token: 'BTC',
            balance: '3.5075',
            value: '442,830',
            networks: [
              {
                network: 'Ethereum',
                tokenAmount: '3.5075 BTC',
                balance: '3.5075',
                value: '442,830',
              },
            ],
          },
          {
            token: 'BTC',
            balance: '2.2465',
            value: '284,676',
            networks: [
              {
                network: 'Arbitrum',
                tokenAmount: '2.2465 BTC',
                balance: '2.2465',
                value: '284,676',
              },
            ],
          },
          {
            token: 'BTC',
            balance: '1.7542',
            value: '221,415',
            networks: [
              {
                network: 'Base',
                tokenAmount: '1.7542 BTC',
                balance: '1.7542',
                value: '221,415',
              },
            ],
          },
        ],
      },
      {
        positionType: 'Collateral',
        balance: '4.7069',
        percentage: '22.22',
        value: '594,658',
        protocols: [
          {
            protocol: 'Aave v3',
            market: 'Ethereum Core',
            balance: '2.8035',
            apy: '3.10',
            value: '354,264',
            tokens: [
              {
                token: 'cbBTC',
                tokenAmount: '0.9500 cbBTC',
                balance: '0.9500',
                apy: '3.40',
                value: '120,000',
              },
              {
                token: 'WBTC',
                tokenAmount: '0.7500 WBTC',
                balance: '0.7500',
                apy: '2.80',
                value: '95,000',
              },
              {
                token: 'tBTC',
                tokenAmount: '0.6300 tBTC',
                balance: '0.6300',
                apy: '3.10',
                value: '80,000',
              },
              {
                token: 'LBTC',
                tokenAmount: '0.4735 LBTC',
                balance: '0.4735',
                apy: '3.60',
                value: '59,264',
              },
            ],
          },
          {
            protocol: 'Compound',
            market: 'Ethereum Core',
            balance: '1.9034',
            apy: '2.85',
            value: '240,393',
            tokens: [
              {
                token: 'cbBTC',
                tokenAmount: '1.2000 cbBTC',
                balance: '1.2000',
                apy: '3.30',
                value: '160,803',
              },
              {
                token: 'WBTC',
                tokenAmount: '0.4500 WBTC',
                balance: '0.4500',
                apy: '2.60',
                value: '56,850',
              },
              {
                token: 'tBTC',
                tokenAmount: '0.1800 tBTC',
                balance: '0.1800',
                apy: '3.00',
                value: '22,740',
              },
            ],
          },
        ],
      },
      {
        positionType: 'Liquidity Pools',
        balance: '9.0189',
        percentage: '19.44',
        value: '1,139,206',
        protocols: [
          {
            protocol: 'Uniswap',
            market: 'Ethereum',
            balance: '5.7610',
            percentage: '12.41',
            value: '727,506',
            poolPairs: [
              {
                token: 'WBTC',
                poolPair: 'WBTC/ETH',
                tokenAmount: '2.0042 WBTC',
                balance: '2.0042',
                apy: '7.85',
                value: '253,046',
              },
              {
                token: 'WBTC',
                poolPair: 'WBTC/LBTC',
                tokenAmount: '1.8531 WBTC',
                balance: '1.8531',
                apy: '6.40',
                value: '234,066',
              },
              {
                token: 'LBTC',
                poolPair: 'LBTC/WBTC',
                tokenAmount: '1.9029 LBTC',
                balance: '1.9038',
                apy: '6.40',
                value: '240,393',
              },
            ],
          },
          {
            protocol: 'Curve',
            market: 'Ethereum',
            balance: '3.25761',
            percentage: '7.02',
            value: '411,699',
            poolPairs: [
              {
                token: 'WBTC',
                poolPair: 'WBTC/cbBTC',
                tokenAmount: '1.2015 WBTC',
                balance: '1.2015',
                apy: '5.90',
                value: '151,898',
              },
              {
                token: 'LBTC',
                poolPair: 'LBTC/cbBTC',
                tokenAmount: '1.0561 LBTC',
                balance: '1.0561',
                apy: '5.40',
                value: '133,873',
              },
              {
                token: 'cbBTC',
                poolPair: 'cbBTC/WBTC',
                tokenAmount: '1.0000 cbBTC',
                balance: '1.0000',
                apy: '6.10',
                value: '125,927',
              },
            ],
          },
        ],
      },
      {
        positionType: 'Yield Loops',
        balance: '4.7823',
        percentage: '9.68',
        value: '604,044',
        protocols: [
          {
            protocol: 'Aave v3',
            market: 'Ethereum Core',
            balance: '2.8912',
            netApy: '6.20',
            value: '365,044',
            walletAddresses: [
              {
                address: '0xd833...8D10',
                balance: '0.4564 BTC',
                netApy: '0.78%',
                value: '365,044',
                details: {
                  currentPrice: '1.0045 BTC',
                  liquidationPrice: '0.9837 BTC',
                  healthFactor: '1.05',
                  supplied: [
                    {
                      token: 'eBTC',
                      tokenAmount: '2.4738 eBTC',
                      balance: '2.4850',
                      apy: '0.42',
                      value: '293,783',
                    },
                  ],
                  borrowed: [
                    {
                      token: 'WBTC',
                      tokenAmount: '2.0286 WBTC',
                      balance: '2.0286',
                      apy: '0.34',
                      value: '152,744',
                    },
                  ],
                },
              },
            ],
          },
          {
            protocol: 'Morpho',
            market: 'Ethereum Core',
            balance: '1.8911',
            netApy: '5.80',
            value: '238,000',
            walletAddresses: [
              {
                address: '0xa2D8...Bc3e',
                balance: '1.8911',
                netApy: '5.80',
                value: '238,000',
                details: {
                  currentPrice: '1.0000 BTC',
                  liquidationPrice: '0.9079 BTC',
                  healthFactor: '1.05',
                  supplied: [
                    {
                      token: 'BTC',
                      tokenAmount: '2.0500 BTC',
                      balance: '2.0500',
                      apy: '6.10',
                      value: '292,000',
                    },
                  ],
                  borrowed: [
                    {
                      token: 'BTC',
                      tokenAmount: '0.3000 BTC',
                      balance: '0.3000',
                      apy: '2.10',
                      value: '54,000',
                    },
                  ],
                },
              },
            ],
          },
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
          {
            token: 'ETH',
            balance: '18.5059',
            value: '80,514.88',
            networks: [
              {
                network: 'Arbitrum',
                tokenAmount: '9.6847 ETH',
                balance: '9.6847',
                value: '42,136.84',
                walletAddress: '0xb5C9...Adf4',
              },
              {
                network: 'Ethereum',
                tokenAmount: '8.8206 ETH',
                balance: '8.8206',
                value: '38,378.43',
                walletAddress: '0xd833...8D10',
              },
            ],
          },
          {
            token: 'WETH',
            balance: '12.3355',
            value: '53,612.30',
            networks: [
              {
                network: 'Arbitrum',
                tokenAmount: '7.2150 WETH',
                balance: '7.2150',
                value: '31,353.20',
                walletAddress: '0xb5C9...Adf4',
              },
              {
                network: 'Ethereum',
                tokenAmount: '5.1205 WETH',
                balance: '5.1205',
                value: '22,259.10',
                walletAddress: '0xd833...8D10',
              },
            ],
          },
        ],
      },
      {
        positionType: 'Staking',
        balance: '41.3207',
        percentage: '33.27',
        value: '179,785.62',
        tokens: [
          {
            token: 'wstETH',
            tokenAmount: '14.9220 wstETH',
            balance: '18.2321',
            apy: '2.50',
            value: '79,188.20',
            networks: [
              {
                network: 'Ethereum',
                tokenAmount: '8.9532 wstETH',
                balance: '10.9474',
                value: '47,528.92',
              },
              {
                network: 'Arbitrum',
                tokenAmount: '5.9688 wstETH',
                balance: '7.2847',
                value: '31,659.28',
              },
            ],
          },
          {
            token: 'rETH',
            tokenAmount: '11.0382 rETH',
            balance: '12.7039',
            apy: '2.22',
            value: '55,257.70',
            networks: [
              {
                network: 'Ethereum',
                tokenAmount: '8.0045 rETH',
                balance: '9.2063',
                value: '40,078.50',
              },
              {
                network: 'Base',
                tokenAmount: '3.0337 rETH',
                balance: '3.4976',
                value: '15,179.20',
              },
            ],
          },
          {
            token: 'weETH',
            tokenAmount: '9.6175 weETH',
            balance: '10.4201',
            apy: '3.00',
            value: '45,337.42',
            networks: [
              {
                network: 'Ethereum',
                tokenAmount: '5.9184 weETH',
                balance: '6.4123',
                value: '27,899.92',
              },
              {
                network: 'Arbitrum',
                tokenAmount: '3.6991 weETH',
                balance: '4.0078',
                value: '17,437.51',
              },
            ],
          },
        ],
      },
      {
        positionType: 'Yield Loops',
        balance: '10.2139',
        percentage: '1.02',
        value: '47,999.64',
        protocols: [
          {
            protocol: 'Aave v3',
            market: 'Ethereum Core',
            balance: '6.1847',
            netApy: '7.40',
            value: '29,067',
            walletAddresses: [
              {
                address: '0xb5C9...Adf4',
                balance: '6.1847',
                netApy: '7.40',
                value: '29,067',
                details: {
                  currentPrice: '1.0870 ETH',
                  liquidationPrice: '1.0440 ETH',
                  healthFactor: '1.05',
                  supplied: [
                    {
                      token: 'weETH',
                      tokenAmount: '462.62 weETH',
                      balance: '502.85',
                      apy: '4.20',
                      value: '2,187,900',
                    },
                  ],
                  borrowed: [
                    {
                      token: 'ETH',
                      tokenAmount: '450.43 ETH',
                      balance: '450.43',
                      apy: '3.10',
                      value: '1,959,821',
                    },
                  ],
                },
              },
            ],
          },
          {
            protocol: 'Aave v3',
            market: 'Arbitrum',
            balance: '4.0500',
            netApy: '7.60',
            value: '19,100',
            walletAddresses: [
              {
                address: '0xb5C9...Adf4',
                balance: '4.0500',
                netApy: '7.60',
                value: '19,100',
                details: {
                  currentPrice: '1.0000 ETH',
                  liquidationPrice: '0.9079 ETH',
                  healthFactor: '1.05',
                  supplied: [
                    {
                      token: 'wstETH',
                      tokenAmount: '5.55 wstETH',
                      balance: '5.02',
                      apy: '3.80',
                      value: '26,100',
                    },
                  ],
                  borrowed: [
                    {
                      token: 'ETH',
                      tokenAmount: '3.92 ETH',
                      balance: '3.92',
                      apy: '2.85',
                      value: '20,400',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        positionType: 'Collateral',
        balance: '26.7509',
        percentage: '19.59',
        value: '116,389.68',
        protocols: [
          {
            protocol: 'Aave v3',
            market: 'Ethereum Core',
            balance: '14.4505',
            apy: '3.39',
            value: '62,894',
            tokens: [
              {
                token: 'wstETH',
                tokenAmount: '3.1487 wstETH',
                balance: '5.1200',
                apy: '3.60',
                value: '22,279',
              },
              {
                token: 'rETH',
                tokenAmount: '2.0974 rETH',
                balance: '3.4105',
                apy: '3.40',
                value: '14,844',
              },
              {
                token: 'cbETH',
                tokenAmount: '1.9031 cbETH',
                balance: '3.0900',
                apy: '3.20',
                value: '13,455',
              },
              {
                token: 'WETH',
                tokenAmount: '2.8013 WETH',
                balance: '2.8300',
                apy: '2.80',
                value: '12,315',
              },
            ],
          },
          {
            protocol: 'Aave v3',
            market: 'Arbitrum',
            balance: '12.3004',
            apy: '3.22',
            value: '53,494',
            tokens: [
              {
                token: 'weETH',
                tokenAmount: '2.9500 weETH',
                balance: '3.8500',
                apy: '3.80',
                value: '16,740',
              },
              {
                token: 'wstETH',
                tokenAmount: '1.7200 wstETH',
                balance: '2.8500',
                apy: '3.60',
                value: '12,387',
              },
              {
                token: 'MATIC',
                tokenAmount: '18,500 MATIC',
                balance: '1.9500',
                apy: '4.10',
                value: '8,475',
              },
              {
                token: 'aETH',
                tokenAmount: '0.5400 aETH',
                balance: '0.5340',
                apy: '2.70',
                value: '2,348',
              },
            ],
          },
        ],
      },
      {
        positionType: 'Liquidity Pools',
        balance: '38.5607',
        percentage: '17.00',
        value: '167,776.47',
        protocols: [
          {
            protocol: 'Uniswap',
            market: 'Ethereum',
            balance: '12.3004',
            percentage: '10.91',
            value: '107,731.63',
            poolPairs: [
              {
                token: 'ETH',
                poolPair: 'ETH/WBTC',
                tokenAmount: '6.5003 ETH',
                balance: '6.5003',
                apy: '10.20',
                value: '28,282.12',
              },
              {
                token: 'wstETH',
                poolPair: 'wstETH/weETH',
                tokenAmount: '2.1287 wstETH',
                balance: '5.2003',
                apy: '6.00',
                value: '11,313.05',
              },
              {
                token: 'weETH',
                poolPair: 'wstETH/weETH',
                tokenAmount: '2.1046 weETH',
                balance: '4.5604',
                apy: '7.15',
                value: '11,313.06',
              },
              {
                token: 'ETH',
                poolPair: 'ETH/weETH',
                tokenAmount: '2.1252 ETH',
                balance: '2.1252',
                apy: '7.15',
                value: '9,246.31',
              },
              {
                token: 'weETH',
                poolPair: 'ETH/weETH',
                tokenAmount: '1.9615 weETH',
                balance: '2.1252',
                apy: '7.15',
                value: '9,246.30',
              },
              {
                token: 'ETH',
                poolPair: 'DAI/ETH',
                tokenAmount: '0.3498 ETH',
                balance: '0.3498',
                apy: '5.40',
                value: '1,522.02',
              },
            ],
          },
          {
            protocol: 'Curve',
            market: 'Ethereum',
            balance: '13.8004',
            percentage: '6.09',
            value: '60,044.34',
            poolPairs: [
              {
                token: 'wstETH',
                poolPair: 'wstETH/ETH',
                tokenAmount: '3.1500 wstETH',
                balance: '3.5200',
                apy: '4.35',
                value: '23,120.00',
              },
              {
                token: 'ETH',
                poolPair: 'rETH/ETH',
                tokenAmount: '1.6200 rETH',
                balance: '2.0200',
                apy: '5.60',
                value: '13,275.00',
              },
              {
                token: 'weETH',
                poolPair: 'cbETH/ETH',
                tokenAmount: '1.5800 cbETH',
                balance: '1.9104',
                apy: '5.20',
                value: '12,555.00',
              },
              {
                token: 'weETH',
                poolPair: 'weETH/ETH',
                tokenAmount: '1.3400 weETH',
                balance: '1.6900',
                apy: '4.90',
                value: '11,094.34',
              },
            ],
          },
        ],
      },
    ],
  },
  { token: 'SOL', balance: '1,000', percentage: '2.08', value: '90,275' },
  {
    token: 'USD',
    balance: '35,779,667',
    percentage: '89.17',
    value: '35,779,667',
    positionTypes: [
      // Matches USD position-type breakdown in the Figma
      {
        positionType: 'Yield Loops',
        balance: '1,329,667',
        percentage: '3.72',
        value: '1,329,667',
        protocols: [
          {
            protocol: 'Aave v3',
            market: 'Ethereum Core',
            balance: '542,318',
            netApy: '7.25',
            value: '542,318',
            walletAddresses: [
              {
                address: '0xb5C9...Adf4',
                balance: '905,750',
                netApy: '7.25',
                value: '905,750',
                details: {
                  currentPrice: '1.00 USD',
                  liquidationPrice: '0.9724 USD',
                  healthFactor: '1.06',
                  supplied: [
                    {
                      token: 'PT-sUSDe-05FEB2026',
                      tokenAmount: '1,197,842 PT-sUSDe-05FEB2026',
                      balance: '1,187,170',
                      apy: '11.20',
                      value: '1,197,842',
                    },
                  ],
                  borrowed: [
                    {
                      token: 'USDe',
                      tokenAmount: '292,092 USDe',
                      balance: '292,092',
                      apy: '2.90',
                      value: '292,092',
                    },
                  ],
                },
              },
            ],
          },
          {
            protocol: 'Morpho',
            market: 'Arbitrum',
            balance: '418,905',
            netApy: '6.85',
            value: '418,905',
            walletAddresses: [
              {
                address: '0xa2D8...Bc3e',
                balance: '418,905',
                netApy: '6.85',
                value: '418,905',
                details: {
                  currentPrice: '1.00 USD',
                  liquidationPrice: '0.9758 USD',
                  healthFactor: '1.05',
                  supplied: [
                    {
                      token: 'USDC',
                      tokenAmount: '502,418 USDC',
                      balance: '502,418',
                      apy: '5.30',
                      value: '502,418',
                    },
                  ],
                  borrowed: [
                    {
                      token: 'USDT',
                      tokenAmount: '83,513 USDT',
                      balance: '83,513',
                      apy: '1.95',
                      value: '83,513',
                    },
                  ],
                },
              },
            ],
          },
          {
            protocol: 'Spark',
            market: 'Ethereum Core',
            balance: '368,442',
            netApy: '8.10',
            value: '368,442',
            walletAddresses: [
              {
                address: '0xb5C9...Adf4',
                balance: '368,442',
                netApy: '8.10',
                value: '368,442',
                details: {
                  currentPrice: '1.00 USD',
                  liquidationPrice: '0.9691 USD',
                  healthFactor: '1.06',
                  supplied: [
                    {
                      token: 'DAI',
                      tokenAmount: '421,900 DAI',
                      balance: '421,900',
                      apy: '4.90',
                      value: '421,900',
                    },
                  ],
                  borrowed: [
                    {
                      token: 'USDC',
                      tokenAmount: '53,457 USDC',
                      balance: '53,457',
                      apy: '1.65',
                      value: '53,457',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        positionType: 'Wallet Balance',
        balance: '14,500,238',
        percentage: '40.53',
        value: '14,500,238',
        // Simple USD wallet breakdown so the row has data when expanded
        tokens: [
          {
            token: 'USD',
            balance: '8,700,143',
            value: '8,700,143',
            networks: [
              {
                network: 'Ethereum',
                tokenAmount: '8,700,143 USD',
                balance: '8,700,143',
                value: '8,700,143',
              },
            ],
          },
          {
            token: 'USD',
            balance: '5,800,095',
            value: '5,800,095',
            networks: [
              {
                network: 'Arbitrum',
                tokenAmount: '5,800,095 USD',
                balance: '5,800,095',
                value: '5,800,095',
              },
            ],
          },
        ],
      },
      {
        // Staking table with sUSDe / eUSD and network breakdown
        positionType: 'Staking',
        balance: '9,250,184',
        percentage: '25.85',
        value: '9,250,184',
        tokens: [
          {
            token: 'sUSDe',
            tokenAmount: '4,985,317 sUSDe',
            balance: '5,138,743',
            apy: '4.10',
            value: '5,138,743',
            networks: [
              {
                network: 'Ethereum',
                tokenAmount: '3,165,492 sUSDe',
                balance: '3,193,214',
                value: '3,193,214',
              },
              {
                network: 'Arbitrum',
                tokenAmount: '1,819,825 sUSDe',
                balance: '1,945,529',
                value: '1,945,529',
              },
            ],
          },
          {
            token: 'eUSD',
            tokenAmount: '4,045,283 eUSD',
            balance: '4,111,442',
            apy: '5.05',
            value: '4,111,442',
            networks: [
              {
                network: 'Optimism',
                tokenAmount: '2,347,619 eUSD',
                balance: '2,362,814',
                value: '2,362,814',
              },
              {
                network: 'Arbitrum',
                tokenAmount: '1,736,698 eUSD',
                balance: '1,748,628',
                value: '1,748,628',
              },
            ],
          },
        ],
      },
      {
        // Collateral protocols (Aave v3 + Compound) with stablecoin tokens
        positionType: 'Collateral',
        balance: '6,799,299',
        percentage: '19.00',
        value: '6,799,299',
        protocols: [
          {
            protocol: 'Aave v3',
            market: 'Ethereum Core',
            balance: '4,062,184',
            apy: '4.25',
            value: '4,062,184',
            tokens: [
              {
                token: 'USDC',
                tokenAmount: '1,420,314 USDC',
                balance: '1,420,314',
                apy: '4.10',
                value: '1,420,314',
              },
              {
                token: 'USDT',
                tokenAmount: '1,061,882 USDT',
                balance: '1,061,882',
                apy: '3.90',
                value: '1,061,882',
              },
              {
                token: 'DAI',
                tokenAmount: '679,103 DAI',
                balance: '679,103',
                apy: '4.30',
                value: '679,103',
              },
              {
                token: 'sUSDe',
                tokenAmount: '889,747 sUSDe',
                balance: '900,888',
                apy: '5.20',
                value: '900,888',
              },
            ],
          },
          {
            protocol: 'Compound',
            market: 'Arbitrum',
            balance: '2,737,114',
            apy: '5.10',
            value: '2,737,114',
            tokens: [
              {
                token: 'USDC',
                tokenAmount: '1,588,219 USDC',
                balance: '1,586,219',
                apy: '5.30',
                value: '1,586,219',
              },
              {
                token: 'DAI',
                tokenAmount: '1,150,895 DAI',
                balance: '1,150,895',
                apy: '4.80',
                value: '1,150,895',
              },
            ],
          },
        ],
      },
      {
        // Liquidity pools protocols (Uniswap + Curve) with pool pairs
        positionType: 'Liquidity Pools',
        balance: '3,900,276',
        percentage: '10.90',
        value: '3,900,276',
        protocols: [
          {
            protocol: 'Uniswap',
            market: 'Ethereum',
            balance: '2,487,364',
            percentage: '6.90',
            value: '2,487,364',
            poolPairs: [
              {
                token: 'USDC',
                poolPair: 'USDC / USDT',
                tokenAmount: '512,387 USDC',
                balance: '512,387',
                apy: '6.80',
                value: '512,387',
              },
              {
                token: 'USDT',
                poolPair: 'USDT / USDC',
                tokenAmount: '498,864 USDT',
                balance: '498,864',
                apy: '6.80',
                value: '498,864',
              },
              {
                token: 'DAI',
                poolPair: 'DAI / USDC',
                tokenAmount: '271,846 DAI',
                balance: '271,846',
                apy: '6.40',
                value: '271,846',
              },
              {
                token: 'USDC',
                poolPair: 'DAI / USDC',
                tokenAmount: '129,715 USDC',
                balance: '129,715',
                apy: '6.50',
                value: '129,715',
              },
            ],
          },
          {
            protocol: 'Curve',
            market: 'Ethereum',
            balance: '1,412,912',
            percentage: '4.00',
            value: '1,412,912',
            // Curve LP breakdown for USD (matches LP design)
            poolPairs: [
              {
                token: 'USDC',
                poolPair: 'USDC / USDT',
                tokenAmount: '512,387 USDC',
                balance: '512,387',
                apy: '6.80',
                value: '512,387',
              },
              {
                token: 'USDT',
                poolPair: 'USDT / USDC',
                tokenAmount: '498,864 USDT',
                balance: '498,864',
                apy: '6.80',
                value: '498,864',
              },
              {
                token: 'DAI',
                poolPair: 'DAI / USDC',
                tokenAmount: '271,846 DAI',
                balance: '271,846',
                apy: '6.40',
                value: '271,846',
              },
              {
                token: 'USDC',
                poolPair: 'DAI / USDC',
                tokenAmount: '129,715 USDC',
                balance: '129,715',
                apy: '6.50',
                value: '129,715',
              },
            ],
          },
        ],
      },
    ],
  },
];

export const debts = [
  { token: 'USDC', balance: '10500', value: '11,200' },
  { token: 'ETH', balance: '3.000', value: '87,734' },
];
