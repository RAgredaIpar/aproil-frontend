import Contacts from "@pages/contact-pages/Contact";
import Form from "@pages/contact-pages/Form";
import ContactInfo from "@pages/contact-pages/ContactInfo";
import Map from "@pages/contact-pages/map"
import '../globals.css';
import Image from "next/image";
import { banner } from "@assets/contact";

export default function Contact() {
    return (
        <main className="bg-[#F9F9F9]">
            <section className="container mx-auto px-4 py-12">
                <div className="flex justify-center">
                    <Image
                        src={banner}
                        alt="Banner Contact"
                        className="w-full max-w-[1536px] max-h-[600px] h-auto object-cover rounded-xl mb-10"
                    />
                </div>
                <div className="flex flex-col lg:grid-cols-2 gap-12 items-start lg:grid">
                    <div className="flex flex-col gap-10">
                        <Contacts />
                        <div className="hidden lg:flex">
                            <ContactInfo/>
                        </div>
                    </div>
                    <Form />
                    <div className="lg:col-span-2 hidden lg:flex w-full">
                        <Map/>
                    </div>
                </div>
            </section>
            <div className="lg:hidden w-full">
                <ContactInfo/>
                <Map/>
            </div>
        </main>

    );
}
