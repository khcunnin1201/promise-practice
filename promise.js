// const willGetNewDog = new Promise ((resolve, reject) => {
// const rand = Math.random();
// if (rand < 0.5){
//     resolve()
// } else {
//     reject();
// }
// });
// willGetNewDog.then(() => {
// console.log('yay, i got a dog')
// });

// willGetNewDog.catch(() => {
//     console.log('bummer, no dog')
//     });

// this will reject 100% of the time
// const willGetNewDog = new Promise ((resolve, reject) => {
// reject();
// });
// willGetNewDog.then(() => {
// console.log('yay, i got a dog')
//     });
 

// this includes a timer delay for 5 seconds
// can also chain together the .then and .catch statements
// const willGetNewDog = new Promise ((resolve, reject) => {
//     setTimeout(( ) => {
//         const rand = Math.random();
//         if (rand < 0.5){
//          resolve();
//          } else {
//          reject();
//         }
//     }, 5000)
// })
// willGetNewDog.then(() => {
//   console.log('yay, i got a dog')
//    }).catch(() => {
//   console.log('bummer, no dog')
//     });


// this removes making the original variable but still 
// creates the promise function 
const makeDogPromise = ( ) => {
    return new Promise((resolve, reject)=> {
        setTimeout(( ) => {
    const rand = Math.random()*5;
        if (rand < 2.5){
           resolve();
        } else {
          reject();
        }
        }, 2000)
    })    
};

// this prints it directly to the browser page instead of the console
// don't need to do this often
// makeDogPromise()
// .then(() => {
//     document.write('yay, i got a dog')
// }).catch(() => {
//     document.write('bummer, no dog')
// });

// this prints it directly to the browser page instead of the console
// don't need to do this often
makeDogPromise()
.then(() => {
    document.getElementById('result').innerHTML = 'yay, i got a dog'
}).catch(() => {
    document.getElementById('result').innerHTML = 'bummer, no dog'
});

console.log("hello, how was your day?");
