import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const ArrowLeftIcon = (props: SvgProps) => {
  return (
    <Svg
      width={15}
      height={19}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M9.5 2L2.707 8.793a1 1 0 000 1.414L9.5 17"
        stroke="#333"
        strokeWidth={3}
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default ArrowLeftIcon;
