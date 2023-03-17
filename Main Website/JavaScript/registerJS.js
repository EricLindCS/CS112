
const csv = [];
    const rows = document.querySelectorAll("form input");
  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    exportTableToCsv(rows[4].value + "-register.csv");
    console.log(rows[0].value);
    
});


function exportTableToCsv(filename) {
    const csv = [];
    const rows = document.querySelectorAll("form input");
    for (let i = 0; i < rows.length -1; i++) {
      csv.push(rows[i].value);
    }
    downloadCsv(csv.join(","), filename);
  }
  

function downloadCsv(csv, filename) {
    const csvFile = new Blob([csv], { type: "text/csv" });
    const downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
