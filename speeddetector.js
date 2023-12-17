function calculateDemerits(speed) {
  const speedLimit = 70;
  const maximumDemerits = 12;
  let excessBy = 0;
  if (isNaN(speed)){
    return "Speed MUST be a number";
  }
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
calculateDemerits();