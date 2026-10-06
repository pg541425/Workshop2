console.log("start");

setTimeout(() => {
  console.log("timeout (after 2s)");
}, 2000);

setImmediate(() => {
  console.log("Immediate");
});

process.nextTick(() => {
  console.log("Next tick");
});

console.log("end");