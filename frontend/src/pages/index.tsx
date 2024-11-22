import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  useColorMode,
} from '@chakra-ui/react';
import { CalendarIcon, SearchIcon, BellIcon } from '@chakra-ui/icons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { AnimatedStats } from '../components/Landing/AnimatedStats';

const Feature = ({ title, text, icon }: { title: string; text: string; icon: any }) => {
  const { colorMode } = useColorMode();
  
  return (
    <VStack
      align="start"
      p={6}
      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
      borderRadius="lg"
      shadow="md"
      spacing={4}
    >
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Heading size="md">{title}</Heading>
      <Text>{text}</Text>
    </VStack>
  );
};

const sections = ['frontend', 'backend', 'integrations'] as const;
type TechSection = typeof sections[number];

export default function Landing() {
  const { t } = useTranslation(['sections/landing']);
  const { colorMode } = useColorMode();

  const getTechItems = (section: TechSection): string[] => 
    (t(`tech.${section}.items`, { returnObjects: true }) as string[]) || [];

  const advantageItems: string[] = (t('advantages.items', { returnObjects: true }) as string[]) || [];

  return (
    <Box>
      {/* Hero секция */}
      <Box 
        bg={colorMode === 'dark' ? 'gray.800' : 'blue.500'} 
        color="white" 
        py={20}
      >
        <Container maxW="container.xl">
          <VStack spacing={8} align="center" textAlign="center">
            <Heading size="2xl">
              {t('hero.title')}
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              {t('hero.description')}
            </Text>
            <AnimatedStats />
            <Link href="/app" passHref legacyBehavior>
              <Button 
                as="a"
                size="lg" 
                colorScheme={colorMode === 'dark' ? 'blue' : 'white'}
                variant={colorMode === 'dark' ? 'solid' : 'outline'}
              >
                {t('hero.cta')}
              </Button>
            </Link>
          </VStack>
        </Container>
      </Box>

      {/* Проблематика */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading>{t('problems.title')}</Heading>
              <Text fontSize="lg" maxW="2xl">
                {t('problems.description')}
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
              <Feature
                icon={CalendarIcon}
                title={t('problems.features.sync.title')}
                text={t('problems.features.sync.description')}
              />
              <Feature
                icon={SearchIcon}
                title={t('problems.features.search.title')}
                text={t('problems.features.search.description')}
              />
              <Feature
                icon={BellIcon}
                title={t('problems.features.notifications.title')}
                text={t('problems.features.notifications.description')}
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Преимущества */}
      <Box 
        py={20} 
        bg={colorMode === 'dark' ? 'gray.700' : 'gray.50'}
      >
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <VStack spacing={4} textAlign="center">
              <Heading>{t('advantages.title')}</Heading>
            </VStack>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
              {advantageItems.map((item: string, index: number) => (
                <Box
                  key={index}
                  p={8}
                  bg={colorMode === 'dark' ? 'gray.800' : 'white'}
                  borderRadius="xl"
                  shadow="lg"
                  transition="all 0.2s"
                  _hover={{
                    transform: 'translateY(-4px)',
                    shadow: 'xl'
                  }}
                >
                  <Text fontSize="xl" fontWeight="medium">
                    {item}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Технологии */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="center" textAlign="center">
            <Heading>{t('tech.title')}</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {sections.map((section) => (
                <VStack key={section}>
                  <Heading size="md">{t(`tech.${section}.title`)}</Heading>
                  {getTechItems(section).map((item: string, index: number) => (
                    <Text key={index}>{item}</Text>
                  ))}
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA */}
      <Box 
        py={20} 
        bg={colorMode === 'dark' ? 'gray.700' : 'blue.500'} 
        color="white"
      >
        <Container maxW="container.xl">
          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            align="center" 
            justify="space-between"
          >
            <VStack align="start" spacing={4} mb={{ base: 8, md: 0 }}>
              <Heading size="lg">{t('cta.title')}</Heading>
              <Text fontSize="lg">
                {t('cta.description')}
              </Text>
            </VStack>
            <Link href="/app" passHref legacyBehavior>
              <Button
                as="a"
                size="lg"
                colorScheme={colorMode === 'dark' ? 'blue' : 'white'}
                variant={colorMode === 'dark' ? 'solid' : 'outline'}
              >
                {t('cta.button')}
              </Button>
            </Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['sections/common', 'sections/landing', 'sections/events'])),
    },
  };
};
