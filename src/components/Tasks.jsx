import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  // Define a function onSeeDetailsClick to handle the click event when the user wants to see the details of a task. This function takes a task object as an argument and constructs a query string using the URLSearchParams API. It then uses the navigate function from react-router-dom to navigate to the /tasks route with the query string appended, allowing us to pass the task details as query parameters in the URL.
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams({
      title: task.title,
      description: task.description,
    });
    navigate(`/tasks?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          {/* When you have a prop that is a function, you can call it using arrow function notation. For example: props.onTaskClick(task.id). This will execute the function and pass the task.id as an argument.*/}
          <button
            onClick={() => onTaskClick(task.id)}
            className={
              "bg-slate-400 text-left w-full text-white p-2 rounded" +
              (task.isCompleted ? " line-through" : "")
            }
          >
            {task.title}
            {/* {task.isCompleted ? "Completed" : "Not Completed"} */}
          </button>
          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
