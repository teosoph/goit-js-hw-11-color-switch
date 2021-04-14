import './styles.css';

// colors base
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const blink_speed = 1000; // every 1000 == 1 second, adjust to suit

//  randomazer
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Blinking text =========================================================
const pRef = document.getElementById('invitation');
setInterval(function () {
  const randomColor = randomIntegerFromInterval(0, colors.length - 1);
  (pRef.style.visibility = pRef.style.visibility == 'hidden' ? '' : 'hidden'),
    (pRef.style.color = `${colors[randomColor]} `);
}, blink_speed - 900);

// =============== goit-js-hw-11-color-switch =====================================================

// selector refs
const refs = {
  bodyRef: document.querySelector('body'),
  startBtnRef: document.querySelector('button[data-action="start"]'),
  stopBtnRef: document.querySelector('button[data-action="stop"]'),
};

refs.stopBtnRef.disabled = false;

// buttons status changing function
const changeBtnStatus = (add, remove) => {
  refs.startBtnRef.disabled = add;
  refs.stopBtnRef.disabled = remove;
};

// body color changing functions
let intitialId = null;

const startBtnBobyColorChange = () => {
  console.log(`start`);
  intitialId = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0, colors.length - 1);
    refs.bodyRef.style.backgroundColor = `${colors[randomColor]}`;
  }, blink_speed);
  changeBtnStatus(true, false);
};

const stopBtnBobyColorChange = () => {
  console.log(`stop`);
  clearInterval(intitialId);
  changeBtnStatus(false, true);
};

// refs listeners
refs.startBtnRef.addEventListener('click', startBtnBobyColorChange);
refs.stopBtnRef.addEventListener('click', stopBtnBobyColorChange);
