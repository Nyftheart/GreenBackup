// permet de fusioner tout les reducer de touts no reducers pour redux
import {combineReducers} from 'redux';

// on importe tout les reducer que l'on veut fusioner
import addPiece from './addpiece';
import addPlante from './addplante';

export default combineReducers({
  addPiece,
  addPlante,
});
