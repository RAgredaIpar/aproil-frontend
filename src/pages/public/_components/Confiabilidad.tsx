import { fabricaLubricantes } from "@assets/home-page";
import { WordRotate } from "@components/magic-ui";

const Confiabilidad = () => {
  return (
    <div>
      <div className="block lg:hidden text-left mt-15">
        <p
          className="font-extrabold uppercase text-gray-500 text-center
                sm:text-3xl text-2xl"
        >
          Nuestro compromiso
        </p>
        <h2
          className="my-6 font-bold uppercase aproil-font text-center text-[#E30613]
                sm:text-5xl text-4xl"
        >
          Maximizar el desempeño <br />
          en tu industria.
        </h2>
        <p className="px-10 sm:text-lg text-base">
          Nuestra trayectoria, junto con la tecnología de vanguardia y los más
          altos estándares de calidad, nos permite desarrollar lubricantes que
          no solo cumplen, sino que superan las expectativas de nuestros
          clientes.
        </p>
        <p className="mt-6 px-10 sm:text-lg text-base">
          Más que un proveedor, somos un aliado estratégico. Entendemos los
          desafíos de cada sector y ofrecemos confianza, soporte técnico
          especializado y soluciones a la medida que impulsan tu crecimiento.
        </p>
        <p className="my-6 px-10 sm:text-lg text-base">
          Nuestro compromiso se sostiene en 4 pilares fundamentales que guían
          todo lo que hacemos:
        </p>
      </div>
      <div className="bg-[#E30613] mt-5 xl:mt-30 py-5 sm:py-8 h-full w-full flex items-center justify-center relative">
        <h3
          className="absolute text-3xl font-extrabold uppercase text-gray-500
            2xl:-top-10 2xl:left-[30%]
            xl:-top-10 xl:left-[25%]
            lg:-top-10 lg:left-[15%]
            hidden lg:block"
        >
          Nuestro compromiso
        </h3>
        <div
          className="flex
            2xl:w-2/3
            xl:w-6xl
            lg:w-4xl"
        >
          <div
            className="text-white hidden lg:block
                xl:min-w-lg xl:max-w-lg
                lg:max-w-md lg:min-w-[475px]"
          >
            <h2 className="text-4xl font-bold uppercase aproil-font">
              Maximizar el desempeño <br />
              en tu industria.
            </h2>
            <p className="mt-8 text-lg">
              Nuestra trayectoria, junto con la tecnología de vanguardia y los
              más altos estándares de calidad, nos permite desarrollar
              lubricantes que no solo cumplen, sino que superan las expectativas
              de nuestros clientes.
            </p>
            <p className="mt-6 text-lg">
              Más que un proveedor, somos un aliado estratégico. Entendemos los
              desafíos de cada sector y ofrecemos confianza, soporte técnico
              especializado y soluciones a la medida que impulsan tu
              crecimiento.
            </p>
            <p className="mt-6 text-lg">
              Nuestro compromiso se sostiene en 4 pilares fundamentales que
              guían todo lo que hacemos:
            </p>
            <WordRotate
              className="mt-15 text-6xl aproil-font font-extrabold text-white uppercase text-center"
              words={[
                "Confiabilidad",
                "Expertise",
                "Vanguardia",
                "Especialidad",
              ]}
              duration={2500}
              motionProps={{
                initial: { opacity: 0, x: -100, rotate: -10 },
                animate: { opacity: 1, x: 0, rotate: 0 },
                exit: { opacity: 0, x: 100, rotate: 10 },
                transition: {
                  duration: 0.6,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                },
              }}
            />
          </div>
          <div
            className="relative xl:overflow-visible lg:overflow-right
                2xl:min-w-2xl 2xl:max-w-2xl
                xl:max-w-xl xl:min-w-xl
                lg:max-w-[700px] lg:min-w-[450px]"
          >
            <div className="block lg:hidden flex-1">
              <WordRotate
                className="aproil-font font-extrabold text-white uppercase text-center pb-5 sm:pb-8 sm:text-6xl text-[2.6rem]"
                words={[
                  "Confiabilidad",
                  "Expertise",
                  "Vanguardia",
                  "Especialidad",
                ]}
                duration={2500}
                motionProps={{
                  initial: { opacity: 0, x: -100, rotate: -10 },
                  animate: { opacity: 1, x: 0, rotate: 0 },
                  exit: { opacity: 0, x: 100, rotate: 10 },
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                  },
                }}
              />
            </div>
            <div className="block lg:hidden flex-1">
              <img
                src={fabricaLubricantes}
                alt="Fábrica de lubricantes movile"
                className="mx-auto w-85 sm:w-full rounded-4xl max-w-[600px]"
              />
            </div>
            <div
              className="relative
                    2xl:h-[420px]
                    xl:h-[360px]
                    lg:h-[360px] hidden lg:block"
            >
              <img
                src={fabricaLubricantes}
                alt="Fábrica de lubricantes desktop"
                className="absolute object-fill
                            2xl:bottom-12 2xl:left-30 2xl:h-auto 2xl:w-165
                            xl:bottom-12 xl:left-28 xl:h-auto xl:w-144
                            lg:bottom-10 lg:left-5 lg:rounded-3xl lg:h-auto"
              />
            </div>
            <div
              className="text-white text-center flex-1
                        sm:text-lg text-base
                        2xl:ml-50 2xl:max-w-xl 2xl:min-w-lg
                        xl:ml-48 xl:min-w-md
                        lg:ml-10 lg:min-w-sm lg:py-0
                        sm:mx-10 sm:pt-10
                        mx-7 pt-7
                        "
            >
              Nuestros cuatro pilares no son solo palabras; son la base de cada
              producto y servicio que ofrecemos. Representan nuestro compromiso
              para asegurar que tu operación funcione sin interrupciones, con la
              mayor eficiencia y el soporte técnico especializado que mereces.
              Confía en la calidad que maximiza tu rendimiento.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confiabilidad;
