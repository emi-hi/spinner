const spin = ['\r|    ', '\r/    ', '\r-    ', '\r\\    '];

let waitTime = 0;
const spinIt = function(input, waitTime, numTimes) {
  for (let i = 0; i < numTimes; i++) {
    for (let each of input) {
      setTimeout(() => {
        process.stdout.write(each);
      }, waitTime);
      waitTime += 200;
    }
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, waitTime);
};
spinIt(spin, waitTime, 3);