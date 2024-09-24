import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
    <h1 className="text-3xl font-bold mb-6">Selecciona una Opción:</h1>
    <div className="flex flex-col items-center">
      <Link
        href="/leer"
        className="text-lg font-semibold mb-8" // Mayor margen inferior para "Leer"
      >
        Leer
      </Link>
      <Link
        href="/escribir"
        className="text-lg font-semibold"
      >
        Escribir
      </Link>
    </div>
  </div>
  );
};

export default Page;
