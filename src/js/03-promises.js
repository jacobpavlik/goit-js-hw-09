import Notiflix from 'notiflix';
const inputDelay = document.querySelector('[name=delay]');
const inputStep = document.querySelector('[name=step]');
const inputAmount = document.querySelector('[name=amount]');
const createPromisesBtn = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  setTimeout(() => {
    if (shouldResolve) {
      // Fulfill
      return Promise.resolve({ position, delay }).then(
        ({ position, delay }) => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        }
      );
    } else {
      // Reject
      Promise.reject({ position, delay }).catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    }
  }, delay);
}

createPromisesBtn.addEventListener('click', event => {
  event.preventDefault();
  let delay = inputDelay.value - inputStep.value;
  for (let i = 0; i < inputAmount.value; i += 1) {
    let position = i;
    delay = +delay;
    delay += +inputStep.value;
    createPromise(position, delay);
  }
});
