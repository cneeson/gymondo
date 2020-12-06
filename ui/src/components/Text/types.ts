import {
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  BorderProps,
  FlexboxProps
} from 'styled-system';

export interface TextProps extends
  SpaceProps,
  LayoutProps,
  ColorProps,
  TypographyProps,
  BorderProps,
  FlexboxProps
   {
  children?: any;
}
