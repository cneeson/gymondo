import { useQuery } from 'react-query';
import fetchWorkouts from './fetchers';
import { UseWorkoutsArgs } from './types';

const QUERY_KEY = 'workouts';

const useWorkouts = (args: UseWorkoutsArgs) => useQuery([QUERY_KEY, args], fetchWorkouts);

export {
    useWorkouts
 };
