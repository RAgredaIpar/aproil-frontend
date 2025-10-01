import Confiabilidad from "./_components/Confiabilidad.tsx";
import Contacto from "./_components/Contacto.tsx";
import Distribuidor from "./_components/Distribuidor.tsx";
import Inicio from "./_components/Inicio.tsx";
import Servicios from "./_components/Servicios.tsx";
import Tecnologia from "./_components/Tecnologia.tsx";

export default function HomePage() {
    return (
        <>
            <main className="bg-[#F9F9F9]">
                <Inicio/>
                <Confiabilidad/>
                <Tecnologia/>
                <Servicios/>
                <Distribuidor/>
                <Contacto/>
            </main>
        </>
    );
}
