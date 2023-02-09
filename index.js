console.log('ss');
// const suc = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success1');
//   }, 1000);
// });

const fai = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Failur');
  }, 1000);
});

fai.then(console.log).catch(console.log);
