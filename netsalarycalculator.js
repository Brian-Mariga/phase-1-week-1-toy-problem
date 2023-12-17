// Function to calculate tax based on KRA rates
function calculatePayee(grossSalary) {
  if (grossSalary <= 24000) {
    return 0;
  } else if (grossSalary <= 32000) {
    return (grossSalary - 24000) * 0.1;
  } else if (grossSalary <= 41000) {
    return (grossSalary - 32000) * 0.15 + 800;
  } else if (grossSalary <= 52000) {
    return (grossSalary - 41000) * 0.20 + 2,100;
  } else if (grossSalary <= 63000) {
    return (grossSalary - 52000) * 0.25 + 4,100;
  } else {
    return (grossSalary - 63000) * 0.30 + 8,600;
  }
}

// Function to calculate NHIF deductions
function calculateNhifDeductions(grossSalary) {
  if (grossSalary <= 5,999.99) {
    return 150;
  } else if (grossSalary <= 14,999.99) {
    return 300;
  } else if (grossSalary <= 24,999.99) {
    return 400;
  } else if (grossSalary <= 34,999.99) {
    return 550;
  } else if (grossSalary <= 44,999.99) {
    return 600;
  } else if (grossSalary <= 54,999.99) {
    return 800;
  } else if (grossSalary <= 64,999.99) {
    return 1000;
  } else if (grossSalary <= 74,999.99) {
    return 1200;
  } else if (grossSalary <= 84,999.99) {
    return 1400;
  } else {
    return 1500;
  }
}

// Function to calculate NSSF deductions
function calculateNssfDeductions(grossSalary) {
  if (grossSalary <= 5,999.99) {
    return 0;
  } else if (grossSalary <= 6,999.99) {
    return 200;
  } else if (grossSalary <= 7,999.99) {
    return 300;
  } else if (grossSalary <= 8,999.99) {
    return 400;
  } else if (grossSalary <= 9,999.99) {
    return 500;
  } else if (grossSalary <= 10,999.99) {
    return 600;
  } else if (grossSalary <= 11,999.99) {
    return 700;
  } else if (grossSalary <= 12,999.99) {
    return 800;
  } else if (grossSalary <= 13,999.99) {
    return 900;
  } else if (grossSalary <= 14,999.99) {
    return 1000;
  } else if (grossSalary <= 15,999.99) {
    return 1,100;
  } else if (grossSalary <= 16,999.99) {
    return 1,200;
  } else if (grossSalary <= 17,999.99) {
    return 1,300;
  } else if (grossSalary <= 18,999.99) {
    return 1,400;
  
