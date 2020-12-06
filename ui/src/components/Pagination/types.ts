import { MouseEvent } from 'react';
import { Theme } from 'styled-system';
import { BoxProps } from '../Box/types';

export interface PaginationButtonProps {
    theme: Theme;
    isSelected?: boolean;
    isNavigator?: boolean;
    onClick?: any;
  };
  
  export interface PaginationProps extends BoxProps {
    onNextPage: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onPrevPage: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onPageSelection: (pageNumber: number) => void;
    totalPages: number;
    currentPage: number;
  };
  