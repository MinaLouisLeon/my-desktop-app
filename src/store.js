import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import tempReducer from "./Reducers/tempReducer";
const reducers = combineReducers({
    tempReducer
})

const persistConfig = {
    key : "root",
    storage,
    whitelist: []
}

const persistedReducer = persistReducer(persistConfig,reducers);

export const store = configureStore({
    reducer : persistedReducer,
    devTools : true
})