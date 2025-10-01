import { tamborAproil } from "@assets/home-page";
import { PointerHighlight } from "@components/aceternity";
import { InteractiveHoverButton } from "@components/magic-ui";

const Contacto = () => {
    return (
        <section className="w-full flex relative">
            <div className="w-full sm:w-1/2
            2xl:pl-30 2xl:py-40
            xl:pl-30 xl:py-25
            lg:pl-20 lg:py-20
            md:pl-15 md:py-30
            sm:pl-10 sm:py-5
            py-10">
                <div className="relative overflow-visible whitespace-nowrap z-10">
                    <div className="uppercase xl:text-7xl lg:text-[65px] md:text-5xl sm:text-4xl text-[20px] text-center font-extrabold">
                        Hablemos de {" "}
                        <PointerHighlight
                            rectangleClassName="uppercase border-4 dark:border-[#E30613] dark:border-[#E30613]">
                            <span>soluciones</span>
                        </PointerHighlight>
                    </div>
                    <div className="uppercase xl:text-[90px] lg:text-[80px] md:text-[60px] sm:text-[50px] text-[25px] sm:text-left text-center text-[#E30613] font-extrabold aproil-font">
                        de Lubricación.
                    </div>
                </div>
                <div className="block sm:hidden">
                    <img
                        src={tamborAproil}
                        alt="Tambor Aproil"
                        className="object-contain w-full"
                    />
                </div>
                <div className="text-gray-500 md:pb-20 sm:pb-10 max-w-3xl sm:text-left text-center sm:px-0 px-2
                2xl:text-[32px] 2xl:pt-10
                xl:text-[28px] xl:pt-15
                lg:text-[40px] lg:pt-40
                md:text-[30px] md:pt-20
                sm:text-[20px] sm:pt-10">
                    En Aproil Lubricants encontrarás un aliado experto. Te asesoramos con la mejor opción para reducir costos, evitar paros y proteger tus equipos
                </div>
                <div className="aproil-font 2xl:text-3xl relative overflow-visible whitespace-nowrap z-10 sm:text-left text-center pt-10
                xl:text-2xl xl:pt-10
                lg:text-4xl lg:pt-20
                sm:text-2xl sm:pt-10">
                    <InteractiveHoverButton>Contacta con un asesor</InteractiveHoverButton>
                </div>
            </div>
            <div className="hidden sm:flex w-1/2 items-center justify-center overflow-hidden 2xl:py-0 xl:pt-60 md:pb-0">
                <img
                    src={tamborAproil}
                    alt="Tambor Aproil"
                    className="object-contain max-w-none 2xl:w-800 lg:w-160 md:w-130 sm:w-90"
                />
            </div>

        </section>
    );
};

export default Contacto;
