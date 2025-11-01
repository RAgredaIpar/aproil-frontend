import IndustriesList from "@pages/industries-pages/IndustriesList";
import IndustriesCard from "@pages/industries-pages/IndustriesCard";
import IndustriesCardResponsive from "@pages/industries-pages/IndustriesCardResponsive";

type Props = {
    params: Promise<{ locale: "es" | "en" }>;
};

export default async function IndustriesListPage({ params }: Props) {
    const { locale } = await params;


    return (
        <main className="bg-[#F9F9F9]">
            <IndustriesList locale={locale} />
            <IndustriesCard/>
            <IndustriesCardResponsive/>
        </main>
    );
}
