import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete, MdOutlinePublish } from 'react-icons/md';
import { useTodoDispatch } from '../TodoContext';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const Change = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${props =>
      !props.editable &&
      css`
        ${Remove} {
          display: initial;
        }
      `}
    ${props =>
      props.editable &&
      css`
        ${Change} {
          display: initial;
        }
      `}
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const Input = styled.input`
  flex: 1;
  display: block;
  font-size: 23px;
  color: #495057;
  border: none;
  outline: none;
  border-radius: 2rem;
  background-color: #f5fffa;
  ${props =>
    !props.editable &&
    css`
      display: none;
    `}
`;
    
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  border: none;
  outline: none;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
  ${props =>
    props.editable &&
    css`
      display: none;
    `}
  &:hover {
    color: #ff6b6b;
  }
`;

const InputForm = styled.form`
`;

function TodoItem({ id, done, text, editable }) {
  const dispatch = useTodoDispatch();

  const [value, setValue] = useState(text);

  const onToggle = () => dispatch({type: "TOGGLE", id});
  const onRemove = () => dispatch({type: "REMOVE", id});
  const onEdit = () => dispatch({type: "EDIT", id});
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: "UPDATE",
      id,
      text: value
    });
    dispatch({
      type: "EDIT",
      id
    });
  };

  return (
    <TodoItemBlock editable={editable}>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done} onClick={onEdit} editable={editable}>{text}</Text>
      <InputForm onSubmit={onSubmit}>
        <Input 
          value={value} 
          editable={editable}
          autoFocus
          onChange={onChange}
        />
      </InputForm>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
      <Change onClick={onSubmit}>
        <MdOutlinePublish />
      </Change>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);