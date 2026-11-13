"use client";
import { rupiah } from "../lib/models";
import { useLang } from "./LangProvider";
import { useCart } from "./CartProvider";

export default function ProductCard({ product, mode }) {
  const { t, lang } = useLang();
  const { carts, ubah } = useCart();
  const cart = carts[mode];

  return (
    <div className="card">
      <h3>{product.namaDi(lang)}</h3>
      <small>{product.desc[lang]}</small>
      <small>{t("shelf")}: {product.daya[lang]}</small>
      <div className="price">{rupiah(product.hargaUntuk(mode), lang)}</div>
      <div className="qty">
        <button onClick={() => ubah(mode, product.id, -1)}>−</button>
        <span>{cart.jumlah(product.id)}</span>
        <button onClick={() => ubah(mode, product.id, 1)}>+</button>
      </div>
    </div>
  );
}
