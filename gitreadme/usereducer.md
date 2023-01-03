# useReducer

```js
 const [state, dispatch] = useReducer(reducer, initialState); // reducer은 함수, initialState는 객체
 ```


* 상태 업데이트 할 때에는 `useState`를 사용해서 새로운 상태를 설정했었다. 상태를 관리하는 방법 중 다른 하나가 있는데 바로 `useReducer`이다.

* `useReducer`은 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다. (파일 분리 또한 가능하다.)

* `useState` vs `useReducer`
    * 컴포넌트에서 관리하는 값이 딱 하나고, 단순한 숫자나 문자열 또는 `boolean` 값이라면 `useState`가 편할 것이다.
    * 컴포넌트에서 관리하는 값이 여러개가 되어 상태의 구조가 복잡해진다면, `useReducer`가 편할 것이다.
        > 일반적으로 `setter`를 한 함수에 여러번 사용하게 된다면 `useState`에서 `useReducer`로 변경한다.