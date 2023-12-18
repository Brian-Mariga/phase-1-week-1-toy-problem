// Function to calculate demerit points and print message
function calculateDemerits(speed) {
  // Declaring neccessary variables 
  const speedLimit = 70;
  const maximumDemerits = 12;
  let excessBy = 0;
  //The input is checked if it is a number
  if (isNaN(speed)){
    return "Speed MUST be a number";
  }
  // Calculating the excess speed and demerit points and printing messages based on conditions
  if (speed <=speedLimit){
    console.log("OK");
  } else if (speed >speedLimit){
    excessBy = speed - speedLimit
    demeritPoints = excessBy/5
    console.log(`Excess By: ${excessBy}`)
    console.log(`Points: ${demeritPoints}`);
  }
  if (demeritPoints>12){
    console.log("Liscence suspended")
  }
}

//Call the function to calculate the demerit points and output messages
calculateDemerits();