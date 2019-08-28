import React from "react";

class Task extends React.Component {
  passTask = event => {
    event.preventDefault();
    const keyForTaskEdit = this.props.index;
    this.props.editTask(keyForTaskEdit);
  };
  delTask = event => {
    event.preventDefault();
    const keyForDelTask = this.props.index;
    this.props.deleteTask(keyForDelTask);
  };
  render() {
    return (
      <li className="addtask">
        <div>
          <p> {this.props.tasks.task} </p>
          <p>Due Date: {this.props.tasks.date}</p>
        </div>
        <div>
          <p>Priority: {this.props.tasks.priority}</p>
          <p>Status: {this.props.tasks.status}</p>
        </div>
        <div>
          <button onClick={this.passTask}>Edit</button>
          <button onClick={this.delTask}>Delete</button>
        </div>
      </li>
    );
  }
}

export default Task;
