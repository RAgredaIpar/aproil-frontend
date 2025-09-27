import { Carousel, Card } from "@components/aceternity";

const Tecnologia = () => {
    const cards = [
        {
            src: "https://via.placeholder.com/600x400",
            title: "Tecnología Avanzada",
            category: "Innovación",
            content: (
                <p>
                    Esta es una tarjeta de ejemplo. Aquí puedes poner descripciones,
                    texto largo o incluso componentes React.
                </p>
            ),
        },
        {
            src: "https://via.placeholder.com/600x400",
            title: "Escalabilidad",
            category: "Infraestructura",
            content: (
                <p>
                    Otra tarjeta de prueba. Más adelante puedes reemplazar estas imágenes
                    y textos con el contenido real.
                </p>
            ),
        },
        {
            src: "https://via.placeholder.com/600x400",
            title: "Integración",
            category: "Software",
            content: (
                <p>
                    Esta tarjeta muestra cómo el carrusel maneja contenido dinámico y
                    ampliable.
                </p>
            ),
        },
    ]
    const items = cards.map((card, index) => (
        <Card key={index} card={card} index={index} layout />
    ))
    return (
        <div className="pt-15">
            <div className="container mx-auto
            lg:px-16
            xl:px-30
            2xl:px-35">
                <h1 className="
                font-['Work_Sans'] text-[#E30613] text-3xl mb-10 text-center
                sm:text-5xl
                lg:text-left
                ">
                    NUESTRA TECNOLOGÍA
                </h1>
                <p className="
                font-['Nunito_Sans'] text-gray-900 text-lg
                text-center
                lg:text-left">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <Carousel items={items} />
        </div>
    )
}
export default Tecnologia;