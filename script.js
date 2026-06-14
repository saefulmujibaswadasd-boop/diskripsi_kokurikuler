function login() {
  const password = document.getElementById("password").value;
  if (password === "saefulsdnwonokerto") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    document.getElementById("loginError").innerText = "❌ Sandi salah!";
  }
}

function addStudent() {
  let table = document.getElementById("studentTable");
  let rowCount = table.rows.length + 1;
  let row = table.insertRow();
  row.innerHTML = `<td>${rowCount}</td><td><input type="text" placeholder="Nama"></td><td><input type="text" placeholder="NIS"></td>`;
}

function generateCatatan() {
  const rank = document.getElementById("ranking").value;
  const catatanGuru = [
    "🌟 Ananda, cahaya prestasimu... (QS. An-Nur: 35)",
    "⛰️ Langkahmu sudah dekat... (QS. An-Najm: 39)",
    "🌱 Ketekunanmu adalah akar... (QS. Al-Baqarah: 153)",
    // dst sampai 30
  ];
  document.getElementById("catatanOutput").innerText = catatanGuru[rank-1];
}

function downloadExcel() {
  let table = document.getElementById("studentTable");
  let rows = table.getElementsByTagName("tr");
  let csvContent = "No,Nama Siswa,NIS\n";

  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    if (cells.length > 0) {
      let no = cells[0].innerText || "";
      let nama = cells[1].querySelector("input")?.value || cells[1].innerText;
      let nis = cells[2].querySelector("input")?.value || cells[2].innerText;
      csvContent += `${no},${nama},${nis}\n`;
    }
  }

  let blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "rapor_otomatis.csv";
  link.click();
}
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

function generateSiaga(nama, skorDisiplin, skorKebersamaan, skorKetaatan, skorKeterampilan) {
  return "Capaian Ekstrakurikuler Pramuka Siaga Ananda " + nama + " menunjukkan perkembangan sebagai berikut: "
    + siaga.kedisiplinan[skorDisiplin-1] + ", "
    + siaga.kebersamaan[skorKebersamaan-1] + ", "
    + siaga.ketaatan[skorKetaatan-1] + ", "
    + siaga.keterampilan[skorKeterampilan-1]
    + ". Dengan tekun berlatih dan dukungan orang tua, Ananda " + nama + " berpotensi berkembang menjadi siaga yang disiplin, taat, peduli, dan terampil.";
}

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

function generatePenggalang(nama, skorKepemimpinan, skorKemandirian, skorKeterampilan, skorKontribusi) {
  return "Capaian Ekstrakurikuler Pramuka Penggalang Ananda " + nama + " menunjukkan perkembangan sebagai berikut: "
    + penggalang.kepemimpinan[skorKepemimpinan-1] + ", "
    + penggalang.kemandirian[skorKemandirian-1] + ", "
    + penggalang.keterampilan[skorKeterampilan-1] + ", "
    + penggalang.kontribusi[skorKontribusi-1]
    + ". Dengan semangat berlatih dan dukungan guru serta orang tua, Ananda " + nama + " berpotensi berkembang menjadi penggalang yang mandiri, terampil, peduli, dan berjiwa kepemimpinan.";
}
function showSiaga() {
  const nama = document.getElementById("namaSiaga").value;
  const sd = document.getElementById("sd").value;
  const sk = document.getElementById("sk").value;
  const st = document.getElementById("st").value;
  const ss = document.getElementById("ss").value;

  const hasil = generateSiaga(nama, sd, sk, st, ss);
  document.getElementById("siagaOutput").innerText = hasil;
}
