// // Dice ROLLER PROGRAM

// function rollDice(){

//     const numofDice=Number( document.getElementById("numofDice").value)
//     const diceResult =document.getElementById("diceResult");
//     const diceImage =document.getElementById("diceImage");
//     const values=[];
//     const images = [];

//     for( let i = 0; i < numofDice; i++){
//         const value = Math.floor(Math.random() * 6) + 1
//         // console.log(value);
//         values.push(value);
//         images.push(`<img src="diceimage/${value}.png"> `);
//     }

//     diceResult.textContent=`dice: ${values.join(', ')}`
//     diceImage.innerHTML =images.join('');
// }




































// RANDOM PASSWORD GENERATOR









// function generatePassword(length,includeLowercase,includeUppercase,includeNumber,includeSymbols){
//     const lowercasechars= "asdfghjklzxcvbnmqwertyuiop"
//     const uppercasechars= "ASDFGHJKLXCVBNMQWERTYUIOP"
//     const numberchars= "0123456789"
//     const symbolchars= "!@#$%^&*()_+"


//     let allowedchars="";
//     let password= "";


//     allowedchars += includeLowercase ? lowercasechars : "";
//     allowedchars += includeUppercase ? uppercasechars : "";
//     allowedchars += includeNumber ?numberchars : "";
//     allowedchars += includeSymbols ?symbolchars : "";


//     // console.log(allowedchars);


//         if (length<=0){
//             return `(password length must e at least 1)`
//         }
//         if(allowedchars.length ===0){
//             return `(At least 1 set of characters needs to be selected)`
//         }
//         for(let i =0; i<length;i++){
//             const randomIndex=Math.floor( Math.random() * allowedchars.length)
//             password += allowedchars[randomIndex]
//         }
//         return password;

    
//     // return ("");
// }



// const passwordLength =12;
// const includeLowercase=true;
// const includeUppercase=true;
// const includeNumber=true;
// const includeSymbols=true;


// const password= generatePassword(passwordLength,
//                 includeLowercase,
//                 includeUppercase,
//                 includeNumber,
//                 includeSymbols)

// console.log(`Generated password: ${password}`);
























// callback = a function that is passed as an argument
            //   to another function

            // used to handle asynchronous operations:
            // 1. Reading a File;
            // 2. Network requesting
            // 3. Interacting with databases

            // "Hey, when you're done, call this next,"



// hello(goodbye)


// function hello (callback){
//     console.log("hello");
//     callback();
// }

// function leave(){
//     console.log("leave")
// }

// function goodbye (){
//     console.log("goodbye");
  
// }


// sum(displayPage,1,2)

// function sum(callback, x, y){
//     let result = x+y;
//     callback(result)
// }

// function displayConsole(result){
//     console.log(result);
// }


// function displayPage(result){
//     document.getElementById("h1").textContent=result
// }
