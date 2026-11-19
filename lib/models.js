// Model produk dan keranjang (pendekatan OOP sederhana)

export function rupiah(n, lang = "id") {
  return "Rp " + n.toLocaleString(lang === "en" ? "en-US" : "id-ID");
}

export function waLink(nomor, teks) {
  return `https://wa.me/${nomor}?text=${encodeURIComponent(teks)}`;
}

export class Product {
  constructor({ id, nama, desc, daya, harga, ekspor, foto }) {
    this.id = id;
    this.nama = nama;     // { id, en }
    this.desc = desc;     // { id, en }
    this.daya = daya;     // { id, en }
    this.harga = harga;   // harga biasa
    this.ekspor = ekspor; // harga ekspor, null jika belum tersedia
    this.foto = foto;     // path gambar produk
  }

  hargaUntuk(mode) {
    return mode === "ekspor" ? this.ekspor : this.harga;
  }

  tersedia(mode) {
    return this.hargaUntuk(mode) != null;
  }

  namaDi(lang) {
    return this.nama[lang];
  }
}

export class Cart {
  constructor(mode, lines = {}) {
    this.mode = mode;   // "biasa" atau "ekspor"
    this.lines = lines; // { [productId]: jumlah }
  }

  ubah(productId, delta) {
    const jumlah = Math.max(0, (this.lines[productId] || 0) + delta);
    return new Cart(this.mode, { ...this.lines, [productId]: jumlah });
  }

  jumlah(productId) {
    return this.lines[productId] || 0;
  }

  isiKeranjang(products) {
    return products.filter((p) => this.jumlah(p.id) > 0 && p.tersedia(this.mode));
  }

  total(products) {
    return this.isiKeranjang(products).reduce(
      (sum, p) => sum + p.hargaUntuk(this.mode) * this.jumlah(p.id),
      0
    );
  }

  totalItem() {
    return Object.values(this.lines).reduce((a, b) => a + b, 0);
  }

  pesan(products, lang, dict) {
    const items = this.isiKeranjang(products);
    const total = this.total(products);
    const daftar = items
      .map((p) => {
        const sub = p.hargaUntuk(this.mode) * this.jumlah(p.id);
        return `- ${p.namaDi(lang)} x${this.jumlah(p.id)} = ${rupiah(sub, lang)}`;
      })
      .join("\n");
    const intro = this.mode === "ekspor" ? dict.pesanEksporIntro[lang] : dict.pesanIntro[lang];
    const outro = this.mode === "ekspor" ? dict.pesanEksporOutro[lang] : dict.pesanOutro[lang];
    return `${intro}\n${daftar}\n${dict.total[lang]}: ${rupiah(total, lang)}\n\n${outro}`;
  }
}
