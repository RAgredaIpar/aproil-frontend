import { tamborAproil } from "@assets/home-page";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";
import {catalogMockup, lineaLarga} from "@assets/product";
import {InteractiveHoverButton} from "@components/magic-ui";
import Link from "next/link";
import {TextAnimate} from "@components/magic-ui/MagicText/magic-text";

export default function Tech(){
    const t = useTranslations('ProductPage')
    const local = useLocale();
    return (
        <section className="mx-auto my-16">
            <div className="relative bg-white rounded-4xl shadow-lg inset-shadow-sm z-10">
                <div className="flex max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl flex-col lg:flex-row items-stretch relative mx-auto">
                    <div className="flex flex-col justify-center p-2 lg:pl-10 lg:w-4/7 space-y-6 text-center  lg:text-left">
                        <div className="aproil-font text-xl overflow-visible whitespace-normal pt-10 lg:pt-0 lg:pr-3
                    sm:text-[30px]
                    xl:text-4xl
                    2xl:text-5xl">
                            {t.rich("card.title", {
                                red: (chunks) => <span className="text-[#E30613]">{chunks}</span>,
                            })}
                        </div>

                        <div className="text-sm hidden mx-auto
                    lg:text-left lg:flex
                    xl:pr-3 xl:mt-10 xl:pl-15
                    2xl:pr-30 2xl:mt-10 2xl:pl-20 2xl:text-[16px]">
                            <p className="text-gray-600">
                                {t('card.description')}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center w-full lg:w-2/5 ">
                        <div
                            className=" z-2
                        flex justify-center items-center
                        lg:h-[500px] xl:h-[600px] 2xl:h-[650px]
                        lg:transform lg:-translate-x-2 2xl:-translate-x-15"
                        >
                            <Image
                                src={tamborAproil}
                                alt="Imagen representativa"
                                className="object-contain rounded-lg max-w-[300px] lg:max-w-[450px] xl:max-w-[550px] 2xl:max-w-[680px]"
                            />
                        </div>
                        <div
                            className="absolute -translate-y-20 z-1
                        lg:hidden
                        xl:flex xl:-translate-x-90 xl:translate-y-10
                        2xl:translate-y-6
                        ">
                            <Image
                                src={lineaLarga}
                                alt="Tambor line"
                                className="
                            xl:max-w-[1280px]
                            2xl:max-w-[1904px] 2xl:max-h-[800px]
                            "/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex lg:flex-row flex-col max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto ">
                <div className="aproil-font container max-w-2/3 text-white bg-red-600 rounded-4xl text-center mx-auto
                pt-12 pb-7 -mt-5 -translate-y-7 -z-0
                lg:place-items-end lg:max-w-2/3 lg:mr-10 lg:pr-12 lg:mx-0 lg:rounded-3xl
                 ">
                    <p className="pt-6 2xl:mx-20 text-sm sm:text-xl lg:text-left">
                        {t.rich("card.cta", {
                            br: () => <br />
                        })}
                    </p>
                </div>
                <div className="flex justify-center z-10">
                    <Image src={catalogMockup}
                           alt="Catalog mockup"
                           className="
                           max-w-[200px] m-5
                           lg:m-0 lg:absolute lg:max-w-[180px] lg:-translate-x-125 lg:-translate-y-15
                           xl:max-w-[200px] xl:-translate-x-130 xl:-translate-y-20
                           2xl:max-w-[220px] 2xl:-translate-x-170 2xl:-translate-y-25
                           "
                    />
                </div>
                <div className="content-center text-center lg:pb-8">
                    <Link href={`/${local}/contact`}>
                        <InteractiveHoverButton
                            color="#FFFFFF"
                            textColor="#E30613"
                            hoverColor="#E30613"
                            hoverTextColor="#FFFFFF"
                            className="content-center py-1 rounded-xl lg:py-0 lg:px-2 2xl:px-5 lg:rounded-4xl border border-[#E30613]">
                            {t("card.catalog")}
                        </InteractiveHoverButton>
                    </Link>
                </div>
            </div>
            <div className="block lg:hidden mx-5 sm:mx-auto text-center my-20 border-t-8 border-b-8 p-3">
                <h1 className="aproil-font text-5xl font-extrabold">
                    {t('card.products')}
                </h1>
            </div>
            <div className="max-w-screen my-20">
                <TextAnimate animation="slideUp" by="word" className="text-center text-2xl">
                    {t.rich("card.techText", {
                        br: () => <br className="hidden lg:block" />,
                    })}
                </TextAnimate>
            </div>
            <div className="max-w-screen justify-items-center-safe">
                <p className="rounded-4xl text-xl shadow-[0_0_25px_rgba(0,0,0,0.2)] px-10 py-2 text-[#E30613]">
                    {t('card.tech')}
                </p>
            </div>
        </section>
    );
}