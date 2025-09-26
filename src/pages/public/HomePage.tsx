import Confiabilidad from "./_components/Confiabilidad.tsx";
import Inicio from "./_components/Inicio.tsx";
import Tecnologia from "./_components/Tecnologia";

export default function HomePage() {
  return (
    <>
      <main className="min-h-dvh container mx-auto px-4 py-4">
        <Inicio />
      </main>
      <Confiabilidad />
        <Tecnologia />
    </>
  );
}
