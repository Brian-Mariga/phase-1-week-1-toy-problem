# phase-1-week-1-toy-problem
##Challenge 1: Student Grade Generator (Toy Problem)
    ### Description
    *OVERVIEW:The JavaScript function "grading()" is designed to calculate the grade of a student based on the marks attained by the student.*
    
        1.The function "grading()" for calculating a student's grade is declared using the "Function" keyword

        2.When the code is runned, the user is prompted to input the marks of a student for grading.

        3.The function "Number()" converts the input to a numeric value before  the calculations.

        4.The function "isNaN" check if the input is a number. If the input is not a number ,it tells the user to enter a number else, it procceds.

        5.The input is then checked if it is from 0 to 100. It is not in the range it tells the user to enter a valid marks.

        6.The function uses multiple "if" statements to compare the marks to different ranges and return the corresponding grade string using the following criteria:
        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

        7.The final "else" statement handles any remaining cases and returns "Grade is E".

        8.The function then outputs the Grade based on the marks entered.

    ###Set up instruction
        To use the `grading()` function, follow these steps:

            1. Clone this repository to your local machine:
            2. Navigate to the project directory
            3. Open the file "studentgradegenerator.js" in a text editor
            4. You can modify the function or use it as it is
            5. Run the script in a Javascript environment eg browser's console
            6. Follow the prompt to enter the student's marks for calculation.

    ###Author and Licsence
        Author: Brian James Mariga
        License: This project is licensed under the GNU GENERAL PUBLIC LICENSE Version 3

##Challenge 2: Speed Detector (Toy Problem)
    ###Description
    *OVERVIEW: The JavaScript function "calculateDemerits()" is designed to calculate demerit points based on the speed of a vehicle exceeding a specified speed limit. It also checks if the accumulated demerit points lead to the suspension of the driver's license.*

        1.The function "calculateDemerits()" for calculating the demerits points of a driver is declared using the "Function" keyword

        2.The constant speed limit and maximum demerit points are set.

        3.The function "isNaN" check if the input is a number. If the input is not a number ,it tells the user to enter a number else, it procceds.

        4. If the speed entered is less then or equal to the speed limit, the driver is okay.

        5.Incase the speed is greater than the speed limit, the demerit points are calculated.

        6.The demerit points are compared to the maximum demerit points an if they exceed the maximum demerit points, it outputs that the driver's licence is suspended.
    
    ###Set up instruction
        To use the `calculateDemerits()` function, follow these steps:

            1. Clone this repository to your local machine:
            2. Navigate to the project directory
            3. Open the file "speeddetector.js" in a text editor
            4. You can modify the function by inputing the speed in the funtion.
            5. Run the script in a Javascript environment eg browser's console.

    ###Author and Licsence
        Author: Brian James Mariga
        License: This project is licensed under the GNU GENERAL PUBLIC LICENSE Version 3

##Challenge 3: Net Salary Calculator (Toy Problem)`
    ###Description
    *OVERVIEW:This JavaScript program calculates the gross salary, PAYE (Pay As You Earn) tax, NHIF (National Hospital Insurance Fund) deductions, NSSF (National Social Security Fund) contribution, and net salary based on user-provided input for basic salary and benefits.*
        
        1.The function "calculateGrossSalary()" for calculating the gross salary is declared using the "Function" keyword

        2.The user is prompted to enter the basic salary and the benefits.

        3.The inputs are converted to numbers and their validity is checked.

        4.The gross salary is calculated followed by NSSF Contribution.

        5.Variables for calculating P.A.Y.E and NHIF Deductions are declared.

        6.Functions to calculate tax based on KRA rates and NHIF deductions declared.

        7.Function to start the calculation are called out.

        8.The required outputs (Gross salary, NHIF Deductions, NSSF Deductions, gross salary, and net salary) are then given output.
    
    ###Set up instruction
        To use the `calculateDemerits()` function, follow these steps:

            1. Clone this repository to your local machine:
            2. Navigate to the project directory
            3. Open the file "netsalarycalculator.js" in a text editor
            4. You can modify the function or use it as it is
            5. Run the script in a Javascript environment eg browser's console
            6. Follow the prompt to enter the basic salry and benfits for calculation.

    ###Author and Licsence
        Author: Brian James Mariga
        License: This project is licensed under the GNU GENERAL PUBLIC LICENSE Version 3
