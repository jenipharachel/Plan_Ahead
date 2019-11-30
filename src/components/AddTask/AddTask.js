import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

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
        <Container>
          <div>
            <label className="label">
              Task:
              <textarea
                name="task"
                ref={this.taskRef}
                placeholder="State your task"
              />
            </label>
          </div>

          <div>
            <label className="label">
              Priority:
              <input
                name="priority"
                type="number"
                min="1"
                max="5"
                ref={this.priorityRef}
              />
            </label>
          </div>

          <div>
            <label className="label">
              <i class="fas fa-calendar-day"></i>:
              <input name="date" type="date" ref={this.dateRef} />
            </label>
          </div>

          <div>
            <label className="label">
              Status:
              <select name="status" ref={this.statusRef}>
                <option value="Incomplete">To Do</option>
                <option value="Completed">Done</option>
              </select>
            </label>
          </div>

          <div>
            <button type="submit">
              <i class="fas fa-plus-square"></i> Add a task
            </button>
          </div>
        </Container>
      </form>
    );
  }
}

export default AddTask;
