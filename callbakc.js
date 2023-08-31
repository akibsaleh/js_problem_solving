const paymentSuccess = true;
const marks = 90;

function enroll(callback) {
  console.log('Course enrollment is in progress');
  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log('Payment failed');
    }
  }, 2000);
}

function progress(callback) {
  console.log('Course on progress');

  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log('Your mark is low');
    }
  }, 3000);
}

function getCertificate() {
  console.log('Preparing your certificate');
  setTimeout(function () {
    console.log('Congrats you got the certificate');
  }, 4000);
}

enroll(function () {
  progress(getCertificate);
});
