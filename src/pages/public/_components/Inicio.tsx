import CurvedLine from "@assets/home-page/curv-line.svg?react";
import { GlobeSVG, ShineBorder } from "@components/magic-ui";

const Inicio = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="w-full flex justify-center">
          <div className="relative max-w-7xl px-5 w-full">
            <ShineBorder
              shineColor={["#ffffff", "#e30613", "#ffffff"]}
              borderWidth={3}
              className="rounded-xl inline-block w-full 2xl:mb-5"
            >
              <video
                src="video-corporativo-aproil.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full object-cover rounded-xl"
              />
            </ShineBorder>
          </div>
        </div>
        <div
          className="
                    mx-auto w-full max-w-lg
                    lg:absolute lg:inset-x-4 lg:bottom-0 lg:translate-y-[40px]
                    lg:mx-0 lg:w-auto lg:max-w-none
                    z-10 px-4 lg:px-6 xl:px-6"
        >
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
            {/* Ribbon rojo */}
            <div className="relative overflow-visible lg:inline-block w-full lg:w-auto">
              <span
                className=" font-[Nunito_Sans]
                                block w-full
                                2xl:px-40 2xl:py-5 2xl:text-2xl
                                xl:px-30 xl:py-4 xl:text-xl
                                lg:px-20 lg:py-4 lg:text-lg lg:text-left
                                sm:px-10 sm:py-2 sm:text-lg sm:text-center
                                px-1 py-1 text-sm text-center
                                bg-[#e30613] text-white font-extrabold uppercase tracking-[.3px]
                                leading-snug
                                2xl:[clip-path:polygon(24px_0,100%_0,calc(100%-24px)_100%,0_100%)]
                                xl:[clip-path:polygon(22px_0,100%_0,calc(100%-22px)_100%,0_100%)]
                                lg:[clip-path:polygon(20px_0,100%_0,calc(100%-20px)_100%,0_100%)]
                                md:[clip-path:polygon(20px_0,100%_0,calc(100%-20px)_100%,0_100%)]
                                sm:[clip-path:polygon(14px_0,100%_0,calc(100%-14px)_100%,0_100%)]
                                [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)]"
              >
                LUBRICANTES ESPECIALIZADOS,
                <br />
                DISEÑADOS PARA TU INDUSTRIA.
              </span>
            </div>

            {/* Ribbon blanco */}
            <a
              href="/productos"
              aria-label="Ir a productos"
              className="
    relative z-10 overflow-visible
    lg:flex-1 xl:flex-1 mt-0
    lg:ml-[-16px] xl:ml-[-19px]
    flex items-center justify-between
    2xl:pl-14 2xl:pr-14 2xl:py-3 2xl:text-xl
    xl:px-14 xl:py-3 xl:text-xl
    lg:px-12 lg:py-3 lg:text-base
    sm:px-10 sm:py-3 sm:text-sm
    px-2 py-2 text-xs
    bg-black text-[#e30613] font-extrabold uppercase tracking-[.3px]
    leading-snug
    2xl:[clip-path:polygon(14px_0,100%_0,calc(100%-14px)_100%,0_100%)]
    xl:[clip-path:polygon(16px_0,100%_0,calc(100%-16px)_100%,0_100%)]
    lg:[clip-path:polygon(12px_0,100%_0,calc(100%-12px)_100%,0_100%)]
    sm:[clip-path:polygon(14px_0,100%_0,calc(100%-14px)_100%,0_100%)]
    [clip-path:polygon(8px_0,100%_0,calc(100%-8px)_100%,0_100%)]
  "
            >
              <span className="mr-3">CONOCE NUESTROS PRODUCTOS</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-10 xl:h-10"
                viewBox="0 0 24 24"
                fill="white"
              >
                <circle cx="12" cy="12" r="12" fill="#e30613" />
                <path
                  d="M10 7l5 5-5 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <section className="relative w-full max-w-screen-xl mx-auto px-4 lg:py-12 mt-12">
        <div className="absolute top-0 left-0 -z-10 hidden 2xl:block">
          <CurvedLine className="scale-[2] origin-top-left -translate-x-10 -translate-y-[60px] " />
        </div>
        <div className="relative flex-1 flex flex-col gap-3 sm:gap-5 md:gap-5 lg:gap-10 2xl:gap-15">
          <div>
            <h1
              className="font-['Work_Sans'] font-extrabold italic text-3xl
                            sm:text-4xl
                            md:text-4xl
                            lg:text-5xl
                            xl:text-5xl xl:pl-5
                            2xl:text-6xl 2xl:mt-15 2xl:pl-13
                            text-gray-900"
            >
              BIENVENIDOS A <br /> APROIL LUBRICANTS
            </h1>
          </div>

          <div className="block 2xl:hidden lg:w-1/2 xl:w-200 border-t border-[#e30613] 2xl:-my-4" />

          <div className="flex flex-col lg:absolute md:right-0 md:top-0 text-left 2xl:mt-18">
            <span
              className="font-['Work_Sans'] italic text-gray-600 leading-[1.5]
                            text-xl"
            >
              DISTRIBUYENDO EN
            </span>
            <span
              className="font-['Work_Sans'] italic text-[#e30613] leading-[1]
                                text-lg
                                sm:text-xl
                                md:text-3xl"
            >
              MÉXICO Y
            </span>
            <span
              className="font-['Work_Sans'] italic text-[#e30613] leading-[1]
                            text-lg
                            sm:text-xl
                            md:text-2xl"
            >
              PARTE DE LATINOAMÉRICA
            </span>
          </div>
          <div className="relative flex flex-col lg:flex-row gap-8 2xl:mt-13">
            <div
              className="flex-1 flex flex-col gap-8 break-words
                                pl-0 text-sm
                                :pl-4 sm:text-base
                                md:pl-6 md:text-lg
                                lg:pl-8 lg:text-xl
                                2xl:pl-39 2xl:text-xl
                                font-['Nunito_Sans']
                                leading-relaxed text-gray-800 max-w-[850px]"
            >
              <p>
                Fabricamos lubricantes industriales de alto rendimiento que
                maximizan la eficiencia, protegen equipos y prolongan la vida
                útil de la maquinaria.
              </p>
              <p>
                Atendemos sectores como minería, energía, construcción,
                metalmecánica, alimenticia, transporte y marítima, con
                soluciones innovadoras y adaptadas a cada operación. Con
                tecnología de vanguardia, altos estándares de calidad y
                experiencia técnica, desarrollamos productos que superan
                expectativas.
              </p>
              <p>
                Además, contamos con una red de distribución en México y parte
                de Latinoamérica, que garantiza cercanía, disponibilidad y
                soporte especializado en todo momento.
              </p>

              <a
                href="/industrias"
                className="mt-4 text-sm italic font-bold max-w-sm
                                   sm:text-base
                                   md:text-lg
                                   lg:text-2xl
                                   xl:text-3xl
                                   font-['Work_Sans'] text-[#e30613]"
              >
                POTENCIA CON APROIL →
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <GlobeSVG
                className="
                                w-[240px] h-[240px]
                                sm:w-[280px] sm:h-[280px]
                                2xl:w-[400px] 2xl:h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;
