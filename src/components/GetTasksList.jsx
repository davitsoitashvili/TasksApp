import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksListAsync } from "../service/service";

function GetTasksList(props) {
  const dispatch = useDispatch();
  const tasks = useSelector((reducers) => reducers.appTasks.tasks);

  useEffect(() => {
    dispatch(getTasksListAsync());
  }, [dispatch]);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h1>Title : {task.title}</h1>
            <h2>Due To: {task.date_due}</h2>
            <h3>Assigned To : {task.assigned_to}</h3>
            <h4>Comment : {task.comment}</h4>
            <h5>Condition : {task.condition}</h5>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default GetTasksList;
