import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";
import { workSans } from "./ui/fonts";
import { CartProvider } from "./lib/AppContext";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Usuriaga Collection",
  description: "Tiendo de moda online con precios competitivos y envios",
};

export default function RootLayout({ children, modals, products }) {
  return (
    <html lang="es">
      <Head>
        <title>Usuriaga Collection</title>
        <meta name="description" content="Usuriaga Collection - La mejor moda a tu alcance." />
        <meta name="keywords" content="moda, ropa, ecommerce, Usuriaga Collection" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Usuriaga Collection" />
        <meta property="og:description" content="Usuriaga Collection - La mejor moda a tu alcance." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.usuriaga.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Usuriaga Collection" />
        <meta name="twitter:description" content="Usuriaga Collection - La mejor moda a tu alcance." />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://www.usuriaga.com" />
      </Head>
      <body className={`${inter.className} ${workSans.className} antialiased text-secondary`}>
        <CartProvider>
          <Navbar />
          {children}
          {modals}
          
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
