import { Box, Container, Heading } from '@chakra-ui/react';
import { EventsListContainer } from '../../components/EventsList/EventsListContainer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';

export default function AppHome() {
  const { t } = useTranslation('common');

  return (
    <Container maxW="container.xl" py={8}>
      <Box mb={8}>
        <Heading as="h1" size="xl">
          {t('events.title')}
        </Heading>
      </Box>
      <EventsListContainer />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
    },
  };
};
