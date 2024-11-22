import { RJSFSchema } from '@rjsf/utils';
import { TFunction } from 'next-i18next';

export const getEventSchema = (t: TFunction): RJSFSchema => ({
  type: 'object',
  required: ['title', 'shortDescription', 'sportType', 'discipline', 'location', 'stages'],
  properties: {
    title: {
      type: 'string',
      title: t('events.form.title'),
      description: t('events.form.tooltips.title')
    },
    shortDescription: {
      type: 'string',
      title: t('events.form.shortDescription'),
      description: t('events.form.tooltips.shortDescription')
    },
    description: {
      type: 'string',
      title: t('events.form.description'),
      description: t('events.form.tooltips.description')
    },
    sportType: {
      type: 'string',
      title: t('events.form.sportType'),
      description: t('events.form.tooltips.sportType'),
      enum: ['football', 'basketball', 'volleyball', 'tennis', 'hockey']
    },
    discipline: {
      type: 'string',
      title: t('events.form.discipline'),
      description: t('events.form.tooltips.discipline'),
      enum: ['professional', 'amateur', 'junior', 'veteran']
    },
    eventType: {
      type: 'string',
      title: t('events.form.eventType'),
      description: t('events.form.tooltips.eventType'),
      enum: ['regional', 'national', 'international']
    },
    ageGroup: {
      type: 'string',
      title: t('events.form.ageGroup'),
      description: t('events.form.tooltips.ageGroup'),
      enum: ['6-12', '13-17', '18-25', '26-35', '36+']
    },
    gender: {
      type: 'string',
      title: t('events.form.gender'),
      description: t('events.form.tooltips.gender'),
      enum: ['male', 'female', 'mixed']
    },
    location: {
      type: 'object',
      title: t('events.form.location.title'),
      required: ['city', 'venue', 'address'],
      properties: {
        city: {
          type: 'string',
          title: t('events.form.location.city'),
          description: t('events.form.tooltips.location.city')
        },
        venue: {
          type: 'string',
          title: t('events.form.location.venue'),
          description: t('events.form.tooltips.location.venue')
        },
        address: {
          type: 'string',
          title: t('events.form.location.address'),
          description: t('events.form.tooltips.location.address')
        }
      }
    },
    stages: {
      type: 'array',
      title: t('events.form.stages.title'),
      description: t('events.form.tooltips.stages.title'),
      minItems: 1,
      items: {
        type: 'object',
        required: ['title', 'type', 'dates'],
        properties: {
          title: {
            type: 'string',
            title: t('events.form.stages.stageTitle')
          },
          type: {
            type: 'string',
            title: t('events.form.stages.type'),
            description: t('events.form.tooltips.stages.type'),
            enum: ['registration', 'qualification', 'semifinal', 'final', 'other']
          },
          description: {
            type: 'string',
            title: t('events.form.stages.description')
          },
          dates: {
            type: 'object',
            title: t('events.form.stages.dates.title'),
            description: t('events.form.tooltips.stages.dates'),
            required: ['start', 'end'],
            properties: {
              start: {
                type: 'string',
                title: t('events.form.stages.dates.start'),
                format: 'date'
              },
              end: {
                type: 'string',
                title: t('events.form.stages.dates.end'),
                format: 'date'
              }
            }
          }
        }
      }
    }
  }
});

export const getUiSchema = (t: TFunction) => ({
  description: {
    'ui:widget': 'textarea'
  },
  shortDescription: {
    'ui:widget': 'textarea'
  },
  sportType: {
    'ui:enumNames': [
      t('events.sports.Футбол'),
      t('events.sports.Баскетбол'),
      t('events.sports.Волейбол'),
      t('events.sports.Теннис'),
      t('events.sports.Хоккей')
    ]
  },
  discipline: {
    'ui:enumNames': [
      t('events.disciplines.Профессионалы'),
      t('events.disciplines.Любители'),
      t('events.disciplines.Юниоры'),
      t('events.disciplines.Ветераны')
    ]
  },
  eventType: {
    'ui:enumNames': [
      t('events.form.types.regional'),
      t('events.form.types.national'),
      t('events.form.types.international')
    ],
    'ui:help': t('events.form.popovers.eventType.title'),
    'ui:options': {
      popover: {
        regional: t('events.form.popovers.eventType.regional'),
        national: t('events.form.popovers.eventType.national'),
        international: t('events.form.popovers.eventType.international')
      }
    }
  },
  gender: {
    'ui:enumNames': [
      t('events.form.genders.male'),
      t('events.form.genders.female'),
      t('events.form.genders.mixed')
    ]
  },
  stages: {
    'ui:options': {
      orderable: true,
      popover: {
        title: t('events.form.popovers.stages.title'),
        registration: t('events.form.popovers.stages.registration'),
        qualification: t('events.form.popovers.stages.qualification'),
        semifinal: t('events.form.popovers.stages.semifinal'),
        final: t('events.form.popovers.stages.final')
      }
    },
    items: {
      description: {
        'ui:widget': 'textarea'
      },
      type: {
        'ui:enumNames': [
          t('events.stage.type.registration'),
          t('events.stage.type.qualification'),
          t('events.stage.type.semifinal'),
          t('events.stage.type.final'),
          t('events.stage.type.other')
        ]
      }
    }
  }
});
