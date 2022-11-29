// création de l'action pour la todolist

export const ADD_PIECE = 'ADD_PIECE';
export const DELETE_PIECE = 'DELETE_PIECE';
// action est ecouté par le reducer, et le reducer modifie la state, qui est ensuite
// accecible par react en global
//    action>reducer>stateGlobal>react

//    on donne 2 valeurs a notre objet: son type, et un payload qui aura toute les
// info de notre action. le Type permetrre d'iddentifier la provenance de l'action
// une fois dans le reducer
export const addTodo = payload => ({
  type: ADD_PIECE,
  payload,
});

// meme chose que pour le add, mais cette fois si pour le delete
export const deleteTodo = payload => ({
  type: DELETE_PIECE,
  payload,
});
