import React from 'react';
import ReactDOM from 'react-dom';
import { afterChange, store } from 'react-recollect';
import TaskList from './TaskList';

const storedData = JSON.parse(localStorage.getItem('store'));
store.tasks = storedData
  ? storedData.tasks
  : [{
    id: 1,
    name: 'Example task',
    done: false,
  }];

ReactDOM.render(<TaskList />, document.getElementById('root'));

afterChange(() => {
  localStorage.setItem('store', JSON.stringify(store));
});