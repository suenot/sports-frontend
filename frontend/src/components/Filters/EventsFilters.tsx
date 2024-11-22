import React, { useMemo } from 'react';
import { Box, Button, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Form from '@rjsf/chakra-ui';
import { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import { getUpdatedSchema, uiSchema } from './schema';
import { RangeWidget } from './widgets';

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

interface EventsFiltersProps {
  filters: FiltersState;
  onFiltersChange: (filters: FiltersState) => void;
  sportTypes: string[];
  disciplines: string[];
  cities: string[];
  ageGroups: string[];
  onReset: () => void;
}

export const EventsFilters: React.FC<EventsFiltersProps> = ({
  filters,
  onFiltersChange,
  sportTypes,
  disciplines,
  cities,
  ageGroups,
  onReset,
}) => {
  const { t } = useTranslation('common');
  const bg = useColorModeValue('white', 'gray.800');

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

  // Обработчик изменений формы с выводом в консоль для отладки
  const handleChange = (e: any) => {
    console.log('Form data changed:', e.formData);
    onFiltersChange(e.formData);
  };

  return (
    <Box p={4} bg={bg} borderRadius="lg" shadow="sm" mb={4}>
      <HStack justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          {t('filters.title')}
        </Text>
        <Button
          size="sm"
          variant="ghost"
          colorScheme="blue"
          onClick={onReset}
        >
          {t('filters.reset')}
        </Button>
      </HStack>

      <Form
        schema={schema as RJSFSchema}
        uiSchema={uiSchema as UiSchema}
        validator={validator}
        formData={filters}
        onChange={handleChange}
        widgets={widgets}
        transformErrors={transformErrors}
        // Локализация лейблов через функцию перевода
        translateString={id => t(id)}
        // Отключаем стандартную кнопку отправки формы
        children={<></>}
      />
    </Box>
  );
};
