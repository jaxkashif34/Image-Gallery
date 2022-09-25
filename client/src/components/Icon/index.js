import React from 'react';
import { Icon } from '@iconify/react';

export const Iconnify = ({ icon = 'fluent:accessibility-16-regular', width = 24, height = 24, ...rest }) => {
  return <Icon icon={icon} width={width} height={height} {...rest} />;
};
