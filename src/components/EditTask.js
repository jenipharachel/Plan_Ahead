import React from "react";

class EditTask extends React.Component {
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
            type="text"
            value={this.props.tasks.priority}
            onChange={this.handleChange}
          />
        </label>
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
        <button type="submit">Update task</button>
      </form>
    );
  }
}

export default EditTask;
