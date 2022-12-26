import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

function Hello(props) {
  return (
    <div style={{color: props.color}}>Hello {props.name}</div>
  );
}

function Wrapper({ children }) {
  return (
    <div>
    {children}
    </div>
      
  )
}

Hello.defaultProps = { name: '이름없음'}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);