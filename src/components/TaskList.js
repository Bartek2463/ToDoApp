import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h1>Zadania do zrobienia </h1>
        {activeTasks.length > 0 ? activeTasks : <p>brak zadan dla Ciebie</p>}
      </div>
      <hr />

      <div className="done">
        <h3>
          Zadania Zrobione <em>({done.length})</em>
        </h3>
        {done.length >= 4 && (
          <span style={{ fontSize: 15 }}>
            wyswietlonych jest jedynie 4 ostatnich elementów
          </span>
        )}
        {doneTasks.slice(0, 4)}
      </div>
    </>
  );
};

export default TaskList;
