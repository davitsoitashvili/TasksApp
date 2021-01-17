import { NavLink, Route, Switch } from "react-router-dom";
import "./App.css";
import CreateTask from "./components/CreateTask";
import GetTasksList from "./components/GetTasksList";

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/">Show All Tasks</NavLink>
        <br />
        <NavLink to="/create">Create New Task</NavLink>
      </header>
      <hr />
      <Switch>
        <Route path="/" exact>
          <GetTasksList />
        </Route>
        <Route path="/create">
          <CreateTask />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
