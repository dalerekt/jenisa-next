"use client";
import { PRODUK_BIASA } from "../../lib/products";
import ProductCard from "../../components/ProductCard";
import CartPanel from "../../components/CartPanel";
import { useLang } from "../../components/LangProvider";

export default function Produk() {
  const { t } = useLang();
  const ekspor = PRODUK_BIASA.filter((p) => p.tersedia("ekspor"));

  return (
    <section className="band">
      <div className="wrap">
        <div className="label">{t("cat_label")}</div>
        <h2 style={{ fontSize: "2rem" }}>{t("cat_title")}</h2>
        <p className="note">{t("cat_note")}</p>

        <div className="grid">
          {PRODUK_BIASA.map((p) => <ProductCard key={p.id} product={p} mode="biasa" />)}
        </div>
        <CartPanel mode="biasa" products={PRODUK_BIASA} />

        <div className="ekspor-panel">
          <div className="ekspor-banner">
            <div className="label">{t("exp_label")}</div>
            <h3 style={{ color: "var(--emas)", fontSize: "1.5rem", margin: "8px 0 6px" }}>{t("exp_banner")}</h3>
            <div style={{ opacity: 0.9 }}>{t("exp_sub")}</div>
          </div>
          <h2 style={{ fontSize: "2rem" }}>{t("exp_title")}</h2>
          <p className="note">{t("exp_note")}</p>
          <div className="grid">
            {ekspor.map((p) => <ProductCard key={p.id} product={p} mode="ekspor" />)}
          </div>
          <CartPanel mode="ekspor" products={PRODUK_BIASA} />
        </div>
      </div>
    </section>
  );
}
