import { configureStore } from "@reduxjs/toolkit";
import { SliceValues } from "./slices/valuesSlice";
import peopleSlice from "./slices/peopleSlice";

const store = configureStore({
    reducer: {
        valores: SliceValues.reducer,
        persona: peopleSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;