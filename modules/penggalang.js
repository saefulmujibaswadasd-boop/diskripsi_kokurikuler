// =======================
// Narasi Ekstrakurikuler - Pramuka Penggalang
// =======================
const penggalang = {
  kepemimpinan: [
    "belum berani memimpin regu",
    "mulai berani memimpin dengan arahan pembina",
    "cukup mampu memimpin regu kecil",
    "sangat mampu memimpin, menjadi teladan penggalang"
  ],
  kemandirian: [
    "belum mandiri dalam kegiatan penggalang",
    "mulai mandiri dengan arahan",
    "cukup mandiri dalam tugas regu",
    "sangat mandiri, inovatif, dan inspiratif"
  ],
  keterampilan: [
    "belum menguasai keterampilan penggalang",
    "mulai belajar keterampilan dengan bantuan",
    "cukup terampil dalam kegiatan penggalang",
    "sangat terampil, menjadi penggerak regu"
  ],
  kontribusi: [
    "kurang aktif dalam kegiatan regu",
    "kadang ikut serta bila diminta",
    "aktif berkontribusi dalam kegiatan regu",
    "sangat aktif, menjadi penggerak kegiatan regu"
  ]
};

// =======================
// Fungsi Generate Penggalang
// =======================
function generatePenggalang(nama, skorKepemimpinan, skorKemandirian, skorKeterampilan, skorKontribusi) {
  return "Capaian Ekstrakurikuler Pramuka Penggalang Ananda " + nama + " menunjukkan perkembangan sebagai berikut: "
    + penggalang.kepemimpinan[skorKepemimpinan-1] + ", "
    + penggalang.kemandirian[skorKemandirian-1] + ", "
    + penggalang.keterampilan[skorKeterampilan-1] + ", "
    + penggalang.kontribusi[skorKontribusi-1]
    + ". Dengan semangat berlatih dan dukungan guru serta orang tua, Ananda " + nama + " berpotensi berkembang menjadi penggalang yang mandiri, terampil, peduli, dan berjiwa kepemimpinan.";
}

// =======================
// Fungsi Show Penggalang
// =======================
function showPenggalang() {
  const nama = document.getElementById("namaPenggalang").value;
  const pg1 = document.getElementById("pg1").value;
  const pg2 = document.getElementById("pg2").value;
  const pg3 = document.getElementById("pg3").value;
  const pg4 = document.getElementById("pg4").value;

  const hasil = generatePenggalang(nama, pg1, pg2, pg3, pg4);
  document.getElementById("penggalangOutput").innerText = hasil;
}
