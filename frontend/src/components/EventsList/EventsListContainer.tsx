'use client';

import React from 'react';
import { Box, IconButton, useBreakpointValue, useDisclosure } from '@chakra-ui/react';
import { SearchIcon, AddIcon } from '@chakra-ui/icons';
import { EventsListUI } from './EventsListUI';
import { FiltersDrawer } from '../Filters/FiltersDrawer';
import { EventDrawer } from './EventDrawer';
import { EventFormDrawer } from './EventFormDrawer';
import { Event } from './types';
import { FiltersState } from '../Filters/EventsFilters';
import { useEventData } from '../../hooks/useEventData';
import { useQueryStore } from '@deep-foundation/store/query';

interface EventsListContainerProps {
  events: Event[];
  isLoading: boolean;
  role: 'user' | 'manager';
  onEventEdit?: (event: Event) => void;
  onEventDelete?: (eventId: string) => void;
  sportTypes: string[];
  disciplines: string[];
  cities: string[];
  ageGroups: string[];
}

export const EventsListContainer: React.FC<EventsListContainerProps> = ({
  events,
  isLoading,
  role,
  onEventEdit,
  onEventDelete,
  sportTypes,
  disciplines,
  cities,
  ageGroups,
}) => {
  const { getEventById } = useEventData();
  
  // Используем хуки для управления состоянием
  const [isEventViewOpen, setIsEventViewOpen] = useQueryStore('events.view.open', false);
  const [isEventEditOpen, setIsEventEditOpen] = useQueryStore('events.edit.open', false);
  const [isEventAddOpen, setIsEventAddOpen] = useQueryStore('events.add.open', false);
  const [currentEventId, setCurrentEventId] = useQueryStore<string | null>('events.current', null);

  // Состояние для фильтров drawer
  const {
    isOpen: isFiltersOpen,
    onOpen: onFiltersOpen,
    onClose: onFiltersClose,
  } = useDisclosure();

  // Определяем отступ для контента в зависимости от размера экрана
  const contentPadding = useBreakpointValue({
    base: '0',
    md: '60px',
  });

  // Получаем текущее событие из списка по ID
  const currentEvent = currentEventId 
    ? getEventById(currentEventId)
    : null;

  // Обработчики для управления состоянием drawer'ов
  const openEventView = (eventId: string) => {
    setCurrentEventId(eventId);
    setIsEventViewOpen(true);
  };

  const openEventEdit = (eventId: string) => {
    setCurrentEventId(eventId);
    setIsEventEditOpen(true);
  };

  const openEventAdd = () => {
    setIsEventAddOpen(true);
  };

  const closeEvent = () => {
    setIsEventViewOpen(false);
    setIsEventEditOpen(false);
    setIsEventAddOpen(false);
    setCurrentEventId(null);
  };

  // Обработчик клика по событию
  const handleEventClick = (eventId: string) => {
    openEventView(eventId);
  };

  // Обработчик редактирования события
  const handleEventEdit = (event: Event) => {
    openEventEdit(event.id);
  };

  // Обработчик добавления события
  const handleEventAdd = (eventData: Partial<Event>) => {
    console.log('Adding event:', eventData);
    // Здесь будет логика добавления события
    closeEvent();
  };

  // Обработчик сохранения отредактированного события
  const handleEventEditSubmit = (eventData: Partial<Event>) => {
    if (currentEvent) {
      onEventEdit?.({ ...currentEvent, ...eventData });
    }
    closeEvent();
  };

  return (
    <Box position="relative">
      {/* Кнопки управления drawer'ами */}
      <Box
        position="fixed"
        bottom={4}
        right={4}
        zIndex={2}
        display="flex"
        gap={2}
      >
        {role === 'manager' && (
          <IconButton
            aria-label="Добавить событие"
            icon={<AddIcon />}
            onClick={openEventAdd}
            colorScheme="green"
            size="lg"
            rounded="full"
            shadow="lg"
          />
        )}
        <IconButton
          aria-label="Открыть фильтры"
          icon={<SearchIcon />}
          onClick={onFiltersOpen}
          colorScheme="blue"
          size="lg"
          rounded="full"
          shadow="lg"
        />
      </Box>

      {/* Основной список событий */}
      <Box 
        pl={{ base: 0, md: contentPadding }} 
        pr={{ base: 0, md: contentPadding }}
        transition="padding 0.2s"
      >
        <EventsListUI
          events={events}
          isLoading={isLoading}
          role={role}
          onEventClick={handleEventClick}
          onEventEdit={handleEventEdit}
          onEventDelete={onEventDelete}
        />
      </Box>

      {/* Drawer с фильтрами */}
      <FiltersDrawer
        isOpen={isFiltersOpen}
        onClose={onFiltersClose}
        sportTypes={sportTypes}
        disciplines={disciplines}
        cities={cities}
        ageGroups={ageGroups}
      />

      {/* Drawer с деталями события */}
      <EventDrawer
        isOpen={isEventViewOpen}
        onClose={closeEvent}
        event={currentEvent}
      />

      {/* Drawer для добавления события */}
      <EventFormDrawer
        isOpen={isEventAddOpen}
        onClose={closeEvent}
        onSubmit={handleEventAdd}
        isEdit={false}
      />

      {/* Drawer для редактирования события */}
      <EventFormDrawer
        isOpen={isEventEditOpen}
        onClose={closeEvent}
        event={currentEvent}
        onSubmit={handleEventEditSubmit}
        isEdit={true}
      />
    </Box>
  );
};
