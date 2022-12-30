# Restart 4

* `useMemo` Hook을 이용해 성능최적화를 한다.
    * 연산된 값을 재사용하는 방법이다.

    * 함수를 만들어서 활성 사용자 수를 세는 경우
        ```js
        function countActiveUsers(users) {
        console.log('활성 사용자 수를 세는 중...');
        return users.filter(user => user.active).length;
        }
        ```
        * 다음 코드를 통해 활성 사용자수를 변수 `count`에 넣어 이 값을 나타낼 때, `input` 폼에 받은 입력에 변화가 일어날 경우에도 호출되는 자원 낭비가 일어난다.
        * 여기서 `useMemo` Hook 함수를 사용하여 성능을 최적화 시킨다.
            > `Memo`는 `memoized`를 의미하며 이전에 계산 한 값을 재사용한다는 의미를 가진다.

    * `useMemo` 사용
        ```js
        // 기존 사용
        const count = countActiveUsers(users);

        // useMemo 사용
        const count = useMemo(() => countActiveUsers(users), [users]);
        ```
        * 첫번째 파라미터에는 연산할 함수, 두번째 파라미터에는 deps배열 즉, 이 배열안에 있는 내용이 바뀔 때 함수가 호출되고, 바뀌지 않는다면 연산한 값을 재사용하게 된다.

* `useCallback` 특정 함수를 새로 만들지 않고 재사용한다.
    * 기존 `onCreate`,`onRemove`,`onToggle` 함수는 컴포넌트가 리렌더링 될 때마다 새로 만들어지는데 이를 재사용하는 것이다.
    * 컴포넌트에 `props`가 바뀌지 않았다면 Virtual DOM에 새로 렌더링을 요청하지 않으며 컴포넌트의 결과물을 재사용하는 최적화 작업이다.

    * 함수 안에서 사용하는 상태 혹은 `props`가 있다면 `deps` 배열안에 포함시켜야 된다.
        > `useCallback`은 `useMemo`를 기반으로 만들어졌다.
    * 컴포넌트 렌더링 최적화 작업을 해주어야 성능이 최적화된다.

* 컴포넌트 리렌더링 방지
    * `React.memo()`를 통한 최적화 : 컴포넌트(함수)를 인자로 넣는다.
    * 함수형 업데이트를 하게 되면, `setUsers`에 등록하는 콜백함수의 파라미터에서 최신 `users`를 참조할 수 있기 때문에 `deps`에 `users`를 넣지 않아도 된다.

> `useCallback`, `useMemo`, `React.memo`는 불필요한 비교와 버그가 생길 수 있으므로 컴포넌트의 성능을 실제로 개선할 수 있는 상황에서만 사용한다.