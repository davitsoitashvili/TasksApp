import { getTasksList } from "../redux/actions/taskActions";

const BASE_URL = "http://localhost:1337";

export const createTask = async (requestData) => {
  try {
    const request = await fetch(`${BASE_URL}/tasks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    const response = await request.json();
    alert("Task has been created successfully!");
    return response;
  } catch (err) {
    alert(err);
  }
};

export const getTasksListAsync = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/tasks/`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getTasksList(data));
      })
      .catch((error) => {
        alert(error);
      });
  };
};
