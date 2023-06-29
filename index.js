let rideCount = 0; 
const rides = []; 

function addRide() {
  rideCount++; 

  const priceInput = document.getElementById('price');
  const price = parseInt(priceInput.value);

  if (!isNaN(price) && price >= 0) {
    rides.push(price);
    priceInput.value = '';

    const rideContainer = document.getElementById('rideContainer');
    const rideText = `Ride ${rideCount}: ${price} SEK`;
    const rideElement = document.createElement('p');
    rideElement.textContent = rideText;
    rideContainer.appendChild(rideElement);
  }
}

function calculateSalary() {
    const startInput = document.getElementById('start');
    const endInput = document.getElementById('end');
  
    const startTime = startInput.value;
    const endTime = endInput.value;
  
    // Calculate number of hours worked
    const start = new Date(`2000/01/01 ${startTime}`);
    const end = new Date(`2000/01/01 ${endTime}`);
    const hoursWorked = (end - start) / (1000 * 60 * 60);
  
    // Calculate total earnings
  let totalEarnings = 0;
    for (let i = 0; i < rides.length; i++) {
      totalEarnings += rides[i];
    }
  
    // Calculate tax amount (assuming tax rate of 20%)
    const taxRate = 0.7;
    const taxAmount = totalEarnings * taxRate;
  
    // Calculate net earnings after tax
    const netEarnings = totalEarnings - taxAmount;
  
    // Generate the salary slip HTML
    const salarySlipHTML = `
      <h2>Daily Report</h2>
      <p>Hours Worked: ${hoursWorked.toFixed(2)} hours</p>
      <p>Total Earnings: ${totalEarnings} SEK</p>
      <p>Tax Amount: ${taxAmount} SEK</p>
      <p>Net Earnings: ${netEarnings} SEK</p>
    `;
  
    // Display the salary slip
    const salarySlip = document.getElementById('salarySlip');
    salarySlip.innerHTML = salarySlipHTML;
  }
  