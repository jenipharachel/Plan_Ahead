import React from "react";
import PropTypes from "prop-types";

class AddTask extends React.Component {
  taskRef = React.createRef();
  priorityRef = React.createRef();
  dateRef = React.createRef();
  statusRef = React.createRef();

  static propTypes = {
    addTask: PropTypes.func.isRequired
  };

  createTask = event => {
    event.preventDefault();
    const task = {
      task: this.taskRef.current.value,
      priority: parseInt(this.priorityRef.current.value),
      date: this.dateRef.current.value,
      status: this.statusRef.current.value
    };
    this.props.addTask(task);
    //reset or refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="addtask" onSubmit={this.createTask}>
        <label className="label">
          Task:
          <textarea
            name="task"
            ref={this.taskRef}
            placeholder="State your task"
          />
        </label>
        <label className="label">
          Priority:
          <input name="priority" type="text" ref={this.priorityRef} />
        </label>
        <label className="label">
          Due Date:
          <input name="date" type="date" ref={this.dateRef} />
        </label>
        <label className="label">
          Status:
          <select name="status" ref={this.statusRef}>
            <option value="incomplete">To Do</option>
            <option value="completed">Done</option>
          </select>
        </label>
        <button type="submit">+ Add a task</button>
      </form>
    );
  }
}

export default AddTask;
