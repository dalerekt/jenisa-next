"use client";
import { useLang } from "../../components/LangProvider";

export default function Kualitas() {
  const { t } = useLang();
  const manfaat = ["ingr1","ingr2","ingr3","ingr4","ingr5","ingr6","ingr7","ingr8","ingr9"];
  return (
    <>
      <section className="wrap">
        <div className="label">{t("gal_label")}</div>
        <h2 style={{ fontSize: "2rem" }}>{t("gal_title")}</h2>
        <div className="galeri">
          <figure><img src="/images/poster.jpg" alt="Jenisa" /><figcaption>{t("gal_cap1")}</figcaption></figure>
          <figure><img src="/images/hero.jpg" alt="Jenisa" /><figcaption>{t("gal_cap2")}</figcaption></figure>
        </div>
      </section>

      <section className="wrap">
        <div className="label">{t("ingr_label")}</div>
        <h2 style={{ fontSize: "2rem", margin: "10px 0 14px" }}>{t("ingr_title")}</h2>
        <p>{t("ingr_p1")}</p>
        <p>{t("ingr_p2")}</p>
        <ul>{manfaat.map((k) => <li key={k}>{t(k)}</li>)}</ul>
      </section>

      <section className="cert">
        <div className="cert-in">
          <span className="tag">{t("cert_tag")}</span>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span className="chip">{t("cert_halal")}</span>
            <span className="chip">{t("cert_pirt")}</span>
          </div>
        </div>
      </section>
    </>
  );
}
