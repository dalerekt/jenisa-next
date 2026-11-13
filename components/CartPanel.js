"use client";
import { rupiah, waLink } from "../lib/models";
import { KONTAK } from "../lib/products";
import { useLang } from "./LangProvider";
import { useCart } from "./CartProvider";

export default function CartPanel({ mode, products }) {
  const { t, lang, dict } = useLang();
  const { carts } = useCart();
  const cart = carts[mode];
  const items = cart.isiKeranjang(products);

  if (!items.length) {
    return <div className="cart"><p>{t("cart_empty")}</p></div>;
  }

  return (
    <div className="cart">
      {items.map((p) => (
        <div className="row" key={p.id}>
          <span>{p.namaDi(lang)} x{cart.jumlah(p.id)}</span>
          <span>{rupiah(p.hargaUntuk(mode) * cart.jumlah(p.id), lang)}</span>
        </div>
      ))}
      <div className="total">{t("total")}: {rupiah(cart.total(products), lang)}</div>
      {KONTAK.map((k) => (
        <a
          key={k.nama}
          className="btn btn-wa btn-block"
          href={waLink(k.nomor, cart.pesan(products, lang, dict))}
          target="_blank"
          rel="noopener"
        >
          {t("order_wa")} {k.nama}
        </a>
      ))}
    </div>
  );
}
