const Map = () => {
    return (
        <section className="mt-5 lg:-mt-10 xl:-mt-20 w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861.5911195717485!2d-89.67964847493961!3d21.065382382144453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5675f213b9d9a9%3A0x37ae466829e4dd47!2sAproil!5e0!3m2!1ses-419!2spe!4v1760397588466!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
};

export default Map;
