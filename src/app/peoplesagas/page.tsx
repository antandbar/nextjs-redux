"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchPersonRequest, fetchPersonSuccess, fetchPersonFailure } from "@/store/slices/peopleSagaSlice"; // Asegúrate de que la ruta sea correcta
import { RootState } from "@/store/store"; // Asegúrate de que la ruta sea correcta
import React from "react";

const PeopleComponent: React.FC = () => {
    const dispatch = useDispatch();
    
    const { nombre, apellido, loading, error } = useSelector((state: RootState) => state.peopleSagas);

    const obtenerPersona = async () => {
        dispatch(fetchPersonRequest());
        try {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const user = data.results[0];
            dispatch(fetchPersonSuccess({ nombre: user.name.first, apellido: user.name.last }));
        } catch (err) {
            // Afirmación de tipo para asegurar que err es un Error
            if (err instanceof Error) {
                dispatch(fetchPersonFailure(err.message)); // Usa err.message
            } else {
                dispatch(fetchPersonFailure('An unknown error occurred')); // Mensaje genérico para errores no conocidos
            }
        }
    };

    const limpiarPersona = () => {
        dispatch(fetchPersonSuccess({ nombre: '', apellido: '' })); // Resetea la persona
    };
  
    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Persona:</h1>
            <button
                onClick={obtenerPersona}
                className="bg-blue-500 text-white p-2 rounded mb-2"
            >
                Obtener Persona
            </button>
            <button
                onClick={limpiarPersona}
                className="bg-red-500 text-white p-2 rounded"
            >
                Limpiar Persona
            </button>
            {loading && <p>Cargando...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {nombre && apellido && (
                <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                    Nombre: {nombre} {apellido}
                </h2>
            )}
        </div>
    );
};

export default PeopleComponent;