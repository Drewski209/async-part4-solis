//Shared workers are shared by several scripts running in different windows 

// Creates a shared web worker that executes the scripted at a specified URL
SharedWorker()

//Returns a MessagePort object to communicate with and control  the shared worker
SharedWorker.port()

//This creates a new shared worker
const myWorker = new SharedWorker("worker.js");

//When a port is started, messages to the worker and handle messages sent from the port.postmessage() and port.onmessage
//The onconnect handler connects the same port below. When the MessagePort starts the port and the onmessage handler deals with messages sent from the main threads

first.onchange = () => {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
  
  second.onchange = () => {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
  
  myWorker.port.onmessage = (e) => {
    result1.textContent = e.data;
    console.log("Message received from worker");
  };
  