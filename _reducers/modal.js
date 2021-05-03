//contoh state visible modal
import { modalConstants } from '../_constants';

export function modal(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'modal-success',
        visible: true
      };
    case alertConstants.HIDDEN:
      return {
        type: 'modal-hidden',
        visible: false
      };
    default:
      return state
  }
}