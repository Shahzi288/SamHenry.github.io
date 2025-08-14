// Update file name display
document.getElementById('pdfFile').addEventListener('change', function(e) {
  const fileName = e.target.files[0] ? e.target.files[0].name : 'No file chosen';
  document.getElementById('file-name').textContent = fileName;
});

async function convertPDF() {
  const file = document.getElementById('pdfFile').files[0];
  const loader = document.getElementById('loader');
  
  if (!file) {
    alert("Please select a PDF file first!");
    return;
  }

  // Show loading animation
  loader.style.display = 'block';
  
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://api.pdf.co/v1/pdf/convert/to/doc', {
      method: 'POST',
      headers: { 'x-api-key': 'YOUR_API_KEY_HERE' }, // ← Replace this!
      body: formData
    });

    const result = await response.json();
    if (result.error) throw new Error(result.message);
    
    window.open(result.url, '_blank');
  } catch (error) {
    alert("Error: " + error.message);
  } finally {
    loader.style.display = 'none';
  }
}
  .then(response => response.json())
  .then(data => {
    if (data.error) throw new Error(data.message);
    window.open(data.url, '_blank');
  })
  .catch(error => {
    alert("Error: " + error.message);
  });
}
