import Inicio from "@pages/Inicio"
import Confiabilidad from "@pages/Confiabilidad"
import Tecnologia from "@pages/Tecnologia"
import Servicios from "@pages/Servicios"
import Distribuidor from "@pages/Distribuidor"
import Historias from "@pages/Historias"
import Contacto from "@pages/Contacto";

import './globals.css';

export default function Home() {
    return (
        <main className="bg-[#F9F9F9]">
            <Inicio/>
            <Confiabilidad/>
            <Tecnologia/>
            <Servicios/>
            <Distribuidor/>
            <Historias/>
            <Contacto/>
        </main>
    );
}
