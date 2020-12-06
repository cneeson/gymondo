import styled from 'styled-components';
import { space, layout, borders, flexbox, SpaceProps, LayoutProps, BorderProps, FlexProps } from 'styled-system';

const Image = styled.img<SpaceProps | LayoutProps | BorderProps | FlexProps>`
    object-fit: cover;
    ${space}
    ${layout}
    ${borders}
    ${flexbox}
`;

export { Image };