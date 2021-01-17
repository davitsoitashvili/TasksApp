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
    alert("Task has been created successfully!")
    return response;

  } catch (err) {
    alert(err);
  }
};
