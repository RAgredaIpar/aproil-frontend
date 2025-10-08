import "./globals.css";
import Header from "@pages/Header"
import Footer from "@pages/Footer"
import {Nunito_Sans, Work_Sans} from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

const Nunito = Nunito_Sans({
    subsets: ['latin'], weight: '400'
})
const Work = Work_Sans({
    subsets: ['latin'], weight: '900'
})

type Props = {
    children: React.ReactNode;
};

export default async function RootLayout({children}: Props) {
  return (
    <html lang="es" className={`${Nunito.className} ${Work.className}`}>
    <head>
        <meta charSet="utf-8"/>
        <link rel="icon" type="image/svg+xml" href="/mini-logo-aproil.svg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Pagina oficial de Aproil Lubricants."/>
        <title>Aproil Lubricants</title>
    </head>
    <body>
    <div className="flex min-h-dvh flex-col">
        <NextIntlClientProvider>
            <Header/>
            {children}
            <Footer/>
        </NextIntlClientProvider>
    </div>
    </body>
    </html>
  );
}
