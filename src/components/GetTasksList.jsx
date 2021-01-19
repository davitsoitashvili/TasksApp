import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksListAsync } from "../service/service";

function GetTasksList(props) {
  const dispatch = useDispatch();
  const tasks = useSelector((reducers) => reducers.appTasks.tasks);

  useEffect(() => {
    dispatch(getTasksListAsync());
  }, [dispatch]);

  var backLogPercent = 0;
  var toDoPercent = 0;
  var inProggressPercent = 0;
  var donePercent = 0;

  function countConditionsPercent() {
    for (var i = 0; i < tasks.length; i++) {
      switch (tasks[i].condition) {
        case "Backlog":
          backLogPercent++;
          break;

        case "To Do":
          toDoPercent++;
          break;

        case "In Progress":
          inProggressPercent++;
          break;

        case "Done":
          donePercent++;
          break;

        default:
          break;
      }
    }
  }

  function getCurrentDate() {
    const date = new Date();
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return `${yyyy}-${mm}-${dd}`;
  }

  const currentDate = getCurrentDate();

  function checkDelayedAndCompletedTasks(task) {
    if (task.condition === "Done") {
      return "green";
    } else if (task.due_date < currentDate) {
      return "red";
    }
    return "gray";
  }

  countConditionsPercent();

  return (
    <div
      style={{
        width: "300px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: "10px",
        paddingTop: "10px",
      }}
    >
      <div id="progress_bar_div" style={{ border: "1px solid black" }}>
        <label for="Backlog">Backlog: </label>
        <progress id="Backlog" value={backLogPercent} max="100" />
        <br />
        <label for="To Do">To Do: </label>
        <progress id="To Do" value={toDoPercent} max="100" />
        <br />
        <label for="In Progress">In Progress: </label>
        <progress id="In Progress" value={inProggressPercent} max="100" />
        <br />
        <label for="Done">Done: </label>
        <progress id="Done" value={donePercent} max="100" />
      </div>

      {tasks.map((task) => {
        const taskMarker = checkDelayedAndCompletedTasks(task);
        return (
          <div
            key={task.id}
            style={{
              padding: "5px",
              border: "1px solid black",
              borderRadius: 10,
              backgroundColor: taskMarker,

            }}
          >
            <h2>Title : {task.title}</h2>
            <h3>Due To: {task.due_date}</h3>
            <h3>Assigned To : {task.assigned_to}</h3>
            <h3>Comment : {task.comment}</h3>
            <h3>Condition : {task.condition}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default GetTasksList;
