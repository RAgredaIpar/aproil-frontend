import { fabricaLubricantes } from "@assets/home-page";
import { WordRotate } from "@components/magic-ui";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";

const Confiabilidad = () => {
    const t = useTranslations('Reliability')
    const locale = useLocale();
  return (
    <div className="pt-10 pb-20">
      <div className="block lg:hidden text-left mt-15">
        <p
          className="font-extrabold uppercase text-gray-500 text-center
                sm:text-3xl text-2xl"
        >
            {t('COMPROMISE')}
        </p>
        <h2
          className="my-6 font-bold uppercase aproil-font text-center text-[#E30613]
                sm:text-5xl text-4xl"
        >
            {t('INDUSTRY1')} <br />
            {t('INDUSTRY2')}
        </h2>
        <p className="px-10 sm:text-lg text-base">
            {t('TRAJECTORY1')}
        </p>
        <p className="mt-6 px-10 sm:text-lg text-base">
            {t('TRAJECTORY2')}
        </p>
        <p className="my-6 px-10 sm:text-lg text-base">
            {t('TRAJECTORY3')}
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
            {t('COMPROMISE')}
        </h3>
        <div
          className="flex my-5
            2xl:w-2/3
            xl:w-6xl
            lg:w-4xl"
        >
          <div
            className={`text-white hidden lg:block
                xl:min-w-lg xl:max-w-lg
                lg:max-w-md lg:min-w-[475px]
                `}
          >
            <h2 className="text-4xl font-bold uppercase aproil-font">
                {t('INDUSTRY1')} <br />
                {t('INDUSTRY2')}
            </h2>
            <p className="mt-8 text-lg">
                {t('TRAJECTORY1')}
            </p>
            <p className="mt-6 text-lg">
                {t('TRAJECTORY2')}
            </p>
            <p className="mt-6 text-lg">
                {t('TRAJECTORY3')}
            </p>
            <WordRotate
              className={`mt-15 text-6xl aproil-font font-extrabold text-white uppercase text-center 
              ${locale === "en" ? "lg:pt-7" : "none"}`}
              words={[
                  `${t('RELIABILITY')}`,
                  `${t('EXPERTISE')}`,
                  `${t('INNOVATION')}`,
                  `${t('SPECIALTY')}`,
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
                    `${t('RELIABILITY')}`,
                    `${t('EXPERTISE')}`,
                    `${t('INNOVATION')}`,
                    `${t('SPECIALTY')}`,
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
              <Image
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
              <Image
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
                {t('PILLARS')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confiabilidad;
