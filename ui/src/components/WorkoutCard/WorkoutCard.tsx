import moment from 'moment';
import React from 'react';
import { Badge } from '../Badge';
import { Flex } from '../Flex';
import { Text } from '../Text';
import { PreviewImage, Wrapper } from './styled';
import { WorkoutCardProps } from './types';

const WorkoutCard = (props: WorkoutCardProps) => {
    const { name, imageUrl, category, to, startDate } = props;

    return (
        <Wrapper to={to}>
            <PreviewImage
                src={imageUrl}
                alt={`${name} thumbnail`}
            />
              <Text fontSize={0} mx={2} my='0px'>
                {moment(startDate).format('LL')}
            </Text>
            <Flex px={2} justifyContent='space-between' alignItems='center'>
                <Text as='h3' mt={1}>{name}</Text>
                <Badge>{category}</Badge>
            </Flex>
        </Wrapper>
    );
};

export { WorkoutCard };
