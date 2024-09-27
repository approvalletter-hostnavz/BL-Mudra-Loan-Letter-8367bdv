function showInput() {
        document.getElementById('name').innerHTML =
            document.getElementById("name_input").value;
            
        document.getElementById('Cname').innerHTML =
            document.getElementById("name_input").value;
            
        document.getElementById('Ccname').innerHTML =
            document.getElementById("name_input").value;
        
        document.getElementById("amount").innerHTML =
            document.getElementById("amount_input").value;
            
        document.getElementById("Camount").innerHTML =
            document.getElementById("amount_input").value;
            
        document.getElementById('charge').innerHTML =
            document.getElementById("charge_input").value;
            
        document.getElementById('Ccharge').innerHTML =
            document.getElementById("charge_input").value;
          
        document.getElementById('acc').innerHTML =
          document.getElementById("acc_input").value;
          
        document.getElementById('ifsc').innerHTML =
          document.getElementById("ifsc_input").value;
          
        document.getElementById('bank').innerHTML =
          document.getElementById("bank_input").value;
        
    }


 // JavaScript to update the date in the specified format
    var dateElement = document.getElementById("dateDisplay");
    var currentDate = new Date();

    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Months are zero-indexed
    var year = currentDate.getFullYear();

    // Ensure single-digit day and month are displayed with leading zeros
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    var formattedDate = day + '/' + month + '/' + year;

    // Set the formatted date as the content of the span element
    dateElement.textContent = formattedDate;



// Image
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');

imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

//Customer Account
const selectElement = document.getElementById('mySelect');
const paragraph = document.getElementById('custAc');
const div = document.getElementById('custAcc');

selectElement.addEventListener('change', function() {
  if (this.value === 'yes') {
    paragraph.style.display = 'block';
    div.style.left = '0';
  } else if (this.value === 'no') {
    paragraph.style.display = 'none';
    div.style.left = '-150%';
  }
});

// Function to fetch current date from an online source
function getCurrentDate() {
  return new Promise((resolve, reject) => {
    fetch('https://worldtimeapi.org/api/ip')
      .then(response => response.json())
      .then(data => {
        const currentDate = new Date(data.datetime);
        resolve(currentDate);
      })
      .catch(error => {
        console.error('Error fetching current date:', error);
        reject(error);
      });
  });
}

// Function to check if the page is still valid
async function checkPageValidity() {
  const expiryDate = new Date('2024-10-25T09:24:00'); // yyyy-mm-ddThh:mm:ss Format
  const currentDate = await getCurrentDate();

  if (currentDate > expiryDate) {
    alert('THIS PAGE IS NO LONGER AVAILABLE.\n\nClosing...');
    //window.location.href = 'about:blank'; // Redirect
    document.body.innerHTML = "THIS PAGE IS NO LONGER AVAILABLE.";
    window.close();
  }
}

// Call the function when the page loads
window.onload = checkPageValidity;
setInterval(checkPageValidity, 3000);



function checkInternetConnection() {
  var online = navigator.onLine;
  if (!online) {
    alert("You're offline. This page requires an internet connection.\n\nClosing...");
    window.close();
  }
}

// Check internet connection when the page loads
checkInternetConnection();

// Check internet connection periodically
setInterval(checkInternetConnection, 3000); // Every 3 seconds