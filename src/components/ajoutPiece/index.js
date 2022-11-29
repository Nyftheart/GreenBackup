import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo} from '../../actions/addPiece';
import {useNavigation} from '@react-navigation/native';

// meme todo que le premier exercice todolist

const TodoList = () => {
  const navigation = useNavigation();
  // on crée notre dispatch pour pouvoir récupéré le resultat de notre action
  const dispatch = useDispatch();
  const [input, setInput] = React.useState('');
  const todoValue = useSelector(state => state.addPiece.value);

  // on change notre ancien addTodo pour l'adapter a redux
  const addTodoToRedux = () => {
    if (input.length === 0) {
      return;
    }
    dispatch(addTodo({label: input, id: `${Math.random()}`}));
    setInput('');
  };

  return (
    <APP>
      <List>
        <ListPiece>
          <AddBlock >
            <InputPiece
              value={input}
              onChangeText={text => setInput(text)}
              placeholder="Nom de la piece"
            />
            <TouchableOpacity onPress={addTodoToRedux}>
              <AddButton source={require('../../../assets/AddPiece.png')} />
            </TouchableOpacity>
          </AddBlock>

          {todoValue.map((todo, index) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ListePlante', {idSalle: todo.label})
              }>
              <NewBlock key={todo.id}>
                <TouchableOpacity onPress={() => dispatch(deleteTodo(todo.id))}>
                  <DeleteButton
                    source={require('../../../assets/deletePiece.png')}
                  />
                </TouchableOpacity>
                <Named>{todo.label}</Named>
                <GreenArrow source={require('../../../assets/GreenArrow.png')} />
              </NewBlock>
            </TouchableOpacity>
          ))}
        </ListPiece>
      </List>
    </APP>
  );
};

export default TodoList;

const APP = styled.View`
  z-index: 0;
`;

const NewBlock = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 22px;
  width: 150px;
  height: 150px;
  background-color: #ffffff;
`;

const AddBlock = styled.View`
  margin-top: 30px;
  background: rgba(60, 141, 104, 0.25);
  width: 150px;
  height: 150px;
  border-radius: 22px;
  align-items: center;
  padding-top: 15px;
`;
const AddButton = styled.Image`
  width: 50px;
  height: 50px;
`;
const InputPiece = styled.TextInput`
  background-color: white;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const ListPiece = styled.View`
  padding-left: 30px;
  padding-right: 37px;
  width: 400px;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
const List = styled.ScrollView`
  height: 500px;
`;
const DeleteButton = styled.Image`
  position: absolute;
  width: 19px;
  height: 17.76px;
  margin-left: 120px;
  margin-top: 8px;
`;
const Named = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #3c8d68;
  text-align: center;
  margin-top: 36px;
`;
const GreenArrow = styled.Image`
  margin-left: auto;
  margin-right: auto;
  margin-top: 17px;
  width: 40px;
  height: 22px;
`;
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#3c8d68',
  },
});
