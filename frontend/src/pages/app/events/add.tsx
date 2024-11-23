import { Box } from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { EventForm } from '../../../components/EventsList/EventForm';
import { Event } from '../../../components/EventsList/types';
import { EventsPageLayout } from '../../../components/EventsList/EventsPageLayout';

export default function EventAddPage() {
  const { t } = useTranslation('common');
  const router = useRouter();

  const handleSubmit = (eventData: Partial<Event>) => {
    console.log('Creating event:', eventData);
    // В будущем здесь будет запрос к API
    router.push('/app');
  };

  return (
    <EventsPageLayout title={t('events.form.addTitle')}>
      <Box maxW="container.md" mx="auto">
        <EventForm
          onSubmit={handleSubmit}
          isEdit={false}
        />
      </Box>
    </EventsPageLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'ru', ['common'])),
    },
  };
};