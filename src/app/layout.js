import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";
import { workSans } from "./ui/fonts";
import { CartProvider } from "./lib/cartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Usuriaga Collection ",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${workSans.className} antialiased text-secondary `}
      >
        <Navbar />
        <CartProvider>
          {children}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
