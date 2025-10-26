'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter, routing } from '../../i18n/routing';
import { useState } from 'react';
import { Globe } from 'lucide-react';

export default function LocaleSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const locales = routing.locales;

    const handleSelect = (newLocale: string) => {
        setOpen(false);
        if (newLocale !== locale) {
            router.replace(pathname, { locale: newLocale });
            router.refresh();
        }
    };

    return (
        <div className="relative inline-block text-left">

            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
            >
                <Globe size={18} />
                <span className="uppercase">{locale}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {open && (
                <ul
                    className="absolute right-0 mt-2 w-32 origin-top-right rounded-xl border border-gray-200 bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50"
                >
                    {locales.map((l) => (
                        <li key={l}>
                            <button
                                onClick={() => handleSelect(l)}
                                className={`flex rounded-xl w-full items-center justify-start px-4 py-2 text-sm capitalize transition ${
                                    l === locale
                                        ? 'bg-gray-100 text-gray-900 font-semibold'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                            >
                                {l === 'es' ? 'Español' : 'English'}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
