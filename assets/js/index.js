import { addNewCard } from './addCard.js';

const formTag = document.querySelector( "form" );



formTag.addEventListener( "submit", addNewCard, false );
