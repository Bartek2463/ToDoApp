import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const tasks = props.tasks.map((tasks) => (
    <Task key={tasks.id} taks={tasks} />
  ));

  return (
    <>
      <div className="active">
        <h1>Zadania do zrobienia </h1>
        {tasks}
      </div>
      <hr />

      <div className="done">
        <h3>Zadania do Zrobione(0)</h3>
      </div>
    </>
  );
};

export default TaskList;
