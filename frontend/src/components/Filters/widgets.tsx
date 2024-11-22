import React from 'react';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  HStack,
  Text,
} from '@chakra-ui/react';
import { WidgetProps } from '@rjsf/utils';

export const RangeWidget = ({
  value,
  onChange,
  schema,
  uiSchema,
}: WidgetProps) => {
  const min = schema.items?.minimum || 0;
  const max = schema.items?.maximum || 1000;
  const step = schema.items?.multipleOf || 50;

  return (
    <>
      <RangeSlider
        min={min}
        max={max}
        step={step}
        value={value || [min, max]}
        onChange={onChange}
        aria-label={['min', 'max']}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <HStack justify="space-between" mt={1}>
        <Text fontSize="sm">{value ? value[0] : min}</Text>
        <Text fontSize="sm">{value ? value[1] : max}</Text>
      </HStack>
    </>
  );
};
