import Notiflix from 'notiflix';
const inputDelay = document.querySelector('[name=delay]');
const inputStep = document.querySelector('[name=step]');
const inputAmount = document.querySelector('[name=amount]');
const createPromisesBtn = document.querySelector('button');
// const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      // Fulfill
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      // return Promise.resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      // Reject
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      // return Promise.reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
  console.log(`delay z setTimout ${delay}`);
}

// form.addEventListener('input', () => {
//   console.log('inputDelay');
//   console.log(inputDelay.value);
//   console.log('');
//   console.log('inputStep');
//   console.log(inputStep.value);
//   console.log('');
//   console.log('inputAmount');
//   console.log(inputAmount.value);
//   console.log('');
// });
createPromisesBtn.addEventListener('click', event => {
  event.preventDefault();
  let delay = inputDelay.value - inputStep.value;
  for (let i = 0; i < inputAmount.value; i += 1) {
    position = i;
    delay = +delay;
    delay += +inputStep.value;
    createPromise(i, delay);
    console.log(`i: ${i}, delay: ${delay}`);
  }
});
