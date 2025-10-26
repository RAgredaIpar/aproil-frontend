import { distribuidorLubricantes } from "@assets/home-page"
import { ContainerScroll } from "@components/aceternity"
import Image from "next/image";
import { useTranslations } from "next-intl";

const Distribuidor = () => {
    const t = useTranslations('HomePage')
    return (
        <section className="container mx-auto text-center pt-10">
            <ContainerScroll titleComponent={
                <div className="text-black ">
                    {t.rich('distributor.header', {
                        p1: (text) => (
                            <p className="text-xl font-extrabold sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                                {text}
                            </p>
                        ),
                        p2: (text) => (
                            <p className="text-3xl font-extrabold sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                                {text}
                            </p>
                        ),
                    })}
                </div>}>
                <Image src={distribuidorLubricantes} alt="Distribuidor" />
            </ContainerScroll>
        </section>
    )
}

export default Distribuidor;