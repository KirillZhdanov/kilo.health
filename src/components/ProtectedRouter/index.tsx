import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { ProtectedRoute, Workout } from '../../models';
import { getWorkouts } from '../../redux/selectors';
import { RootState } from '../../redux/store';

export const ProtectedRouter = (props: ProtectedRoute) => {
  const { loaded } = useSelector<RootState>(getWorkouts) as Workout;
  if (!loaded) {
    return <Redirect to="/" />;
  }
  return <Route {...props} />;
};
