import { RJSFSchema } from '@rjsf/utils';
import { UiSchema } from '@rjsf/utils';
import { TFunction } from 'next-i18next';

export const getFilterSchema = (t: TFunction): RJSFSchema => ({
  type: 'object',
  properties: {
    sportType: {
      type: 'string',
      title: t('filters.sportType'),
      default: '',
    },
    discipline: {
      type: 'string',
      title: t('filters.discipline'),
      default: '',
    },
    city: {
      type: 'string',
      title: t('filters.city'),
      default: '',
    },
    participantsRange: {
      type: 'array',
      title: t('filters.participants'),
      items: {
        type: 'number',
        minimum: 0,
        maximum: 1000,
      },
      minItems: 2,
      maxItems: 2,
      default: [0, 1000],
    },
    gender: {
      type: 'string',
      title: t('filters.gender'),
      enum: ['', 'male', 'female', 'mixed'],
      enumNames: [
        t('filters.all'),
        t('filters.genderMale'),
        t('filters.genderFemale'),
        t('filters.genderMixed')
      ],
      default: '',
    },
    ageGroup: {
      type: 'string',
      title: t('filters.ageGroup'),
      default: '',
    },
    eventType: {
      type: 'string',
      title: t('filters.eventType'),
      enum: ['', 'regional', 'national', 'international'],
      enumNames: [
        t('filters.all'),
        t('filters.eventTypeRegional'),
        t('filters.eventTypeNational'),
        t('filters.eventTypeInternational')
      ],
      default: '',
    },
    dateRange: {
      type: 'object',
      title: '',
      properties: {
        start: {
          type: 'string',
          format: 'date',
          title: t('filters.dateRange.start'),
        },
        end: {
          type: 'string',
          format: 'date',
          title: t('filters.dateRange.end'),
        },
      },
    },
    status: {
      type: 'string',
      title: t('filters.status'),
      enum: ['', 'draft', 'published', 'cancelled', 'completed'],
      enumNames: [
        t('filters.all'),
        t('status.draft'),
        t('status.published'),
        t('status.cancelled'),
        t('status.completed')
      ],
      default: '',
    },
  },
});

export const uiSchema: UiSchema = {
  'ui:submitButtonOptions': {
    norender: true,
  },
  '*': {
    classNames: 'filter-field',
    'ui:titleMargin': '0.5rem',
    'ui:titleProps': {
      fontSize: 'sm',
      color: 'gray.600'
    }
  },
  participantsRange: {
    'ui:widget': 'range',
  },
  dateRange: {
    'ui:field': 'dateRange',
    classNames: 'date-range-field',
    'ui:titleProps': {
      fontSize: 'xs',
      fontWeight: '500',
      color: 'gray.600'
    }
  }
};

// Функция для обновления схемы с динамическими данными
export const getUpdatedSchema = (
  t: TFunction,
  sportTypes: string[],
  disciplines: string[],
  cities: string[],
  ageGroups: string[],
): RJSFSchema => {
  const baseSchema = getFilterSchema(t);
  return {
    ...baseSchema,
    properties: {
      ...baseSchema.properties,
      sportType: {
        ...baseSchema.properties.sportType,
        enum: ['', ...sportTypes],
        enumNames: [t('filters.all'), ...sportTypes.map(type => t(`sports.${type}`))],
      },
      discipline: {
        ...baseSchema.properties.discipline,
        enum: ['', ...disciplines],
        enumNames: [t('filters.all'), ...disciplines.map(disc => t(`disciplines.${disc}`))],
      },
      city: {
        ...baseSchema.properties.city,
        enum: ['', ...cities],
        enumNames: [t('filters.all'), ...cities],
      },
      ageGroup: {
        ...baseSchema.properties.ageGroup,
        enum: ['', ...ageGroups],
        enumNames: [t('filters.all'), ...ageGroups],
      },
    },
  };
};
