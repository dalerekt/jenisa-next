"use client";
import { useLang } from "./LangProvider";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div>{t("foot_name")}</div>
      <div>{t("foot_tag")}</div>
      <div>© 2026</div>
    </footer>
  );
}
