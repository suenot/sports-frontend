import { Box } from '@chakra-ui/react';
import { GanttChart } from '../components/GanttChart';

export default function GanttPage() {
  return (
    <Box p={4} h="100vh">
      <GanttChart />
    </Box>
  );
}
