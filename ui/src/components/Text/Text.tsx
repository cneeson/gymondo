import styled from 'styled-components';
import { typography, space, color, flexbox, layout, borders } from 'styled-system';
import { TextProps } from './types';

const Text = styled.p<TextProps>`
  ${({ theme: { fonts, colors }}) => `
    font-family: ${fonts.body};
    color: ${colors.text};
  `}

  ${typography}
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${borders}
`;

export { Text };
