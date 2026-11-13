"use client";
import { useState } from "react";
import { waLink } from "../lib/models";
import { KONTAK } from "../lib/products";
import { useLang } from "./LangProvider";

export default function WaPicker() {
  const { t, lang } = useLang();
  const [terbuka, setTerbuka] = useState(false);

  return (
    <>
      <button className="btn btn-wa" onClick={() => setTerbuka(true)}>{t("con_btn")}</button>
      {terbuka && (
        <div className="modal" onClick={(e) => e.target === e.currentTarget && setTerbuka(false)}>
          <div className="modal-box">
            <div className="modal-head">
              <h3>{t("pick_title")}</h3>
              <button aria-label="Tutup" onClick={() => setTerbuka(false)}>✕</button>
            </div>
            {KONTAK.map((k) => (
              <a key={k.nama} className="kontak-opsi" target="_blank" rel="noopener"
                 href={waLink(k.nomor, t("sapaan"))}>
                <span>{k.nama}</span><small>{k.tampil}</small>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
