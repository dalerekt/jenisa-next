"use client";
import { useLang } from "../../components/LangProvider";

export default function Tentang() {
  const { t } = useLang();
  return (
    <section className="wrap">
      <div className="label">{t("story_label")}</div>
      <h2 style={{ fontSize: "2rem", margin: "10px 0 14px" }}>{t("story_title")}</h2>
      <p>{t("story_p")}</p>

      <h3 style={{ marginTop: 28, fontSize: "1.4rem" }}>{t("awards_title")}</h3>
      <ul>
        <li>{t("award1")}</li>
        <li>{t("award2")}</li>
        <li>{t("award3")}</li>
        <li>{t("award4")}</li>
      </ul>

      <h3 style={{ marginTop: 28, fontSize: "1.4rem" }}>{t("dist_title")}</h3>
      <p>{t("dist_p")}</p>

      <div className="feat" style={{ marginTop: 32 }}>
        <div><span className="ic">✓</span><span>{t("f1")}</span></div>
        <div><span className="ic">✓</span><span>{t("f2")}</span></div>
        <div><span className="ic">✓</span><span>{t("f3")}</span></div>
      </div>
    </section>
  );
}
