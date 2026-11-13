"use client";
import Link from "next/link";
import { useLang } from "../../components/LangProvider";

export default function PeluangEkspor() {
  const { t } = useLang();
  return (
    <>
      <section className="partner">
        <div className="wrap" style={{ padding: 0 }}>
          <h2>{t("partner_title")}</h2>
          <p style={{ maxWidth: 460, margin: "12px 0 22px", color: "var(--krem)" }}>{t("partner_p")}</p>
          <Link className="btn btn-emas" href="/kontak">{t("partner_btn")}</Link>
        </div>
      </section>
      <section className="wrap">
        <div className="label">{t("exp_label")}</div>
        <h2 style={{ fontSize: "2rem" }}>{t("exp_banner")}</h2>
        <p>{t("exp_note")}</p>
        <Link className="btn btn-outline" href="/produk" style={{ marginTop: 14, display: "inline-block" }}>{t("btn_explore")}</Link>
      </section>
    </>
  );
}
