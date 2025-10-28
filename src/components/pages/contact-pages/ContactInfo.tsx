import { Phone, Mail, MapPin} from "lucide-react";
import {useTranslations} from "next-intl";

const ContactInfo = () => {
    const t = useTranslations('ContactPage')
    return (
        <section className="relative w-full lg:w-[90%] bg-[#e30613] text-white px-12 py-10 lg:rounded-r-4xl shadow-xl
        before:content-[''] before:absolute before:top-0 before:left-5 lg:before:left-4 sm:before:left-15 before:h-full before:w-[6px] before:bg-white">
            <div className="space-y-7 flex flex-col items-center lg:items-start sm:text-xl">
                <div className="flex gap-4 w-full sm:max-w-md  lg:max-w-max">
                    <Phone className="lg:w-8 h-8 flex-shrink-0 mt-1"/>
                    <div>
                        <p className="font-semibold tracking-wide">
                            {t("card.service")}
                        </p>
                        <p>(+52) 999 495 2796</p>
                    </div>
                </div>

                <div className="flex gap-4 w-full sm:max-w-md  lg:max-w-max">
                    <Mail className="lg:w-8 h-8 flex-shrink-0 mt-1"/>
                    <div>
                        <p className="font-semibold tracking-wide ">
                            {t("card.email")}
                        </p>
                        <p className="break-all">
                            ventas@aproillubricants.com
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 w-full sm:max-w-md lg:max-w-max">
                    <MapPin className="lg:w-8 h-8 flex-shrink-0 mt-1"/>
                    <div>
                        <p className="font-semibold tracking-wide">
                            {t("card.location")}
                        </p>
                        <div className="flex items-start gap-3">
                            <p>
                                Carretera Dzityá – San Antonio <br />
                                Hool TC. 30021<br />
                                CP 97302, Mérida, Yucatán, México.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="font-semibold tracking-wide">
                        {t("card.social")}
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="hover:text-gray-200 transition"> </a>
                        <a href="#" className="hover:text-gray-200 transition"> </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
