import React from 'react';
import { useTranslation } from 'next-i18next';
import { AppDrawer } from '../common/AppDrawer';
import { EventForm } from './EventForm';
import { Event } from './types';

interface EventFormDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  event?: Event | null;
  onSubmit: (event: Partial<Event>) => void;
  isEdit?: boolean;
}

export const EventFormDrawer: React.FC<EventFormDrawerProps> = ({
  isOpen,
  onClose,
  event,
  onSubmit,
  isEdit = false,
}) => {
  const { t } = useTranslation(['sections/events']);

  const handleSubmit = (eventData: Partial<Event>) => {
    onSubmit(eventData);
    onClose();
  };

  return (
    <AppDrawer
      isOpen={isOpen}
      onClose={onClose}
      title={t(isEdit ? 'form.editTitle' : 'form.addTitle')}
      placement="right"
    >
      <EventForm
        event={event}
        onSubmit={handleSubmit}
        isEdit={isEdit}
      />
    </AppDrawer>
  );
};
