import { BoxReveal } from "@components/magic-ui/BoxReveal/box-reveal";
import { useTranslations } from "next-intl";
import { banner } from "@assets/contact";
import Image from "next/image";

const Contact = () => {
    const t = useTranslations('');

    return (
        <section className="w-full max-w-screen mx-auto px-4">
            <BoxReveal>
                <div className="flex flex-col text-center lg:text-left ">
                    <div className="aproil-font text-3xl xl:text-5xl 2xl:text-6xl italic">
                        <h1 className="text-[#e30613]">
                            SIEMPRE LISTOS
                        </h1>
                        <h1>
                            PARA ASESORARTE
                        </h1>
                    </div>
                    <div className="text-lg">
                        <p className="mt-4">
                            En Aproil Lubricants entendemos los retos de tu sector. Te
                            ayudamos a identificar la mejor solución de lubricación con
                            productos de alto desempeño y soporte especializado, para que
                            alcances tus objetivos con seguridad y confianza.
                        </p>
                        <p className="mt-2">
                            Ponte en contacto con nosotros y con gusto te ayudaremos.
                        </p>
                    </div>

                </div>
            </BoxReveal>
        </section>
    );
};

export default Contact;
