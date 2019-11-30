import React from "react";
import Header from "../Header/Header";
import AddTask from "../AddTask/AddTask";
import EditTask from "../EditTask/EditTask";
import Task from "../Task/Task";

class App extends React.Component {
  state = {
    tasks: {},
    editTaskKey: "",
    isEditFormVisible: false
  };
  addTask = task => {
    //1.Taking a copy of existing state of tasks
    const tasks = { ...this.state.tasks };
    //2.store the new task in existing task variable
    tasks[`task${Date.now()}`] = task;
    //3.Set the new task to state
    this.setState({ tasks: tasks }); //storing new variable values into state
  };

  updateTask = (key, updatedTask) => {
    const tasks = { ...this.state.tasks };
    tasks[key] = updatedTask;
    this.setState({ tasks: tasks });
  };

  hideEditTask = () => {
    this.setState({ isEditFormVisible: false });
  };

  editTask = index => {
    // pass key to state, so the key and list of tasks can be sent to EditTask
    const key = index;
    this.setState({ editTaskKey: key, isEditFormVisible: true });
  };

  deleteTask = key => {
    const tasks = { ...this.state.tasks };
    delete tasks[key];
    this.setState({ tasks: tasks });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <h3>Hello, User</h3>
        <ul>
          {Object.keys(this.state.tasks).map(key => (
            <Task
              tasks={this.state.tasks[key]}
              key={key}
              index={key}
              editTask={this.editTask}
              deleteTask={this.deleteTask}
            />
          ))}
        </ul>
        {this.state.isEditFormVisible ? (
          <EditTask
            tasks={this.state.tasks[this.state.editTaskKey]}
            index={this.state.editTaskKey}
            updateTask={this.updateTask}
            hideEditTask={this.hideEditTask}
          />
        ) : (
          <AddTask addTask={this.addTask} />
        )}
      </div>
    );
  }
}

export default App;
