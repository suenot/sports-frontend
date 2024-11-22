import React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Badge,
  VStack,
  Spinner,
  Center,
  Image,
  HStack,
  Text,
  Stack,
  IconButton,
  Tooltip,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next';
import { Event, Stage } from './types';

interface EventsListUIProps {
  events: Event[];
  onEventClick: (eventId: string) => void;
  isLoading: boolean;
  role: 'user' | 'manager';
  onEventEdit?: (event: Event) => void;
  onEventDelete?: (eventId: string) => void;
}

const getStatusColor = (status: Event['status']) => {
  switch (status) {
    case 'published':
      return 'blue';
    case 'draft':
      return 'gray';
    case 'cancelled':
      return 'red';
    case 'completed':
      return 'green';
    default:
      return 'gray';
  }
};

const getStageStatusColor = (status: Stage['status']) => {
  switch (status) {
    case 'upcoming':
      return 'blue';
    case 'ongoing':
      return 'green';
    case 'completed':
      return 'gray';
    case 'cancelled':
      return 'red';
    default:
      return 'gray';
  }
};

const formatDate = (date: string, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(new Date(date));
};

const StagesList: React.FC<{ stages: Stage[] }> = ({ stages }) => {
  const { t, i18n } = useTranslation('common');
  const stageBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Stack spacing={3}>
      {stages.map((stage) => (
        <Box key={stage.id} p={3} bg={stageBg} borderRadius="md">
          <HStack spacing={2} mb={2}>
            <Badge 
              colorScheme={getStageStatusColor(stage.status)}
              px={2}
              py={0.5}
              borderRadius="full"
            >
              {t(`events.stage.status.${stage.status}`)}
            </Badge>
            <Text fontWeight="medium">
              {t('events.stage.title', { number: stage.title.split(':')[0].split(' ')[1], name: stage.title.split(':')[1].trim() })}
            </Text>
          </HStack>
          <Text fontSize="sm" color="gray.600">
            {formatDate(stage.dates.start, i18n.language)}
            {stage.dates.end !== stage.dates.start && 
              ` - ${formatDate(stage.dates.end, i18n.language)}`}
          </Text>
          {stage.description && (
            <Text fontSize="sm" mt={2}>
              {stage.description}
            </Text>
          )}
        </Box>
      ))}
    </Stack>
  );
};

const EventItem: React.FC<{
  event: Event;
  onClick: () => void;
  role: 'user' | 'manager';
  onEdit?: () => void;
  onDelete?: () => void;
}> = ({ event, onClick, role, onEdit, onDelete }) => {
  const { t } = useTranslation('common');
  const itemBg = useColorModeValue('white', 'gray.800');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <AccordionItem 
      border="1px" 
      borderColor="gray.200" 
      borderRadius="lg" 
      mb={2}
      bg={itemBg}
    >
      <Flex>
        <AccordionButton 
          flex="1"
          p={4}
          _hover={{ bg: hoverBg }}
          onClick={onClick}
        >
          <HStack flex="1" spacing={4}>
            {event.media.thumbnails[0] && (
              <Image
                src={event.media.thumbnails[0]}
                alt={event.title}
                boxSize="50px"
                objectFit="cover"
                borderRadius="md"
                fallbackSrc="https://via.placeholder.com/50"
              />
            )}
            <Box flex="1" textAlign="left">
              <Text fontWeight="bold">
                {t(`events.sports.${event.sportType}`)} - {event.title.split(' - ')[1]}
              </Text>
              <Text fontSize="sm" color="gray.600">{event.shortDescription}</Text>
            </Box>
            <Badge 
              colorScheme={getStatusColor(event.status)}
              px={3}
              py={1}
              borderRadius="full"
              textTransform="uppercase"
              fontSize="xs"
              fontWeight="bold"
            >
              {t(`events.status.${event.status}`)}
            </Badge>
          </HStack>
          <AccordionIcon ml={4} />
        </AccordionButton>
        
        {role === 'manager' && (
          <Flex p={2} alignItems="center">
            <Tooltip label={t('events.actions.editEvent')}>
              <IconButton
                aria-label={t('events.actions.editEvent')}
                icon={<EditIcon />}
                colorScheme="yellow"
                size="sm"
                mr={2}
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit?.();
                }}
              />
            </Tooltip>
            <Tooltip label={t('events.actions.deleteEvent')}>
              <IconButton
                aria-label={t('events.actions.deleteEvent')}
                icon={<DeleteIcon />}
                colorScheme="red"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete?.();
                }}
              />
            </Tooltip>
          </Flex>
        )}
      </Flex>

      <AccordionPanel pb={4}>
        <Box>
          <HStack spacing={4} mb={4}>
            <Box>
              <Text fontSize="sm" color="gray.600">{t('events.location')}</Text>
              <Text>{event.location.city}</Text>
              <Text fontSize="sm">{event.location.venue}</Text>
            </Box>
            <Box>
              <Text fontSize="sm" color="gray.600">{t('events.sportType')}</Text>
              <Text>{t(`events.sports.${event.sportType}`)}</Text>
              <Text fontSize="sm">{t(`events.disciplines.${event.discipline}`)}</Text>
            </Box>
          </HStack>
          <Text fontSize="sm" color="gray.600" mb={2}>{t('events.stages')}:</Text>
          <StagesList stages={event.stages} />
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
};

export const EventsListUI: React.FC<EventsListUIProps> = ({
  events,
  onEventClick,
  isLoading,
  role,
  onEventEdit,
  onEventDelete,
}) => {
  const { t } = useTranslation('common');
  const containerBg = useColorModeValue('white', 'gray.800');

  if (isLoading) {
    return (
      <Center h="200px">
        <Spinner size="xl" color="blue.500" thickness="4px" />
      </Center>
    );
  }

  if (!events || events.length === 0) {
    return (
      <Center h="200px">
        <Text>{t('events.noEvents')}</Text>
      </Center>
    );
  }

  return (
    <Box w="100%" p={4}>
      <Box 
        w="100%" 
        bg={containerBg}
        borderRadius="lg" 
        shadow="sm" 
        maxH="80vh"
        overflowY="auto"
      >
        <Accordion allowMultiple defaultIndex={[]}>
          {events.map((event) => (
            <EventItem
              key={event.id}
              event={event}
              onClick={() => onEventClick(event.id)}
              role={role}
              onEdit={() => onEventEdit?.(event)}
              onDelete={() => onEventDelete?.(event.id)}
            />
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};
