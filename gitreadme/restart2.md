# Restart 2

* input 태그 상태 관리하기
    * 각각의 이벤트를 통하여 state를 변화시킨다.
    * 만약 두개의 input이 존재한다면 ? -> useState를 여러번 사용한다 (가장 좋은 방법은 아니다.)
        ```js
        // 좋은 방법은 아니다.
        const [text, setText] = useState('');
        const [text2, setText2] = useState('');
        ```
    * useState의 상태를 객체로 관리한다면 ? 
        ```js
        const [text, setText] = useState({
            name: '',
            nickname: ''
        });

        const { name, nickname } = text;
        ```
    * 변경될 name과 nickname은 `text[name] = value;`로 직접적으로 변경해서는 안된다.
    * 리액트의 불변성을 유지하기위해 다음 문법은 리렌더링되지 않으므로 `setText({...})`로 새 객체를 만들어 업데이트를 감지하여 리렌더링 될 것이다.
    * **기존 객체를 직접 수정해서는 안되고, 새로운 객체를 만들어서 객체에 변화를 주어야 한다.**

* useRef로 특정 DOM 선택하기
    * `const nameInput = useRef();` : `react`에 `useRef`을 통해 선언된 `nameInput`이 `clear` 버튼을 누를때마다 `name input`칸으로 포커스된다.

* 배열 렌더링
    * 배열 렌더링의 경우 `key`라는 `props`를 설정해서 각 원소마다 고유값을 설정하여 `map`함수를 사용해야한다.
        > 설정을 하지않아도 동작은 하나, `key`의 유무에 따라 배열 업데이트 시 효율적으로 렌더링될 수 있기 때문이다.
    * `key`는 각 원소마다 고유해야하며, 중복되는 `key`가 있을 경우 업데이트가 제대로 이루어지지 않는다.

* 배열 항목 추가 작업
    * 불변성을 지키면서 배열에 새 항목을 추가하기 위해서는 `spread` 연산자를 사용하거나 `concat` 함수를 사용한다.
    * 부모 컴포넌트에서 자식 컴포넌트로 전달하는 props의 구조를 이해할 것

* 배열 항목 제거 작업
    * 최하단의 자식 컴포넌트의 삭제버튼이 존재한다면, 그 삭제버튼의 이벤트 `onRemove`와 각 자식 컴포넌트의 `id` 값을 파라미터로 호출되어야 한다.
    * `filter` 함수를 사용하여 `id` 값과 일치하는 원소를 추출하고 새 배열을 만들 수 있다.

* 배열 항목 수정 작업
    * 수정시에도 불변성을 지켜야한다. `setState`

