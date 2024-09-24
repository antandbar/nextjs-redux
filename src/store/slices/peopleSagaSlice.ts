import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

// Crear la slice
const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    fetchPersonRequest: (state) => {
      state.loading = true; // Indica que la carga ha comenzado
      state.error = null; // Resetea cualquier error previo
    },
    fetchPersonSuccess: (state, action: PayloadAction<{ nombre: string; apellido: string }>) => {
      state.loading = false; // Indica que la carga ha terminado
      state.nombre = action.payload.nombre; // Actualiza el nombre
      state.apellido = action.payload.apellido; // Actualiza el apellido
    },
    fetchPersonFailure: (state, action: PayloadAction<string>) => {
      state.loading = false; // Indica que la carga ha terminado
      state.error = action.payload; // Guarda el mensaje de error
    },
  },
});

// Exportar las acciones
export const { fetchPersonRequest, fetchPersonSuccess, fetchPersonFailure } = peopleSlice.actions;

// Exportar el reducer
export default peopleSlice.reducer;
