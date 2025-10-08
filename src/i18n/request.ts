import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }
    const modules = ['Header', 'Home', 'Reliability', 'Technology', 'Services', 'ServicesLamp', 'Distributor', 'Stories', 'Contact'];
    const messages: Record<string, any> = {};

    for (const mod of modules) {
        messages[mod] = (await import(`../../messages/${locale}/${mod}.json`)).default;
    }

    return {
        locale,
        messages
    };
});
