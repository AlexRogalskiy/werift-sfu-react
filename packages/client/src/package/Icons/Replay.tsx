import React from 'react';
import Icon, { IconProps } from './Icon';

function ReplayIcon(props: Omit<IconProps, 'children'>) {
  return (
    <Icon {...props}>
      M12,5V1L7,6L12,11V7A6,6 0 0,1 18,13A6,6 0 0,1 12,19A6,6 0 0,1 6,13H4A8,8 0 0,0 12,21A8,8 0 0,0
      20,13A8,8 0 0,0 12,5Z
    </Icon>
  );
}

export default ReplayIcon;
