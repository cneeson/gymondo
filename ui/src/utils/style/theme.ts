import { Theme } from './types';


const breakpoints = ['28em', '40em', '52em', '64em', '76em', '90em'];

const theme: Theme = {
  fonts: {
    heading: 'Roboto, Arial, Helvetica, sans-serif',
    body: 'Roboto, Arial, Helvetica, sans-serif'
  },
  fontWeights: {
    regular: 400,
    bold: 700
  },
  fontSizes: [
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '3rem',
    '3.75rem'
  ],
  shadows: [
    '0 3px 4px 0 rgba(0,0,0,0.06)',
    '0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.2)'
  ],
  lineHeights: [
    'normal',
    '1.5rem',
    '2rem',
    '3.5rem',
    '4.25rem'
  ],
  letterSpacings: [
    '0.2px',
    '0.5px'
  ],
  breakpoints,
  mediaQueries: {
    xs: `@media screen and (max-width: ${breakpoints[0]})`,
    sm: `@media screen and (max-width: ${breakpoints[1]})`,
    md: `@media screen and (max-width: ${breakpoints[2]})`,
    lg: `@media screen and (max-width: ${breakpoints[3]})`,
    xlg: `@media screen and (max-width: ${breakpoints[4]})`,
    xxlg: `@media screen and (max-width: ${breakpoints[5]})`
  },
  space: [
    '0.25rem',
    '0.5rem',
    '1rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '6rem'
  ],
  radii: {
    sm: '2px',
    md: '4px',
    lg: '8px'
  },
  borders: {
    sm: '1px solid',
    md: '2px solid',
    lg: '5px solid'
  },
  colors: {
    primary: '#ff7f66',
    text: '#555',
    light: '#fff',
    background: '#f9f6f4',
    backgroundEmp: '#f1edeb',
    focus: 'rgb(255 127 101 / 41%)'
  }
};

export { theme };
