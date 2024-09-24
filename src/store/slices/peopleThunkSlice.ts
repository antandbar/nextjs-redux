// store/peopleThunkSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define la interfaz para el estado de las personas
interface PeopleState {
  nombre: string;
  apellido: string;
  loading: boolean;
  error: string | null;
}

// Estado inicial
const initialState: PeopleState = {
  nombre: '',
  apellido: '',
  loading: false,
  error: null,
};

// Crear un thunk para obtener datos de una API
export const fetchPerson = createAsyncThunk(
  'people/fetchPerson',
  async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    // Retorna un objeto con nombre y apellido
    return { nombre: user.name.first, apellido: user.name.last };
  }
);

// Crear la slice
const peopleThunkSlice = createSlice({
  name: 'peopleThunk',
  initialState,
  reducers: {
    resetPeople: (state) => {
      state.nombre = '';
      state.apellido = '';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPerson.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPerson.fulfilled, (state, action: PayloadAction<{ nombre: string; apellido: string }>) => {
        state.loading = false;
        state.nombre = action.payload.nombre;
        state.apellido = action.payload.apellido;
      })
      .addCase(fetchPerson.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching person';
      });
  },
});

// Exportar las acciones
export const { resetPeople } = peopleThunkSlice.actions;

// Exportar el reducer
export default peopleThunkSlice.reducer;
