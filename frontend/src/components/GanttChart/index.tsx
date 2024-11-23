import { Box, Text, HStack, VStack, useColorModeValue } from '@chakra-ui/react';
import { mockEvents } from '../EventsList/data';
import { useMemo } from 'react';

interface PositionedEvent {
  event: typeof mockEvents[0];
  row: number;
}

export const GanttChart = () => {
  const events = useMemo(() => {
    // Сортируем события по максимальному количеству участников среди всех этапов
    return mockEvents
      .slice(0, 20)
      .map(event => ({
        ...event,
        maxParticipants: Math.max(...event.stages.map(stage => stage.maxParticipants || 0))
      }))
      .sort((a, b) => b.maxParticipants - a.maxParticipants);
  }, []);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Находим минимальную и максимальную даты для определения временного диапазона
  const timeRange = useMemo(() => {
    const dates = events.flatMap(event => 
      event.stages.map(stage => [
        new Date(stage.dates.start),
        new Date(stage.dates.end)
      ])
    ).flat();

    return {
      start: new Date(Math.min(...dates.map(d => d.getTime()))),
      end: new Date(Math.max(...dates.map(d => d.getTime())))
    };
  }, [events]);

  // Создаем массив дат для шкалы времени
  const dateRange = useMemo(() => {
    const dates = [];
    const currentDate = new Date(timeRange.start);
    while (currentDate <= timeRange.end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }, [timeRange]);

  // Распределяем события по строкам (как на itch.io)
  const positionedEvents = useMemo(() => {
    const result: PositionedEvent[] = [];
    const rows: { end: number }[][] = [[]]; // массив строк, каждая строка содержит конечные даты событий

    events.forEach(event => {
      // Сортируем этапы по количеству участников
      const sortedStages = [...event.stages].sort((a, b) => (b.maxParticipants || 0) - (a.maxParticipants || 0));
      const eventStart = Math.min(...sortedStages.map(stage => new Date(stage.dates.start).getTime()));
      const eventEnd = Math.max(...sortedStages.map(stage => new Date(stage.dates.end).getTime()));

      // Найдем подходящую строку для события
      let rowIndex = 0;
      let foundRow = false;

      while (!foundRow) {
        if (!rows[rowIndex]) {
          rows[rowIndex] = [];
        }

        // Проверяем, можем ли мы поместить событие в текущую строку
        const canFit = rows[rowIndex].every(existingEvent => {
          return existingEvent.end < eventStart;
        });

        if (canFit) {
          rows[rowIndex].push({ end: eventEnd });
          result.push({ 
            event: { 
              ...event, 
              stages: sortedStages // Используем отсортированные этапы
            }, 
            row: rowIndex 
          });
          foundRow = true;
        } else {
          rowIndex++;
        }
      }
    });

    return result;
  }, [events]);

  return (
    <Box
      bg={bgColor}
      borderRadius="lg"
      border="1px"
      borderColor={borderColor}
      p={4}
      overflowX="auto"
    >
      {/* Header with dates */}
      <HStack spacing={0} mb={4} position="sticky" top={0} bg={bgColor} zIndex={1}>
        <HStack spacing={0} width="100%">
          {dateRange.map((date, index) => (
            <Box
              key={index}
              minW="240px"
              p={2}
              borderLeft="1px"
              borderColor={borderColor}
              textAlign="center"
            >
              <Text fontSize="md">{date.getDate()}</Text>
              <Text fontSize="sm" color="gray.500">
                {date.toLocaleString('default', { month: 'long' })}
              </Text>
            </Box>
          ))}
        </HStack>
      </HStack>

      {/* Events Grid */}
      <Box position="relative" minH="200px">
        {/* Background Grid */}
        <HStack spacing={0} position="absolute" top={0} left={0} width="100%" height="100%">
          {dateRange.map((_, index) => (
            <Box
              key={index}
              minW="240px"
              height="100%"
              borderLeft="1px"
              borderColor={borderColor}
            />
          ))}
        </HStack>

        {/* Events */}
        {positionedEvents.map(({ event, row }) => (
          <Box
            key={event.id}
            position="absolute"
            top={`${row * 50 + 5}px`}
            left={0}
            width="100%"
            height="40px"
          >
            {event.stages.map((stage) => {
              const startDate = new Date(stage.dates.start);
              const endDate = new Date(stage.dates.end);
              const startIndex = dateRange.findIndex(
                d => d.toDateString() === startDate.toDateString()
              );
              const duration = Math.ceil(
                (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
              );

              return (
                <Box
                  key={stage.id}
                  position="absolute"
                  left={`${startIndex * 240}px`}
                  width={`${duration * 240}px`}
                  height="100%"
                  bg={`hsl(${(row * 60) % 360}, 70%, 60%)`}
                  opacity={0.8}
                  borderRadius="md"
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{
                    opacity: 1,
                    transform: 'translateY(-2px)',
                    boxShadow: 'md'
                  }}
                >
                  <Box p={2}>
                    <Text
                      fontSize="sm"
                      fontWeight="bold"
                      color="white"
                      noOfLines={1}
                      textShadow="0 0 2px rgba(0,0,0,0.5)"
                    >
                      {event.title} ({stage.maxParticipants})
                    </Text>
                    <Text
                      fontSize="sm"
                      color="white"
                      noOfLines={1}
                      textShadow="0 0 2px rgba(0,0,0,0.5)"
                    >
                      {stage.title}
                    </Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
