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
