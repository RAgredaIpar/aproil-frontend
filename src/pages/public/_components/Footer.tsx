import {icon9001, iconMex} from "@assets/footer";
import {iconContacto, iconIndustrias, iconInicio, iconLogo, iconProductos, iconServicios,} from "@assets/header";
import {Mail, MapPin, Phone} from "lucide-react"
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-neutral-100 py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-6">
                    <div className="space-y-4">
                        <div>
                            <img
                                src={iconLogo}
                                alt="APROIL Lubricants"
                                className="h-25 w-auto -translate-x-3"
                                draggable={false}
                            />
                            <p className="text-lg text-neutral-900 font-nunito">
                                Aproil Lubricants
                            </p>

                            <p className="aproil-font mt-2 text-[0.90rem] leading-snug uppercase tracking-wide">
                                Designed to perform,
                                <br/>
                                engineered to last.
                            </p>
                        </div>

                        <div className="flex items-center gap-12 pt-2">
              <span
                  aria-label="Facebook"
                  className="inline-block h-9 w-9 rounded-md bg-black"
              />
                            <span
                                aria-label="LinkedIn"
                                className="inline-block h-9 w-9 rounded-md bg-black"
                            />
                            <span
                                aria-label="YouTube"
                                className="inline-block h-9 w-9 rounded-md bg-black"
                            />
                        </div>
                    </div>

                    <div className="sm:text-[16px] text-[12px]">
                        <h4 className="mb-5 font-semibold">Navegación</h4>
                        <ul className="space-y-0 text-neutral-900 max-w-max">
                            <li>
                                <Link to="/" className="flex items-center gap-2">
                                    <img src={iconInicio} alt="Inicio" className="h-5 w-5"/>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/productos" className="flex items-center gap-2">
                                    <img
                                        src={iconProductos}
                                        alt="Productos"
                                        className="h-5 w-5"
                                    />
                                    Productos
                                </Link>
                            </li>
                            <li>
                                <Link to="/industrias" className="flex items-center gap-2">
                                    <img
                                        src={iconIndustrias}
                                        alt="Industrias"
                                        className="h-5 w-5"
                                    />
                                    Industrias
                                </Link>
                            </li>
                            <li>
                                <Link to="/nosotros" className="flex items-center gap-2">
                                    <img src={iconServicios} alt="Nosotros" className="h-5 w-5"/>
                                    Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="flex items-center gap-2">
                                    <img src={iconContacto} alt="Contacto" className="h-5 w-5"/>
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="sm:text-[16px] text-[12px]">
                        <h4 className="mb-5 font-semibold">Contacto</h4>
                        <ul className="space-y-3 text-neutral-900">
                            <li className="flex items-start gap-3 ">
                                <MapPin className="mt-[2px] h-5 w-5"/>
                                <span>Línea uno de dirección</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="mt-[2px] h-5 w-5"/>
                                <span>123-456-7890</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="mt-[3px] h-5 w-5"/>
                                <span>ventas@aproillubricants.com</span>
                            </li>
                        </ul>
                    </div>


                    <div className="sm:text-[16px] text-[12px]">
                        <h4 className="mb-5 font-semibold">Legales</h4>
                        <ul className="space-y-0 text-neutral-900">
                            <li>
                                <Link to="/privacidad">Aviso de privacidad</Link>
                            </li>
                            <li>
                                <Link to="/terminos">Términos y condiciones</Link>
                            </li>
                            <p className="text-neutral-900">
                                © {new Date().getFullYear()} Aproil Lubricants
                            </p>
                        </ul>

                        <div className="flex items-center gap-8 pt-6">
                            <img
                                src={icon9001}
                                alt="Certificación ISO 9001"
                                className="h-15 w-15"
                            />
                            <img
                                src={iconMex}
                                alt="Producto Mexicano"
                                className="h-15 w-15"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
