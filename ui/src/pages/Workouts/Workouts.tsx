import React, { useState } from 'react';
import moment from 'moment';
import { Page } from '../../components/Page';
import { useWorkouts } from '../../data/useWorkouts';
import { Text } from '../../components/Text';
import { Flex } from '../../components/Flex';
import { Select } from '../../components/Select';
import { WORKOUT_CATEGORIES } from '../../constants/workoutCategories';
import { SelectOption } from '../../components/Select/types';
import { generateMonthOptions } from '../../utils/date';
import { CardGrid } from './styled';
import { WorkoutCard } from '../../components/WorkoutCard/WorkoutCard';
import { Pagination } from '../../components/Pagination';

const PAGE_SIZE = 12;

const categoryOptions = WORKOUT_CATEGORIES.map((val) => ({ label: val, value: val }));
const currentMonth = moment().month() - 1;
const monthOptions = generateMonthOptions(currentMonth);

const Workouts = () => {
    const [page, setPage] = useState(0);
    const [selectedCategories, setSelectedCategories] = useState<SelectOption[]>([]);
    const [selectedMonth, setSelectedMonth] = useState<SelectOption | null>(null);

    const { data: workouts, isLoading } = useWorkouts({
        page,
        size: PAGE_SIZE,
        categories: selectedCategories?.map(({ value }) => value),
        month: selectedMonth?.value
    });

    const isPaged = workouts && workouts?.totalElements > PAGE_SIZE;

    return (
        <Page>
            <Text as='h2'>Programs ({workouts?.totalElements}) {selectedMonth && `in ${selectedMonth?.label}`}</Text>

            <Flex
                p={2}
                bg='light'
                mb={2}
                borderRadius='md'
                borderBottom='md'
                borderColor='backgroundEmp'
            >
                <Select
                    value={selectedMonth}
                    onChange={setSelectedMonth}
                    options={monthOptions}
                    placeholder='Start Month'
                    mx={2}
                />
                <Select
                    value={selectedCategories}
                    onChange={setSelectedCategories}
                    options={categoryOptions}
                    placeholder='Category'
                    mx={2}
                    isMulti
                />
            </Flex>

            {isPaged && (
                <Text fontSize='sm'>Page {page + 1} of {workouts?.totalPages}</Text>
            )}

            {isLoading && <Text textAlign='center' m={8}>Loading...</Text>}

            {!isLoading && workouts?.totalElements === 0 && (
                <Text textAlign='center' m={8}>No workouts, try adjusting your filters.</Text>
            )}

            {!isLoading && (
                <CardGrid>
                    {workouts?.data?.map((workout) => (
                        <WorkoutCard
                            to={`workouts/${workout.id}`}
                            key={workout.id}
                            {...workout}
                        />
                    ))}
                </CardGrid>
            )}

            {isPaged && (
                <Pagination
                    onPrevPage={() => setPage(page - 1)}
                    onNextPage={() => setPage(page + 1)}
                    onPageSelection={(page) => setPage(page)}
                    totalPages={workouts?.totalPages as number}
                    currentPage={page}
                    mt={6}
                />
            )}
        </Page>
    );
};

export {
    Workouts
};