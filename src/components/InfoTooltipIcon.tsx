import { Icon, Tooltip } from '@chakra-ui/react';
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
      bg="#1A1830"
      color="white"
      borderRadius="8px"
      px={2}
      py={1}
      label={label}
      shouldWrapChildren
      border="1px solid #7D67FF"
    >
      <Icon
        as={FiInfo}
        boxSize={4}
        color="#FFFFFF"
        cursor="pointer"
        _hover={{ color: 'gray.300' }}
      />
    </Tooltip>
  );
}
