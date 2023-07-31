import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function MessageIcon({
  width = 20,
  height = 20,
  color = '#B6B9CE',
}: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M8.23178 10.4557C8.70143 10.9234 9.33727 11.186 10.0001 11.186C10.663 11.186 11.2988 10.9234 11.7685 10.4557L19.8176 2.40565C19.6323 1.9423 19.3126 1.54501 18.8996 1.26491C18.4865 0.984814 17.9992 0.834733 17.5001 0.833984H2.50012C2.00108 0.834733 1.51369 0.984814 1.10068 1.26491C0.687663 1.54501 0.367925 1.9423 0.182617 2.40565L8.23178 10.4557Z"
        fill="#B6B9CE"
      />
      <Path
        d="M12.9467 11.634C12.1645 12.4142 11.1048 12.8524 10 12.8524C8.89521 12.8524 7.83552 12.4142 7.05333 11.634L0 4.58398V19.1673H20V4.58398L12.9467 11.634Z"
        fill="#B6B9CE"
      />
    </Svg>
  );
}