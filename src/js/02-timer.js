import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
const daySpan = document.querySelector('[data-days]');
const hourSpan = document.querySelector('[data-hours]');
const minuteSpan = document.querySelector('[data-minutes]');
const secondSpan = document.querySelector('[data-seconds]');

const options = {
  enableTime: true, // enables time picker
  time_24hr: true, // 24 hour mode enabled
  defaultDate: new Date(), //sets the initial selected date(s)
  minuteIncrement: 1, // Adjusts the step for the minute input
  onClose(selectedDates) {
    // f to trigger on every time calendar is closed
    console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      selectedDates[0];
      startBtn.disabled = false;
      startBtn.addEventListener('click', () => {
        setInterval(() => {
          const timeToCount = selectedDates[0].getTime() - new Date().getTime();
          if (timeToCount > 0) {
            convertMs(timeToCount);
            daySpan.innerHTML = addLeadingZero(convertMs(timeToCount).days);
            hourSpan.innerHTML = addLeadingZero(convertMs(timeToCount).hours);
            minuteSpan.innerHTML = addLeadingZero(
              convertMs(timeToCount).minutes
            );
            secondSpan.innerHTML = addLeadingZero(
              convertMs(timeToCount).seconds
            );
          } else {
            clearInterval();
          }
        }, 1000);
      });
    }
  },
};

const input = document.querySelector('#datetime-picker');
flatpickr(input, options);
