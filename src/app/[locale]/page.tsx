import Inicio from "@pages/home-pages/Inicio"
import Confiabilidad from "@pages/home-pages/Confiabilidad"
import Tecnologia from "@pages/home-pages/Tecnologia"
import Servicios from "@pages/home-pages/Servicios"
import Distribuidor from "@pages/home-pages/Distribuidor"
import Historias from "@pages/home-pages/Historias"
import Contacto from "@pages/home-pages/Contacto";

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
