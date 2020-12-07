import React from 'react';
import moment from 'moment';
import { useParams, Link } from 'react-router-dom';
import { Page } from '../../components/Page';
import { Text } from '../../components/Text';
import { useWorkout } from '../../data/useWorkout';
import { Image } from '../../components/Image';
import { Flex } from '../../components/Flex';
import { Box } from '../../components/Box';
import { Badge } from '../../components/Badge';

const WorkoutDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading } = useWorkout(id);

    return (
        <Page>
            <Link to='/'>&larr; Back to workouts</Link>

            {isLoading && (
                <Text>Loading Workout...</Text>
            )}

            {!isLoading && (
                <Flex mt={8} justifyContent='space-between' flexWrap='wrap'>
                    <Box flex={1} m={3} p={2} borderRadius='lg' bg='light'>
                        <Text fontSize={0} my='0px'>
                            {moment(data?.startDate).format('LL')}
                        </Text>
                        <Flex justifyContent='space-between' alignItems='center'>
                            <Text as='h1'> {data?.name}</Text>
                            <Badge>{data?.category}</Badge>
                        </Flex>
                        <Text> {data?.description}</Text>
                    </Box>

                    <Image
                        src={data?.imageUrl}
                        alt={`${data?.name} thumbnail`}
                        borderRadius='lg'
                        flex={1}
                        m={3}
                    />
                </Flex>
            )}

        </Page>
    );
};

export {
    WorkoutDetail
};