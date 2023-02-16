import "./AddTask.css";
import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0, 10),
  };
  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="dodaj zadanie "
          value={this.state.text}
        ></input>
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
        ></input>
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input
          type="date"
          value={this.state.date}
          min="2022-12-12"
          max="2023-12-20"
        ></input>
        <br />
        <button>Dodaj</button>
      </div>
    );
  }
}
export default AddTask;
