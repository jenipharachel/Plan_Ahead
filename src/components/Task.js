import React from "react";
import PropTypes from "prop-types";

class Task extends React.Component {
  static propTypes = {
    index: PropTypes.string.isRequired,
    editTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    tasks: PropTypes.shape({
      task: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired
    })
  };

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
