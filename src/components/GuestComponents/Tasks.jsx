import { addTask, deleteTask } from '@/redux/taskSlice';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Tasks = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (!newTask) return;
    dispatch(addTask(newTask));
    setNewTask('');
  };

  return (
    <div>
      <h2>{user}'s Tasks</h2>
      <input 
        type="text" 
        placeholder="New Task..." 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => dispatch(deleteTask(index))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
