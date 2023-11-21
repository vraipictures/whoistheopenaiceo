// Function to calculate time since last update
function timeSinceLastUpdate() {
  const lastUpdatedDate = new Date('November 21, 2023'); // Replace this with your actual last updated date
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - lastUpdatedDate.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const timeElement = document.getElementById('time');
  timeElement.textContent = days + ' days, ' + (hours % 24) + ' hours, ' + (minutes % 60) + ' minutes ago';
}

// Calculate time since last update on page load
window.addEventListener('load', timeSinceLastUpdate);

