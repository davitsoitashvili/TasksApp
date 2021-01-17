import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getTasksCount } from './redux/actions/taskActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasksCount(10))
  }, [dispatch])

  const tasksCount = useSelector(reducers => reducers.appTasks.tasksCount);
  return (
    <div className="App">
      <h2>Tasks {tasksCount}</h2>
    </div>
  );
}

export default App;
