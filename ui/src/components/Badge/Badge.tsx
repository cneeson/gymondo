import React from 'react';
import { Text } from '../Text';

const Badge = ({ children }: { children: any }) => (
    <Text
        display='block'
        borderRadius='md'
        px={1}
        py={0}
        m='0px'
        color='light'
        bg='primary'
    >
        {children}
    </Text>
);

export { Badge };
