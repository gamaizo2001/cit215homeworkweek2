// Reference the display div and solve button in the DOM
const displayDiv = document.getElementById("display");
const solveBtn = document.getElementById("myButton");

// Declare constants for prompts and mpg ratings
const NUM_MILES_PROMPT = "What is estimated the miles per year?";
const COST_OF_GASOLINE_PROMPT = "What is the current cost of a gallon of gasoline?";
const MPG_RATINGS = [12, 17, 26, 29];

// Calculates the estimated yearly cost using the specified
// mpg, cost of gasoline, and number of miles
function estimateYearlyCost(mpg, costOfGasoline, numMiles) {
    return (numMiles / mpg) * costOfGasoline;
}

// Create the estimated cost message from the mpg rating, number
// of miles, and cost of gasoline
function createEstimatedCostMessage(mpgRating, numMiles, cost) {
    return `To drive a car with a MPG rating of ${mpgRating} for ${numMiles} miles at $${cost.toFixed(
        2
    )} per gallon it would cost $${estimateYearlyCost(
        mpgRating,
        cost,
        numMiles
    ).toFixed(2)}.`;
}

// Event handler to be registered when the user clicks on
// the solve button. Clears the display div and appends
// a paragraph element for each mpg rating in MPG_RATINGS
function handleSolveBtnOnClick() {
    let numMiles = Number(prompt(NUM_MILES_PROMPT));
    let cost = Number(prompt(COST_OF_GASOLINE_PROMPT));
    displayDiv.innerHTML = ""; // Clear the displayDiv
    // Append a paragraph element to the display div for each mpg rating in MPG_RATINS
    MPG_RATINGS.forEach(mpgRating => {
        displayDiv.append(
            createEstimatedCostMessage(mpgRating, numMiles, cost),
            document.createElement("p")
        );
    });
}
// Register an event listener on the solve button
solveBtn.addEventListener("click", handleSolveBtnOnClick);
