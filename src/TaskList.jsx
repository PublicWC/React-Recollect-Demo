import React from "react";
import { collect } from "react-recollect";
import Task from "./Task";

const fetchTasks = async () => [
  {
    id: Math.random(),
    name: "Buy some cows",
    done: true
  },
  {
    id: Math.random(),
    name: "Milk them",
    done: false
  }
];

class TaskList extends React.Component {
  componentDidMount() {
    fetchTasks().then(tasks => {
      // add some data to the store
      this.props.store.tasks = tasks;
    });

    setInterval(() => {
      // keep updating the store
      this.props.store.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  render() {
    const { store } = this.props;

    return (
      <div>
        <p>You last looked at this text at: {store.time}</p>

        {/* read data from the store */}
        {store.tasks &&
          store.tasks.map(task => <Task key={task.id} task={task} />)}

        <button
          onClick={() => {
            // add some more data to the store
            store.tasks.push({
              id: Math.random(),
              name: "A new task",
              done: false
            });
          }}
        >
          Add a task
        </button>
      </div>
    );
  }
}

export default collect(TaskList);
