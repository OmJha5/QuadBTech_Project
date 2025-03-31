import { createSlice } from '@reduxjs/toolkit';

// Load tasks from localStorage For the curr Logged in user.
const loadTasks = () => {
    let username = localStorage.getItem("user");
    if (!username) return [];
    const savedTasks = localStorage.getItem(`task_${username}`);
    return savedTasks ? JSON.parse(savedTasks) : [];
};

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: loadTasks(),
    },
    reducers: {
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },

        addTask: (state, action) => {
            state.tasks.push(action.payload);
            const username = localStorage.getItem('user'); 
            localStorage.setItem(`task_${username}`, JSON.stringify(state.tasks)); 
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((task, index) => index !== action.payload);
            const username = localStorage.getItem('user');
            localStorage.setItem(`task_${username}`, JSON.stringify(state.tasks)); 
        },

        logoutTasks: (state) => {
            state.tasks = []; // Clear tasks on logout
        },
    },
});

export const { setTasks, addTask, deleteTask, logoutTasks } = taskSlice.actions;
export default taskSlice.reducer;
