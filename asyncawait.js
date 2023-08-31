const paymentSuccess = true;
const marks = 70;

function enroll() {
  console.log('Course Enrollment is in progress');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentSuccess) resolve();
      else reject('Payment Failed');
    }, 2000);
  });

  return promise;
}

function progress() {
  console.log('Course on Progress ...');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (marks >= 80) resolve();
      else reject('Your Mark is not enough to get Certificate');
    }, 2000);
  });

  return promise;
}

function getCertificate() {
  console.log('Preparing your certificate!');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Congrats You got the Certificate');
    }, 3000);
  });

  return promise;
}

// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

async function course() {
  try {
    await enroll();
    await progress();
    const message = await getCertificate();

    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

course();
