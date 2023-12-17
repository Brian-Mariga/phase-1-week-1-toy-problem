
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
calculatePayee(20000)