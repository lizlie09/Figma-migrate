export const EMPHASIZED_TOKENS = new Set([
  'wstETH',
  'rETH',
  'weETH',
  'cbETH',
  'aETH',
  'cbBTC',
  'wBTC',
  'WBTC',
  'LBTC',
  'eBTC',
  'tBTC',
  'MATIC',
]);

export const getTokenIconSrc = (token: string): string | null => {
  switch (token) {
    case 'BTC':
      return '/images/btc.png';
    case 'ETH':
      return '/images/eth.png';
    case 'SOL':
      return '/images/sol.png';
    case 'USD':
      return '/images/usd.png';
    case 'USDC':
      return '/images/usdc.png';
    case 'WETH':
      return '/images/WETH.png';
    case 'wstETH':
      return '/images/wstETH.png';
    case 'rETH':
      return '/images/rETH.png';
    case 'weETH':
      return '/images/weETH.png';
    case 'aETH':
      return '/images/aETH.png';
    case 'cbETH':
      return '/images/cbETH.png';
    case 'MATIC':
      return '/images/MATIC.png';
     case 'WBTC':
    return '/images/WBTC.png';
    case 'LBTC':
      return '/images/LBTC.png';
    case 'eBTC':
      return '/images/eBTC.png';
    case 'tBTC':
      return '/images/tBTC.png';
    case 'cbBTC':
      return '/images/cbBTC.png';
    case 'Base':
      return '/images/Base.png';
    case 'ARB':
      return '/images/ARB.png';
    default:
      return null;
  }
};

export const getProtocolIconSrc = (protocol: string): string | null => {
  switch (protocol) {
    case 'Aave v3':
      return '/images/aave.png';
    case 'Compound':
      return '/images/Compound.png';
    case 'Curve':
      return '/images/curve.png';
    case 'Uniswap':
      return '/images/uniswap.png';
    case 'Morpho':
      return '/images/morpho.png';
    default:
      return null;
  }
};

export const getAaveUtilization = (
  protocol: string,
  market?: string,
): string | null => {
  if (protocol !== 'Aave v3') {
    return null;
  }

  if (market === 'Ethereum Core') {
    return '-72%';
  }

  if (market === 'Arbitrum') {
    return '-65%';
  }

  return null;
};

export const getMarketWalletAddress = (market?: string): string | null => {
  if (market === 'Arbitrum') {
    return '0xb5C9...Adf4';
  }

  if (market === 'Ethereum Core' || market === 'Ethereum') {
    return '0xd833...8D10';
  }

  if (market === 'Base') {
    return '0xa2D8...Bc3e';
  }

  return null;
};

export const formatNumber = (num: string) => {
  const raw = String(num).trim();
  if (!raw) {
    return raw;
  }

  const sign = raw.startsWith('-') ? '-' : '';
  const unsigned = sign ? raw.slice(1) : raw;
  const cleaned = unsigned.replace(/,/g, '');
  const [integerPart, decimalPart] = cleaned.split('.');

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return decimalPart !== undefined
    ? `${sign}${formattedInteger}.${decimalPart}`
    : `${sign}${formattedInteger}`;
};
