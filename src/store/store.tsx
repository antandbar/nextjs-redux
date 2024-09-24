import { configureStore } from "@reduxjs/toolkit";
import { SliceValues } from "./slices/valuesSlice";
import peopleSlice from "./slices/peopleSlice";
import peopleThunkSlice from "./slices/peopleThunkSlice";

const store = configureStore({
    reducer: {
        valores: SliceValues.reducer,
        persona: peopleSlice,
        peopleThunk: peopleThunkSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;