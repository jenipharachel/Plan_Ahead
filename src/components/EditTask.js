import React from "react";
import PropTypes from "prop-types";

class EditTask extends React.Component {
  static propTypes = {
    index: PropTypes.string.isRequired,
    tasks: PropTypes.shape({
      task: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired
    }),
    updateTask: PropTypes.func.isRequired,
    hideEditTask: PropTypes.func.isRequired
  };

  handleChange = event => {
    const updatedTask = {
      ...this.props.tasks,
      [event.currentTarget.name]: event.currentTarget.value
    };
    const index = this.props.index;
    this.props.updateTask(index, updatedTask);
  };

  completeUpdateTask = event => {
    event.preventDefault();
    this.props.hideEditTask();
  };

  render() {
    return (
      <form className="addtask" onSubmit={this.completeUpdateTask}>
        <li>
          <label className="label">
            Task:
            <textarea
              name="task"
              value={this.props.tasks.task}
              onChange={this.handleChange}
            />
          </label>
          <label className="label">
            Priority:
            <input
              name="priority"
              type="number"
              min="1"
              max="5"
              value={this.props.tasks.priority}
              onChange={this.handleChange}
            />
          </label>
        </li>
        <li>
          <label className="label">
            Due Date:
            <input
              name="date"
              type="date"
              value={this.props.tasks.date}
              onChange={this.handleChange}
            />
          </label>
          <label className="label">
            Status:
            <select
              name="status"
              value={this.props.tasks.status}
              onChange={this.handleChange}
            >
              <option value="incomplete">To Do</option>
              <option value="completed">Done</option>
            </select>
          </label>
        </li>
        <li>
          <button type="submit">Update task</button>
        </li>
      </form>
    );
  }
}

export default EditTask;
