//process of executing microservices
//npm install -g micro
// add below code in
//"scripts": {"start": "micro" }
// after writing program run it using command: micro index.js
//deploy it using now package by installing it
//generated url by deploying:https://expressexamples-oayswsnjb.now.sh
//-----------------------------------------------------------------------------------------


function randomNumber (precision){
    return Math.random();
 }
 module.exports = (req, res) => {
     const number = randomNumber(20000%2)?'even number':'odd number';
        return {
         
          generatedNumber:number
         
         
        }  
   
    
 }
 
