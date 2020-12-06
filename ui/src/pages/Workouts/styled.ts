import styled from 'styled-components';

export const CardGrid = styled.div`
    ${({ theme: { space }}) => `
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
        grid-auto-rows: 245px;
        gap: ${space[4]} ${space[4]};
    `}
`;