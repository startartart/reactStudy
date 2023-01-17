import React from 'react';
import {createGlobalStyle} from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './TodoContext';
import AnimatedCursor from "react-animated-cursor";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      
      <GlobalStyle/>
      <TodoTemplate>
        <TodoHead/>
        <TodoList/>
        <AnimatedCursor
          color="0,0,0"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
        />
        <TodoCreate/>
      </TodoTemplate>
    </TodoProvider>
  );
}


export default App;
