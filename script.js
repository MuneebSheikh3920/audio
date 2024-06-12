// Get references to the audio element and control buttons
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');
const audioFileInput = document.getElementById('audioFileInput');

// Function to handle audio file selection
audioFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Get the selected file
    const fileURL = URL.createObjectURL(file); // Create a URL for the file
    audio.src = fileURL; // Set the audio source to the selected file
});

// Add event listener to play button
playButton.addEventListener('click', () => {
    audio.play(); // Play the audio
});

// Add event listener to pause button
pauseButton.addEventListener('click', () => {
    audio.pause(); // Pause the audio
});

// Add event listener to stop button
stopButton.addEventListener('click', () => {
    audio.pause(); // Pause the audio
    audio.currentTime = 0; // Reset audio to the beginning
});
