// Workers allow you to run scripts in the background, separate from the main thread of your web page
// Workers and the main code run completely generated and only interact by sending messages to each other
// This means workers cant access the DOM

//There are three kinds of workers: dedicated, shared, and service 

//After this call generatePrimes() is called, the program becomes unresponsive 
function generatePrimes(quota) {
    function isPrime(n) {
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
          return false;
        }
      }
      return true;
    }
  
    const primes = [];
    const maximum = 1000000;
  
    while (primes.length < quota) {
      const candidate = Math.floor(Math.random() * (maximum + 1));
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }
  
    return primes;
  }
  
  document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    const primes = generatePrimes(quota);
    document.querySelector("#output").textContent =
      `Finished generating ${quota} primes!`;
  });
  
  document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#user-input").value =
      'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
  });
  
The first thing a worker does is listen for messages from the main script by using the addEventListener() function
Instead of returning a value, the generatePrimes() function sends a message to the main script when are done, this is what the postMessage() function is used for
The main script listens for the message and updates the DOM when the message is received 
