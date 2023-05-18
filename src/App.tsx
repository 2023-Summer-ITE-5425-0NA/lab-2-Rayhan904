import Task from "./components/Task";
import { useState } from "react";

const App = () => {
  let count = 0;

  const [tasklist, setTaskList] = useState([
    {
      title: "Humber",

      tasks: ["Task 1", "Task 2", "Task 3"],

      id: 1,
    },

    {
      title: "MERN",

      tasks: ["Lab", "Project", "Quiz"],

      id: 2,
    },

    {
      title: "Java",

      tasks: ["Group Discussion", "Exam", "Assignment"],

      id: 3,
    },
  ]);
  tasklist.forEach((x) => {
    count += x.tasks.length;
  });
  return (
    <div className="mainDiv">
      <h2>Task List</h2>
      <h2>Total Number of tasks : {count} </h2>
      {tasklist.map((t) => (
        <Task name={t.title} tasks={t.tasks} key={t.id} />
      ))}
    </div>
  );
};

export default App;
