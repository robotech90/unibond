import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    isAdmin: false,
    username: "",
    id: 0,
    auth: false,
    email: "",
    skill: "",
    superAdmin: false
};

export const authSlice = createSlice({
    name: "authState",
    initialState,
    reducers: {
        auth: (state, action) => {
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.username = action.payload.username;
            state.isAdmin = action.payload.isAdmin;
            state.superAdmin = action.payload.superAdmin;
            state.auth = action.payload.auth;
            state.email = action.payload.email;
            state.skill = action.payload?.skill;
            state.firstName = action.payload?.firstName;
            state.lastName = action.payload?.lastName;
            state.phone = action.payload?.phone;
            state.emailNotification = action.payload?.emailNotification;
            state.profilePic = action.payload?.profilePic;
        },
    },
});

// Action creators are generated for each case reducer function
export const { auth } = authSlice.actions;

export default authSlice.reducer;
