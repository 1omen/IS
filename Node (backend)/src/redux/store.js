import {configureStore} from "@reduxjs/toolkit";
import {modulesReducer} from "./slices/modules";
import {authReducer} from "./slices/auth";
import {testsReducer} from "./slices/tests";

const store = configureStore({
    reducer: {
        modules: modulesReducer,
        auth: authReducer,
        tests: testsReducer
    },
})

export default store