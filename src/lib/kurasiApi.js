/**
 * Berkas kurasi dari API dasbor IYSA.
 *
 * ── Kenapa akronim, bukan id edisi ────────────────────────────────────────
 *
 * Id edisi berganti tiap tahun. Menanamkannya di situs berarti ada dua
 * repositori yang harus disunting berbarengan tiap edisi baru, dan yang lupa
 * salah satunya baru ketahuan saat pengunjung membuka halaman kosong.
 * Akronim + tahun menunjuk satu edisi dan keduanya sudah diketahui penulis
 * situs tanpa membuka dasbor.
 */

const API = "https://api-dashboard.iysa.or.id/api/public/v1";
const SERI = "bisf";

async function ambil(jalur) {
  const res = await fetch(`${API}/${SERI}${jalur}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  return json.data;
}

/** Edisi yang ada di dasbor, terbaru dulu: `[{tahun, nama, dipin}]`. */
export async function ambilEdisi() {
  const d = await ambil("/edisi");
  return d?.edisi ?? [];
}

/**
 * Berkas kurasi satu edisi, sudah dikelompokkan per butir.
 *
 * Yang keluar hanya slot yang ditandai boleh disiarkan di dasbor — berkas
 * kurasi juga memuat anggaran, kontak juri, dan daftar peserta, dan tidak
 * semuanya boleh dibaca umum.
 */
export async function ambilBerkasKurasi(tahun) {
  const d = await ambil(`?tahun=${encodeURIComponent(tahun)}&sections=berkas_kurasi`);
  const seksi = (d?.sections ?? []).find((s) => s.key === "berkas_kurasi");
  return seksi?.isi ?? [];
}
