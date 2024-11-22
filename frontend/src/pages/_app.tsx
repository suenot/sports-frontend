import { 
  ChakraProvider, 
  Box, 
  Button, 
  HStack,
  IconButton,
  Flex,
  ColorModeScript
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import type { AppProps } from 'next/app';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { QueryStoreProvider, useQueryStore } from '@deep-foundation/store/query';
import { CookiesStoreProvider } from '@deep-foundation/store/cookies';
import { LocalStoreProvider } from '@deep-foundation/store/local';
import theme from '../theme';

const ColorModeToggle = () => {
  const [colorMode, setColorMode] = useQueryStore<'light' | 'dark'>('theme', 'light');

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
      size="sm"
      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
      color={colorMode === 'dark' ? 'white' : 'gray.800'}
    />
  );
};

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const switchLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <HStack spacing={2}>
      <Button
        size="sm"
        colorScheme={i18n.language === 'ru' ? 'blue' : 'gray'}
        onClick={() => switchLanguage('ru')}
      >
        RU
      </Button>
      <Button
        size="sm"
        colorScheme={i18n.language === 'en' ? 'blue' : 'gray'}
        onClick={() => switchLanguage('en')}
      >
        EN
      </Button>
    </HStack>
  );
};

interface AppContentProps extends AppProps {}

const AppContent = ({ Component, pageProps }: AppContentProps) => {
  const router = useRouter();
  const isApp = router.pathname.startsWith('/app');
  const [colorMode] = useQueryStore<'light' | 'dark'>('theme', 'light');

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={colorMode} />
      <Box 
        position="relative" 
        minH="100vh"
        bg={colorMode === 'dark' ? 'gray.800' : 'white'}
        color={colorMode === 'dark' ? 'white' : 'gray.800'}
      >
        {isApp && (
          <Flex 
            position="fixed" 
            top={4} 
            right={4} 
            zIndex={1000}
            gap={4}
            p={2}
            borderRadius="md"
            boxShadow="sm"
            bg={colorMode === 'dark' ? 'gray.700' : 'white'}
          >
            <ColorModeToggle />
            <LanguageSwitcher />
          </Flex>
        )}
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
};

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryStoreProvider useRouter={useRouter}>
      <CookiesStoreProvider>
        <LocalStoreProvider>
          <AppContent Component={Component} pageProps={pageProps} />
        </LocalStoreProvider>
      </CookiesStoreProvider>
    </QueryStoreProvider>
  );
}

export default appWithTranslation(App);
