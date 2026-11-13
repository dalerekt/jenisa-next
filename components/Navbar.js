"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLang } from "./LangProvider";
import { useCart } from "./CartProvider";

const MENU = [
  { href: "/tentang", key: "nav_about" },
  { href: "/produk", key: "nav_products2" },
  { href: "/kualitas", key: "nav_quality" },
  { href: "/peluang-ekspor", key: "nav_export" },
  { href: "/kontak", key: "nav_contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { t, lang, setLang } = useLang();
  const { totalItem } = useCart();
  const [terbuka, setTerbuka] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-in">
        <Link href="/" className="logo">
          Jenisa<small>{t("tag_small")}</small>
        </Link>

        <div className="menu">
          {MENU.map((m) => (
            <Link key={m.href} href={m.href} className={pathname === m.href ? "aktif" : ""}>
              {t(m.key)}
            </Link>
          ))}
        </div>

        <div className="kanan">
          <Link href="/kontak" className="inquire">{t("inquire")}</Link>
          <div className="lang">
            <button className={lang === "id" ? "aktif" : ""} onClick={() => setLang("id")}>ID</button>
            <button className={lang === "en" ? "aktif" : ""} onClick={() => setLang("en")}>EN</button>
          </div>
          <span className="badge">{totalItem}</span>
          <button className="burger" aria-label="Menu" onClick={() => setTerbuka(!terbuka)}>☰</button>
        </div>
      </div>

      {terbuka && (
        <div className="menu-mobile">
          {MENU.map((m) => (
            <Link key={m.href} href={m.href} onClick={() => setTerbuka(false)}>
              {t(m.key)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
