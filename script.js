// Set the start date: 19.10.24, 8:24 PM (Melbourne time)
const startDate = new Date('2024-10-19T20:24:00+11:00');  // Start date: Oct 19, 2024, 8:24 PM Melbourne Time

// Function to update the age timer
function updateAge() {
    const now = new Date();
    
    // Convert to Melbourne time using timezone (Melbourne is +11 or +10 depending on daylight savings)
    const melbourneTime = new Date(now.toLocaleString("en-US", { timeZone: "Australia/Melbourne" }));

    // Calculate the time difference
    const timeDiff = melbourneTime - startDate;

    // Calculate the difference in months, days, etc.
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display the result in the countdown element
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `
        ${years} Years, ${months} Months, ${days} Days, 
        ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds
    `;
}

// Call updateAge every second to keep the timer updating
setInterval(updateAge, 1000);

// Initialize the age calculation
updateAge();

// Show the image when the button is clicked
function showImage() {
    const imgContainer = document.getElementById('image-container');
    imgContainer.style.display = 'block';
}
