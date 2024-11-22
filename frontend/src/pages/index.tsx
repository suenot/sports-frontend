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
  List,
  ListItem,
  ListIcon,
  useColorMode,
} from '@chakra-ui/react';
import { CheckCircleIcon, CalendarIcon, SearchIcon, BellIcon } from '@chakra-ui/icons';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import Link from 'next/link';

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

const sections = ['frontend', 'backend', 'integrations', 'devops'] as const;
type TechSection = typeof sections[number];

export default function Landing() {
  const { t } = useTranslation('common');
  const { colorMode } = useColorMode();

  // Получаем массивы из переводов с правильной типизацией
  const advantageItems: string[] = (t('landing.advantages.items', { returnObjects: true }) as string[]) || [];
  const getTechItems = (section: TechSection): string[] => 
    (t(`landing.tech.${section}.items`, { returnObjects: true }) as string[]) || [];

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
              {t('landing.hero.title')}
            </Heading>
            <Text fontSize="xl" maxW="2xl">
              {t('landing.hero.description')}
            </Text>
            <Link href="/app" passHref legacyBehavior>
              <Button 
                as="a"
                size="lg" 
                colorScheme={colorMode === 'dark' ? 'blue' : 'white'}
                variant={colorMode === 'dark' ? 'solid' : 'outline'}
              >
                {t('landing.hero.cta')}
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
              <Heading>{t('landing.problems.title')}</Heading>
              <Text fontSize="lg" maxW="2xl">
                {t('landing.problems.description')}
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} width="100%">
              <Feature
                icon={CalendarIcon}
                title={t('landing.problems.features.sync.title')}
                text={t('landing.problems.features.sync.description')}
              />
              <Feature
                icon={SearchIcon}
                title={t('landing.problems.features.search.title')}
                text={t('landing.problems.features.search.description')}
              />
              <Feature
                icon={BellIcon}
                title={t('landing.problems.features.notifications.title')}
                text={t('landing.problems.features.notifications.description')}
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
          <VStack spacing={8} align="start">
            <Heading>{t('landing.advantages.title')}</Heading>
            <List spacing={4}>
              {advantageItems.map((item: string, index: number) => (
                <ListItem key={index}>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  {item}
                </ListItem>
              ))}
            </List>
          </VStack>
        </Container>
      </Box>

      {/* Технологии */}
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="center" textAlign="center">
            <Heading>{t('landing.tech.title')}</Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              {sections.map((section) => (
                <VStack key={section}>
                  <Heading size="md">{t(`landing.tech.${section}.title`)}</Heading>
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
              <Heading size="lg">{t('landing.cta.title')}</Heading>
              <Text fontSize="lg">
                {t('landing.cta.description')}
              </Text>
            </VStack>
            <Link href="/app" passHref legacyBehavior>
              <Button
                as="a"
                size="lg"
                colorScheme={colorMode === 'dark' ? 'blue' : 'white'}
                variant={colorMode === 'dark' ? 'solid' : 'outline'}
              >
                {t('landing.cta.button')}
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
      ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
    },
  };
};
