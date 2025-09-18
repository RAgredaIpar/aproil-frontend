import { ShineBorder } from "@components/magic-ui";

const Inicio = () => {
  return (
    <div className="relative inline-block">
      <ShineBorder
        shineColor={["#ffffff", "#e30613", "#ffffff"]}
        borderWidth={3}
        className="rounded-xl inline-block"
      >
        <video
          src="video-corporativo-aproil.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl object-cover"
        />
      </ShineBorder>

      <div
        className="
          mt-1 mx-auto w-full max-w-lg
          lg:absolute lg:inset-x-4 lg:bottom-0 lg:translate-y-[40px]   /* iPad: cuelga un poco */
          lg:mx-0 lg:w-auto lg:max-w-none
          z-10 px-4 lg:px-6 xl:px-6
        "
      >
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-0">
          {/* Ribbon rojo */}
          <div className="relative overflow-visible lg:inline-block w-full lg:w-auto">
            <span
              className="
                block w-full
                2xl:px-40 2xl:py-5 2xl:text-2xl
                xl:px-30 xl:py-4 xl:text-xl
                lg:px-20 lg:py-4 lg:text-lg
                sm:px-10 sm:py-2 sm:text-lg sm:text-center
                px-1 py-1 text-sm text-center

                bg-[#e30613] text-white font-extrabold uppercase tracking-[.3px]
                leading-snug
                2xl:[clip-path:polygon(24px_0,100%_0,calc(100%-24px)_100%,0_100%)]
                xl:[clip-path:polygon(22px_0,100%_0,calc(100%-22px)_100%,0_100%)]
                lg:[clip-path:polygon(20px_0,100%_0,calc(100%-20px)_100%,0_100%)]
                md:[clip-path:polygon(20px_0,100%_0,calc(100%-20px)_100%,0_100%)]
                [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)]
              "
            >
              LUBRICANTES ESPECIALIZADOS,
              <br />
              DISEÑADOS PARA TU INDUSTRIA.
            </span>
          </div>

          {/* Ribbon blanco */}
          <div
            className="
              relative z-10 overflow-visible
              lg:flex-1
              xl:flex-1
              mt-0
              lg:ml-[-16px]
              xl:ml-[-19px]
            "
          >
            <div
              className="
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
              <span>CONOCE NUESTROS PRODUCTOS</span>
              <a
                href="/productos"
                className="ml-3 flex-shrink-0"
                aria-label="Ir a productos"
              >
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
      </div>
    </div>
  );
};

export default Inicio;
