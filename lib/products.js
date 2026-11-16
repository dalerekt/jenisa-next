import { Product } from "./models";

export const PRODUK_BIASA = [
  new Product({ id: "sy1", nama: { id: "Jenisa Syrup", en: "Jenisa Syrup" }, desc: { id: "Syrup satuan 630 ml", en: "Single syrup bottle 630 ml" }, daya: { id: "8 bulan", en: "8 months" }, harga: 30000, ekspor: 32000 }),
  new Product({ id: "sy12", nama: { id: "Jenisa Syrup (12 botol)", en: "Jenisa Syrup (12 bottles)" }, desc: { id: "Isi 12 botol kemasan syrup 630 ml", en: "Pack of 12 syrup bottles 630 ml" }, daya: { id: "8 bulan", en: "8 months" }, harga: 360000, ekspor: 384000 }),
  new Product({ id: "sm3", nama: { id: "Jenisa Siap Minum (3 botol)", en: "Jenisa Ready to Drink (3 bottles)" }, desc: { id: "Isi 3 botol kemasan 100 ml", en: "Pack of 3 bottles 100 ml" }, daya: { id: "6 bulan", en: "6 months" }, harga: 20000, ekspor: null }),
  new Product({ id: "sm10c", nama: { id: "Jenisa Siap Minum Cokelat (10 botol)", en: "Jenisa Ready to Drink Brown (10 bottles)" }, desc: { id: "Isi 10 botol cokelat 100 ml (minuman lemon asli)", en: "Pack of 10 brown bottles 100 ml (real lemon drink)" }, daya: { id: "6 bulan", en: "6 months" }, harga: 60000, ekspor: 62000 }),
  new Product({ id: "sm10h", nama: { id: "Jenisa Siap Minum Hijau (10 botol)", en: "Jenisa Ready to Drink Green (10 bottles)" }, desc: { id: "Isi 10 botol hijau 100 ml (minuman buah asli)", en: "Pack of 10 green bottles 100 ml (real fruit drink)" }, daya: { id: "6 bulan", en: "6 months" }, harga: 65000, ekspor: 67000 }),
];

export const KONTAK = [
  { nama: "Setia", nomor: "6281221699635", tampil: "0812-2169-9635" },
  { nama: "Azzam", nomor: "6281313317274", tampil: "0813-1331-7274" },
  { nama: "Adrian", nomor: "6281317945455", tampil: "0813-1794-5455" },
];
