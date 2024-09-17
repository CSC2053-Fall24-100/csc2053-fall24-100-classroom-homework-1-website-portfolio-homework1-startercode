document.getElementById('toggle-schedule-btn').addEventListener('click', function() {
    const scheduleDiv = document.getElementById('schedule');
    const button = document.getElementById('toggle-schedule-btn');

    // Toggle between showing and hiding the schedule
    if (scheduleDiv.style.display === 'none' || scheduleDiv.style.display === '') {
        scheduleDiv.style.display = 'block';  // Show the schedule
        button.textContent = 'Hide Schedule'; // Update button text
    } else {
        scheduleDiv.style.display = 'none';   // Hide the schedule
        button.textContent = 'Show Schedule'; // Update button text
    }
});
