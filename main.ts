import chalk from "chalk";
import inquirer from "inquirer"
// first we make the classes of player and opponent
class Player {
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fueldecrease(){
       let fuel = this.fuel - 25
       this.fuel = fuel
    }
    fuelincrease(){
        this.fuel = 100
    }
}

class Opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fueldecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
     }
}
//here we asked the name 

let player = await inquirer.prompt([
    {
    name : "name",
    type: "input",
    message: "please enter your name"
    }
]);

let opponent = await inquirer.prompt([
    {
    name : "select",
    type: "list",
    message : "please select what you do?",
    choices: ["ZOMBIE","ASSASIN","SKELETON"]
    }
])
// here we gather data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do{
    // skeleton
    if (opponent.select === "SKELETON"){
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)} `)
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "select our opponent",
                choices: ["DRINK PORTION","ATTACK","RUN FOR YOUR LIFE..."]
            }
        ])
        if (ask.opt === "ATTACK"){
          let num = Math.floor(Math.random() * 2);
          if (num > 0){
              p1.fueldecrease()
              console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
              console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
              if(p1.fuel <= 0 ){
                console.log(chalk.red.bold.italic(`YOU LOOSE, BETTER LUCK NEXT TIME`))
              }
              process.exit()
          }
          if (num <= 0){
            o1.fueldecrease()
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            if(p1.fuel <= 0 ){
                console.log(chalk.red.bold.italic(`YOU WON`))
                process.exit()
              }
          }
        }
        if (ask.opt === "DRINK PORTION"){
            p1.fuelincrease
            console.log(chalk.bold.italic.green(`YOU DRINK HEALTH PORTION YOR FUEL IS ${p1.fuel}`))
        }
        if (ask.opt === "RUN FOR YOUR LIFE..."){
            console.log(chalk.red.bold.italic(`YOU LOOSE, BETTER LUCK NEXT TIME`))
            process.exit()
        }
    }
    // assasin 
    if (opponent.select === "ASSASIN") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)} `)
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "select our opponent",
                choices: ["DRINK PORTION","ATTACK","RUN FOR YOUR LIFE..."]
            }
        ])
        if (ask.opt === "ATTACK"){
          let num = Math.floor(Math.random() * 2);
          if (num > 0){
              p1.fueldecrease()
              console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
              console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
              if(p1.fuel <= 0 ){
                console.log(chalk.red.bold.italic(`YOU LOOSE, BETTER LUCK NEXT TIME`))
              }
              process.exit()
          }
          if (num <= 0){
            o1.fueldecrease()
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            if(p1.fuel <= 0 ){
                console.log(chalk.red.bold.italic(`YOU WON`))
                process.exit()
              }
          }
        }
        if (ask.opt === "DRINK PORTION"){
            p1.fuelincrease
            console.log(chalk.bold.italic.green(`YOU DRINK HEALTH PORTION YOR FUEL IS ${p1.fuel}`))
        }
        if (ask.opt === "RUN FOR YOUR LIFE..."){
            console.log(chalk.red.bold.italic(`YOU LOOSE, BETTER LUCK NEXT TIME`))
            process.exit()
        }
    }  
    if (opponent.select === "ZOMBIE") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)} `)
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "select our opponent",
                choices: ["DRINK PORTION","ATTACK","RUN FOR YOUR LIFE..."]
            }
        ])
        if (ask.opt === "ATTACK"){
          let num = Math.floor(Math.random() * 2);
          if (num > 0){
              p1.fueldecrease()
              console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
              console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
              if(p1.fuel <= 0 ){
                console.log(chalk.red.bold.italic(`YOU LOOSE, BETTER LUCK NEXT TIME`))
              }
              process.exit()
          }
          if (num <= 0){
            o1.fueldecrease()
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
            if(p1.fuel <= 0 ){
                console.log(chalk.red.bold.italic(`YOU WON`))
                process.exit()
              }
          }
        }
        if (ask.opt === "DRINK PORTION"){
            p1.fuelincrease
            console.log(chalk.bold.italic.green(`YOU DRINK HEALTH PORTION YOR FUEL IS ${p1.fuel}`))
        }
        if (ask.opt === "RUN FOR YOUR LIFE..."){
            console.log(chalk.red.bold.italic(`YOU LOOSE, BETTER LUCK NEXT TIME`))
            process.exit()
        }
    } 
}while(true)

