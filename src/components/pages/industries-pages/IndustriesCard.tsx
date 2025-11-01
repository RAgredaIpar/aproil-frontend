"use client"
import Image from "next/image";
import { tamborInclinado } from "@assets/industries";
import {useLocale, useTranslations} from "next-intl";
import {InteractiveHoverButton} from "@components/magic-ui";

export default function IndustriesCard() {
    const t = useTranslations('IndustriesPage');
    const locale = useLocale();
    return (
        <section
            className=" bg-neutral-100 rounded-4xl mx-auto
            2xl:max-h-[500px] 2xl:max-w-[1366px]
            xl:min-h-[400px] xl:max-w-[1024px] xl:mx-auto
            lg:max-h-[370px] lg:my-30
            md:max-h-[350px] my-20 md:mx-5 md:block hidden
        ">
            <div className="grid grid-cols-2">
                <div>
                    <Image
                        src={tamborInclinado}
                        alt="tambor inclinado"
                        className="
                        2xl:ml-40 2xl:my-10 2xl:max-w-[400px]
                        xl:my-13 xl:max-w-[300px]
                        lg:ml-25 lg:my-5 lg:max-w-[300px]
                        md:ml-15 md:my-5 md:max-w-[280px]
                        "
                    />
                </div>
                <div
                    className="max-w-max max-h-max text-center
                    2xl:pt-20
                    xl:pt-10
                    lg:pt-5 lg:mr-15
                    md:pt-3 md:mr-10
                    ">
                    <div>
                        <span
                            className="aproil-font
                            block
                            2xl:text-5xl
                            xl:text-4xl
                            lg:text-3xl
                            md:text-3xl
                            bg-[#e30613] text-white tracking-[.3px] italic
                            leading-snug
                            2xl:[clip-path:polygon(24px_0,100%_0,calc(100%-24px)_100%,0_100%)]
                            lg:[clip-path:polygon(20px_0,100%_0,calc(100%-20px)_100%,0_100%)]
                            md:[clip-path:polygon(20px_0,100%_0,calc(100%-20px)_100%,0_100%)]
                            sm:[clip-path:polygon(14px_0,100%_0,calc(100%-14px)_100%,0_100%)]
                            [clip-path:polygon(10px_0,100%_0,calc(100%-10px)_100%,0_100%)]"
                        >
                            {t('card.ribbon')}
                        </span>
                        <span
                            className="aproil-font italic tracking-[.3px] max-w-max
                            2xl:text-5xl
                            xl:text-4xl
                            lg:text-3xl
                            md:text-3xl
                            ">
                            {t('card.title')}
                        </span>
                    </div>
                    <div className="max-w-lg mx-auto">
                        <p className="font-semibold text-xl lg:text-2xl mt-3">
                            {t('card.subTitle')}
                        </p>
                        <p className="mt-3 lg:text-lg">
                            {t('card.description')}
                        </p>
                    </div>
                    <div className="xl:pt-10 pt-5">
                        <InteractiveHoverButton href={`/${locale}/contact`} className="py-0">{t('card.contact')}</InteractiveHoverButton>
                    </div>
                </div>
            </div>
        </section>
    )
}