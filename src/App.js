import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import CreateTask from "./components/CreateTask";
import GetTasksList from "./components/GetTasksList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, [dispatch]);

  return (
    <div className="App">
      <NavLink to="/">Show All Tasks</NavLink>
      <br/>
      <NavLink to="/create">Create New Task</NavLink>

      <Switch>
        <Route path="/" exact>
          <GetTasksList/>
        </Route>
        <Route path="/create">
          <CreateTask/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
