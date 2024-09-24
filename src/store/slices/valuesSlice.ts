import { createSlice } from '@reduxjs/toolkit';

// Define el estado inicial con un contador
interface ValoresState {
  nombre: string;
  contador: number;
}

const initialState: ValoresState = {
  nombre: 'TEST',
  contador: 0,
};

const valuesSlice = createSlice({
  name: 'valores',
  initialState,
  reducers: {
    guardarnombre: (state, action) => {
      state.nombre = action.payload;
    },
    incrementarContador: (state) => {
      state.contador += 1; // Incrementa el contador
    },
    resetearContador: (state) => {
      state.contador = 0; // Resetea el contador
    },
  },
});

export const { guardarnombre, incrementarContador, resetearContador } = valuesSlice.actions;

// Exportar el reducer
export default valuesSlice.reducer;
