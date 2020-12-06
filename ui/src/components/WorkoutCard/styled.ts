import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';
import { Theme } from '../../utils/style/types';
import { Image } from '../Image';

export const Wrapper = styled(Link)<LinkProps & { theme: Theme}>`
    ${({ theme: { colors, borders, radii }}) => `
        background: ${colors.light};
        border-bottom: ${borders.md} ${colors.backgroundEmp};
        border-radius: ${radii.lg};
        text-decoration: none;
        transition: box-shadow .3s, border-bottom .1s;

        &:hover {
            box-shadow: 0 0 11px rgba(33,33,33,.2);
            border-bottom: ${borders.lg} ${colors.primary};
        }

        &:focus {
            outline: none !important;
            -webkit-box-shadow: 0 0 0 3px ${colors.focus};
            box-shadow: 0 0 0 3px ${colors.focus};
            border-bottom-color: ${colors.light};
        }
    `}
`;

export const PreviewImage = styled(Image)`
    ${({ theme: { radii } }) => `
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%);
        width: 100%;
        height: 180px;
        border-radius: ${radii.lg};
    `}
`;

export const Title = styled.h3`
    ${({ theme: { space, colors } }) => `
        margin: ${space[0]};
        margin-right: ${space[2]};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${colors.text};
    `}
`;