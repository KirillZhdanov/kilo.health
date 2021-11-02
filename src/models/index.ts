export interface Workout {
	name: string;
	slug: string;
	questions: Question[];
	loaded: boolean;
	error: string | null;
}
interface Question {
	title: string;
	exercises: Exercise[];
	muscle_group: MuscleGroup;
}
interface Exercise {
	id: number;
	title: string;
	duration: number;
	video: string;
	photo: string;
	description: string;
    completed?: boolean;
}
interface MuscleGroup {
	name: string;
	photo: string;
}