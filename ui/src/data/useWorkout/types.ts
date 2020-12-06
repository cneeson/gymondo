export type WorkoutCategory = 'C1' | 'C2' | 'C3' | 'C4' | 'C5' | 'C6' | 'C7';

export interface Workout {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    category: WorkoutCategory;
    startDate: string;
}
