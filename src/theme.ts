import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  styles: {
    global: {
      body: {
        bg: '#0B091A', // Darkest background from palette
        color: 'white'
      }
    }
  },
  colors: {
    brand: {
      50: '#E6E8FF',
      100: '#C4C9FF',
      200: '#A1A9FF',
      300: '#7F8AFF',
      400: '#5C6AFF',
      500: '#7D67FF', // Light purple/lavender from palette
      600: '#4F52CC',
      700: '#3B3D99',
      800: '#272966',
      900: '#131433'
    },
    dark: {
      bg: '#0B091A', // Darkest background
      card: '#1C1833', // Dark blue/purple card background
      hover: '#2A2641', // Dark blue/gray hover state
      nested: '#1C1833' // Nested backgrounds
    },
    accent: {
      purple: '#7D67FF', // Light purple/lavender
      blue: '#2268D1', // Bright blue
      blueVibrant: '#1A71FF', // Vibrant blue
      green: '#3EDD87', // Vibrant green
      teal: '#21D6AE', // Teal/aqua green
      red: '#F46565', // Coral/red-orange
      orange: '#FFC063', // Orange/amber
      white: '#FFFFFF',
      white50: 'rgba(255, 255, 255, 0.5)' // White with 50% opacity
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand'
      }
    }
  }
})

export default theme
