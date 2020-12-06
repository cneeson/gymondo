import styled from 'styled-components';
import { PaginationButtonProps } from './types';


export const PaginationButton = styled.button.attrs({
  type: 'button'
})<PaginationButtonProps>`
    ${({ theme: { fontSizes, colors, space, borders }, isSelected, isNavigator }) => `
        height: 32px;
        width: 32px;
        border-radius: 50%;
        font-size: ${fontSizes[1]};
        background: transparent;
        color: ${colors.text};
        border: ${borders.sm} transparent;
        margin: 0 ${space[1]};
        cursor: pointer;
        transition: .2s ease all;

        &:hover {
            ${!isSelected ? `background: ${colors.background};` : ''}
        }

        &:focus {
            outline: none !important;
            -webkit-box-shadow: 0 0 0 3px ${colors.focus};
            box-shadow: 0 0 0 3px ${colors.focus};
        }

        ${isSelected ? `
            background-color: ${colors.text};
            color: ${colors.light};
        ` : ''}

        ${isNavigator ? `
            background-color: ${colors.light};
            color: ${colors.text};
            border: ${borders.sm} ${colors.background};
        ` : ''}

        &:disabled {
            background-color: ${colors.background};
            cursor: not-allowed;
            opacity: .5;
        }
    `}
`;