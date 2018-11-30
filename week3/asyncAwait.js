//ASYNC/AWAIT:he word “async” before a function means one simple thing: a function always returns a promise.
//If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.
//There’s another keyword, await, that works only inside async functions

function afterExecution() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = await afterExecution();
    console.log(result);
}
  
  asyncCall();
