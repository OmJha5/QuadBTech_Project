import { createSlice } from '@reduxjs/toolkit';

const loadUser = () => {
    return localStorage.getItem('user') || "";
};

const authSlice = createSlice({
    name: 'auth',

    initialState: {
        user: loadUser(), // Load user from localStorage
    },

    reducers: {
        login: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', action.payload); 
        },

        logout : (state) => {
            state.user = "",
            localStorage.removeItem('user');
        }
    },
});

export const { login , logout} = authSlice.actions;
export default authSlice.reducer;
