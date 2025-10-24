import Tech from "@pages/product-pages/Technology";
import ContactProducts from "@pages/product-pages/ContactProducts";
import TechnologyList from "@pages/product-pages/TechnologyList";
import ApplicationList from "@pages/product-pages/ApplicationsList";

export const revalidate = 600;

type Props = {
    params: Promise<{ locale: "es" | "en" }>;
};

export default async function ProductsHubPage({ params }: Props) {
    const { locale } = await params;

    return (
        <main className="bg-[#F9F9F9]">
            <Tech />
            <TechnologyList locale={locale} />
            <ApplicationList locale={locale}/>
            <ContactProducts/>
        </main>
    );
}
