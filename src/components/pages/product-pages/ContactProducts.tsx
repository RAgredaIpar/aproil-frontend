import { cubetaAproil } from "@assets/product";
import { PointerHighlight } from "@components/aceternity";
import { InteractiveHoverButton } from "@components/magic-ui";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";
import Link from "next/link";

const ContactProducts = () => {
    const t = useTranslations('HomePage')
    const locale = useLocale()
    return (
        <section className="container w-full mx-auto flex relative">
            <div className="w-full lg:w-1/2
            2xl:pl-30 2xl:py-40
            xl:pl-30 xl:py-25
            lg:pl-20 lg:py-20
            md:py-30
            sm:py-5
            py-10">
                <div className="relative overflow-visible whitespace-nowrap z-10">
                    <div className="uppercase xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl text-[20px] lg:text-left text-center font-extrabold">
                        {t('contact.discover')}{" "}
                        <PointerHighlight
                            rectangleClassName="uppercase border-2 dark:border-[#E30613] dark:border-[#E30613]">
                            <span>{t('contact.pointer')}</span>
                        </PointerHighlight>
                    </div>
                    <div className="uppercase xl:text-[60px] lg:text-[50px] md:text-[60px] sm:text-[50px] text-[25px] lg:text-left text-center text-[#E30613] font-extrabold aproil-font">
                        {t('contact.lubrication')}
                    </div>
                </div>
                <div className="text-gray-500 sm:pb-10 max-w-3xl lg:text-left text-center lg:px-0 px-3
                2xl:pt-10
                xl:pt-15
                md:pt-20
                sm:px-25 sm:text-[24px] sm:pt-10">
                    {t('contact.text')}
                </div>
                <div className="aproil-font 2xl:text-3xl relative overflow-visible whitespace-nowrap z-10 lg:text-left text-center pt-10
                xl:text-2xl xl:pt-10
                lg:text-2xl lg:pt-20
                sm:text-2xl sm:pt-10">
                    <Link href={`/${locale}/contact`}>
                        <InteractiveHoverButton className="rounded-2xl p-2 lg:rounded-full">{t('contact.button')}</InteractiveHoverButton>
                    </Link>

                </div>
                <div className="flex lg:hidden justify-center items-center w-full pt-15">
                    <Image
                        src={cubetaAproil}
                        alt="Tambor Aproil"
                        className="object-contain max-w-[300px]"
                    />
                </div>
            </div>
            <div className="hidden lg:flex xl:max-w-150 2xl:max-w-180 overflow-hidden xl:pt-10 w-full xl:pl-40">
                <Image
                    src={cubetaAproil}
                    alt="Cubeta Aproil"
                    className="object-contain 2xl:w-140 lg:w-100 md:w-130 sm:w-90"
                />
            </div>

        </section>
    );
};

export default ContactProducts;
