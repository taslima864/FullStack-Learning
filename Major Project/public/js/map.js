document.addEventListener("DOMContentLoaded", function () {
  console.log("map.js loaded");

  const map = L.map("map").setView([28.6139, 77.2090], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  L.marker([28.6139, 77.2090])
    .addTo(map)
    .bindPopup("Location")
    .openPopup();
});
