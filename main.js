import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.redBright(":".repeat(100)));
console.log(chalk.blueBright("\n \t \t \t \tAge-Calculator by Mubashir khan\n"));
console.log(chalk.redBright(":".repeat(100)));
let age = await inquirer.prompt([
    {
        name: "Birth_Month",
        type: "number",
        message: "Enter your Birth Month(MM)",
    }, {
        name: "Birth_Date",
        type: "number",
        message: "Enter your Birth Date(DD)",
    },
    {
        name: "Birth_Year",
        message: "Enter your Birth Year (YYYY)",
        type: "number",
    }
]);
let current_Year = 2024;
let current_Date = new Date();
let current_Month = 8;
let your_Year = (current_Year - age.Birth_Year);
let your_Date = (current_Date - age.Birth_Date);
let your_month = (current_Month - age.Birth_Month);
console.log(chalk.redBright(":".repeat(100)));
console.log(chalk.blueBright(`\n \t \t \t \tYou are ${your_Year} Years , ${your_month} Months & ${your_Date} Days old\n`));
console.log(chalk.redBright(":".repeat(100)));
