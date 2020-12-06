import { Workout } from './types';

const fetchWorkout = async (_: string, id: number) => {
    const response = await fetch(`${process.env.REACT_APP_API_HOST}/workouts/${id}`);

    if (!response.ok) {
        console.error('There was a problem loading this workout.');
    }

    const { data } = await response.json();

    return data as Promise<Workout>;
};

export default fetchWorkout;
