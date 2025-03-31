import { deleteTask } from '@/redux/taskSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function TaskList() {
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();

    return (
        <div className="mt-5">
            <h2 className="text-lg font-semibold">Your Tasks</h2>

            {tasks.length === 0 ? (
                <p className="text-gray-500">No tasks added yet.</p>
            ) : (
                <ul className="mt-3 space-y-2">
                    {tasks.map((task, index) => (
                        <li key={index} className="flex justify-between items-center border p-2 rounded-md">
                            <span>{task.taskName} ({task?.priority})</span>
                            <button className="text-red-500 hover:text-red-700" onClick={() => dispatch(deleteTask(index))} >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
