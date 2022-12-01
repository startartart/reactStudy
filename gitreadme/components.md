# Components, Props, State, LifeCycle

* 함수형 및 클래스 컴포넌트 - 컴포넌트를 정의하는 가장 간단한 방법은 자바스크립트 함수로 작성하는 것이다.
    ```js
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
    ```
    > 속성을 나타내는`props` 객체 인수를 받고 React 요소를 반환하기 때문에 유효한 React 컴포넌트라 할 수 있다.
    
    * 컴포넌트를 정의하기 위해 ES6 Class를 사용할 수도 있다.
    ```js
    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }
    ```
    > 두 컴포넌트 정의는 동일하며 클래스를 사용한 경우 몇가지 기능을 더 가지고 있다.

    * `props`는 읽기전용
        * 순수함수란 ? - 입력 파라미터에 대해 입력값이 변경되지 않는 함수를 말한다.
        예로, 
        ```js
        let sum = (...arr) => arr.reduce((a, b) => a + b);
        ```
        다음 함수 `sum()`은 직접적으로 외부 상태에 의존하거나 변경시키지 않으므로 순수함수이다.
        
        > 모든 React 컴포넌트는 `props`와 관련한 동작을 할 때 순수 함수처럼 동작해야 한다.

* 캡슐화 : 기존 함수형 컴포넌트를 클래스로 변환하는 작업을 진행한다.
    * ES6 Class를 같은 이름으로 선언, `React.Component`를 상속받는다.
    * `render()` 메소드를 사용한다.
    * 클래스 내부에 `render()` 되는 함수의 바디부분은 `this.state`의 형태가 된다.
    * `this.state` 는 `constructor(props)`에 초기화하는 클래스 생성자를 추가한다.
    * `ReactDOM.render()` 부분에서 `prop`를 삭제한다.
        > 기본적으로 클래스 컴포넌트는 항상 `props`와 함께 기본 생성자를 호출한다.
    * `Mounting` - DOM에 최초로 렌더링되는 시점이다.
    `UnMounting` - 반대로 컴포넌트가 소멸되는 시점이다.
    `componentDidMount()`, `componentWillUnmount()` : 이 메서드들을 "라이프사이클 훅" 이라고 불린다.
        * `componentDidMount(), componentWillUnmount()` : 각각 최초 동작, 마지막 동작이라고 보면 된다.
            > 시각적 출력에 사용되지 않는 것을 저장해야 하는 경우 클래스에 수동으로 필드를 추가할 수 있다.
    * 구현되는 class 내 메서드는 `this.setState()`를 사용해서 `local state`에 대한 업데이트를 예약한다.
        > `state`를 직접 수정해서는 안된다. `this.state.comment = 'Hello';`(X)   
        대신 `setState()`를 사용해야한다. `this.setState({comment: 'Hello'});`(O)
        * state 업데이트는 비동기일 수 있다.
        * state는 여러 독립적인 변수를 가질 수 있고 개별적으로 업데이트가 가능하다.
        * 하향식(단방향) 데이터 흐름 : 모든 `state`는 항상 특정 컴포넌트가 가지며, 해당 `state`에서 파생된 모든 데이터 또는 UI는 트리의 컴포넌트 **아래** 에만 영향을 미친다.