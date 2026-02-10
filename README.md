# Crypto Manager Dashboard

A React + Chakra UI implementation of the Crypto Manager dashboard from Figma design.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Chakra UI** - Component library
- **Recharts** - Chart visualization
- **Vite** - Build tool
- **React Icons** - Icon library

## Features

- Portfolio summary with total assets, debts, and net worth
- Total performance chart with time range filters
- Crypto performance cards (BTC, ETH, SOL)
- Assets distribution pie chart
- Debt overview bar chart
- Collapsible portfolio and DeFi loans sections

## Project Structure

```
src/
├── components/
│   ├── Sidebar.tsx              # Left navigation
│   ├── TopBar.tsx               # Top navigation bar
│   ├── PortfolioSummary.tsx     # Main dashboard view
│   ├── StatCard.tsx             # Stat card component
│   ├── TotalPerformance.tsx     # Performance chart
│   ├── CryptoPerformanceCard.tsx # Individual crypto cards
│   ├── AssetsDistribution.tsx   # Pie chart
│   ├── DebtOverview.tsx         # Bar chart
│   ├── PortfolioSection.tsx     # Portfolio summary
│   └── DeFiLoans.tsx            # DeFi loans section
├── App.tsx                      # Main app component
├── main.tsx                     # App entry point
└── theme.ts                     # Chakra UI theme config
```
