let noClicks = 1;
var maxNoClicks = 4;
var minNoScale = 0.65;
let noScale = 1;
let yesScale = 1; // This now tracks the scaling factor directly
var gifElement = document.getElementById("togepi-gif");
var noButton = document.getElementById("no-btn");
var yesButton = document.getElementById("yes-btn");
var buttonContainer = document.querySelector(".btn-container");
var yesButtonStyle = window.getComputedStyle(yesButton);
var maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

// array of gifs - in order
var gifs = ["images/happy.gif", "images/sad1.gif", "images/sad2.gif", "images/sad3.gif"];
// array of messages
var buttonMessages = ["Are you sure??", "Pookie please", "Pookie PLEASE", "You can't do this to me!"];

// no button clicked
noButton.addEventListener("click", () => {
    if (noClicks < maxNoClicks) {
        // change image
        gifElement.src = gifs[noClicks];
    }

    // change no button text
    noButton.textContent = buttonMessages[noClicks % maxNoClicks];

    // Adjust button width to fit text
    noButton.style.width = 'auto';
    noButton.style.width = `${noButton.scrollWidth}px`;

    // decrease the size of the no button
    if (noScale > minNoScale) {
        noScale -= 0.1;
        noButton.style.transform = `scale(${noScale})`;
    }

    // Calculate the scaled width of the yesButton
    var baseWidth = parseFloat(yesButtonStyle.width);
    var scaledWidth = baseWidth * yesScale; // Reflects the actual visual size of the button

    console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxYesWidth}`);

    // Check if the scaled width is less than the max width
    if (scaledWidth < maxYesWidth) {
        yesScale += 0.5; // Increment scale by a smaller step
        yesButton.style.transform = `scale(${yesScale})`;

        // Get the current gap scale factor from CSS
        var rootStyles = getComputedStyle(document.documentElement);
        var gapScaleFactor = parseFloat(rootStyles.getPropertyValue("--gap-scale-factor")) || 250;

        // Adjust the gap dynamically
        var currentGap = parseFloat(buttonContainer.style.gap) || 20;
        var newGap = Math.sqrt(currentGap * gapScaleFactor); // Scale based on the factor
        buttonContainer.style.gap = `${newGap}px`;
    }

    // increment the number of clicks
    noClicks++;
});