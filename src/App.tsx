import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchUsersWorkouts } from './redux/actions';
import { Switch } from 'react-router';
import { OverviewPage, ExercisePage, CompletedExercisesPage } from './pages';
import { ProtectedRouter } from './components';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsersWorkouts());
  }, [dispatch]);
  return (
    <div className="App">
      <Switch>
        <ProtectedRouter exact path="/" component={OverviewPage} />
        <ProtectedRouter path="/exercise/:id" component={ExercisePage} />
        <ProtectedRouter path="/completed" component={CompletedExercisesPage} />
      </Switch>
    </div>
  );
}

export default App;
