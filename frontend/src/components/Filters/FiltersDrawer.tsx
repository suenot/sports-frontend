'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';
import { AppDrawer } from '../common/AppDrawer';
import { EventsFilters } from './EventsFilters';
import { Box } from '@chakra-ui/react';

interface FiltersDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  sportTypes: string[];
  disciplines: string[];
  cities: string[];
  countries: string[];
  ageGroups: string[];
}

export const FiltersDrawer: React.FC<FiltersDrawerProps> = ({
  isOpen,
  onClose,
  sportTypes,
  disciplines,
  cities,
  countries,
  ageGroups,
}) => {
  const { t } = useTranslation(['sections/events']);

  return (
    <AppDrawer
      isOpen={isOpen}
      onClose={onClose}
      title={t('filter.title')} 
      placement="left"
    >
      <Box 
        maxHeight="calc(100vh - 120px)" 
        overflowY="auto"
        px={2}
      >
        <EventsFilters
          sportTypes={sportTypes}
          disciplines={disciplines}
          cities={cities}
          countries={countries}
          ageGroups={ageGroups}
        />
      </Box>
    </AppDrawer>
  );
};
