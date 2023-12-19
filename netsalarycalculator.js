// Declare variables to store basic salary and benefits
let basicSalary;
let benefits;

// Function to prompt the user for input and calculate gross salary
function calculateGrossSalary() {
  // Prompt the user to enter the basic salary and convert it to a number
  const enterBasicSalary = prompt("Enter the Basic Salary:");
  basicSalary = Number(enterBasicSalary);

  // Validate the basic salary input
  if (isNaN(basicSalary) || basicSalary < 0) {
    console.log("Basic Salary MUST be a number greater or equal to ZERO(0)");
    return;
  }

  // Prompt the user to enter benefits and convert it to a number
  const enterBenefits = prompt("Enter the benefits:");
  benefits = Number(enterBenefits);

  // Validate the benefits input
  if (isNaN(benefits) || benefits < 0) {
    console.log("Benefits MUST be a number greater or equal to ZERO(0)");
    return;
  }

  // Calculate gross salary using the basicSalary and benefits
  const grossSalary = basicSalary + benefits;
  console.log("Gross Salary:", grossSalary);

  // Call the function to calculate payee using the calculated gross salary
  calculatePayee(grossSalary);
  const nssfRate = 0.06;
  const nssfContribution = grossSalary * nssfRate;
  console.log(`NSSF Contribution: ${nssfContribution}`);

  const netPay = grossSalary - paye - nhifDeductions - nssfContribution;
  console.log(`Net Salary: ${netPay}`);
}

// Declare variables for paye and sub-payees
let paye, subPaye1, subPaye2, subPaye3, subPaye4, subPaye5;
let nhifDeductions;

// Function to calculate tax based on KRA rates
function calculatePayee(grossSalary) {
  if (grossSalary <= 24000) {
    paye = grossSalary * 0.1;
    console.log(`P.A.Y.E: ${paye}`);
  } else if (grossSalary > 24000 && grossSalary < 32334) {
    // Calculate paye with sub-payees for specific salary range
    subPaye1 = 24000 * 0.1;
    subPaye2 = (grossSalary - 24000) * 0.25;
    paye = subPaye1 + subPaye2;
    console.log(`P.A.Y.E: ${paye}`);
  } else if (grossSalary > 32333 && grossSalary < 500001) {
    subPaye1 = 24000 * 0.1;
    subPaye2 = (32333 - 24000) * 0.25;
    subPaye3 = (grossSalary - 32333) * 0.3;
    paye = subPaye1 + subPaye2 + subPaye3;
    console.log(`P.A.Y.E: ${paye}`);
  } else if (grossSalary > 500000 && grossSalary < 800001) {
    subPaye1 = 24000 * 0.1;
    subPaye2 = (32333 - 24000) * 0.25;
    subPaye3 = (500000 - 32333) * 0.3;
    subPaye4 = (grossSalary - 500001) * 0.325;
    paye = subPaye1 + subPaye2 + subPaye3 + subPaye4;
    console.log(`P.A.Y.E: ${paye}`);
  } else if (grossSalary > 800000) {
    subPaye1 = 24000 * 0.1;
    subPaye2 = (32333 - 24000) * 0.25;
    subPaye3 = (500000 - 32333) * 0.3;
    subPaye4 = (800000 - 500000) * 0.325;
    subPaye5 = (grossSalary - 800000) * 0.35;
    paye = subPaye1 + subPaye2 + subPaye3 + subPaye4 + subPaye5;
    console.log(`P.A.Y.E: ${paye}`);
  }

  // Call the function to calculate NHIF deductions
  calculateNhifDeductions(grossSalary);
}

// Call the function to start the process
calculateGrossSalary();

// Function to calculate NHIF deductions
function calculateNhifDeductions(grossSalary) {
  // Calculate NHIF deductions based on gross salary ranges
  if (grossSalary < 6000) {
    nhifDeductions = 150;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 8000) {
    nhifDeductions = 300;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 12000) {
    nhifDeductions = 400;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 15000) {
    nhifDeductions = 500;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 20000) {
    nhifDeductions = 600;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 25000) {
    nhifDeductions = 750;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 30000) {
    nhifDeductions = 850;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 35000) {
    nhifDeductions = 900;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 40000) {
    nhifDeductions = 950;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 45000) {
    nhifDeductions = 1000;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 50000) {
    nhifDeductions = 1100;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 60000) {
    nhifDeductions = 1200;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 70000) {
    nhifDeductions = 1300;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 80000) {
    nhifDeductions = 1400;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 90000) {
    nhifDeductions = 1500;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary < 100000) {
    nhifDeductions = 1600;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary > 99999) {
    nhifDeductions = 1700;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  } else if (grossSalary > 99999) {
    nhifDeductions = 1700;
    console.log(`NHIF Deduction: ${nhifDeductions}`);
  }
}

// Call the function to calculate NHIF deductions
calculateNhifDeductions();
