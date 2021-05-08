import './style.css';

import { Dice } from './Dice/index';


const diceRow = document.querySelector('#dice-row');
diceRow.appendChild( Dice({side: 1}) );
diceRow.appendChild( Dice({side: 3}) );
diceRow.appendChild( Dice({side: 5}) );
