import "./globals.css";
import { LangProvider } from "../components/LangProvider";
import { CartProvider } from "../components/CartProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Ekspor Jenisa - Minuman Jeruk Nipis Madu",
  description: "Jenisa, minuman lemon khas Indonesia dari Kuningan, Jawa Barat.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <LangProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </LangProvider>
      </body>
    </html>
  );
}
