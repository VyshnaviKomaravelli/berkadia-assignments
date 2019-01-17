function randomNumber (precision){
    return Math.random();
 }
 module.exports = (req, res) => {
     const number = randomNumber(20000%2)?'even number':'odd number';
        return {
         
          generatedNumber:number
         
         
        }  
   
    
 }
