import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
  components: {
    Table: {
      variants: {
        simple: {
          th: {
            borderBottom: '1px',
            borderColor: 'gray.200',
            color: 'gray.600',
            fontSize: 'sm',
            fontWeight: 'medium',
          },
          td: {
            borderBottom: '1px',
            borderColor: 'gray.200',
          },
        },
      },
    },
    // Добавляем стили для темной темы
    Button: {
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'blue.200' : 'blue.500',
          color: props.colorMode === 'dark' ? 'gray.800' : 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'blue.300' : 'blue.600',
          },
        }),
      },
    },
    IconButton: {
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'blue.200' : 'blue.500',
          color: props.colorMode === 'dark' ? 'gray.800' : 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'blue.300' : 'blue.600',
          },
        }),
      },
    },
    Card: {
      baseStyle: (props: any) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'gray.700' : 'white',
          boxShadow: 'sm',
        },
      }),
    },
    Modal: {
      baseStyle: (props: any) => ({
        dialog: {
          bg: props.colorMode === 'dark' ? 'gray.700' : 'white',
        },
      }),
    },
    Popover: {
      baseStyle: (props: any) => ({
        content: {
          bg: props.colorMode === 'dark' ? 'gray.700' : 'white',
        },
      }),
    },
    Tooltip: {
      baseStyle: (props: any) => ({
        bg: props.colorMode === 'dark' ? 'gray.200' : 'gray.700',
        color: props.colorMode === 'dark' ? 'gray.800' : 'white',
      }),
    },
  },
  colors: {
    brand: {
      50: '#E3F2FD',
      100: '#BBDEFB',
      200: '#90CAF9',
      300: '#64B5F6',
      400: '#42A5F5',
      500: '#2196F3',
      600: '#1E88E5',
      700: '#1976D2',
      800: '#1565C0',
      900: '#0D47A1',
    },
  },
});

export default theme;
