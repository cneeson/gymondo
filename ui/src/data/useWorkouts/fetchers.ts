import moment from 'moment';
import { Workout } from '../useWorkout/types';
import { UseWorkoutsArgs, FetchResponse } from './types';

const fetchWorkouts = async (_: string, { size, page, categories, month }: UseWorkoutsArgs) => {
    let url = `${process.env.REACT_APP_API_HOST}/workouts?size=${size}&page=${page}`;

    if (Array.isArray(categories) && categories.length > 0) {
        url = `${url}&categories=${categories}`;
    }

    if (month) {
        url = `${url}&month=${moment(month).format('MMM')}`;
    }

    const response = await fetch(url);

    if (!response.ok) {
        console.error('There was a problem loading workouts.');
    }

    const json = await response.json();

    return json as Promise<FetchResponse<Workout[]>>;
};

export default fetchWorkouts;
