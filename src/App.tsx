import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { fetchUsersWorkouts } from './redux/actions';
import { Route, Switch } from 'react-router';
import { OverviewPage, ExercisePage } from './pages';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsersWorkouts());
  }, [dispatch]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={OverviewPage} />
        <Route path="/exercise/:id" component={ExercisePage} />
      </Switch>
    </div>
  );
}

export default App;
