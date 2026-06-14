// =======================
// Catatan Wali Kelas (Ranking 1–30)
// =======================
const catatanGuru = [
  "🌟 Ananda, cahaya prestasimu bersinar terang. (QS. An-Nur: 35)",
  "⛰️ Langkahmu sudah dekat menuju puncak. (QS. An-Najm: 39)",
  "🌱 Ketekunanmu adalah akar keberhasilan. (QS. Al-Baqarah: 153)",
  "📖 Ilmu yang kau raih akan menjadi cahaya hidupmu. (HR. Tirmidzi)",
  "🔥 Semangatmu membara, teruslah berjuang. (QS. Al-Insyirah: 5-6)",
  "💎 Kesabaranmu adalah permata yang berharga. (QS. Al-Baqarah: 153)",
  "🌊 Gelombang ujian kau hadapi dengan tegar. (QS. Al-Ankabut: 69)",
  "🌸 Kebaikanmu menebar harum di kelas. (HR. Muslim)",
  "🕊️ Hatimu lembut, penuh kasih sayang. (QS. Al-Hujurat: 10)",
  "🌞 Cahaya prestasi selalu menyinari langkahmu. (QS. An-Nur: 35)",
  "🌴 Keteguhanmu seperti pohon kokoh. (QS. Ibrahim: 24)",
  "🌈 Harapanmu indah, teruslah berusaha. (QS. Yusuf: 87)",
  "⚡ Energi belajarmu menginspirasi teman-teman. (QS. Al-Mujadilah: 11)",
  "🌻 Senyummu membawa semangat baru. (HR. Bukhari)",
  "🕌 Doa dan usahamu berpadu indah. (QS. Al-Baqarah: 186)",
  "🌟 Prestasimu adalah amanah yang dijaga. (QS. Al-Mu’minun: 8)",
  "🌿 Kesederhanaanmu adalah kekuatan sejati. (QS. Al-Furqan: 63)",
  "🌍 Kontribusimu memberi warna di sekolah. (QS. Al-Maidah: 2)",
  "🕯️ Ilmu yang kau pelajari adalah cahaya. (HR. Ahmad)",
  "🌠 Bintang prestasi selalu menghiasi namamu. (QS. Al-Insyirah: 5-6)",
  "🌺 Akhlakmu indah, menjadi teladan. (HR. Bukhari)",
  "🌤️ Harapanmu cerah, masa depan gemilang. (QS. Al-Baqarah: 286)",
  "🌾 Usahamu berbuah manis. (QS. An-Najm: 39)",
  "🛡️ Kesabaranmu adalah perisai hidup. (QS. Al-Baqarah: 153)",
  "🌟 Semangatmu tak pernah padam. (QS. Al-Insyirah: 5-6)",
  "🌳 Keteguhanmu seperti pohon yang kokoh. (QS. Ibrahim: 24)",
  "🌸 Kebaikanmu menebar kebahagiaan. (HR. Muslim)",
  "🌞 Cahaya ilmu menerangi langkahmu. (QS. Al-Mujadilah: 11)",
  "🌈 Harapanmu indah, teruslah berusaha. (QS. Yusuf: 87)",
  "🌠 Bintang prestasi selalu menghiasi namamu. (QS. Al-Insyirah: 5-6)"
];

// =======================
// Fungsi Generate Catatan
// =======================
function generateCatatan() {
  const rank = document.getElementById("ranking").value;
  document.getElementById("catatanOutput").innerText = catatanGuru[rank-1];
}
