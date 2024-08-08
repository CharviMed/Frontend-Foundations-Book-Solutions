document.addEventListener('DOMContentLoaded', () => {
    const datetimeInput = document.getElementById('datetime-input');
    const startButton = document.getElementById('start-button');
    const countdownContainer = document.getElementById('countdown');
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    let countdownInterval;

    // Function to start the countdown
    function startCountdown() {
        const endTime = new Date(datetimeInput.value).getTime();
        
        // Clear any existing intervals
        clearInterval(countdownInterval);

        // Update the countdown every second
        countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                alert("Countdown finished!");
                countdownContainer.innerHTML = '00 days 00 hours 00 minutes 00 seconds';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the results
            daysSpan.innerHTML = ('0' + days).slice(-2);
            hoursSpan.innerHTML = ('0' + hours).slice(-2);
            minutesSpan.innerHTML = ('0' + minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + seconds).slice(-2);
        }, 1000);
    }

    // Attach event listener to the start button
    startButton.addEventListener('click', startCountdown);
});
