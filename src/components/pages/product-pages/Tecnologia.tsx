import { tamborAproil } from "@assets/home-page";
import Image from "next/image";
import {TextAnimate} from "@components/magic-ui/MagicText/magix-text";
import {InteractiveHoverButton} from "@components/magic-ui";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

export default function Tech(){
    const t = useTranslations('ProductTech')
    const locale = useLocale()
    return (
        <section className="max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto my-16 relative">
            <div className="flex flex-col lg:flex-row items-stretch relative z-2 bg-white rounded-4xl shadow-lg inset-shadow-sm">

                <div className="flex flex-col justify-center p-2 lg:pl-10 lg:w-4/7 space-y-6 z-10 text-center  lg:text-left">
                    <div className="aproil-font text-xl sm:text-[30px] xl:text-4xl overflow-visible whitespace-normal 2xl:text-5xl ">
                        {t.rich("title", {
                            red: (chunks) => <span className="text-[#E30613]">{chunks}</span>,
                        })}
                    </div>

                    <div className="text-center lg:text-left lg:pl-15 2xl:pr-30 2xl:mt-10 xl:pr-3">
                        <p className="text-gray-600">
                            {t('description')}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full lg:mt-0 lg:relative lg:w-2/5 lg:pl-0">
                    <div
                        className="
                        w-full flex justify-center items-center
                        max-w-[250px] lg:max-h-none
                        lg:relative
                        lg:h-[500px] xl:h-[600px] 2xl:h-[700px]
                        lg:transform lg:-translate-x-2 2xl:-translate-x-5"
                    >
                        <Image
                            src={tamborAproil}
                            alt="Imagen representativa"
                            className="object-contain rounded-lg max-w-[300px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px]"
                        />
                    </div>
                </div>
            </div>
            <div className="relative container flex lg:flex-row flex-col">
                <div className="aproil-font container text-white bg-red-600 rounded-3xl pt-12 lg:pr-12 pb-7 -mt-5 -translate-y-7 -z-0 lg:mr-10
                text-center
                lg:place-items-end lg:max-w-2/3
                 ">
                    <p className="pt-6 text-xl">
                        {t.rich("cta", {
                            br: () => <br />
                        })}
                    </p>
                </div>
                <div className="content-center text-center lg:pb-8">
                    <Link href="./contact">
                        <InteractiveHoverButton className="content-center lg:py-0" >
                            {t("catalog")}
                        </InteractiveHoverButton>
                    </Link>
                </div>
            </div>
            <div className="max-w-screen my-20">
                <TextAnimate animation="slideUp" by="word" className="text-center text-2xl">
                    {t.rich("techText", {
                            br: () => <br className="hidden lg:block" />,
                    })}
                </TextAnimate>
            </div>
            <div className="max-w-screen justify-items-center-safe">
                <p className="rounded-4xl text-xl shadow-[0_0_25px_rgba(0,0,0,0.2)] px-10 py-2 text-[#E30613]">
                    {t('tech')}
                </p>
            </div>
        </section>
    );
}