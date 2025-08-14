function convertPDF() {
  const file = document.getElementById('pdfFile').files[0];
  if (!file) {
    alert("Please select a PDF file first!");
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  fetch('https://api.pdf.co/v1/pdf/convert/to/doc', {
    method: 'POST',
    headers: { 
      'x-api-key': 'YOUR_API_KEY_HERE' // ← Replace with your real key
    },
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) throw new Error(data.message);
    window.open(data.url, '_blank');
  })
  .catch(error => {
    alert("Error: " + error.message);
  });
}
