"use client";

import { useDispatch, useSelector } from "react-redux";
import { setPersona, resetPersona } from "@/store/slices/peopleSlice";
import { RootState } from "@/store/store"; // Asegúrate de que la ruta sea correcta
import React, { useState } from "react";

const PersonaComponent: React.FC = () => {
  const dispatch = useDispatch();
  const persona = useSelector((state: RootState) => state.persona);
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const guardarPersona = () => {
    dispatch(setPersona({ nombre, apellido }));
  };

  const limpiarPersona = () => {
    dispatch(resetPersona());
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Persona:</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={guardarPersona}
        className="bg-blue-500 text-white p-2 rounded mb-2"
      >
        Guardar Persona
      </button>
      <button
        onClick={limpiarPersona}
        className="bg-red-500 text-white p-2 rounded"
      >
        Limpiar Persona
      </button>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Nombre: {persona.nombre} {persona.apellido}
      </h2>
    </div>
  );
};

export default PersonaComponent;
