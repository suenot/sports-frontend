import React from 'react';
import {
  Box,
  Text,
  Image,
  Badge,
  HStack,
  VStack,
  Spinner,
  Center,
  IconButton,
  Tooltip,
  Flex,
  useColorModeValue,
  Heading,
  ButtonGroup,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
} from '@chakra-ui/react';
import { 
  CalendarIcon, 
  EditIcon, 
  DeleteIcon,
  TimeIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { FaMapMarkedAlt, FaFilter } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { useTranslation } from 'next-i18next';
import { Event, ViewType } from './types';
import { GanttChart } from '../GanttChart';

interface EventsListUIProps {
  events: Event[];
  onEventClick: (eventId: string) => void;
  isLoading: boolean;
  role?: string;
  onEventEdit?: (event: Event) => void;
  onEventDelete?: (eventId: string) => void;
  viewType: ViewType;
  onViewTypeChange: (viewType: ViewType) => void;
  onFiltersClick?: () => void;
}

const getStatusColor = (status: Event['status']) => {
  switch (status) {
    case 'published':
      return 'green';
    case 'draft':
      return 'gray';
    case 'archived':
      return 'red';
    default:
      return 'gray';
  }
};

export const EventsListUI: React.FC<EventsListUIProps> = ({
  events,
  onEventClick,
  isLoading,
  role,
  onEventEdit,
  onEventDelete,
  viewType,
  onViewTypeChange,
  onFiltersClick,
}) => {
  const { t } = useTranslation(['sections/events']);
  const bgColor = useColorModeValue('white', 'gray.800');

  if (isLoading) {
    return (
      <Center h="200px">
        <Spinner />
      </Center>
    );
  }

  if (!events || events.length === 0) {
    return (
      <Center h="calc(100vh - 64px)">
        <Text>{t('noEvents')}</Text>
      </Center>
    );
  }

  const renderViewTypeButtons = () => (
    <Flex justify="space-between" align="center" mb={4}>
      <Heading size="lg">{t('eventsList')}</Heading>
      <HStack spacing={4}>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button
            onClick={() => onViewTypeChange(ViewType.LIST)}
            colorScheme={viewType === ViewType.LIST ? 'blue' : undefined}
          >
            <HamburgerIcon mr={2} /> {t('list')}
          </Button>
          <Button
            onClick={() => onViewTypeChange(ViewType.GRID)}
            colorScheme={viewType === ViewType.GRID ? 'blue' : undefined}
          >
            <Box as={BsGrid3X3Gap} mr={2} /> {t('grid')}
          </Button>
          <Button
            onClick={() => onViewTypeChange(ViewType.CALENDAR)}
            colorScheme={viewType === ViewType.CALENDAR ? 'blue' : undefined}
          >
            <CalendarIcon mr={2} /> {t('calendarView')}
          </Button>
          <Button
            onClick={() => onViewTypeChange(ViewType.MAP)}
            colorScheme={viewType === ViewType.MAP ? 'blue' : undefined}
          >
            <Box as={FaMapMarkedAlt} mr={2} /> {t('map')}
          </Button>
        </ButtonGroup>
        <Tooltip label={t('filter.title')}>
          <IconButton
            aria-label={t('filter.title')}
            icon={<Box as={FaFilter} />}
            variant="outline"
            size="sm"
            onClick={onFiltersClick}
          />
        </Tooltip>
      </HStack>
    </Flex>
  );

  const renderDefaultView = () => (
    <VStack spacing={4} align="stretch">
      {events.map((event) => (
        <Box
          key={event.id}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          onClick={() => onEventClick(event.id)}
          cursor="pointer"
          _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
        >
          <Flex justify="space-between" align="center">
            <Box flex="1">
              <HStack>
                {event.media?.thumbnails?.[0] && (
                  <Image
                    boxSize="40px"
                    objectFit="cover"
                    src={event.media.thumbnails[0]}
                    alt={event.title}
                    borderRadius="md"
                  />
                )}
                <Box>
                  <Text fontWeight="bold" fontSize="lg">
                    {event.title}
                  </Text>
                  <HStack spacing={2} mt={1}>
                    <Badge colorScheme={getStatusColor(event.status)}>
                      {t(event.status)}
                    </Badge>
                    {event.stages?.length > 0 && (
                      <Badge colorScheme="purple">
                        {event.stages.length} {t('stages')}
                      </Badge>
                    )}
                  </HStack>
                </Box>
              </HStack>
              {event.description && (
                <Text color="gray.500" mt={2} noOfLines={2}>
                  {event.description}
                </Text>
              )}
              <HStack mt={2} spacing={4} color="gray.600">
                {event.dates?.start && (
                  <HStack fontSize="sm">
                    <CalendarIcon />
                    <Text>{new Date(event.dates.start).toLocaleDateString()}</Text>
                  </HStack>
                )}
                {event.location?.city && (
                  <HStack fontSize="sm">
                    <Box as={MdLocationOn} /> 
                    <Text>{event.location.city}</Text>
                  </HStack>
                )}
              </HStack>
            </Box>
            {role === 'manager' && (
              <HStack>
                <Tooltip label={t('edit')}>
                  <IconButton
                    icon={<EditIcon />}
                    aria-label={t('edit')}
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventEdit?.(event);
                    }}
                  />
                </Tooltip>
                <Tooltip label={t('delete')}>
                  <IconButton
                    icon={<DeleteIcon />}
                    aria-label={t('delete')}
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventDelete?.(event.id);
                    }}
                  />
                </Tooltip>
              </HStack>
            )}
          </Flex>
        </Box>
      ))}
    </VStack>
  );

  const renderGridView = () => (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap={6}
      w="full"
    >
      {events.map((event) => (
        <Box
          key={event.id}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          onClick={() => onEventClick(event.id)}
          cursor="pointer"
          _hover={{ bg: useColorModeValue('gray.50', 'gray.700') }}
        >
          {event.media?.thumbnails?.[0] && (
            <Image
              w="full"
              h="200px"
              objectFit="cover"
              src={event.media.thumbnails[0]}
              alt={event.title}
              borderRadius="md"
              mb={4}
            />
          )}
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {event.title}
            </Text>
            <HStack spacing={2} mt={1}>
              <Badge colorScheme={getStatusColor(event.status)}>
                {t(event.status)}
              </Badge>
              {event.stages?.length > 0 && (
                <Badge colorScheme="purple">
                  {event.stages.length} {t('stages')}
                </Badge>
              )}
            </HStack>
            {event.description && (
              <Text color="gray.500" mt={2} noOfLines={2}>
                {event.description}
              </Text>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );

  const renderCalendarView = () => (
    <Box 
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      mt="60px"
    >
      <GanttChart events={events} />
    </Box>
  );

  return (
    <Box position="relative" h="100vh">
      {renderViewTypeButtons()}
      {viewType === ViewType.GRID 
        ? renderGridView() 
        : viewType === ViewType.CALENDAR 
        ? renderCalendarView()
        : viewType === ViewType.MAP
        ? <Center h="400px"><Text>Map view coming soon...</Text></Center>
        : renderDefaultView()}
    </Box>
  );
};
