// Display selected filename
document.getElementById('pdfFile').addEventListener('change', function(e) {
  const fileName = e.target.files[0] ? e.target.files[0].name : 'No file selected';
  document.getElementById('file-name').textContent = fileName;
});

// Main conversion function
function convertPDF() {
  const file = document.getElementById('pdfFile').files[0];
  const loader = document.getElementById('loader');
  
  if (!file) {
    alert("Please select a PDF file first!");
    return;
  }

  // Show loader
  loader.style.display = 'flex';
  
  const formData = new FormData();
  formData.append('file', file);

  fetch('https://api.pdf.co/v1/pdf/convert/to/doc', {
    method: 'POST',
    headers: { 
      'x-api-key': 'shahzik485@gmail.com_O0AoYDjlgvWRmz7yBCDrULtM81YT70ITY6hgo9QLtllX3E369e3V7bitZuIDMFh3'
    },
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) throw new Error(data.message);
    window.open(data.url, '_blank');
  })
  .catch(error => {
    alert("Conversion failed: " + error.message);
  })
  .finally(() => {
    loader.style.display = 'none';
  });
}
  formData.append('file', file);

  fetch('https://api.pdf.co/v1/pdf/convert/to/doc', {
    method: 'POST',
    headers: { 
      'x-api-key': 'YOUR_API_KEY_HERE' // REPLACE THIS WITH YOUR KEY
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
  })
  .finally(() => {
    loader.style.display = 'none';
  });
}
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://api.pdf.co/v1/pdf/convert/to/doc', {
      method: 'POST',
      headers: { 'x-api-key': 'shahzik485@gmail.com_SGt0ATFWClrMnrLxK4zzwNUfJPrnCwruHEumullzuYzB5pjfyN2iNfySiAGGO8Y8' }, // ← Replace this!
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
