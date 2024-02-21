let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function displayThankYouMessage(event) {
  event.preventDefault(); // prevent form from submitting

  // Save original content of feedback section to revert to it later
  var originalFeedbackContent =
    document.querySelector(".feedback-section").innerHTML;

  // Replace the feedback form with the thank you message
  document.querySelector(".feedback-section").innerHTML =
    "<h2>Thank you for your feedback!</h2>";

  // Set a timer to revert back to the original feedback form after 3 seconds (3000 milliseconds)
  setTimeout(function () {
    document.querySelector(".feedback-section").innerHTML =
      originalFeedbackContent;
  }, 3000);
}

function buybutton() {
  // Simulate form submission here if needed

  // Redirect to another page after submitting feedback
  window.location.href = "thank-you.html";
}

function buyThanks(event) {
  event.preventDefault(); // prevent form from submitting

  // Save original content of feedback section to revert to it later
  var originalFeedbackContent = document.querySelector(".buyThanks").innerHTML;

  // Replace the feedback form with the thank you message
  document.querySelector(".buyThanks").innerHTML =
    "<h3>Thank you for buying!</h3>";

  // Set a timer to revert back to the original feedback form after 3 seconds (3000 milliseconds)
  setTimeout(function () {
    document.querySelector(".buyThanks").innerHTML = originalFeedbackContent;
  }, 3000);
}
