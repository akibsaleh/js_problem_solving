// const status_ = true;
// console.log('Task 1');

// // promise definition
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (status_) {
//       resolve('Task 2');
//     } else {
//       reject('failed');
//     }
//   }, 2000);
// });

// promise Call

// promise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// console.log('Task 3');

// const paymentSuccess = true;
// const marks = 90;

// function enroll() {
//   console.log('Course Enrollment is in progress');

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (paymentSuccess) resolve();
//       else reject('Payment Failed');
//     }, 2000);
//   });

//   return promise;
// }

// function progress() {
//   console.log('Course on Progress ...');
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (marks >= 80) resolve();
//       else reject('Your Mark is not enough to get Certificate');
//     }, 2000);
//   });

//   return promise;
// }

// function getCertificate() {
//   console.log('Preparing your certificate!');

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Congrats You got the Certificate');
//     }, 3000);
//   });

//   return promise;
// }

// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task is complete');
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log('Promise Consumed');
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async Task 2');
    resolve();
  }, 3000);
}).then(function () {
  console.log('Async 2 is resolved');
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: 'chai', email: 'chai@example.com' });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: 'Akib', password: '123' });
    } else {
      reject('Eror!! Somethign went wrong');
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('The promise is either or resolved');
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: 'Javascript', password: '123' });
    } else {
      reject('Error!! JS went wrong');
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log('E: ', error);
//   }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
