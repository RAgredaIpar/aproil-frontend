import Inicio from "@pages/home/Inicio"
import Confiabilidad from "@pages/home/Confiabilidad"
import Tecnologia from "@pages/home/Tecnologia"
import Servicios from "@pages/home/Servicios"
import Distribuidor from "@pages/home/Distribuidor"
import Historias from "@pages/home/Historias"
import Contacto from "@pages/home/Contacto";

import './globals.css';
export default function Home() {
  return (
      <>
          <main className="bg-[#F9F9F9]">
              <Inicio/>
              <Confiabilidad/>
              <Tecnologia/>
              <Servicios/>
              <Distribuidor/>
              <Historias/>
              <Contacto/>
          </main>
      </>
  );
}
