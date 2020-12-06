import React from 'react';
import { Box } from '../Box';
import { Header } from '../Header';
import { BoxProps } from '../Box/types';

const Page = ({ children, ...props }: BoxProps) => (
    <Box bg='background' minHeight='100vh' {...props}>
        <Header />
        <Box px={5}>
            <Box pt={8} mt={66} maxWidth={1400} mx='auto' >
                {children}
            </Box>
        </Box>
    </Box>
);

export { Page };
