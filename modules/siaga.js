// =======================
// Narasi Ekstrakurikuler - Pramuka Siaga
// =======================
const siaga = {
  kedisiplinan: [
    "belum disiplin dalam mengikuti kegiatan siaga",
    "mulai disiplin dengan arahan pembina",
    "cukup disiplin dan konsisten hadir",
    "sangat disiplin, menjadi teladan bagi teman siaga"
  ],
  kebersamaan: [
    "kurang aktif dalam kebersamaan dan gotong royong",
    "kadang ikut serta dalam kebersamaan",
    "aktif bergotong royong bersama teman",
    "sangat aktif, menjadi penggerak kebersamaan"
  ],
  ketaatan: [
    "belum taat dalam doa dan aturan siaga",
    "mulai taat dengan bimbingan pembina",
    "taat berdoa dan mengikuti aturan",
    "sangat taat, menjadi teladan dalam doa dan aturan"
  ],
  keterampilan: [
    "belum menguasai keterampilan dasar siaga",
    "mulai belajar keterampilan dasar dengan bantuan",
    "cukup terampil dalam kegiatan siaga",
    "sangat terampil, menjadi inspirasi bagi teman"
  ]
};

// =======================
// Fungsi Generate Siaga
// =======================
function generateSiaga(nama, skorDisiplin, skorKebersamaan, skorKetaatan, skorKeterampilan) {
  return "Capaian Ekstrakurikuler Pramuka Siaga Ananda " + nama + " menunjukkan perkembangan sebagai berikut: "
    + siaga.kedisiplinan[skorDisiplin-1] + ", "
    + siaga.kebersamaan[skorKebersamaan-1] + ", "
    + siaga.ketaatan[skorKetaatan-1] + ", "
    + siaga.keterampilan[skorKeterampilan-1]
    + ". Dengan tekun berlatih dan dukungan orang tua, Ananda " + nama + " berpotensi berkembang menjadi siaga yang disiplin, taat, peduli, dan terampil.";
}

// =======================
// Fungsi Show Siaga
// =======================
function showSiaga() {
  const nama = document.getElementById("namaSiaga").value;
  const sd = document.getElementById("sd").value;
  const sk = document.getElementById("sk").value;
  const st = document.getElementById("st").value;
  const ss = document.getElementById("ss").value;

  const hasil = generateSiaga(nama, sd, sk, st, ss);
  document.getElementById("siagaOutput").innerText = hasil;
}
