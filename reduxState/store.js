import { configureStore } from "@reduxjs/toolkit";
import blackScreenSlice from "./slices/blackScreenSlice";
import loginScreenSlice from "./slices/loginModalSlice";
import signUpScreenSlice from "./slices/signUpModalSlice";
import chatScreenSlice from "./slices/chatModalSlice";
import chatUserSlice from "./slices/chatUserSlice";
import authSlice from "./slices/authSlice";
import usersSlice from "./slices/usersSlice";
import themeSlice from "./slices/themeSlice";
import loaderSlice from "./slices/loaderSlice";
import servicesSlice from "./slices/servicesSlice";
import ordersSlice from "./slices/ordersSlice";
import notificationsSlice from "./slices/notificationsSlice";
import dashboardSlice from "./slices/dashboardSlice";
import verifyEmailSlice from "./slices/verifyEmailslice";

export const store = configureStore({
    reducer: {
        blackScreenState: blackScreenSlice,
        signUpScreenState: signUpScreenSlice,
        loginScreenState: loginScreenSlice,
        chatScreenState: chatScreenSlice,
        themeState: themeSlice,
        authState: authSlice,
        usersState: usersSlice,
        chatUserState: chatUserSlice,
        loaderState: loaderSlice,
        servicesState: servicesSlice,
        ordersState: ordersSlice,
        notificationsState: notificationsSlice,
        dashboardState: dashboardSlice,
        verifyEmailState: verifyEmailSlice,
    },
});
