"use client";
import Link from "next/link";
import { useLang } from "../components/LangProvider";

export default function Beranda() {
  const { t } = useLang();
  return (
    <>
      <header className="hero">
        <div className="hero-grid">
          <div>
            <h1>{t("hero_h")}</h1>
            <p className="from">{t("hero_from")}</p>
            <div className="ctas">
              <Link className="btn btn-emas" href="/produk">{t("btn_explore")}</Link>
              <Link className="btn btn-outline" href="/peluang-ekspor">{t("btn_distrib")}</Link>
            </div>
          </div>
          <div className="hero-img">
            <img src="/images/hero.jpg" alt="Jenisa" />
            <div className="badge-circle">{t("hero_badge")}</div>
          </div>
        </div>
      </header>

      <section className="split">
        <div>
          <div className="label">{t("about_label")}</div>
          <h2>{t("about_title")}</h2>
          <p>{t("story_p")}</p>
          <Link className="btn btn-emas" href="/tentang" style={{ marginTop: 14, display: "inline-block" }}>{t("story_btn")}</Link>
        </div>
        <img src="/images/poster.jpg" alt="Jenisa" />
      </section>

      <section className="wrap">
        <div className="galeri">
          <figure><img src="/images/promo-1.jpg" alt="Jenisa syrup dan siap minum" /></figure>
          <figure><img src="/images/promo-2.jpg" alt="Jenisa siap minum isi 10 botol" /></figure>
        </div>
      </section>
    </>
  );
}
