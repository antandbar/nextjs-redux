// store/personaSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define la interfaz para el estado de la persona
interface PersonaState {
  nombre: string;
  apellido: string;
}

// Estado inicial
const initialState: PersonaState = {
  nombre: '',
  apellido: '',
};

// Crear la slice
const personaSlice = createSlice({
  name: 'persona',
  initialState,
  reducers: {
    setPersona: (state, action: PayloadAction<PersonaState>) => {
      state.nombre = action.payload.nombre;
      state.apellido = action.payload.apellido;
    },
    resetPersona: (state) => {
      state.nombre = '';
      state.apellido = '';
    },
  },
});

// Exportar las acciones
export const { setPersona, resetPersona } = personaSlice.actions;

// Exportar el reducer
export default personaSlice.reducer;