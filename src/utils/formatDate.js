export function formatDate(dateString) {
  // Membuat objek Date dari string tanggal yang diberikan
  const date = new Date(dateString);

  // Memformat tanggal ke format YYYY-MM-DD
  const formattedDate = date.toISOString().split('T')[0];

  return formattedDate;
}

