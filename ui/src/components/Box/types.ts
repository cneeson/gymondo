import { MutableRefObject } from 'react';
import {
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  ShadowProps,
  BorderProps,
  FlexboxProps,
  BorderRadiusProps,
  PositionProps,
  GridProps
} from 'styled-system';

export interface BoxProps extends
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  BorderProps,
  FlexboxProps,
  ShadowProps,
  BorderRadiusProps,
  PositionProps,
  GridProps {
  cursor?: string;
  pointerEvents?: string;
  transition?: string;
  color?: string;
  children?: any;
  transform?: string;
  ref?: MutableRefObject<any>;
  as?: any;
}
