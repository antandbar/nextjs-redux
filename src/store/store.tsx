import { configureStore } from "@reduxjs/toolkit";
import valuesSlice from "./slices/valuesSlice";
import peopleSlice from "./slices/peopleSlice";
import peopleThunkSlice from "./slices/peopleThunkSlice";
import createSagaMiddleware from 'redux-saga';
import { watchFetchPerson } from "./sagas/peopleSaga";
import peopleSagaSlice from "./slices/peopleSagaSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        valores: valuesSlice,
        persona: peopleSlice,
        peopleThunk: peopleThunkSlice,
        peopleSagas: peopleSagaSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(watchFetchPerson);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;