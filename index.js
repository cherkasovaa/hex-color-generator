const btn = document.querySelector('.btn');
const wrapper = document.querySelector('.main');
const hexText = document.querySelector('.hex');
const rgbText = document.querySelector('.rgb');

btn.addEventListener('click', () => {
  const hex = getRandomHex();
  const [r, g, b] = hexToRGB(hex);

  wrapper.style.backgroundColor = hex;
  hexText.textContent = hex;
  rgbText.textContent = `rgb: (${r}, ${g}, ${b})`;

  setTextColor([r, g, b]);
});

const getRandomHex = () => {
  return '#' + Math.random().toString(16).slice(-6);
};

const hexToRGB = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return [r, g, b];
};

const setTextColor = (rgb) => {
  const color = checkLightColor(rgb) ? '#333' : '#fff';

  wrapper.style.color = color;
  btn.style.color = color;
};

const checkLightColor = (rgb) => {
  return rgb.every((color) => color > 160);
};
