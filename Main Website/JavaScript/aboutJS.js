const csv = [];
  const rows = document.querySelectorAll("form input");
document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  exportTableToCsv(rows[0].value + "-pitscout.csv");
  console.log(rows[0].value);
});

function confirmSubmit() {
    return confirm("Are you sure you want to submit the form?");
  }
  function showConfirmation() {
    event.preventDefault();
  exportTableToCsv(rows[0].value);
  console.log(rows[0].value);
       alert("Thank you for submitting the form!");
       return true;
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

function exportTableToCsv(filename) {
  const csv = [];
  const rows = document.querySelectorAll("form input");
  for (let i = 0; i < rows.length -1; i++) {
    csv.push(rows[i].value);
  }
  downloadCsv(csv.join(","), filename);
  confirmSubmit();
}



