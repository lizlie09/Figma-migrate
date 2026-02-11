import { Box, Icon, Tooltip } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import type { ReactNode } from 'react';

interface InfoTooltipIconProps {
  label: ReactNode;
  placement?: 'left' | 'right' | 'top' | 'bottom';
}

export default function InfoTooltipIcon({
  label,
  placement = 'left',
}: InfoTooltipIconProps) {
  return (
    <Tooltip
      placement={placement}
      hasArrow
      arrowShadowColor="#8A63D2"
      bg="#26214B"
      color="white"
      border="1px solid"
      borderColor="#8A63D2"
      borderRadius="8px"
      px={2}
      py={1.5}
      label={label}
    >
      <Box as="span" cursor="help" display="inline-flex">
        <Icon
          as={FiInfo}
          boxSize={4}
          color="#FFFFFF"
          _hover={{ color: 'gray.300' }}
        />
      </Box>
    </Tooltip>
  );
}
