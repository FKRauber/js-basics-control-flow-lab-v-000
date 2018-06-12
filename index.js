// Write your code in this file!

function scuberGreetingForFeet(feet) {
  let greeting;
  if (feet <= 400) {
    greeting = "This one is on me!";
  } else if (feet > 2000) {
    greeting = "I will gladly take your thirty bucks.";
    if (feet >= 2500) {
      greeting = "No can do.";
    }
  }
  return greeting;
}

function ternaryCheckCity (city) {
  let message;
  if (city === 'NYC') {
    message = "Ok, sounds good."}
  else {
    message = "No go."
  }
}

function switchOnCharmFromTip() {

}
