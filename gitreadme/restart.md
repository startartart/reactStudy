# Restart

* 3주간 작성을 못해서 잊혀진 React를 다시 이해하기 위해 공부 진행
    * [참고한 사이트](https://react.vlpt.us/basic/01-concept.html)

* 리액트가 만들어진 계기
    * 처리해야 할 이벤트와 상태값이 많아진다면 유지보수가 어려울 것이다. 더군다나 DOM을 직접 건드리면서 작업을 하면 코드가 난잡해질 것이다.
    * 리액트는 **처음부터 모든걸 새로 만들어서 보여준다** 라는 개념에서 시작되었다.
    * 동적인 UI를 보여주기 위해서 모든걸 다 날려버리고 모든걸 새로 만들게 된다면 속도가 굉장히 느릴 것이다.
    * Virtual DOM을 이용해 상태가 업데이트 되었을 때 필요한 곳의 UI만 렌더링한다.

* REACT 작업환경 구성하기
    * `npx create-react-app begin-react` : 프로젝트 생성

* 리액트 컴포넌트 생성하기
    * ```js
        import React from 'react'; // 리액트 컴포넌트 만들기
        import ReactDOM from 'react-dom'; // 렌더링 import

        ...

        // render되고 있는 id가 root인 DOM을 선택하고 있다.
        ReactDOM.render(<App />, document.getElementById('root'));
        ```

* JSX 스타일
    * 리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 `babel`이 JSX를 JS로 변환해 준다.
        > Babel은 자바스크립트의 문법을 확장해주는 도구이며 편의 상 사용된다.
    * return되는 태그는 닫혀있어야 하며, 하나의 태그로 감싸져야 한다.

* props를 통한 컴포넌트 값 전달
    ```js
    function App() {
        return (
            <Hello name="react" color="red"/>
        );
    }

    function Hello(props) {
        return (
            <div style={{color: props.color}}>Hello {props.name}</div>
        );
    }
    ```
* defaultProps로 기본값 설정
    ```js
    Hello.defaultProps = { name: '이름없음'} // Hello component
    ```
* children을 통한 렌더링
    ```js

    function App() {
        return (
            <Wrapper>
            <Hello name="react" color="red"/>
            <Hello color="pink"/>
            </Wrapper>
        );
    }

    function Wrapper({children}) {
        return (
            <div>
                {children}
            </div>
        );
    }
  ```

* 삼항연산자를 통한 조건부 렌더링
    * 건넬 props의 값을 `isSpecial`이라 가정할 때, 자식 컴포넌트는 `{isSpecial ? <b>Special</b> : null}`로 조건부 렌더링을 진행한다.

* useState 사용하기
    * 사용자 인터랙션에 따라 바뀌는 동적처리 state : `import {useState} from 'react';`
    * 함수형 업데이트의 컴포넌트 최적화 : setState는 비동기적으로 동작하는데 이를 동기적으로 사용하기 위함이다.
