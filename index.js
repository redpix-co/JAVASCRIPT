// ---------------------------------------------------------
// BASIC PROMISE

// const suc = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success1');
//   }, 1000);
// });

// const fai = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Failur');
//   }, 1000);
// });

// fai.then(console.log).catch(console.log);

// ---------------------------------------------------------
// BASIC PROMISE METHOD
// all, allSettled, race
const comm = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success1');
  }, 1000);
});

const all = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Failur');
    // change resolve (all method)
    // change reject (common)
  }, 100);
  // reduce time (race method)
});

Promise.race([comm, all]).then(console.log).catch(console.log);

// ---------------------------------------------------------
// BASIC CALLBACK FUNCTION

// const normal = (val, secondFun) => {
//   return secondFun(val + 5);
// }

// const secondFun = (val) => {
//   return val - 25;
// }

// console.log(normal(10, secondFun))

// ---------------------------------------------------------
