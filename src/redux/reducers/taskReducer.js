import { GET_TASK, GET_TASKS_COUNT, GET_TASKS_LIST } from "../types/taskTypes";

const initState = {
  tasks: [],
  task: null,
  tasksCount: null,
};

export default function taskReducer(state = initState, action) {
  switch (action.type) {
    case GET_TASKS_LIST:
      return {
        ...state,
        tasks: action.data,
      };
    case GET_TASK:
      return {
        ...state,
        task: action.data,
      };

    case GET_TASKS_COUNT:
      return {
        ...state,
        tasksCount: action.data,
      };
    default:
      return state;
  }
}
