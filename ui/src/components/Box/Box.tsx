import styled from 'styled-components';
import {
  space,
  layout,
  color,
  typography,
  border,
  flexbox,
  shadow,
  borderRadius,
  position,
  grid
} from 'styled-system';
import { BoxProps } from './types';



const Box = styled.div<BoxProps>`
    ${({ cursor, transition, transform }: BoxProps) => `
        ${cursor ? `cursor: ${cursor};` : ''}
        ${transition ? `transition: ${transition};` : ''}
        ${transform ? `transform: ${transform};` : ''}
    `}

    ${space}
    ${layout}
    ${color}
    ${typography}
    ${border}
    ${flexbox}
    ${shadow}
    ${borderRadius}
    ${position}
    ${grid}
`;

export { Box };
