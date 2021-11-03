export interface Workout {
  name: string;
  slug: string;
  questions: Question[];
  loaded: boolean;
  error: string | null;
  completedExercisesIds: Completed;
  exercises: Exercise[];
}
interface Completed {
  [key: number]: number;
}
interface Question {
  title: string;
  exercises: Exercise[];
  muscle_group: MuscleGroup;
}
export interface Exercise {
  id: number;
  title: string;
  duration: number;
  video: string;
  photo: string;
  description: string;
}
interface MuscleGroup {
  name: string;
  photo: string;
}
export interface ProtectedRoute {
  exact?: boolean;
  path: string;
  component: () => JSX.Element;
}
