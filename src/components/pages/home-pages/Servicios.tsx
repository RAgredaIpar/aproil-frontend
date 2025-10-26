import { capacitacionesEspecializadas, visitaTecnica } from "@assets/home-page";
import { WobbleCard, Lamp } from "@components/aceternity"
import Image from "next/image";
import { useTranslations } from "next-intl";

const Servicios = () => {
    const t = useTranslations('HomePage')
    return (
        <section className="w-full ">
            <div className="container mx-auto flex flex-col lg:px-7 px-5 pb-10">
                <div className="flex justify-center">
                    <Lamp />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#d30613] min-h-[380px] lg:min-h-[300px] xl:min-h-[300px]"
                    >
                        <div className="xl:max-w-md lg:max-w-sm md:max-w-md sm:max-w-sm">
                            <h2 className="uppercase aproil-font text-left text-balance text-3xl lg:text-4xl max-w-1 font-semibold text-white">
                                {t('services.wobbleCardRedH')}
                            </h2>
                            <p className="text-left text-base/6 text-white max-w-[25rem]
                            xl:mt-4 xl:ml-15
                            mt-4 sm:ml-5">
                                {t('services.wobbleCardRedP')}
                            </p>
                        </div>
                        <Image
                            src={capacitacionesEspecializadas}
                            alt="Capacitaciones Especializadas"
                            className="absolute transform scale-x-[-1] object-contain
                            w-45 h-auto
                            xl:-right-[18%] xl:-bottom-5 xl:w-[550px]
                            lg:-right-[22%] lg:-bottom-13 lg:w-[500px]
                            md:-right-[10%] md:-bottom-8 md:w-[400px]
                            sm:-right-[11%] sm:-bottom-3 sm:w-[350px]
                            -right-[0%] -bottom-0"
                        />
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                        <h2 className="uppercase aproil-font sm:max-w-100 lg:max-w-70 text-left text-3xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                            {t('services.wobbleCardBlackH')}
                        </h2>
                        <p className="mt-4 sm:ml-5 max-w-[18rem] sm:max-w-md lg:max-w-[26rem] text-left text-base text-white">
                            {t('services.wobbleCardBlackP')}
                        </p>
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gray-500 min-h-[380px] sm:min-h-[300px]">
                        <div className="max-w-md">
                            <h2 className="uppercase aproil-font max-w-sm sm:max-w-md  text-left text-balance text-3xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
                                {t('services.wobbleCardGrayH')}
                            </h2>
                            <p className="sm:max-w-[22rem] md:max-w-[26rem] text-left text-base/6 text-white
                            xl:mt-4 xl:ml-15
                            mt-4 sm:ml-5">
                                {t('services.wobbleCardGrayP')}
                            </p>
                        </div>
                        <Image
                            src={visitaTecnica}
                            alt="Visita Tecnica"
                            className="absolute object-contain rounded-2xl
                            w-35 h-auto
                            xl:-right-[0%] xl:-bottom-0
                            lg:-right-[0%] lg:-bottom-5 lg:w-[450px]
                            md:-right-[7%] md:bottom-5 md:w-[300px]
                            sm:-right-[4%] sm:bottom-5 sm:w-[250px]
                            right-[5%] bottom-1"
                        />
                    </WobbleCard>
                </div>
            </div>
        </section>

    );
};

export default Servicios;
