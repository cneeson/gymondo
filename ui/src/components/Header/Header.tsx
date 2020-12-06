import React from 'react';
import { Image } from '../Image';
import { BoxProps } from '../Box/types';
import logo from './logo.svg';
import { Flex } from '../Flex';

const Header = ({ ...props }: BoxProps) => (
    <Flex
        as='header'
        position='fixed'
        top='0px'
        width='100%'
        bg='light'
        py={2}
        px={5}
        {...props}
    >
        <Flex
            maxWidth={1400}
            width='100%'
            mx='auto'
            alignItems='center'
        >
            <Image src={logo} alt='gymondo-logo' height={30} width={115} />
        </Flex>
    </Flex>
);

export { Header };