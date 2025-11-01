"use client"
import {tamborInclinado} from "@assets/industries";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";
import {InteractiveHoverButton} from "@components/magic-ui";

export default function IndustriesCardResponsive(){
    const t = useTranslations('IndustriesPage');
    const locale = useLocale();
    return (
        <section className="bg-neutral-100 rounded-4xl my-10 block md:hidden px-3">
            <div className="max-w-lg mx-auto">
                <div className="text-center py-10">
                        <span
                            className="aproil-font
                            block
                            text-3xl
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
                        className="aproil-font italic tracking-[.3px]
                            text-3xl
                            ">
                            {t('card.title')}
                        </span>
                </div>
                <div className="grid sm:grid-cols-2 text-center">
                    <div className="mx-auto">
                        <Image
                            src={tamborInclinado}
                            alt="tambor inclinado"
                            className="
                            sm:-ml-10 max-w-[250px]"
                        />
                    </div>
                    <div>
                        <div className="max-w-lg">
                            <p className="font-semibold text-xl lg:text-2xl mt-3">
                                {t('card.subTitle')}
                            </p>
                            <p className="mt-3 lg:text-lg">
                                {t('card.description')}
                            </p>
                        </div>
                        <div className="my-10">
                            <InteractiveHoverButton href={`/${locale}/contact`} className="py-2">{t('card.contact')}</InteractiveHoverButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}