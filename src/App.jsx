import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

// The App component is the main component of our application, responsible for managing the state of tasks and rendering the UI. It uses the useState hook to manage the tasks state, which is an array of task objects. The component also defines a function onTaskClick to handle task interactions, such as marking a task as completed. The UI consists of a header, an AddTasks component for adding new tasks, and a Tasks component for displaying the list of tasks.
function App() {
  const [tasks, setTasks] = useState(
    // Load tasks from localStorage when the component mounts. Convert JSON string back to an array of task objects and set it to the tasks state. If there are no tasks in localStorage, initialize with an empty array.
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    // Load tasks from localStorage when the component mounts. Convert JSON string back to an array of task objects and set it to the tasks state.
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // The useEffect hook is used to perform side effects in the component. In this case, it is used to save the tasks to localStorage whenever the tasks state changes. This ensures that the tasks are persisted across page reloads. The empty dependency array [] means that this effect will only run once when the component mounts, but since we want to save tasks whenever they change, we include tasks in the dependency array.
  useEffect(() => {
    async function fetchTasks() {
      //Call API
      const reponse = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        { method: "GET" },
      );
      const data = await reponse.json(); //Convert response to JSON
      //Get returned data
      setTasks(data);
      //Persist data in state
    }
    //Se quiser você pode chamar uma API para pegar as tarefas.
    //fetchTasks();
  }, []);

  // Define a function onTaskClick to handle task interactions.
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      // Need to update the isCompleted property.
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // Don't need to update the task, so we return it as is.
      return task;
    });
    // Update the tasks state with the new array of tasks, which will trigger a re-render of the component and reflect the changes in the UI.
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  // The return statement defines the JSX structure of the component, which describes how the UI should look. It includes a container div with styling, a header, the AddTasks component for adding new tasks, and the Tasks component for displaying the list of tasks. The Tasks component receives the tasks state and the onTaskClick function as props, allowing it to display the tasks and handle task interactions.
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Task Manager</Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        {/* Pass the tasks state and the onTaskClick function as props to the Tasks component, allowing it to display the list of tasks and handle task interactions. */}
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
