import React from "react";
import { createTask } from "../service/service";

function CreateTask(props) {
  const onSubmit = async (event) => {
    event.preventDefault();
    const { target } = event;
    const taskData = {
      title: target.Title.value,
      due_date: target.Due_date.value,
      assigned_to: target.Assigned_to.value,
      comment: target.Comment.value,
      condition: target.Condition.value,
    };
    createTask(taskData);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label for="Title">Title:</label>
          <input type="text" id="Title" required />
        </div>
        <div>
          <label for="Due_Date">Due Date:</label>
          <input type="date" id="Due_date" required />
        </div>
        <div>
          <label for="Assigned_to">Assigned To:</label>
          <input type="text" id="Assigned_to" required />
        </div>
        <div>
          <label for="Comment">Comment:</label>
          <textarea type="text" id="Comment" rows="10" cols="30" required />
        </div>
        <div>
          <label for="Condition">Condition:</label>
          <select name="Condition" id="Condition" required>
            <option value="Backlog">Backlog</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
