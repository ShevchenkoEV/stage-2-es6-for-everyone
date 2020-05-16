import {showModal} from './modal';
import {createElement} from '../../helpers/domHelper';

export function showWinnerModal(fighter) {
  // call showModal function 

  const title = `${fighter.name} wins!`;
  const body = createElement({ tagName: 'H1', className: 'modal-body' });
  body.innerText = "Winner!!! Name: " + fighter.name;
  const result = {
    title,
    bodyElement: body,
    onClose: () => {
      window.location.reload();
    },
  };
  showModal(result);
}
