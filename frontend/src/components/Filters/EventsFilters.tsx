'use client';

import React, { useMemo } from 'react';
import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Form from '@rjsf/chakra-ui';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { getUpdatedSchema, uiSchema } from './schema';
import { RangeWidget } from './widgets';
import { useQueryStore } from '@deep-foundation/store/query';

export interface FiltersState {
  sportType: string;
  discipline: string;
  city: string;
  participantsRange: [number, number];
  gender: string;
  ageGroup: string;
  eventType: string;
  dateRange: {
    start: string;
    end: string;
  };
  status: string;
}

const defaultFilters: FiltersState = {
  sportType: '',
  discipline: '',
  city: '',
  participantsRange: [0, 1000],
  gender: '',
  ageGroup: '',
  eventType: '',
  dateRange: {
    start: '',
    end: '',
  },
  status: '',
};

interface EventsFiltersProps {
  sportTypes: string[];
  disciplines: string[];
  cities: string[];
  ageGroups: string[];
}

export const EventsFilters: React.FC<EventsFiltersProps> = ({
  sportTypes,
  disciplines,
  cities,
  ageGroups,
}) => {
  const { t } = useTranslation(['sections/events']);
  const [filters, setFilters] = useQueryStore<FiltersState>('filters', defaultFilters);

  // Получаем обновленную схему с актуальными данными для селектов
  const schema = useMemo(() => 
    getUpdatedSchema(t, sportTypes, disciplines, cities, ageGroups),
    [t, sportTypes, disciplines, cities, ageGroups]
  );

  // Кастомные виджеты для формы
  const widgets = {
    range: RangeWidget,
  };

  // Функция для локализации лейблов формы
  const transformErrors = (errors: any[]) => {
    return errors.map(error => {
      return {
        ...error,
        message: t(error.message)
      };
    });
  };

  // Обработчик изменений формы
  const handleChange = (e: any) => {
    setFilters(e.formData);
  };

  // Обработчик сброса фильтров
  const handleReset = () => {
    setFilters(defaultFilters);
  };

  return (
    <Box>
      <HStack justify="space-between" align="center" mb={4}>
        <Text fontSize="md" fontWeight="medium">
          {t('filters.settings')}
        </Text>
        <Button
          size="sm"
          variant="ghost"
          colorScheme="blue"
          onClick={handleReset}
        >
          {t('filters.reset')}
        </Button>
      </HStack>

      <Form
        schema={schema as RJSFSchema}
        uiSchema={{
          ...uiSchema as UiSchema,
          'ui:submitButtonOptions': {
            norender: true,
          },
        }}
        validator={validator}
        formData={filters}
        onChange={handleChange}
        widgets={widgets}
        transformErrors={transformErrors}
        translateString={id => t(id)}
      >
        <Box display="none" />
      </Form>
    </Box>
  );
};
