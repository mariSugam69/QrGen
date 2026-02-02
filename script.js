function generateQRCode() {
  const qrText = document.getElementById("text").value.trim();
  const qrContainer = document.getElementById("qrcode");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!qrText) {
    alert("Please enter text or a URL.");
    return;
  }

  qrContainer.innerHTML = ""; // Clear previous QR

  QRCode.toCanvas(qrText, { width: 200 }, function (err, canvas) {
    if (err) return console.error(err);
    qrContainer.appendChild(canvas);

    downloadBtn.style.display = "inline-block";
    downloadBtn.onclick = function () {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = canvas.toDataURL();
      link.click();
    };
  });
}

// Refresh button functionality
document.getElementById("refreshBtn").onclick = () => {
  document.getElementById("text").value = ""; // Clear input
  document.getElementById("qrcode").innerHTML = ""; // Clear QR code
  document.getElementById("downloadBtn").style.display = "none"; // Hide download
};
