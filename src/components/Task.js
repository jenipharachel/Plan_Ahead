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
      <div className="task">
        <p>
          <i class="fas fa-tasks"></i>: {this.props.tasks.task}
        </p>
        <p>
          <i class="fas fa-hourglass-half"></i>: {this.props.tasks.date}
        </p>

        <p>Priority: {this.props.tasks.priority}</p>

        <p>Status: {this.props.tasks.status}</p>
        <div>
          <button onClick={this.passTask}>
            <i class="fas fa-edit"></i> Edit
          </button>
          <button onClick={this.delTask}>
            <i class="fas fa-trash"></i> Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Task;
