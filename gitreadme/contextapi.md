# contextAPI

* 특정 함수를 특정 컴포넌트를 거쳐서 원하는 컴포넌트에게 전달하는 작업은 리액트로 개발하는데 있어서 자주 발생하며, 컴포넌트 한두개정도 전달하는 건 상관없을 수 있지만 여러개이상의 컴포넌트를 거쳐야한다면 이는 매우 번거로운 작업일 수 있다.

* Context API는 프로젝트 안에서 전역적으로 사용할 수 있는 값을 관리할 수 있다.
    > "상태" 가 아닌 "값" 이므로 굳이 상태를 가르키지 않아도 된다. 가령, 이 값은 함수일수도, 외부 라이브러리 인스턴스일수도 DOM 일수도 있다.
    * Context를 만들기 위해서는 `React.createContext()` 함수를 사용한다.

* `useReducer`의 `dispatch`를 함께 사용되어 `<UserDispatch.Provider value={dispatch}>...</UserDispatch.Provider>` 와 같이 사용한다.
    * `Provider`로 감싸진 컴포넌트들은 바로 조회해서 사용할 수 있다.
        > 부모 컴포넌트에서 Context를 만들고, 사용하고, 내보내는 작업이 필수적이다.
    * 자식 컴포넌트에서는 `useContext` Hook을 사용해서 `dispatch`한 Context를 조회하고 사용한다.
