// =======================
// Fungsi Login
// =======================
function login() {
  const password = document.getElementById("password").value;
  if (password === "saefulsdnwonokerto") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");
  } else {
    document.getElementById("loginError").innerText = "❌ Sandi salah!";
  }
}

// =======================
// Fungsi Tambah Siswa
// =======================
function addStudent() {
  let table = document.getElementById("studentTable");
  let rowCount = table.rows.length + 1;
  let row = table.insertRow();
  row.innerHTML = `<td>${rowCount}</td>
                   <td><input type="text" placeholder="Nama"></td>
                   <td><input type="text" placeholder="NIS"></td>`;
}

// =======================
// Fungsi Download Excel
// =======================
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
function uploadCSV() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  if (!file) {
    alert("Silakan pilih file CSV terlebih dahulu!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const content = e.target.result;
    const rows = content.split("\n").slice(1); // skip header
    const table = document.getElementById("studentTable");

    rows.forEach((row, index) => {
      if (row.trim() !== "") {
        const cols = row.split(",");
        const newRow = table.insertRow();
        newRow.innerHTML = `<td>${table.rows.length}</td>
                            <td>${cols[0] || ""}</td>
                            <td>${cols[1] || ""}</td>`;
      }
    });
  };
  reader.readAsText(file);
}

