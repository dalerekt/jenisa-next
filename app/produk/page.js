"use client";
import { PRODUK_BIASA } from "../../lib/products";
import ProductCard from "../../components/ProductCard";
import CartPanel from "../../components/CartPanel";
import { useLang } from "../../components/LangProvider";

export default function Produk() {
  const { t } = useLang();
  // Hanya produk yang punya harga ekspor yang ditampilkan
  const ekspor = PRODUK_BIASA.filter((p) => p.tersedia("ekspor"));

  return (
    <section className="band">
      <div className="wrap">
        <div className="ekspor-banner">
          <h3 style={{ color: "var(--emas)", fontSize: "1.5rem", margin: "8px 0 6px" }}>{t("exp_banner")}</h3>
          <div style={{ opacity: 0.9 }}>{t("exp_sub")}</div>
        </div>

        <h2 style={{ fontSize: "2rem" }}>{t("exp_title")}</h2>
        <p className="note">{t("exp_note")}</p>

        <img src="/images/promo-2.jpg" alt="Jenisa siap minum isi 10 botol" style={{ width: "100%", borderRadius: 18, margin: "20px 0 4px" }} />
        <div className="grid">
          {ekspor.map((p) => <ProductCard key={p.id} product={p} mode="ekspor" />)}
        </div>
        <CartPanel mode="ekspor" products={PRODUK_BIASA} />
      </div>
    </section>
  );
}
