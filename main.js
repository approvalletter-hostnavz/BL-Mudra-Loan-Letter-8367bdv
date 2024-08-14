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