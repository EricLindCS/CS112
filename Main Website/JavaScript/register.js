window.onload=function(){
const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission behavior
  
  const formData = new FormData(form); // get form data
  
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  }); // convert form data to JSON object
  console.log(data);
  const json = JSON.stringify(data); // convert JSON object to string
  console.log(json);
  fetch('https://script.google.com/macros/s/AKfycbzkrEZ9r2cFCbBiubvpxyIL3cIjSXg8PPNJX1a91mv_pnM3l_H-m-9AtwrQXS4kOV1S/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      //'Authorization': 'Bearer {accessToken}' // replace with your access token
    },
    body: json
  })
  
});

}