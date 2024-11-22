import React, { useState } from 'react';
import { EventsListUI } from './EventsListUI';
import { EventsFilters, FiltersState } from '../Filters';
import { mockEvents } from './data';
import { Grid, GridItem, useToast } from '@chakra-ui/react';
import { EventsListActions } from './EventsListActions';
import { Event } from './types';
import { useQueryStore } from '@deep-foundation/store/query';

const initialFilters: FiltersState = {
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

// Временные данные для селектов, в будущем будут получаться с сервера
const mockFilterData = {
  sportTypes: ['Футбол', 'Баскетбол', 'Волейбол', 'Теннис', 'Хоккей'],
  disciplines: ['Профессионалы', 'Любители', 'Юниоры', 'Ветераны'],
  cities: ['Москва', 'Санкт-Петербург', 'Казань', 'Сочи', 'Екатеринбург'],
  ageGroups: ['6-12', '13-17', '18-25', '26-35', '36+'],
};

export const EventsListContainer: React.FC = () => {
  const [isLoading] = useState(false);
  const [filters, setFilters] = useQueryStore<FiltersState>('filters', initialFilters);
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [selectedEvent, setSelectedEvent] = useQueryStore<Event | undefined>('selectedEvent', undefined);
  const [role, setRole] = useQueryStore<'user' | 'manager'>('role', 'user');
  const toast = useToast();

  const handleFiltersChange = (newFilters: FiltersState) => {
    setFilters(newFilters);
    console.log('Отправка фильтров на сервер:', newFilters);
  };

  const handleFiltersReset = () => {
    setFilters(initialFilters);
    console.log('Сброс фильтров, запрос данных без фильтров');
  };

  const handleEventClick = (eventId: string) => {
    // Теперь этот метод только для раскрытия/закрытия аккордеона
    console.log('Event clicked:', eventId);
  };

  const handleRoleToggle = () => {
    setRole(prev => prev === 'user' ? 'manager' : 'user');
    setSelectedEvent(undefined);
  };

  const handleEventAdd = (newEvent: Event) => {
    // В реальном приложении здесь был бы запрос к API
    const eventWithId = {
      ...newEvent,
      id: Math.random().toString(36).substr(2, 9)
    };
    setEvents(prev => [...prev, eventWithId]);
    toast({
      title: 'Событие добавлено',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleEventEdit = (updatedEvent: Event) => {
    // В реальном приложении здесь был бы запрос к API
    setEvents(prev => prev.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    ));
    setSelectedEvent(undefined); // Очищаем выбранное событие после редактирования
    toast({
      title: 'Событие обновлено',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleEventDelete = (eventId: string) => {
    // В реальном приложении здесь был бы запрос к API
    setEvents(prev => prev.filter(event => event.id !== eventId));
    setSelectedEvent(undefined);
    toast({
      title: 'Событие удалено',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  const handleEditButtonClick = (event: Event) => {
    setSelectedEvent(event);
  };

  return (
    <Grid
      templateColumns={{ base: '1fr', md: '300px 1fr' }}
      gap={4}
      p={4}
    >
      <GridItem>
        <EventsFilters
          filters={filters}
          onFiltersChange={handleFiltersChange}
          sportTypes={mockFilterData.sportTypes}
          disciplines={mockFilterData.disciplines}
          cities={mockFilterData.cities}
          ageGroups={mockFilterData.ageGroups}
          onReset={handleFiltersReset}
        />
      </GridItem>
      <GridItem>
        <EventsListActions
          role={role}
          onRoleToggle={handleRoleToggle}
          onEventAdd={handleEventAdd}
          onEventEdit={handleEventEdit}
          onEventDelete={handleEventDelete}
          selectedEvent={selectedEvent}
        />
        <EventsListUI
          events={events}
          onEventClick={handleEventClick}
          isLoading={isLoading}
          role={role}
          onEventEdit={handleEditButtonClick}
          onEventDelete={handleEventDelete}
        />
      </GridItem>
    </Grid>
  );
};
