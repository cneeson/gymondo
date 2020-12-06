import { Workout } from '../../data/useWorkout/types';

export interface WorkoutCardProps extends Workout {
    to: string;
};