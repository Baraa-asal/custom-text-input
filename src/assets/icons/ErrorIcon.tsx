import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function ErrorIcon({width = 15, height = 16}: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 16" fill="none">
      <Path
        d="M15 8.00023C15 9.39633 14.5601 10.7611 13.736 11.9219C12.9119 13.0827 11.7406 13.9875 10.3701 14.5217C8.99968 15.056 7.49168 15.1958 6.03683 14.9234C4.58197 14.6511 3.2456 13.9788 2.1967 12.9916C1.14781 12.0044 0.433503 10.7466 0.144114 9.37734C-0.145275 8.00806 0.00324965 6.58877 0.570907 5.29894C1.13856 4.0091 2.09986 2.90667 3.33323 2.13103C4.5666 1.3554 6.01664 0.941406 7.5 0.941406C9.48847 0.94343 11.3949 1.68778 12.8009 3.01112C14.207 4.33447 14.9979 6.12874 15 8.00023ZM8.125 3.88258H6.875V9.76494H8.125V3.88258ZM8.125 10.9414H6.875V12.1179H8.125V10.9414Z"
        fill="#FF7474"
      />
    </Svg>
  );
}
