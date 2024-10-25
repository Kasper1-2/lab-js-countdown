const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

document.getElementById("start-btn").addEventListener("click", function() {
  console.log("start button clicked!");
  startCountdown();
});





// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");
  let countdown = DURATION;
  const interval = setInterval(() => {
  document.getElementById("time").innerText = countdown;
  console.log(countdown);
  countdown--;

  if (countdown === 0) {
    clearInterval(interval);
  }
  }, 1000);
}

startCountdown();


// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...




  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
