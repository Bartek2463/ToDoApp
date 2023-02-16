import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcze w wiedzmina ",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "zrobić dobry uczynek",
        date: "2020-04-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "zrobić zakupy",
        date: "2021-06-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "pojechac do pracy",
        date: "2023-02-11",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };
  deleteTask = (id) => {
    console.log("delete in Component App o Id   " + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);

    // this.setState({
    //   tasks,
    // });
    let tasks = [...this.state.tasks];

    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("change in component App o Id   " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };
  addTask = () => {
    console.log("dodany obiekt");
    const task = {
      id: this.counter,
      text: "pojechac do pracy", // text z inputa
      date: "2023-02-11",
      important: true,
      active: true,
      finishDate: null,
    };
    this.counter++;
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}
export default App;
