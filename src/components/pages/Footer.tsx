import {icon9001, iconMex} from "@assets/footer";
import {iconContacto, iconIndustrias, iconInicio, iconLogo, iconProductos} from "@assets/header";
import {Instagram, Linkedin, Mail, MapPin, Phone, Youtube} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";

function SocialLink({
                        href,
                        label,
                        children,
                    }: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 hover:text-red-800 hover:border-red-500 transition"
        >
            {children}
        </Link>
    );
}

function IconWrap({children}: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center justify-center shrink-0">
      {children}
    </span>
    );
}

export default function Footer() {
    const t = useTranslations('Footer')

    return (
        <footer className="bg-neutral-100">
            <div className="mx-auto py-12">
                <div className="mx-auto max-w-7xl px-4 pb-12 sm:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[16rem_minmax(0,1fr)] gap-4 xl:gap-10 md:items-start">
                        <div className="md:shrink-0">
                            <Image src={iconLogo} alt="APROIL Lubricants" className="h-25 md:h-30 w-auto -translate-x-4"
                                   draggable={false} priority/>
                            <p className="text-lg text-neutral-900 font-nunito">Aproil Lubricants</p>
                            <p className="aproil-font mt-2 text-[0.90rem] leading-snug uppercase tracking-wide">
                                Designed to perform,<br/>engineered to last.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-[minmax(12rem,max-content)_minmax(18rem,max-content)_minmax(12rem,max-content)] sm:justify-between gap-y-10 sm:gap-x-8">
                            <div className="sm:text-[16px] text-[13px]">
                                <h4 className="mb-4 font-semibold uppercase tracking-wide text-neutral-900">{t('Navigation')}</h4>
                                <ul className="space-y-2 text-neutral-900 max-w-max">
                                    <li><Link href="/" className="flex items-start gap-3 hover:opacity-90 hover:underline">
                                        <IconWrap><Image src={iconInicio} alt="" className="h-6 w-6 object-contain"/></IconWrap>
                                        <span className="leading-5">{t('Home')}</span>
                                    </Link></li>
                                    <li><Link href="/products" className="flex items-start gap-3 hover:opacity-90 hover:underline">
                                        <IconWrap><Image src={iconProductos} alt="" className="h-6 w-6 object-contain"/></IconWrap>
                                        <span className="leading-5">{t('Products')}</span>
                                    </Link></li>
                                    <li><Link href="/industries" className="flex items-start gap-3 hover:opacity-90 hover:underline">
                                        <IconWrap><Image src={iconIndustrias} alt="" className="h-6 w-6 object-contain"/></IconWrap>
                                        <span className="leading-5">{t('Industries')}</span>
                                    </Link></li>
                                    <li><Link href="/contact" className="flex items-start gap-3 hover:opacity-90 hover:underline">
                                        <IconWrap><Image src={iconContacto} alt="" className="h-6 w-6 object-contain"/></IconWrap>
                                        <span className="leading-5">{t('Contact')}</span>
                                    </Link></li>
                                </ul>
                            </div>

                            {/* Contacto */}
                            <div className="sm:text-[16px] text-[13px]">
                                <h4 className="mb-4 font-semibold uppercase tracking-wide text-neutral-900">{t('Contact')}</h4>
                                <ul className="space-y-3 text-neutral-900">
                                    <li className="flex items-start gap-3">
                                        <IconWrap><MapPin className="h-5 w-5"/></IconWrap>
                                        <span className="leading-5">
                                            Mérida, Yuc. México
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <IconWrap><Phone className="h-5 w-5"/></IconWrap>
                                        <a href="tel:+521234567890"
                                           className="hover:opacity-90 hover:underline leading-5">123-456-7890</a>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <IconWrap><Mail className="h-5 w-5"/></IconWrap>
                                        <a href="mailto:ventas@aproillubricants.com"
                                           className="hover:opacity-90 hover:underline leading-5">
                                            ventas@aproillubricants.com
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="sm:text-[16px] text-[13px]">
                                <h4 className="mb-4 font-semibold uppercase tracking-wide text-neutral-900">{t('Legal')}</h4>
                                <ul className="space-y-2 text-neutral-900">
                                    <li><Link href="/privacy" className="hover:opacity-90 hover:underline">{t('Notice')}</Link>
                                    </li>
                                    <li><Link href="/terms" className="hover:opacity-90 hover:underline">{t('Terms')}</Link>
                                    </li>
                                </ul>
                                <div className="flex items-center gap-6 pt-6">
                                    <Image src={icon9001} alt="Certificación ISO 9001" className="h-15 w-auto"/>
                                    <Image src={iconMex} alt="Producto Mexicano" className="h-15 w-auto"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-4">
                    <div className="border-t border-neutral-200"/>
                </div>
            </div>

            <div
                className="mx-auto max-w-7xl px-4 pb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-neutral-600">
                    © {new Date().getFullYear()} Aproil Lubricants, Inc. All rights reserved.
                </p>
                <div className="flex items-center gap-3">
                    <SocialLink href="https://www.instagram.com/aproillubricants/" label="Instagram">
                        <Instagram className="h-4 w-4"/>
                    </SocialLink>
                    <SocialLink href="#" label="LinkedIn">
                        <Linkedin className="h-4 w-4"/>
                    </SocialLink>
                    <SocialLink href="#" label="YouTube">
                        <Youtube className="h-4 w-4"/>
                    </SocialLink>
                </div>
            </div>
        </footer>
    );
}