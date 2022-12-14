# Form

* form 전송(submit)은, 새로운 페이지로 이동하는 기본 HTML 폼 동작을 수행하나 대부분의 상황에서 입력한 데이터에 접근할 수 있게하는 것이 편하다. 이 동작을 위해 컴포넌트 제어 기법을 사용한다.
* 컴포넌트 제어 기법
    * HTML `form`요소는 자기만의 state를 가지고 입력에 따라 업데이트된다.
    * React `state`를 신뢰가능한 단일 소스로 만들어 두 요소를 결합할 수 있다. 이후 렌더링 되는 React 컴포넌트는 폼에서 발생하는 유저 입력을 제어할 것이다. 예로, `input`폼 요소를 React에 의해 제어되어 **제어되는 컴포넌트**라고 부른다.
    * 전반적으로 `<input type="text">`, `<textarea>`, `<select>`는 비슷하게 동작되며 `value` 속성을 사용해 `onChange` 이벤트를 통해 `state`를 변화시킨다.