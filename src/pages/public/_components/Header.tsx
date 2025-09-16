import logoUrl from "@assets/aproil-logo.svg";
import iconBuscar from "@assets/header/icon-buscar.svg";
import iconContacto from "@assets/header/icon-contacto.svg";
import iconIndustrias from "@assets/header/icon-industria.svg";
import iconInicio from "@assets/header/icon-inicio.svg";
import iconProductos from "@assets/header/icon-product.svg";
import iconServicios from "@assets/header/icon-servicio.svg";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-center">
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="APROIL - Inicio"
        >
          <img
            src={logoUrl}
            alt="APROIL Lubricants"
            className="h-30 w-auto"
            draggable={false}
          />
        </Link>

        <nav className="hidden lg:flex items-center justify-center flex-1 ms-10 text-sm">
          <ul className="flex items-center gap-8 xl:gap-10 2xl:gap-12">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex flex-col items-center gap-2 ${
                    isActive
                      ? "font-semibold text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                <img src={iconInicio} alt="Inicio" className="w-8 h-8" />
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/productos"
                className={({ isActive }) =>
                  `flex flex-col items-center gap-2 ${
                    isActive
                      ? "font-semibold text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                <img src={iconProductos} alt="Inicio" className="w-8 h-8" />
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/industrias"
                className={({ isActive }) =>
                  `flex flex-col items-center gap-2 ${
                    isActive
                      ? "font-semibold text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                <img src={iconIndustrias} alt="Inicio" className="w-8 h-8" />
                Industrias
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/servicios"
                className={({ isActive }) =>
                  `flex flex-col items-center gap-2 ${
                    isActive
                      ? "font-semibold text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                <img src={iconServicios} alt="Inicio" className="w-8 h-8" />
                Servicios
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  `flex flex-col items-center gap-2 ${
                    isActive
                      ? "font-semibold text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                <img src={iconContacto} alt="Inicio" className="w-8 h-8" />
                Contacto
              </NavLink>
            </li>
            <li></li>
            <li></li>
            <li className="ml-8">
              <button
                type="button"
                className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer"
                aria-label="Buscar"
              >
                <img src={iconBuscar} alt="Inicio" className="w-8 h-8" />
                <span>Buscar</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
