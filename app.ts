#! /usr/bin/env/ node
import chalk from "chalk";
import inquirer from "inquirer"
//classes player & opponent
class player {
    name: string;
    fuel: number = 100;
    constructor(name:string) {
        this.name = name;
    }
    fuelDeacreas(){
       let fuel= this.fuel -= 25
       this.fuel = fuel
    }
    fuelIncreas(){
     this.fuel =  100
        
     }
}
class Opponent {
    name :string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDeacreas(){
        let fuel= this.fuel -= 25
        this.fuel = fuel
     }
}
// player name & Opponent select
let Player = await inquirer.prompt({
    name:"name",
    type:"input",
    message:" please Enter your name "
})
 
 let opponent = await inquirer.prompt({
    name:"select",
    type:"list",
    message:" select your Opponent ",
    choices:["skeleton","assassin","zombie"] 
})
    
//gather data
let p1 = new player(Player.name)
let o1 = new Opponent(opponent.select)

do{
    if (opponent.select === "skeleton") {

    let ask = await inquirer.prompt({
        name:"opt",
        type:"list",
        message:" select your action ",
        choices:["Attack","Drink portion","run for your life"],
    });
    
    if (ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
        if (num > 0){
           p1.fuelDeacreas()
           console.log(chalk.bold.red(`${p1.name}fuel is ${p1.fuel}`))
           console.log(chalk.bold.green(`${o1.name}fuel is ${o1.fuel}`))
           if (p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You Lose better Luck Next Time"))
            process.exit()

           }
        }
        if (num <= 0){
            o1.fuelDeacreas()
            console.log(chalk.bold.green(`${p1.name}fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name}fuel is ${o1.fuel}`))
            if (o1.fuel <= 0){
                console.log(chalk.green.bold.italic("You Win"))
                process.exit()
                
               }

        }

    }
    if (ask.opt == "Drink portion"){
        p1.fuelIncreas()
        console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is${p1.fuel}`))
    }
    if (ask.opt == "run for your life"){
        console.log(chalk.red.bold.italic("You Lose better Luck Next Time"))
        process.exit()
 
    }
    
}
if (opponent.select === "assassin") {

    let ask = await inquirer.prompt({
        name:"opt",
        type:"list",
        message:" select your action ",
        choices:["Attack","Drink portion","run for your life"],
    });
    
    if (ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
        if (num > 0){
           p1.fuelDeacreas()
           console.log(chalk.bold.red(`${p1.name}fuel is ${p1.fuel}`))
           console.log(chalk.bold.green(`${o1.name}fuel is ${o1.fuel}`))
           if (p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You Lose better Luck Next Time"))
            process.exit()

           }
        }
        if (num <= 0){
            o1.fuelDeacreas()
            console.log(chalk.bold.green(`${p1.name}fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name}fuel is ${o1.fuel}`))
            if (o1.fuel <= 0){
                console.log(chalk.green.bold.italic("You Win"))
                process.exit()
                
               }

        }

    }
    if (ask.opt == "Drink portion"){
        p1.fuelIncreas()
        console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is${p1.fuel}`))
    }
    if (ask.opt == "run for your life"){
        console.log(chalk.red.bold.italic("You Lose better Luck Next Time"))
        process.exit()
 
    }
    
}
if (opponent.select === "zombie") {

    let ask = await inquirer.prompt({
        name:"opt",
        type:"list",
        message:" select your action ",
        choices:["Attack","Drink portion","run for your life"],
    });
    
    if (ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
        if (num > 0){
           p1.fuelDeacreas()
           console.log(chalk.bold.red(`${p1.name}fuel is ${p1.fuel}`))
           console.log(chalk.bold.green(`${o1.name}fuel is ${o1.fuel}`))
           if (p1.fuel <= 0){
            console.log(chalk.red.bold.italic("You Lose better Luck Next Time"))
            process.exit()

           }
        }
        if (num <= 0){
            o1.fuelDeacreas()
            console.log(chalk.bold.green(`${p1.name}fuel is ${p1.fuel}`))
            console.log(chalk.bold.red(`${o1.name}fuel is ${o1.fuel}`))
            if (o1.fuel <= 0){
                console.log(chalk.green.bold.italic("You Win"))
                process.exit()
                
               }

        }

    }
    if (ask.opt == "Drink portion"){
        p1.fuelIncreas()
        console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel is${p1.fuel}`))
    }
    if (ask.opt == "run for your life"){
        console.log(chalk.red.bold.italic("You Lose better Luck Next Time"))
        process.exit()
 
    }
    
}

}
while (true)
