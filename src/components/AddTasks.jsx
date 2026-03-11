import { useState } from "react";
import Input from "./Input";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    //Sempre que você quiser usar Javascript dentro do return, você precisa usar as chaves {}. Por exemplo: {tasks.map((task) => (...))}. Isso indica que você está inserindo código JavaScript dentro do JSX.
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeHolder="Type Task Title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></Input>
      <Input
        type="text"
        placeHolder="Type Task Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></Input>
      <button
        // When you have a prop that is a function, you can call it using arrow function notation. For example: props.onAddTaskSubmit(title, description). This will execute the function and pass the title and description as arguments.
        onClick={() => {
          //Check if title and description are not empty before submitting the task
          if (title.trim() === "" || description.trim() === "") {
            alert("Please enter a title and description for the task.");
            return;
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Add Task
      </button>
    </div>
  );
}

export default AddTasks;
