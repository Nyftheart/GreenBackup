// import de nos actions
import {ADD_PLANTE, DELETE_PLANTE} from '../actions/addPlante';

// exemple de reducer pour le compteur
const initialState = {
  value: [],
};
// le reducer n'est qu'un switch
//    state = initialState > correspond a la valeur par default
//    action > correspond au action "ecouté" par le reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLANTE:
      return {
        // spread operator => recupère tout
        ...state,
        value: [...state.value, action.payload],
      };
    case DELETE_PLANTE:
      return deletePieceReducer(state, action.payload);
    default:
      return state;
  }
};

const deletePieceReducer = (state, id) => {
  const newPiece = [...state.value];
  // on cherche l'index de la todo a suprimé
  const indexOfTodo = newPiece.findIndex(todo => todo.id === id);
  // je le retire de la liste
  newPiece.splice(indexOfTodo, 1);
  console.log(newPiece);
  // on return la meme chose que pour le addTodo, sauf que cette fois si , on
  // return la state qui n'a plus l'element suprimé (newTodos)
  return {
    ...state,
    value: newPiece,
  };
};
