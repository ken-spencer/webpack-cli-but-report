const { spawn } = require('child_process');

stream = spawn("npm run watch", [], {
  'shell': true,
});

stream.stderr.on('data', function (data) {
  console.log(data.toString());
  process.exit();       
});  

stream.on('close', function (code) {
  console.log('closing with code:', code); 
});

stream.on('exit', function (code) {
  console.log('exiting with code:', code); 
});

stream.on('disconnect', function (code) {
  console.log('disconnecting with code:', code); 
});

stream.on("error", (e) => {
  console.log("There was an error: ", e);//.message);  
});

stream.on("message", (e) => {
  console.log(message);
});

stream.stdout.on('data', function (data) {
  console.log(data.toString());
});  
