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
        const expiryDate = new Date('2024-10-11T17:42:00'); // yyyy-mm-ddThh:mm:ss Format
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
