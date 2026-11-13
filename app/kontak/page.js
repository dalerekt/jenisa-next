"use client";
import WaPicker from "../../components/WaPicker";
import { useLang } from "../../components/LangProvider";

export default function Kontak() {
  const { t } = useLang();
  return (
    <section className="wrap kontak">
      <div className="label">{t("con_label")}</div>
      <h2 style={{ fontSize: "2rem", margin: "10px 0" }}>{t("con_title")}</h2>
      <p>{t("con_p")}</p>
      <div className="ctas" style={{ justifyContent: "center", marginTop: 16 }}>
        <WaPicker />
      </div>
    </section>
  );
}
