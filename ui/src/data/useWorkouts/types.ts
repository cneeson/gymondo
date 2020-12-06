import { Moment } from 'moment';
import { WorkoutCategory } from '../useWorkout/types';

export interface UseWorkoutsArgs {
    size: number;
    page: number;
    month?: Moment;
    categories?: WorkoutCategory[];
}

export interface FetchResponse<ReturnType> {
    data: ReturnType;
    message: 'success' | 'error';
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
}