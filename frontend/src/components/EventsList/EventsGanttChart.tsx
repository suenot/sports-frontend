import React from 'react';
import { Box } from '@chakra-ui/react';
import { Event } from './types';
import { GanttChart } from '../GanttChart';

interface EventsGanttChartProps {
  events: Event[];
}

export const EventsGanttChart: React.FC<EventsGanttChartProps> = ({ events }) => {
  return (
    <Box height="calc(100vh - 180px)">
      <GanttChart events={events} />
    </Box>
  );
};
