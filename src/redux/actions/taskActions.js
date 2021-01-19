import { GET_TASK, GET_TASKS_LIST } from "../types/taskTypes";

export const getTasksList = (tasks) => ({
  type: GET_TASKS_LIST,
  data: tasks,
});

export const getTask = (task) => ({
  type: GET_TASK,
  data: task,
});
