import Confiabilidad from "./_components/Confiabilidad.tsx";
import Inicio from "./_components/Inicio.tsx";

export default function HomePage() {
  return (
    <>
      <main className="min-h-dvh container mx-auto px-4 py-4">
        <Inicio />
      </main>
      <Confiabilidad />
    </>
  );
}
