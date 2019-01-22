import React from "react";
import { store } from "react-recollect";

// Note that this component doesn't need to be wrapped in collect() because it doesn't read directly from the store
const Task = ({ task }) => (
  <div>
    <input
      type="checkbox"
      checked={task.done}
      onChange={e => (task.done = e.target.checked)}
    />

    <input
      type="text"
      value={task.name}
      onChange={e => (task.name = e.target.value)}
    />

    <button
      onClick={() => {
        store.tasks = store.tasks.filter(({ id }) => id !== task.id);
      }}
    >
      ✕
    </button>
  </div>
);

export default Task;
