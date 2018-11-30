var count = 0; 
var intervalObject = setInterval(function () {
    if (count == 0) { 
        console.log('starting interval'); 
       
    }  
        count++; 
        console.log(count, 'seconds passed'); 
        if (count == 5) { 
            console.log('exiting interval'); 
            clearInterval(intervalObject); 
        } 
    }, 1000); 
    function myFunc(arg) {
        console.log(` function executing => ${arg}`);
      }
      
      setTimeout(myFunc, 5500,'set timeout' );
      setImmediate((f1)=>{
          console.log(`set immediate is executing:${f1}`);
      },'immediately');
