type TaskProps = {
  name: string;
  tasks: string[];
};

const Task = ({ name, tasks }: TaskProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {tasks.map((x, apple) => (
          <li key={apple}>{x}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
