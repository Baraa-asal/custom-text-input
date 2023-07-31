import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from './IconProps';

export function CloseIcon({width = 14, height = 14}: IconProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <Path
        d="M13.9129 1.36797L13.9998 1.28006L12.9416 0.102572L12.8568 9.53674e-07L7.03012 5.811L1.40228 0.170605C1.37507 0.143392 1.34576 0.126645 1.30599 0.103619L1.20969 0.0313997L0.0761719 1.29366L5.80868 7.03349L0.216423 12.6142C0.199676 12.631 0.191304 12.6477 0.190257 12.6509L0.118038 12.7377L1.15213 13.888L1.24737 13.9686L1.34367 13.8964C1.36565 13.8849 1.39914 13.8681 1.42216 13.8409L7.03117 8.25493L12.6789 13.9027L12.7773 14L13.9244 12.7231L8.25365 7.03349L13.9129 1.36797Z"
        fill="#6E7184"
      />
    </Svg>
  );
}