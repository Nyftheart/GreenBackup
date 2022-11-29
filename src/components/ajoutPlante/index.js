import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo} from '../../actions/addPlante';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';

// meme todo que le premier exercice todolist

const AjoutPlante = () => {
  const route = useRoute();
  console.log(route);
  const navigation = useNavigation();
  // on crée notre dispatch pour pouvoir récupéré le resultat de notre action
  const dispatch = useDispatch();
  const [input, setInput] = React.useState('');
  const todoValue = useSelector(state => state.addPlante.value);

  // on change notre ancien addTodo pour l'adapter a redux
  const addTodoToRedux = () => {
    if (input.length === 0) {
      return;
    }
    dispatch(
      addTodo({
        label: input,
        id: `${Math.random()}`,
        piece: route.params.idSalle,
      }),
    );
    setInput('');
  };

  return (
    <APP>
      <List>
        <ListPiece>
          <AddBlock>
            <InputPlante
              value={input}
              onChangeText={text => setInput(text)}
              placeholder="Ajoute une Plante"
            />
            <TouchableOpacity onPress={addTodoToRedux}>
              <AddButton source={require('../../../assets/AddPiece.png')} />
            </TouchableOpacity>
          </AddBlock>

          {todoValue.map((todo, index) => {
            console.log(route.params.idSalle);
            console.log(todo.piece);
            if (todo.piece !== route.params.idSalle) {
              return null;
            }
            return (
              <Pil
                onPress={() =>
                  navigation.navigate('UniPlante', {idplante: todo.label})
                }>
                <NewBlock key={todo.id}>
                  <Named>{todo.label}</Named>
                  <GreenArrow
                    source={require('../../../assets/GreenArrow.png')}
                  />
                  <TouchableOpacity
                    onPress={() => dispatch(deleteTodo(todo.id))}>
                    <DeleteButton
                      source={require('../../../assets/deletePiece.png')}
                    />
                  </TouchableOpacity>
                </NewBlock>
              </Pil>
            );
          })}
        </ListPiece>
      </List>
    </APP>
  );
};

export default AjoutPlante;

const APP = styled.View`

`;

const NewBlock = styled.View`
  margin-top: 5px;
  margin-bottom: 15px;
  border-radius: 30px;
  width: 305px;
  height: 56px;
  background-color: #ffffff;
`;

const AddBlock = styled.View`
  margin-top: 30px;
  width: 305px;
  height: 56px;
  border-radius: 30px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background: rgba(60, 141, 104, 0.25);
`;

const ListPiece = styled.View`
  margin: auto;
  width: 305px;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const AddButton = styled.Image`
  width: 25px;
  height: 25px;
`;
const InputPlante = styled.TextInput`
  background-color: white;
  width: 200px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 15px;
  margin-left: 20px;
  margin-right: 25px;
`;
const DeleteButton = styled.Image`
  position: absolute;
  width: 19px;
  height: 17.76px;
  margin-left: 30px;
  margin-top: -23px;
`;

const Pil = styled.TouchableOpacity`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
const Named = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #3c8d68;
  text-align: center;
  margin-top: 9px;
`;
const GreenArrow = styled.Image`
  position: absolute;
  margin-top: 16px;
  margin-left: 251px;
  width: 40px;
  height: 22px;
`;
const List = styled.ScrollView`
  height: 450px;
`;
