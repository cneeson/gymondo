import { Theme as ThemeBase } from 'styled-system';

export interface Colors {
    text: string;
    primary: string;
    light: string;
    background: string;
    focus: string;
    backgroundEmp: string;
}

export interface FontWeights {
    regular: number;
    bold: number;
}

export interface Fonts {
    heading: string;
    body: string;
}

export interface Radii {
    sm: string;
    md: string;
    lg: string;
}

export interface Borders {
    sm: string;
    md: string;
    lg: string;
}

export interface Theme extends Omit<ThemeBase, 'colors' | 'fontWeights' | 'fonts' | 'radii' | 'borders'> {
    colors: Colors;
    fontWeights: FontWeights;
    fonts: Fonts;
    radii: Radii;
    borders: Borders;
}