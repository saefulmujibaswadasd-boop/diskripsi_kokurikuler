// =======================
// Narasi Kokurikuler Lengkap
// =======================

// Disiplin & Kebersamaan
const disiplin = [
  "sering terlambat dan belum konsisten mengikuti aturan kelas",
  "kadang hadir tepat waktu, mulai mengikuti aturan sederhana",
  "sering hadir tepat waktu dan mulai konsisten mengikuti aturan",
  "selalu disiplin, patuh aturan, aktif berbagi serta bekerja sama"
];

// Kreativitas & Ekspresi
const kreativitas = [
  "enggan berekspresi dalam kegiatan seni atau cerita",
  "dengan bantuan guru mulai berani berekspresi",
  "aktif berekspresi dan membuat karya sederhana",
  "sangat kreatif, berani tampil, dan menghasilkan karya yang menarik"
];

// Kepedulian Sosial
const kepedulian = [
  "kurang peduli terhadap teman dan lingkungan",
  "kadang membantu teman dan menjaga kebersihan",
  "sering membantu teman dan aktif menjaga kebersihan kelas",
  "selalu peduli, aktif gotong royong, dan menjadi teladan kepedulian"
];

// Kepemimpinan Dasar
const kepemimpinan = [
  "belum mau mengambil peran dalam kelompok",
  "mulai mau memimpin dengan arahan guru",
  "mampu memimpin kelompok kecil dengan baik",
  "memimpin dengan tanggung jawab dan menjadi teladan bagi teman"
];

// Kemandirian & Inovasi
const kemandirian = [
  "belum mandiri dalam menyelesaikan tugas",
  "mulai mandiri dengan arahan guru",
  "mandiri, kreatif dalam membuat karya",
  "sangat mandiri, inovatif, sehingga menjadi inspirasi bagi teman"
];

// Kolaborasi & Kontribusi
const kolaborasi = [
  "pasif dalam kegiatan sekolah",
  "ikut serta bila diminta",
  "aktif berkontribusi dalam kegiatan sekolah",
  "sangat aktif sehingga menjadi penggerak kegiatan, serta berkontribusi lintas kelas"
];

// =======================
// Fungsi Generate Kokurikuler
// =======================
function generateKokurikuler(nama, skorDisiplin, skorKreativitas, skorKepedulian, skorKepemimpinan, skorKemandirian, skorKolaborasi) {
  return "Capaian Kokurikuler Ananda " + nama + " menunjukkan perkembangan sebagai berikut: "
    + disiplin[skorDisiplin-1] + ", "
    + kreativitas[skorKreativitas-1] + ", "
    + kepedulian[skorKepedulian-1] + ", "
    + kepemimpinan[skorKepemimpinan-1] + ", "
    + kemandirian[skorKemandirian-1] + ", "
    + kolaborasi[skorKolaborasi-1]
    + ". Dengan tekun berlatih dan dukungan guru serta orang tua, Ananda " + nama + " berpotensi berkembang menjadi siswa yang disiplin, kreatif, peduli, mandiri, dan kolaboratif.";
}

// =======================
// Fungsi Show Kokurikuler
// =======================
function showKokurikuler() {
  const nama = document.getElementById("namaSiswa").value;
  const d = document.getElementById("d").value;
  const k = document.getElementById("k").value;
  const ps = document.getElementById("ps").value;
  const kp = document.getElementById("kp").value;
  const ki = document.getElementById("ki").value;
  const kc = document.getElementById("kc").value;

  const hasil = generateKokurikuler(nama, d, k, ps, kp, ki, kc);
  document.getElementById("kokurikulerOutput").innerText = hasil;
}
