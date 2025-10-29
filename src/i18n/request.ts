import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

type Locale = typeof routing.locales[number];

export default getRequestConfig(async ({ requestLocale }) => {
    const localeRaw: string | undefined = await requestLocale;

    function isLocale(l: string | undefined): l is Locale {
        return l !== undefined && routing.locales.includes(l as Locale);
    }

    let locale: Locale;

    if (isLocale(localeRaw)) {
        locale = localeRaw;
    } else {
        locale = routing.defaultLocale;
    }

    const modules = ['Header', 'Footer', 'ProductPage', 'Sidebar', 'ContactPage', 'HomePage', 'FAQ'];
    const messages: Record<string, Record<string, string>> = {};

    for (const mod of modules) {
        messages[mod] = (await import(`/messages/${locale}/${mod}.json`)).default;
    }

    return {
        locale,
        messages
    };
});