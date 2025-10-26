import { BoxReveal } from "@components/magic-ui/BoxReveal/box-reveal";
import {useTranslations} from "next-intl";

const Contact = () => {
    const t = useTranslations('ContactPage')
    return (
        <section className="w-full max-w-screen mx-auto px-4">
            <BoxReveal>
                <div className="flex flex-col text-center lg:text-left ">
                    <div className="aproil-font text-3xl xl:text-5xl 2xl:text-6xl italic">
                        <h1>
                            {t.rich("info.title", {
                                red: (chunks) => <span className="text-[#E30613]">{chunks}</span>,
                            })}
                        </h1>
                    </div>
                    <div className="text-lg">
                        <p className="mt-4">
                            {t.rich("info.description", {
                                br: () => <br/>
                            })}
                        </p>
                    </div>

                </div>
            </BoxReveal>
        </section>
    );
};

export default Contact;
