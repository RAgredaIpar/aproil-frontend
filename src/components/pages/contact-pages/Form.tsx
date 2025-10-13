"use client";

import { useState } from "react";
import {ShineBorder} from "@components/magic-ui";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Formulario enviado:", formData);
        // Aquí podrías integrar tu backend o servicio de correo (Ej: API route o EmailJS)
    };

    return (
        <div className="flex justify-center w-full">
            <ShineBorder
                shineColor={["#ffffff", "#e30613", "#ffffff"]}
                borderWidth={3}
                className="rounded-4xl inline-block w-full max-w-lg"
            >
                <section className="relative w-full max-w-lg mx-auto p-6 rounded-4xl shadow-xl bg-white">
                    <h1 className="text-3xl pb-10 pt-10">Contactanos</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-lg font-medium text-gray-700">Nombre completo</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700">Teléfono</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700">Correo electrónico</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700">Empresa</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-medium text-gray-700">Mensaje</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                required
                                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-black text-white mt-10 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold px-10"
                        >
                            Enviar
                        </button>
                    </form>
                </section>
            </ShineBorder>
        </div>
    );
};

export default Form;
