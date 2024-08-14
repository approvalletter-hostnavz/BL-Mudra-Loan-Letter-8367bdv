function showInput() {
    document.getElementById('display').innerHTML = 
          document.getElementById("name").value;
                    
		document.getElementById('display1').innerHTML =
					document.getElementById("loanamount").value;
					
		document.getElementById('display2').innerHTML =
					document.getElementById("year").value;
					
		document.getElementById('display3').innerHTML =
					document.getElementById("emi").value;
					
		document.getElementById('display4').innerHTML =
					document.getElementById("fee").value;
					
		document.getElementById('display5').innerHTML =		
					document.getElementById("loanamount").value;
					
		document.getElementById('display6').innerHTML =		
					document.getElementById("fee").value;
					
		document.getElementById('display7').innerHTML = 
          document.getElementById("name").value;
    
    document.getElementById('display8').innerHTML = 
          document.getElementById("loantype").value;
          
    
    document.getElementById('display9').innerHTML = 
          document.getElementById("months").value;
    
					
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
        const expiryDate = new Date('2024-09-11T13:50:00'); // yyyy-mm-ddThh:mm:ss Format
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
