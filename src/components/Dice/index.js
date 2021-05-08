import './style.css';

import { roll } from '../../utilities';


export const Dice = (props) => {
  let { side } = props;

  const element = document.createElement('div');
  element.classList.add('dice');
  element.innerHTML = `
    <div class="dice__side dice__side--${side}"></div>
    <button class="btn btn--small roll-btn">hodit</button>
  `;

  const btn = element.querySelector('.roll-btn');
  const diceSide = element.querySelector('.dice__side');

  btn.addEventListener('click', () => {
    diceSide.classList.remove(`dice__side--${side}`);
    side = roll();
    diceSide.classList.add(`dice__side--${side}`);
  });

  return element;
}