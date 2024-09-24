'use client'

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
    const miNombre = useSelector(state => state.valores.nombre);
    return (
        <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Leer:</h1>
        <Link href="/escribir" className="text-blue-600 hover:underline mb-4">
          Escribir
        </Link>
        <h2 className="text-2xl font-semibold text-gray-800">{miNombre}</h2>
      </div>
    )
}

export default Page