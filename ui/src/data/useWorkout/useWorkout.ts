import { useQuery } from 'react-query';
import fetchWorkout from './fetchers';

const QUERY_KEY = 'workout';

const useWorkout = (id: string) => useQuery([QUERY_KEY, id], fetchWorkout);

export {
    useWorkout
 };
